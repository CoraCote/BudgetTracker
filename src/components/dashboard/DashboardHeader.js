'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, ExternalLink, LifeBuoy, Loader2, LogOut } from 'lucide-react';
import Logo from '../Logo';

export function initials(user) {
  const fromName = `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`;
  return (fromName || user.email[0]).toUpperCase();
}

export default function DashboardHeader({ user }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.type === 'keydown' && event.key !== 'Escape') return;
      if (event.type === 'mousedown' && menuRef.current?.contains(event.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [open]);

  const signOut = async () => {
    setSigningOut(true);
    try {
      await fetch('/api/signout', { method: 'POST', credentials: 'same-origin' });
    } finally {
      router.replace('/signin?signedOut=1');
      router.refresh();
    }
  };

  const fullName = [user.firstName, user.lastName].filter(Boolean).join(' ');

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="rounded-lg transition hover:opacity-80" aria-label="AdsOptima home">
            <Logo size="small" />
          </Link>
          <span className="hidden h-5 w-px bg-gray-200 sm:block" aria-hidden="true" />
          <span className="hidden text-sm font-medium text-gray-500 sm:block">Dashboard</span>
        </div>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-100"
            aria-haspopup="menu"
            aria-expanded={open}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-sm font-semibold text-white">
              {initials(user)}
            </span>
            <span className="hidden max-w-[12rem] truncate text-sm font-medium text-gray-700 sm:block">
              {fullName || user.email}
            </span>
            <ChevronDown className={`h-4 w-4 text-gray-400 transition ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>

          {open && (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-64 origin-top-right overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl ring-1 ring-black/5"
            >
              <div className="border-b border-gray-100 px-4 py-3">
                {fullName && <p className="truncate text-sm font-semibold text-gray-900">{fullName}</p>}
                <p className="truncate text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="py-1">
                <Link role="menuitem" href="/contact?topic=support" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <LifeBuoy className="h-4 w-4 text-gray-400" aria-hidden="true" /> Get help
                </Link>
                <Link role="menuitem" href="/" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <ExternalLink className="h-4 w-4 text-gray-400" aria-hidden="true" /> Back to website
                </Link>
              </div>
              <div className="border-t border-gray-100 py-1">
                <button
                  role="menuitem"
                  type="button"
                  onClick={signOut}
                  disabled={signingOut}
                  className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 disabled:opacity-60"
                >
                  {signingOut ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <LogOut className="h-4 w-4" aria-hidden="true" />}
                  {signingOut ? 'Signing out…' : 'Sign out'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
