/**
 * Creates or migrates the database schema. Safe to run repeatedly.
 *
 *   npm run setup:db
 *
 * Reads DATABASE_URL from .env.local (preferred) or .env.
 */
const path = require('path');
const { Pool } = require('pg');

require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const STATEMENTS = [
  {
    label: 'users table',
    sql: `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )`,
  },
  {
    label: 'case-insensitive email index',
    sql: 'CREATE INDEX IF NOT EXISTS idx_users_email_lower ON users (LOWER(email))',
  },
  {
    label: 'contact_requests table',
    sql: `
      CREATE TABLE IF NOT EXISTS contact_requests (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(150),
        topic VARCHAR(32) NOT NULL,
        monthly_spend VARCHAR(32),
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )`,
  },
  {
    label: 'contact_requests date index',
    sql: 'CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON contact_requests (created_at DESC)',
  },
];

async function setupDatabase() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set. Copy .env.example to .env.local and fill it in.');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
  });

  try {
    console.log('Connecting to PostgreSQL...');
    await pool.query('SELECT 1');

    for (const { label, sql } of STATEMENTS) {
      await pool.query(sql);
      console.log(`  ✓ ${label}`);
    }

    // Older installs stored emails with their original casing. A unique index on
    // LOWER(email) only succeeds once no two accounts differ just by case.
    try {
      await pool.query(
        'CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email_lower_unique ON users (LOWER(email))'
      );
      console.log('  ✓ unique case-insensitive email constraint');
    } catch (error) {
      console.warn(
        '  ! Skipped unique case-insensitive email constraint: some accounts differ only by email casing.\n' +
          `    Resolve the duplicates and re-run. (${error.message})`
      );
    }

    console.log('Database is ready.');
  } catch (error) {
    console.error('Database setup failed:', error.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

setupDatabase();
