const express = require('express');
const { authenticateToken, requireOwnership } = require('../middleware/auth');
const { pool } = require('../config/database');

const router = express.Router();

router.get('/campaign/:campaignId', authenticateToken, requireOwnership('campaigns'), async (req, res) => {
  try {
    const campaignId = parseInt(req.params.campaignId);
    
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM analytics WHERE campaign_id = $1 ORDER BY recorded_at DESC',
        [campaignId]
      );

      res.json({
        analytics: result.rows.map(metric => ({
          id: metric.id,
          metricName: metric.metric_name,
          metricValue: metric.metric_value,
          metricData: metric.metric_data,
          recordedAt: metric.recorded_at
        }))
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Analytics fetch error:', error);
    res.status(500).json({
      error: 'Analytics fetch failed',
      message: 'Failed to retrieve analytics'
    });
  }
});

router.get('/summary', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      const campaignsResult = await client.query(
        'SELECT COUNT(*) as total_campaigns, COUNT(CASE WHEN status = \'active\' THEN 1 END) as active_campaigns FROM campaigns WHERE user_id = $1',
        [req.user.id]
      );

      const budgetResult = await client.query(
        'SELECT COALESCE(SUM(budget), 0) as total_budget FROM campaigns WHERE user_id = $1',
        [req.user.id]
      );

      const metricsResult = await client.query(
        'SELECT metric_name, AVG(metric_value) as avg_value FROM analytics a JOIN campaigns c ON a.campaign_id = c.id WHERE c.user_id = $1 GROUP BY metric_name',
        [req.user.id]
      );

      const summary = {
        totalCampaigns: parseInt(campaignsResult.rows[0].total_campaigns),
        activeCampaigns: parseInt(campaignsResult.rows[0].active_campaigns),
        totalBudget: parseFloat(budgetResult.rows[0].total_budget),
        metrics: metricsResult.rows.map(row => ({
          name: row.metric_name,
          averageValue: parseFloat(row.avg_value)
        }))
      };

      res.json({ summary });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Analytics summary error:', error);
    res.status(500).json({
      error: 'Analytics summary failed',
      message: 'Failed to retrieve analytics summary'
    });
  }
});

router.post('/record', authenticateToken, async (req, res) => {
  try {
    const { campaignId, metricName, metricValue, metricData } = req.body;

    if (!campaignId || !metricName) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Campaign ID and metric name are required'
      });
    }

    const client = await pool.connect();
    try {
      const campaignResult = await client.query(
        'SELECT id FROM campaigns WHERE id = $1 AND user_id = $2',
        [campaignId, req.user.id]
      );

      if (campaignResult.rows.length === 0) {
        return res.status(403).json({
          error: 'Access denied',
          message: 'You can only record analytics for your own campaigns'
        });
      }

      const result = await client.query(
        `INSERT INTO analytics (campaign_id, user_id, metric_name, metric_value, metric_data)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
        [campaignId, req.user.id, metricName, metricValue, metricData]
      );

      const newMetric = result.rows[0];
      res.status(201).json({
        message: 'Analytics recorded successfully',
        metric: {
          id: newMetric.id,
          metricName: newMetric.metric_name,
          metricValue: newMetric.metric_value,
          metricData: newMetric.metric_data,
          recordedAt: newMetric.recorded_at
        }
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Analytics recording error:', error);
    res.status(500).json({
      error: 'Analytics recording failed',
      message: 'Failed to record analytics data'
    });
  }
});

router.get('/range', authenticateToken, async (req, res) => {
  try {
    const { startDate, endDate, campaignId } = req.query;
    
    if (!startDate || !endDate) {
      return res.status(400).json({
        error: 'Date range required',
        message: 'Start date and end date are required'
      });
    }

    const client = await pool.connect();
    try {
      let query = `
        SELECT a.*, c.name as campaign_name 
        FROM analytics a 
        JOIN campaigns c ON a.campaign_id = c.id 
        WHERE c.user_id = $1 AND a.recorded_at BETWEEN $2 AND $3
      `;
      let queryParams = [req.user.id, startDate, endDate];

      if (campaignId) {
        query += ' AND a.campaign_id = $4';
        queryParams.push(campaignId);
      }

      query += ' ORDER BY a.recorded_at DESC';

      const result = await client.query(query, queryParams);

      res.json({
        analytics: result.rows.map(metric => ({
          id: metric.id,
          campaignId: metric.campaign_id,
          campaignName: metric.campaign_name,
          metricName: metric.metric_name,
          metricValue: metric.metric_value,
          metricData: metric.metric_data,
          recordedAt: metric.recorded_at
        }))
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Analytics range fetch error:', error);
    res.status(500).json({
      error: 'Analytics range fetch failed',
      message: 'Failed to retrieve analytics for date range'
    });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const metricId = parseInt(req.params.id);
    
    const client = await pool.connect();
    try {
      const result = await client.query(
        `DELETE FROM analytics 
         WHERE id = $1 AND user_id = $2
         RETURNING id`,
        [metricId, req.user.id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'Analytics record not found',
          message: 'Analytics record with this ID does not exist or you do not have access'
        });
      }

      res.json({
        message: 'Analytics record deleted successfully'
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Analytics deletion error:', error);
    res.status(500).json({
      error: 'Analytics deletion failed',
      message: 'Failed to delete analytics record'
    });
  }
});

module.exports = router;
