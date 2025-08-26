const express = require('express');
const { authenticateToken, requireOwnership } = require('../middleware/auth');
const { pool } = require('../config/database');

const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM campaigns WHERE user_id = $1 ORDER BY created_at DESC',
        [req.user.id]
      );

      res.json({
        campaigns: result.rows.map(campaign => ({
          id: campaign.id,
          name: campaign.name,
          description: campaign.description,
          status: campaign.status,
          budget: campaign.budget,
          startDate: campaign.start_date,
          endDate: campaign.end_date,
          targetAudience: campaign.target_audience,
          adCreatives: campaign.ad_creatives,
          performanceMetrics: campaign.performance_metrics,
          createdAt: campaign.created_at,
          updatedAt: campaign.updated_at
        }))
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Campaigns fetch error:', error);
    res.status(500).json({
      error: 'Campaigns fetch failed',
      message: 'Failed to retrieve campaigns'
    });
  }
});

router.get('/:id', authenticateToken, requireOwnership('campaigns'), async (req, res) => {
  try {
    const campaignId = parseInt(req.params.id);
    
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM campaigns WHERE id = $1',
        [campaignId]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'Campaign not found',
          message: 'Campaign with this ID does not exist'
        });
      }

      const campaign = result.rows[0];
      res.json({
        campaign: {
          id: campaign.id,
          name: campaign.name,
          description: campaign.description,
          status: campaign.status,
          budget: campaign.budget,
          startDate: campaign.start_date,
          endDate: campaign.end_date,
          targetAudience: campaign.target_audience,
          adCreatives: campaign.ad_creatives,
          performanceMetrics: campaign.performance_metrics,
          createdAt: campaign.created_at,
          updatedAt: campaign.updated_at
        }
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Campaign fetch error:', error);
    res.status(500).json({
      error: 'Campaign fetch failed',
      message: 'Failed to retrieve campaign'
    });
  }
});

router.post('/', authenticateToken, async (req, res) => {
  try {
    const { name, description, budget, startDate, endDate, targetAudience, adCreatives } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name required',
        message: 'Campaign name is required'
      });
    }

    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO campaigns (user_id, name, description, budget, start_date, end_date, target_audience, ad_creatives)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING *`,
        [req.user.id, name, description, budget, startDate, endDate, targetAudience, adCreatives]
      );

      const newCampaign = result.rows[0];
      res.status(201).json({
        message: 'Campaign created successfully',
        campaign: {
          id: newCampaign.id,
          name: newCampaign.name,
          description: newCampaign.description,
          status: newCampaign.status,
          budget: newCampaign.budget,
          startDate: newCampaign.start_date,
          endDate: newCampaign.end_date,
          targetAudience: newCampaign.target_audience,
          adCreatives: newCampaign.ad_creatives,
          performanceMetrics: newCampaign.performance_metrics,
          createdAt: newCampaign.created_at,
          updatedAt: newCampaign.updated_at
        }
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Campaign creation error:', error);
    res.status(500).json({
      error: 'Campaign creation failed',
      message: 'Failed to create campaign'
    });
  }
});

router.put('/:id', authenticateToken, requireOwnership('campaigns'), async (req, res) => {
  try {
    const campaignId = parseInt(req.params.id);
    const { name, description, status, budget, startDate, endDate, targetAudience, adCreatives, performanceMetrics } = req.body;

    const updateFields = [];
    const updateValues = [];
    let paramCount = 1;

    if (name !== undefined) {
      updateFields.push(`name = $${paramCount++}`);
      updateValues.push(name);
    }

    if (description !== undefined) {
      updateFields.push(`description = $${paramCount++}`);
      updateValues.push(description);
    }

    if (status !== undefined) {
      updateFields.push(`status = $${paramCount++}`);
      updateValues.push(status);
    }

    if (budget !== undefined) {
      updateFields.push(`budget = $${paramCount++}`);
      updateValues.push(budget);
    }

    if (startDate !== undefined) {
      updateFields.push(`start_date = $${paramCount++}`);
      updateValues.push(startDate);
    }

    if (endDate !== undefined) {
      updateFields.push(`end_date = $${paramCount++}`);
      updateValues.push(endDate);
    }

    if (targetAudience !== undefined) {
      updateFields.push(`target_audience = $${paramCount++}`);
      updateValues.push(targetAudience);
    }

    if (adCreatives !== undefined) {
      updateFields.push(`ad_creatives = $${paramCount++}`);
      updateValues.push(adCreatives);
    }

    if (performanceMetrics !== undefined) {
      updateFields.push(`performance_metrics = $${paramCount++}`);
      updateValues.push(performanceMetrics);
    }

    if (updateFields.length === 0) {
      return res.status(400).json({
        error: 'No fields to update',
        message: 'Please provide at least one field to update'
      });
    }

    updateFields.push(`updated_at = NOW()`);
    updateValues.push(campaignId);

    const client = await pool.connect();
    try {
      const result = await client.query(
        `UPDATE campaigns SET ${updateFields.join(', ')} WHERE id = $${paramCount}
         RETURNING *`,
        updateValues
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'Campaign not found',
          message: 'Campaign with this ID does not exist'
        });
      }

      const updatedCampaign = result.rows[0];
      res.json({
        message: 'Campaign updated successfully',
        campaign: {
          id: updatedCampaign.id,
          name: updatedCampaign.name,
          description: updatedCampaign.description,
          status: updatedCampaign.status,
          budget: updatedCampaign.budget,
          startDate: updatedCampaign.start_date,
          endDate: updatedCampaign.end_date,
          targetAudience: updatedCampaign.target_audience,
          adCreatives: updatedCampaign.ad_creatives,
          performanceMetrics: updatedCampaign.performance_metrics,
          createdAt: updatedCampaign.created_at,
          updatedAt: updatedCampaign.updated_at
        }
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Campaign update error:', error);
    res.status(500).json({
      error: 'Campaign update failed',
      message: 'Failed to update campaign'
    });
  }
});

router.delete('/:id', authenticateToken, requireOwnership('campaigns'), async (req, res) => {
  try {
    const campaignId = parseInt(req.params.id);
    
    const client = await pool.connect();
    try {
      const result = await client.query(
        'DELETE FROM campaigns WHERE id = $1 RETURNING id',
        [campaignId]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'Campaign not found',
          message: 'Campaign with this ID does not exist'
        });
      }

      res.json({
        message: 'Campaign deleted successfully'
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Campaign deletion error:', error);
    res.status(500).json({
      error: 'Campaign deletion failed',
      message: 'Failed to delete campaign'
    });
  }
});

module.exports = router;
