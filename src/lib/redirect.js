/**
 * Only allow redirects to same-site paths, so `/signin?next=https://evil.example`
 * can't be used to bounce users off-site after they sign in.
 */
export function safeRedirectPath(value, fallback = '/dashboard') {
  if (typeof value !== 'string') return fallback;
  if (!value.startsWith('/') || value.startsWith('//') || value.startsWith('/\\')) return fallback;
  return value;
}
