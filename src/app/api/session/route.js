import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * GET /api/session: cheap "am I signed in?" check for the site navigation.
 * Reads only the signed token (no database query), so it's safe to call on
 * every page view.
 */
export async function GET(request) {
  const session = await getSession(request);

  return NextResponse.json(
    session
      ? { authenticated: true, user: { email: session.email, firstName: session.firstName } }
      : { authenticated: false },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
