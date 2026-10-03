import { SignJWT, jwtVerify } from 'jose';

/**
 * Session tokens are HS256 JWTs stored in an httpOnly cookie.
 *
 * This module only depends on `jose` and Web Crypto, so it runs in both the
 * Edge runtime (middleware) and the Node.js runtime (API routes).
 */

export const SESSION_COOKIE = 'auth-token';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

const ISSUER = 'adsoptima';
const MIN_SECRET_LENGTH = 32;

let cachedKey;

function getSecretKey() {
  if (cachedKey) return cachedKey;

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not configured');
  }
  if (secret.length < MIN_SECRET_LENGTH && process.env.NODE_ENV === 'production') {
    throw new Error(`JWT_SECRET must be at least ${MIN_SECRET_LENGTH} characters in production`);
  }

  cachedKey = new TextEncoder().encode(secret);
  return cachedKey;
}

export async function createSessionToken(user) {
  return new SignJWT({
    email: user.email,
    firstName: user.firstName || null,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(String(user.id))
    .setIssuer(ISSUER)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(getSecretKey());
}

/**
 * Returns `{ userId, email, firstName }` for a valid token, otherwise `null`.
 * Never throws for bad, expired or tampered tokens.
 */
export async function verifySessionToken(token) {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      issuer: ISSUER,
      algorithms: ['HS256'],
    });
    const userId = Number(payload.sub);
    if (!Number.isInteger(userId)) return null;

    return { userId, email: payload.email, firstName: payload.firstName ?? null };
  } catch {
    return null;
  }
}

export function sessionCookieOptions(maxAge = SESSION_MAX_AGE) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge,
  };
}
