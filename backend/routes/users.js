const express = require('express');
const { authenticateToken, requireRole } = require('../middleware/auth');
const { pool } = require('../config/database');

const router = express.Router();

router.get('/', authenticateToken, requireRole('admin'), async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT id, email, first_name, last_name, company, role, is_active, created_at FROM users ORDER BY created_at DESC'
      );

      res.json({
        users: result.rows.map(user => ({
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          company: user.company,
          role: user.role,
          isActive: user.is_active,
          createdAt: user.created_at
        }))
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Users fetch error:', error);
    res.status(500).json({
      error: 'Users fetch failed',
      message: 'Failed to retrieve users'
    });
  }
});

router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    
    if (req.user.role !== 'admin' && req.user.id !== userId) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You can only access your own profile'
      });
    }

    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT id, email, first_name, last_name, company, role, is_active, created_at FROM users WHERE id = $1',
        [userId]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'User not found',
          message: 'User with this ID does not exist'
        });
      }

      const user = result.rows[0];
      res.json({
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          company: user.company,
          role: user.role,
          isActive: user.is_active,
          createdAt: user.created_at
        }
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('User fetch error:', error);
    res.status(500).json({
      error: 'User fetch failed',
      message: 'Failed to retrieve user'
    });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    
    if (req.user.role !== 'admin' && req.user.id !== userId) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You can only update your own profile'
      });
    }

    const { firstName, lastName, company, role, isActive } = req.body;
    const updateFields = [];
    const updateValues = [];
    let paramCount = 1;

    if (firstName !== undefined) {
      updateFields.push(`first_name = $${paramCount++}`);
      updateValues.push(firstName);
    }

    if (lastName !== undefined) {
      updateFields.push(`last_name = $${paramCount++}`);
      updateValues.push(lastName);
    }

    if (company !== undefined) {
      updateFields.push(`company = $${paramCount++}`);
      updateValues.push(company);
    }

    if (req.user.role === 'admin') {
      if (role !== undefined) {
        updateFields.push(`role = $${paramCount++}`);
        updateValues.push(role);
      }

      if (isActive !== undefined) {
        updateFields.push(`is_active = $${paramCount++}`);
        updateValues.push(isActive);
      }
    }

    if (updateFields.length === 0) {
      return res.status(400).json({
        error: 'No fields to update',
        message: 'Please provide at least one field to update'
      });
    }

    updateFields.push(`updated_at = NOW()`);
    updateValues.push(userId);

    const client = await pool.connect();
    try {
      const result = await client.query(
        `UPDATE users SET ${updateFields.join(', ')} WHERE id = $${paramCount}
         RETURNING id, email, first_name, last_name, company, role, is_active, updated_at`,
        updateValues
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'User not found',
          message: 'User with this ID does not exist'
        });
      }

      const updatedUser = result.rows[0];
      res.json({
        message: 'User updated successfully',
        user: {
          id: updatedUser.id,
          email: updatedUser.email,
          firstName: updatedUser.first_name,
          lastName: updatedUser.last_name,
          company: updatedUser.company,
          role: updatedUser.role,
          isActive: updatedUser.is_active,
          updatedAt: updatedUser.updated_at
        }
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('User update error:', error);
    res.status(500).json({
      error: 'User update failed',
      message: 'Failed to update user'
    });
  }
});

router.delete('/:id', authenticateToken, requireRole('admin'), async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    
    if (req.user.id === userId) {
      return res.status(400).json({
        error: 'Cannot delete self',
        message: 'You cannot delete your own account'
      });
    }

    const client = await pool.connect();
    try {
      const result = await client.query(
        'DELETE FROM users WHERE id = $1 RETURNING id',
        [userId]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'User not found',
          message: 'User with this ID does not exist'
        });
      }

      res.json({
        message: 'User deleted successfully'
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('User deletion error:', error);
    res.status(500).json({
      error: 'User deletion failed',
      message: 'Failed to delete user'
    });
  }
});

module.exports = router;
