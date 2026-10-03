/**
 * Input validation shared by the API routes and the client-side forms, so the
 * browser and server always agree on the rules and error messages.
 */

export const EMAIL_MAX_LENGTH = 255;
export const NAME_MAX_LENGTH = 100;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 72; // bcrypt ignores bytes beyond 72

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeEmail(value) {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

export function validateEmail(email) {
  if (!email) return 'Email is required';
  if (email.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(email)) {
    return 'Please enter a valid email address';
  }
  return null;
}

export function validatePassword(password) {
  if (!password) return 'Password is required';
  if (typeof password !== 'string') return 'Password is invalid';
  if (password.length < PASSWORD_MIN_LENGTH) {
    return `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`;
  }
  if (new TextEncoder().encode(password).length > PASSWORD_MAX_LENGTH) {
    return `Password must be at most ${PASSWORD_MAX_LENGTH} characters long`;
  }
  if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
    return 'Password must contain at least one letter and one number';
  }
  return null;
}

/** 0–4 score used by the password strength meter. */
export function passwordStrength(password = '') {
  let score = 0;
  if (password.length >= PASSWORD_MIN_LENGTH) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password) && /[^a-zA-Z0-9]/.test(password)) score++;
  return score;
}

export function cleanName(value) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
}

export function validateName(name, label) {
  if (name.length > NAME_MAX_LENGTH) return `${label} must be at most ${NAME_MAX_LENGTH} characters`;
  return null;
}

/** Returns the first non-null message from a `{ field: message|null }` map, or null. */
export function firstError(errors) {
  return Object.values(errors).find(Boolean) || null;
}

/** Drops null entries so `{ email: null, password: 'x' }` becomes `{ password: 'x' }`. */
export function compactErrors(errors) {
  return Object.fromEntries(Object.entries(errors).filter(([, message]) => message));
}
