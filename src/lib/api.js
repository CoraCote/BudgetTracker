import { NextResponse } from 'next/server';
import { DatabaseUnavailableError } from './db.js';

/** Helpers that keep API route responses consistent: `{ error, fields? }` on failure. */

export function jsonError(status, error, extra = {}) {
  return NextResponse.json({ error, ...extra }, { status });
}

export async function readJsonBody(request) {
  try {
    const body = await request.json();
    return body && typeof body === 'object' && !Array.isArray(body) ? body : null;
  } catch {
    return null;
  }
}

export function handleRouteError(error, context) {
  if (error instanceof DatabaseUnavailableError) {
    console.error(`[${context}] Database unavailable:`, error.message);
    return jsonError(503, 'The service is temporarily unavailable. Please try again in a moment.');
  }

  console.error(`[${context}]`, error);
  return jsonError(500, 'Something went wrong on our side. Please try again.');
}

export function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}
