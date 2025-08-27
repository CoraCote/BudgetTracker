import { NextResponse } from 'next/server';
import { checkDatabaseConnection, getPoolStats } from '../../../lib/db.js';

export async function GET() {
  try {
    // Check database connection
    const dbStatus = await checkDatabaseConnection();
    
    // Get pool statistics
    const poolStats = getPoolStats();
    
    // Get environment info
    const envInfo = {
      nodeEnv: process.env.NODE_ENV || 'development',
      databaseUrl: process.env.DATABASE_URL ? 'configured' : 'not configured',
      jwtSecret: process.env.JWT_SECRET ? 'configured' : 'not configured'
    };
    
    const healthStatus = {
      timestamp: new Date().toISOString(),
      status: dbStatus.status === 'connected' ? 'healthy' : 'unhealthy',
      database: dbStatus,
      pool: poolStats,
      environment: envInfo,
      uptime: process.uptime()
    };
    
    const statusCode = dbStatus.status === 'connected' ? 200 : 503;
    
    return NextResponse.json(healthStatus, { status: statusCode });
    
  } catch (error) {
    console.error('Health check error:', error);
    
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      status: 'error',
      error: error.message,
      uptime: process.uptime()
    }, { status: 500 });
  }
}
