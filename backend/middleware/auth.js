const jwt = require('jsonwebtoken');
const { pool } = require('../config/database');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ 
        error: 'Access token required',
        message: 'Please provide a valid authentication token'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM user_sessions WHERE user_id = $1 AND token_hash = $2 AND expires_at > NOW()',
        [decoded.userId, token]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({ 
          error: 'Invalid token',
          message: 'Token has been revoked or expired'
        });
      }

      const userResult = await client.query(
        'SELECT id, email, first_name, last_name, company, role, is_active FROM users WHERE id = $1',
        [decoded.userId]
      );

      if (userResult.rows.length === 0) {
        return res.status(401).json({ 
          error: 'User not found',
          message: 'User account no longer exists'
        });
      }

      const user = userResult.rows[0];
      
      if (!user.is_active) {
        return res.status(401).json({ 
          error: 'Account deactivated',
          message: 'Your account has been deactivated'
        });
      }

      req.user = user;
      next();
    } finally {
      client.release();
    }
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        error: 'Invalid token',
        message: 'Token is malformed or invalid'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: 'Token expired',
        message: 'Authentication token has expired'
      });
    }

    console.error('Auth middleware error:', error);
    return res.status(500).json({ 
      error: 'Authentication error',
      message: 'Failed to authenticate user'
    });
  }
};

const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ 
        error: 'Authentication required',
        message: 'Please log in to access this resource'
      });
    }

    const userRole = req.user.role;
    const allowedRoles = Array.isArray(roles) ? roles : [roles];

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ 
        error: 'Insufficient permissions',
        message: `Role '${userRole}' is not authorized to access this resource`
      });
    }

    next();
  };
};

const requireOwnership = (resourceTable, resourceIdField = 'id') => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ 
          error: 'Authentication required',
          message: 'Please log in to access this resource'
        });
      }

      const resourceId = req.params[resourceIdField];
      if (!resourceId) {
        return res.status(400).json({ 
          error: 'Resource ID required',
          message: 'Please provide a valid resource identifier'
        });
      }

      const client = await pool.connect();
      try {
        const result = await client.query(
          `SELECT user_id FROM ${resourceTable} WHERE ${resourceIdField} = $1`,
          [resourceId]
        );

        if (result.rows.length === 0) {
          return res.status(404).json({ 
            error: 'Resource not found',
            message: 'The requested resource does not exist'
          });
        }

        const resource = result.rows[0];
        
        if (resource.user_id === req.user.id || req.user.role === 'admin') {
          next();
        } else {
          return res.status(403).json({ 
            error: 'Access denied',
            message: 'You can only access your own resources'
          });
        }
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Ownership check error:', error);
      return res.status(500).json({ 
        error: 'Authorization error',
        message: 'Failed to verify resource ownership'
      });
    }
  };
};

module.exports = {
  authenticateToken,
  requireRole,
  requireOwnership
};
