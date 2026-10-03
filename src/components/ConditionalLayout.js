'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';

// Pages that render their own full-screen chrome instead of the marketing navigation and footer.
const STANDALONE_PREFIXES = ['/signin', '/signup', '/dashboard'];

export default function ConditionalLayout({ children }) {
  const pathname = usePathname() || '';
  const standalone = STANDALONE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

  if (standalone) return children;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-purple-700 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content" className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
