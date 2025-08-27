import pool, { checkDatabaseConnection } from './db.js';

export async function initDatabase() {
  try {
    console.log('🚀 Initializing database...');
    
    // First check connection
    const connectionStatus = await checkDatabaseConnection();
    
    if (connectionStatus.status !== 'connected') {
      throw new Error(`Database connection failed: ${connectionStatus.error}`);
    }
    
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Users table created/verified');

    // Create index on email for faster lookups
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    `);
    console.log('✅ Email index created/verified');

    // Show final connection status
    const finalStatus = await checkDatabaseConnection();
    console.log('🎉 Database initialization completed successfully!');
    console.log('📊 Final Connection Status:', finalStatus);
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
}

// Initialize database when this module is imported (development only)
if (process.env.NODE_ENV !== 'production') {
  initDatabase().catch(console.error);
}
