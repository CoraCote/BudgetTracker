import { NextResponse } from 'next/server';
import { pingDatabase } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * GET /api/health: liveness/readiness probe for load balancers and uptime
 * monitors. Deliberately reveals nothing about versions or configuration.
 */
export async function GET() {
  const databaseUp = await pingDatabase();

  return NextResponse.json(
    {
      status: databaseUp ? 'ok' : 'degraded',
      database: databaseUp ? 'up' : 'down',
      timestamp: new Date().toISOString(),
    },
    { status: databaseUp ? 200 : 503, headers: { 'Cache-Control': 'no-store' } }
  );
}
