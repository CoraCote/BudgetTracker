import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { serializeUser, setSessionCookie, verifyPassword } from '@/lib/auth';
import { getClientIp, handleRouteError, jsonError, readJsonBody } from '@/lib/api';
import { rateLimit, resetRateLimit } from '@/lib/rate-limit';
import { normalizeEmail } from '@/lib/validation';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const WINDOW_MS = 15 * 60 * 1000;
const INVALID_CREDENTIALS = 'Incorrect email or password';

export async function POST(request) {
  const body = await readJsonBody(request);
  if (!body) return jsonError(400, 'Invalid request body');

  const email = normalizeEmail(body.email);
  const password = typeof body.password === 'string' ? body.password : '';

  if (!email || !password) {
    return jsonError(400, 'Email and password are required');
  }

  // Throttle per IP (broad attacks) and per account (targeted guessing).
  const ipKey = `signin:ip:${getClientIp(request)}`;
  const accountKey = `signin:account:${email}`;
  const ipLimit = rateLimit(ipKey, { limit: 30, windowMs: WINDOW_MS });
  const accountLimit = rateLimit(accountKey, { limit: 8, windowMs: WINDOW_MS });
  if (!ipLimit.allowed || !accountLimit.allowed) {
    const retryAfter = Math.max(ipLimit.retryAfter, accountLimit.retryAfter);
    return NextResponse.json(
      {
        error: `Too many sign-in attempts. Please wait ${Math.ceil(retryAfter / 60)} minutes and try again.`,
        retryAfter,
      },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } }
    );
  }

  try {
    const result = await query(
      `SELECT id, email, password_hash, first_name, last_name, created_at
       FROM users WHERE LOWER(email) = $1
       ORDER BY id LIMIT 1`,
      [email]
    );
    const row = result.rows[0];

    // Always run bcrypt, even for unknown emails, so timing doesn't reveal which accounts exist.
    const valid = await verifyPassword(password, row?.password_hash);
    if (!row || !valid) {
      return jsonError(401, INVALID_CREDENTIALS);
    }

    resetRateLimit(accountKey);

    const user = serializeUser(row);
    const response = NextResponse.json({ success: true, message: 'Signed in successfully', user });
    return setSessionCookie(response, user);
  } catch (error) {
    return handleRouteError(error, 'signin');
  }
}
