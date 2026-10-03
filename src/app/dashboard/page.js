import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { query, DatabaseUnavailableError } from '@/lib/db';
import { serializeUser } from '@/lib/auth';
import { SESSION_COOKIE, verifySessionToken } from '@/lib/session';
import DashboardView from '@/components/dashboard/DashboardView';
import ServiceUnavailable from '@/components/dashboard/ServiceUnavailable';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Dashboard',
  robots: { index: false, follow: false },
};

async function loadUser() {
  const session = await verifySessionToken(cookies().get(SESSION_COOKIE)?.value);
  if (!session) return { user: null };

  try {
    const result = await query(
      'SELECT id, email, first_name, last_name, created_at FROM users WHERE id = $1',
      [session.userId]
    );
    return { user: result.rows[0] ? serializeUser(result.rows[0]) : null };
  } catch (error) {
    if (error instanceof DatabaseUnavailableError) return { unavailable: true };
    throw error;
  }
}

export default async function DashboardPage({ searchParams }) {
  const { user, unavailable } = await loadUser();

  if (unavailable) return <ServiceUnavailable />;
  // Middleware already guards this route; this covers deleted accounts with a still-valid token.
  if (!user) redirect('/signin?next=/dashboard');

  return (
    <DashboardView
      initialUser={{ ...user, createdAt: new Date(user.createdAt).toISOString() }}
      isNewAccount={searchParams?.welcome === '1'}
    />
  );
}
