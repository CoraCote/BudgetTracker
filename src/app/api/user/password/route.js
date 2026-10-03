import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getSession, hashPassword, verifyPassword } from '@/lib/auth';
import { handleRouteError, jsonError, readJsonBody } from '@/lib/api';
import { rateLimit } from '@/lib/rate-limit';
import { validatePassword } from '@/lib/validation';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/** POST /api/user/password: `{ currentPassword, newPassword }` */
export async function POST(request) {
  const session = await getSession(request);
  if (!session) return jsonError(401, 'Authentication required');

  const limit = rateLimit(`password:${session.userId}`, { limit: 5, windowMs: 15 * 60 * 1000 });
  if (!limit.allowed) {
    return jsonError(429, 'Too many attempts. Please wait a few minutes and try again.', {
      retryAfter: limit.retryAfter,
    });
  }

  const body = await readJsonBody(request);
  if (!body) return jsonError(400, 'Invalid request body');

  const { currentPassword, newPassword } = body;
  if (!currentPassword) {
    return jsonError(400, 'Current password is required', {
      fields: { currentPassword: 'Current password is required' },
    });
  }

  const newPasswordError = validatePassword(newPassword);
  if (newPasswordError) {
    return jsonError(400, newPasswordError, { fields: { newPassword: newPasswordError } });
  }
  if (newPassword === currentPassword) {
    const message = 'New password must be different from your current password';
    return jsonError(400, message, { fields: { newPassword: message } });
  }

  try {
    const result = await query('SELECT password_hash FROM users WHERE id = $1', [session.userId]);
    if (result.rowCount === 0) return jsonError(401, 'Authentication required');

    if (!(await verifyPassword(currentPassword, result.rows[0].password_hash))) {
      const message = 'Current password is incorrect';
      return jsonError(400, message, { fields: { currentPassword: message } });
    }

    await query(
      'UPDATE users SET password_hash = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $1',
      [session.userId, await hashPassword(newPassword)]
    );

    return NextResponse.json({ success: true, message: 'Password updated' });
  } catch (error) {
    return handleRouteError(error, 'user:password');
  }
}
