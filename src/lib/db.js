import { Pool } from 'pg';

let pool;

try {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    // Connection pool settings
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
  });
} catch (error) {
  console.warn('Database connection not available:', error.message);
  // Create a mock pool for when DB is not available
  pool = {
    query: async () => {
      throw new Error('Database not available');
    },
    connect: async () => {
      throw new Error('Database not available');
    },
    end: async () => {},
    totalCount: 0,
    idleCount: 0,
    waitingCount: 0,
    on: () => {}
  };
}

// Monitor connection events
pool.on('connect', (client) => {
  console.log('🟢 New client connected to PostgreSQL');
});

pool.on('acquire', (client) => {
  console.log('🔵 Client acquired from pool');
});

pool.on('error', (err, client) => {
  console.error('🔴 Unexpected error on idle client', err);
});

pool.on('remove', (client) => {
  console.log('🟡 Client removed from pool');
});

// Function to check database connection status
export async function checkDatabaseConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW() as current_time, version() as db_version');
    client.release();
    
    console.log('✅ Database connection successful');
    console.log('📊 Connection Info:', {
      currentTime: result.rows[0].current_time,
      version: result.rows[0].db_version.split(' ')[0], // Extract version number
      poolSize: pool.totalCount,
      idleCount: pool.idleCount,
      waitingCount: pool.waitingCount
    });
    
    return {
      status: 'connected',
      timestamp: result.rows[0].current_time,
      version: result.rows[0].db_version,
      poolStats: {
        total: pool.totalCount,
        idle: pool.idleCount,
        waiting: pool.waitingCount
      }
    };
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return {
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

// Function to get pool statistics
export function getPoolStats() {
  return {
    totalCount: pool.totalCount,
    idleCount: pool.idleCount,
    waitingCount: pool.waitingCount
  };
}

// Function to close the pool (useful for graceful shutdown)
export async function closePool() {
  console.log('🔄 Closing database pool...');
  await pool.end();
  console.log('✅ Database pool closed');
}

// Test connection on module load (development only)
if (process.env.NODE_ENV !== 'production') {
  checkDatabaseConnection().catch(console.error);
}

export default pool;
