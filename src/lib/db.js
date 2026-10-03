import { Pool } from 'pg';

/**
 * Shared PostgreSQL pool.
 *
 * In development Next.js re-evaluates modules on every hot reload, which would
 * leak a new pool (and up to `max` connections) each time. Caching the pool on
 * `globalThis` keeps exactly one per server process.
 */
function createPool() {
  if (!process.env.DATABASE_URL) {
    throw new DatabaseUnavailableError('DATABASE_URL is not configured');
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
    max: Number(process.env.DATABASE_POOL_MAX) || 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  });

  pool.on('error', (err) => {
    console.error('[db] Unexpected error on idle client:', err.message);
  });

  return pool;
}

export class DatabaseUnavailableError extends Error {
  constructor(message = 'Database unavailable') {
    super(message);
    this.name = 'DatabaseUnavailableError';
  }
}

export function getPool() {
  if (!globalThis.__adsoptimaPool) {
    globalThis.__adsoptimaPool = createPool();
  }
  return globalThis.__adsoptimaPool;
}

/** Postgres error codes that mean "the database can't be reached right now". */
const CONNECTION_ERROR_CODES = new Set([
  'ECONNREFUSED',
  'ENOTFOUND',
  'ETIMEDOUT',
  'ECONNRESET',
  '57P01', // admin_shutdown
  '57P03', // cannot_connect_now
  '3D000', // invalid_catalog_name (database does not exist)
  '28P01', // invalid_password
]);

export async function query(text, params) {
  let pool;
  try {
    pool = getPool();
  } catch (error) {
    throw error instanceof DatabaseUnavailableError ? error : new DatabaseUnavailableError(error.message);
  }

  try {
    return await pool.query(text, params);
  } catch (error) {
    if (CONNECTION_ERROR_CODES.has(error.code) || /timeout|connect/i.test(error.message)) {
      throw new DatabaseUnavailableError(error.message);
    }
    throw error;
  }
}

/** Unique-constraint violation code, used to detect duplicate sign-ups. */
export const UNIQUE_VIOLATION = '23505';

/** Lightweight connectivity probe for the health endpoint. */
export async function pingDatabase() {
  try {
    await query('SELECT 1');
    return true;
  } catch {
    return false;
  }
}
