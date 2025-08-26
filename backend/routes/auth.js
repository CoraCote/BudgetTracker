const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const { pool } = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

const registerValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email address'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  body('firstName').trim().isLength({ min: 1 }).withMessage('First name is required'),
  body('lastName').trim().isLength({ min: 1 }).withMessage('Last name is required'),
  body('company').optional().trim()
];

const loginValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email address'),
  body('password').notEmpty().withMessage('Password is required')
];

router.post('/register', registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { email, password, firstName, lastName, company } = req.body;

    const client = await pool.connect();
    try {
      const existingUser = await client.query(
        'SELECT id FROM users WHERE email = $1',
        [email]
      );

      if (existingUser.rows.length > 0) {
        return res.status(409).json({
          error: 'User already exists',
          message: 'An account with this email address already exists'
        });
      }

      const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
      const passwordHash = await bcrypt.hash(password, saltRounds);

      const result = await client.query(
        `INSERT INTO users (email, password_hash, first_name, last_name, company)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, email, first_name, last_name, company, role, created_at`,
        [email, passwordHash, firstName, lastName, company]
      );

      const newUser = result.rows[0];
      const token = jwt.sign(
        { userId: newUser.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
      );

      await client.query(
        `INSERT INTO user_sessions (user_id, token_hash, expires_at)
         VALUES ($1, $2, $3)`,
        [newUser.id, token, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)]
      );

      delete newUser.password_hash;

      res.status(201).json({
        message: 'User registered successfully',
        user: newUser,
        token
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      error: 'Registration failed',
      message: 'Failed to create user account'
    });
  }
});

router.post('/login', loginValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { email, password } = req.body;

    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({
          error: 'Invalid credentials',
          message: 'Email or password is incorrect'
        });
      }

      const user = result.rows[0];

      if (!user.is_active) {
        return res.status(401).json({
          error: 'Account deactivated',
          message: 'Your account has been deactivated. Please contact support.'
        });
      }

      const isValidPassword = await bcrypt.compare(password, user.password_hash);
      if (!isValidPassword) {
        return res.status(401).json({
          error: 'Invalid credentials',
          message: 'Email or password is incorrect'
        });
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
      );

      await client.query(
        `INSERT INTO user_sessions (user_id, token_hash, expires_at)
         VALUES ($1, $2, $3)`,
        [user.id, token, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)]
      );

      delete user.password_hash;

      res.json({
        message: 'Login successful',
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          company: user.company,
          role: user.role
        },
        token
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Login failed',
      message: 'Failed to authenticate user'
    });
  }
});

router.post('/logout', authenticateToken, async (req, res) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    
    const client = await pool.connect();
    try {
      await client.query(
        'DELETE FROM user_sessions WHERE token_hash = $1',
        [token]
      );

      res.json({
        message: 'Logout successful'
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({
      error: 'Logout failed',
      message: 'Failed to logout user'
    });
  }
});

router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT id, email, first_name, last_name, company, role, created_at FROM users WHERE id = $1',
        [req.user.id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: 'User not found',
          message: 'User profile not found'
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
          createdAt: user.created_at
        }
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({
      error: 'Profile fetch failed',
      message: 'Failed to retrieve user profile'
    });
  }
});

module.exports = router;
