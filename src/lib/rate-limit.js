/**
 * Fixed-window, in-memory rate limiter.
 *
 * State lives in the server process, so limits are per instance. That's enough
 * to stop credential stuffing against a single server; a multi-instance
 * deployment should swap this for a shared store such as Redis.
 */

const buckets = globalThis.__adsoptimaRateLimits ?? new Map();
globalThis.__adsoptimaRateLimits = buckets;

const SWEEP_EVERY = 500;
let callsSinceSweep = 0;

function sweep(now) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/**
 * @returns {{ allowed: boolean, retryAfter: number }} retryAfter in seconds
 */
export function rateLimit(key, { limit, windowMs }) {
  const now = Date.now();

  if (++callsSinceSweep >= SWEEP_EVERY) {
    callsSinceSweep = 0;
    sweep(now);
  }

  let bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    bucket = { count: 0, resetAt: now + windowMs };
    buckets.set(key, bucket);
  }

  bucket.count++;
  return {
    allowed: bucket.count <= limit,
    retryAfter: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
  };
}

export function resetRateLimit(key) {
  buckets.delete(key);
}
