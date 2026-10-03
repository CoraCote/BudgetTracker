import { NextResponse } from 'next/server';
import { SESSION_COOKIE, verifySessionToken } from './lib/session.js';

const PROTECTED_PREFIXES = ['/dashboard'];
const AUTH_PAGES = ['/signin', '/signup'];

function matches(path, prefixes) {
  return prefixes.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

export async function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const isProtected = matches(pathname, PROTECTED_PREFIXES);
  const isAuthPage = matches(pathname, AUTH_PAGES);

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = token ? await verifySessionToken(token) : null;

  if (isProtected && !session) {
    const url = new URL('/signin', request.url);
    url.searchParams.set('next', `${pathname}${search}`);
    const response = NextResponse.redirect(url);
    // Drop an expired or tampered cookie so the browser stops sending it.
    if (token) response.cookies.delete(SESSION_COOKIE);
    return response;
  }

  if (isAuthPage && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/signin', '/signup'],
};
