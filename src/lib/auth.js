import bcrypt from 'bcryptjs';
import {
  SESSION_COOKIE,
  createSessionToken,
  sessionCookieOptions,
  verifySessionToken,
} from './session.js';

/**
 * Server-only authentication helpers (Node.js runtime).
 * Edge-safe token logic lives in ./session.js.
 */

const BCRYPT_ROUNDS = 12;

// Compared against when an email isn't registered, so that "unknown email"
// and "wrong password" take the same amount of time.
let dummyHash;
function getDummyHash() {
  dummyHash ??= bcrypt.hash(crypto.randomUUID(), BCRYPT_ROUNDS);
  return dummyHash;
}

export function hashPassword(password) {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export async function verifyPassword(password, passwordHash) {
  try {
    if (!passwordHash) {
      await bcrypt.compare(password, await getDummyHash());
      return false;
    }
    return await bcrypt.compare(password, passwordHash);
  } catch {
    return false;
  }
}

/**
 * Reads the session from the httpOnly cookie, falling back to an
 * `Authorization: Bearer <token>` header for non-browser API clients.
 */
export async function getSession(request) {
  let token = request.cookies.get(SESSION_COOKIE)?.value;

  if (!token) {
    const header = request.headers.get('authorization');
    if (header?.startsWith('Bearer ')) token = header.slice(7).trim();
  }

  return verifySessionToken(token);
}

export async function setSessionCookie(response, user) {
  const token = await createSessionToken(user);
  response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  return response;
}

export function clearSessionCookie(response) {
  response.cookies.set(SESSION_COOKIE, '', sessionCookieOptions(0));
  return response;
}

/** Shape a `users` row for API responses. Never include the password hash. */
export function serializeUser(row) {
  return {
    id: row.id,
    email: row.email,
    firstName: row.first_name || '',
    lastName: row.last_name || '',
    createdAt: row.created_at,
  };
}
