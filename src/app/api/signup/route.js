import { NextResponse } from 'next/server';
import { query, UNIQUE_VIOLATION } from '@/lib/db';
import { hashPassword, serializeUser, setSessionCookie } from '@/lib/auth';
import { getClientIp, handleRouteError, jsonError, readJsonBody } from '@/lib/api';
import { rateLimit } from '@/lib/rate-limit';
import {
  cleanName,
  compactErrors,
  normalizeEmail,
  validateEmail,
  validateName,
  validatePassword,
} from '@/lib/validation';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const DUPLICATE_MESSAGE = 'An account with this email already exists. Try signing in instead.';

export async function POST(request) {
  const limit = rateLimit(`signup:${getClientIp(request)}`, { limit: 10, windowMs: 60 * 60 * 1000 });
  if (!limit.allowed) {
    return jsonError(429, 'Too many sign-up attempts. Please try again later.', {
      retryAfter: limit.retryAfter,
    });
  }

  const body = await readJsonBody(request);
  if (!body) return jsonError(400, 'Invalid request body');

  const email = normalizeEmail(body.email);
  const password = body.password;
  const firstName = cleanName(body.firstName);
  const lastName = cleanName(body.lastName);

  const fields = compactErrors({
    firstName: validateName(firstName, 'First name'),
    lastName: validateName(lastName, 'Last name'),
    email: validateEmail(email),
    password: validatePassword(password),
  });
  if (Object.keys(fields).length > 0) {
    return jsonError(400, Object.values(fields)[0], { fields });
  }

  try {
    const passwordHash = await hashPassword(password);

    // Case-insensitive duplicate check and insert in one statement. The explicit
    // casts stop Postgres inferring conflicting types for the reused $1.
    const result = await query(
      `INSERT INTO users (email, password_hash, first_name, last_name)
       SELECT $1::text, $2::text, $3::text, $4::text
       WHERE NOT EXISTS (SELECT 1 FROM users WHERE LOWER(email) = $1::text)
       RETURNING id, email, first_name, last_name, created_at`,
      [email, passwordHash, firstName || null, lastName || null]
    );

    if (result.rowCount === 0) {
      return jsonError(409, DUPLICATE_MESSAGE, { fields: { email: DUPLICATE_MESSAGE } });
    }

    const user = serializeUser(result.rows[0]);
    const response = NextResponse.json(
      { success: true, message: 'Account created successfully', user },
      { status: 201 }
    );
    return setSessionCookie(response, user);
  } catch (error) {
    if (error.code === UNIQUE_VIOLATION) {
      return jsonError(409, DUPLICATE_MESSAGE, { fields: { email: DUPLICATE_MESSAGE } });
    }
    return handleRouteError(error, 'signup');
  }
}
