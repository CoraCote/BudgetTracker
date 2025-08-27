import { NextResponse } from 'next/server';
import { verifyToken } from './lib/auth.js';

export function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define protected routes
  const protectedRoutes = ['/dashboard', '/profile', '/settings'];
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));

  // Define auth routes (signin, signup)
  const authRoutes = ['/signin', '/signup'];
  const isAuthRoute = authRoutes.some(route => path.startsWith(route));

  // Check if user is authenticated
  const token = request.cookies.get('auth-token')?.value;
  const isAuthenticated = token && verifyToken(token);

  // Redirect logic
  if (isProtectedRoute && !isAuthenticated) {
    // Redirect to signin if trying to access protected route without auth
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  if (isAuthRoute && isAuthenticated) {
    // Redirect to dashboard if trying to access auth routes while authenticated
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
