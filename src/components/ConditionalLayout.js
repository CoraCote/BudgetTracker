'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  
  const authPages = [
    '/signin', 
    '/signup', 
    '/login', 
    '/register', 
    '/forgot-password', 
    '/reset-password',
    '/verify-email'
  ];
  
  const shouldHideNavbarFooter = pathname ? authPages.includes(pathname) : false;

  return (
    <>
      {!shouldHideNavbarFooter && <Navigation />}
      <main className={!shouldHideNavbarFooter ? "pt-16" : ""}>
        {children}
      </main>
      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
}
