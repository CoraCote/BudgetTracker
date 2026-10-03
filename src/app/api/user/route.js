import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { clearSessionCookie, getSession, serializeUser, setSessionCookie } from '@/lib/auth';
import { handleRouteError, jsonError, readJsonBody } from '@/lib/api';
import { cleanName, compactErrors, validateName } from '@/lib/validation';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const USER_COLUMNS = 'id, email, first_name, last_name, created_at';

function sessionExpired() {
  // The account behind a valid token no longer exists: drop the stale cookie.
  return clearSessionCookie(jsonError(401, 'Your session has expired. Please sign in again.'));
}

/** GET /api/user: the signed-in user's profile. */
export async function GET(request) {
  const session = await getSession(request);
  if (!session) return jsonError(401, 'Authentication required');

  try {
    const result = await query(`SELECT ${USER_COLUMNS} FROM users WHERE id = $1`, [session.userId]);
    if (result.rowCount === 0) return sessionExpired();

    return NextResponse.json({ success: true, user: serializeUser(result.rows[0]) });
  } catch (error) {
    return handleRouteError(error, 'user:get');
  }
}

/** PATCH /api/user: update `firstName` and/or `lastName`. */
export async function PATCH(request) {
  const session = await getSession(request);
  if (!session) return jsonError(401, 'Authentication required');

  const body = await readJsonBody(request);
  if (!body) return jsonError(400, 'Invalid request body');

  const updates = {};
  if ('firstName' in body) updates.first_name = cleanName(body.firstName);
  if ('lastName' in body) updates.last_name = cleanName(body.lastName);
  if (Object.keys(updates).length === 0) {
    return jsonError(400, 'Nothing to update');
  }

  const fields = compactErrors({
    firstName: 'first_name' in updates ? validateName(updates.first_name, 'First name') : null,
    lastName: 'last_name' in updates ? validateName(updates.last_name, 'Last name') : null,
  });
  if (Object.keys(fields).length > 0) {
    return jsonError(400, Object.values(fields)[0], { fields });
  }

  try {
    const columns = Object.keys(updates);
    const assignments = columns.map((column, i) => `${column} = $${i + 2}`).join(', ');
    const values = columns.map((column) => updates[column] || null);

    const result = await query(
      `UPDATE users SET ${assignments}, updated_at = CURRENT_TIMESTAMP
       WHERE id = $1 RETURNING ${USER_COLUMNS}`,
      [session.userId, ...values]
    );
    if (result.rowCount === 0) return sessionExpired();

    const user = serializeUser(result.rows[0]);
    const response = NextResponse.json({ success: true, message: 'Profile updated', user });
    // Re-issue the token so the greeting in the navigation reflects the new name.
    return setSessionCookie(response, user);
  } catch (error) {
    return handleRouteError(error, 'user:patch');
  }
}
