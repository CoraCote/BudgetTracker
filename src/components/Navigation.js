'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Activity,
  BarChart3,
  BookOpen,
  Bot,
  Building2,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  Crosshair,
  FileBarChart,
  FlaskConical,
  GitCompare,
  GraduationCap,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  Mail,
  Megaphone,
  Menu,
  Newspaper,
  Plug,
  Rss,
  Search,
  Settings2,
  ShoppingCart,
  Sparkles,
  Trophy,
  User,
  Users,
  Video,
  Wallet,
  Wand2,
  X,
  Zap,
} from 'lucide-react';
import Logo from './Logo';

const SOLUTIONS = [
  {
    heading: 'Use cases',
    items: [
      { href: '/solutions/monitoring', label: 'Monitor', description: 'Keep one eye on performance, always.', icon: Activity, tone: 'bg-amber-50 text-amber-600' },
      { href: '/solutions/optimization', label: 'Optimize', description: 'Maximize campaign reach and ROI.', icon: LineChart, tone: 'bg-blue-50 text-blue-600' },
      { href: '/solutions/automation', label: 'Automate', description: 'Build safeguards and save time.', icon: Zap, tone: 'bg-emerald-50 text-emerald-600' },
      { href: '/solutions/reporting', label: 'Report', description: 'Showcase the value of your campaigns.', icon: FileBarChart, tone: 'bg-purple-50 text-purple-600' },
      { href: '/solutions/data-insights', label: 'Analyze', description: 'Make better decisions with every campaign.', icon: BarChart3, tone: 'bg-indigo-50 text-indigo-600' },
    ],
  },
  {
    heading: 'Capabilities',
    items: [
      { href: '/solutions/paid-search-optimization', label: 'Paid Search Optimization', description: 'Manage every aspect of PPC campaigns.', icon: Search, tone: 'bg-rose-50 text-rose-600' },
      { href: '/solutions/integrations', label: 'Workflows & Integrations', description: 'Unify operations across your team.', icon: Plug, tone: 'bg-orange-50 text-orange-600' },
      { href: '/solutions/ppc-audits', label: 'PPC Audits', description: 'Account and feed audits with quick fixes.', icon: ClipboardCheck, tone: 'bg-teal-50 text-teal-600' },
      { href: '/solutions/adsoptima-ai', label: 'AI for Paid Media', description: 'AI insights, ad copy and narratives.', icon: Sparkles, tone: 'bg-pink-50 text-pink-600' },
      { href: '/solutions/performance-max', label: 'Performance Max', description: 'Regain control over targeting.', icon: Megaphone, tone: 'bg-cyan-50 text-cyan-600' },
      { href: '/solutions/rule-engine', label: 'Rule Engine', description: 'Automate tasks with rules you define.', icon: Settings2, tone: 'bg-slate-100 text-slate-600' },
    ],
  },
  {
    heading: 'Roles',
    items: [
      { href: '/solutions/digital-marketing-agencies', label: 'Agencies', description: 'Scale across any number of accounts.', icon: Users, tone: 'bg-blue-50 text-blue-600' },
      { href: '/solutions/marketing-teams', label: 'Marketing Teams', description: 'Deliver growth for your brands.', icon: Building2, tone: 'bg-emerald-50 text-emerald-600' },
      { href: '/solutions/freelancers', label: 'Freelancers', description: 'Manage a heavy workload solo.', icon: User, tone: 'bg-purple-50 text-purple-600' },
      { href: '/solutions/enterprises', label: 'Enterprises', description: 'Custom integrations and premium support.', icon: Layers, tone: 'bg-indigo-50 text-indigo-600' },
    ],
  },
  {
    heading: 'Features',
    items: [
      { href: '/solutions/ppc-competitor-insights', label: 'Competitive Insights', description: 'See where you stand against rivals.', icon: Crosshair, tone: 'bg-slate-100 text-slate-600' },
      { href: '/solutions/cross-platform-ppc-tools', label: 'Cross-Platform Tools', description: 'Budgets and reports across platforms.', icon: GitCompare, tone: 'bg-violet-50 text-violet-600' },
      { href: '/solutions/budget-management', label: 'Budget & Bid Management', description: 'Pacing plus target CPA/ROAS tuning.', icon: Wallet, tone: 'bg-teal-50 text-teal-600' },
      { href: '/solutions/shopping', label: 'Shopping Ads', description: 'Maximize e-commerce profit.', icon: ShoppingCart, tone: 'bg-purple-50 text-purple-600' },
      { href: '/solutions/feed-management', label: 'Feed Management', description: 'Feed audits and product segmentation.', icon: Rss, tone: 'bg-orange-50 text-orange-600' },
      { href: '/solutions/campaign-automator', label: 'Campaign Automator', description: 'Build campaigns straight from a feed.', icon: Wand2, tone: 'bg-pink-50 text-pink-600' },
    ],
  },
];

const RESOURCES = [
  {
    heading: 'Learn',
    items: [
      { href: '/ppctownhall', label: 'PPC Town Hall', description: 'Our monthly PPC webcast.', icon: Video },
      { href: '/learn-with-adsoptima', label: 'Learn with AdsOptima', description: 'Expert tips and product tours.', icon: GraduationCap },
      { href: '/automation-layering-masterclass', label: 'Automation Masterclass', description: 'Layer automation into your strategy.', icon: BookOpen },
      { href: '/blog', label: 'Blog', description: 'Industry analysis and data studies.', icon: Newspaper },
    ],
  },
  {
    heading: 'Explore',
    items: [
      { href: '/case-studies', label: 'Case Studies', description: 'Stories of customer success.', icon: Trophy },
      { href: '/compare', label: 'Compare AdsOptima', description: 'How we stack up against other tools.', icon: GitCompare },
      { href: '/update-ads', label: 'Releases & Updates', description: "What's new in the product.", icon: Bot },
      { href: '/labs', label: 'AdsOptima Labs', description: "Experiments we're working on.", icon: FlaskConical },
    ],
  },
];

const COMPANY = [
  {
    heading: 'Company',
    items: [
      { href: '/ppctownhall', label: 'Events', description: "What's next in PPC.", icon: CalendarDays },
      { href: '/solutions/integrations', label: 'Partners', description: 'Platforms we integrate with.', icon: Plug },
      { href: '/contact?topic=support', label: 'Help Center', description: 'Get answers from our team.', icon: LifeBuoy },
      { href: '/contact', label: 'Contact Us', description: 'Talk to sales or support.', icon: Mail },
    ],
  },
];

const MENUS = [
  { id: 'solutions', label: 'Solutions', groups: SOLUTIONS, width: 'w-[min(68rem,calc(100vw-2rem))]', columns: 'grid-cols-4' },
  { id: 'resources', label: 'Resources', groups: RESOURCES, width: 'w-[min(36rem,calc(100vw-2rem))]', columns: 'grid-cols-2' },
  { id: 'company', label: 'Company', groups: COMPANY, width: 'w-[min(20rem,calc(100vw-2rem))]', columns: 'grid-cols-1' },
];

function isActive(pathname, href) {
  const path = href.split('?')[0];
  return pathname === path || (path !== '/' && pathname.startsWith(`${path}/`));
}

function MenuLink({ item, pathname, onNavigate, compact = false }) {
  const Icon = item.icon;
  const active = isActive(pathname, item.href);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      className={`group flex items-start gap-3 rounded-xl p-2.5 transition ${active ? 'bg-purple-50' : 'hover:bg-gray-50'}`}
    >
      <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${item.tone || 'bg-gray-100 text-gray-600'}`}>
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className={`block text-sm font-semibold ${active ? 'text-purple-700' : 'text-gray-900 group-hover:text-purple-700'}`}>
          {item.label}
        </span>
        {!compact && <span className="mt-0.5 block text-[13px] leading-snug text-gray-500">{item.description}</span>}
      </span>
    </Link>
  );
}

function useSession(pathname) {
  const [session, setSession] = useState({ loading: true, authenticated: false, user: null });

  useEffect(() => {
    let cancelled = false;
    fetch('/api/session', { credentials: 'same-origin', cache: 'no-store' })
      .then((response) => (response.ok ? response.json() : { authenticated: false }))
      .then((data) => !cancelled && setSession({ loading: false, ...data }))
      .catch(() => !cancelled && setSession({ loading: false, authenticated: false, user: null }));
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return session;
}

export default function Navigation() {
  const pathname = usePathname();
  const session = useSession(pathname);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  // Close menus whenever the route changes.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const openWithHover = (id) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(id);
  };
  const closeWithDelay = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const pricingActive = isActive(pathname, '/pricing');

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || mobileOpen ? 'border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md' : 'border-transparent bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="rounded-lg transition hover:opacity-80" aria-label="AdsOptima home">
          <Logo size="default" variant="default" />
        </Link>

        {/* Desktop menus */}
        <div className="hidden items-center gap-1 lg:flex">
          {MENUS.map((menu) => {
            const open = openMenu === menu.id;
            const sectionActive = menu.groups.some((group) => group.items.some((item) => isActive(pathname, item.href)));

            return (
              // The wide Solutions panel is positioned against the whole nav bar (centered);
              // the narrower panels hang off their own trigger.
              <div
                key={menu.id}
                className={menu.id === 'solutions' ? 'static' : 'relative'}
                onMouseEnter={() => openWithHover(menu.id)}
                onMouseLeave={closeWithDelay}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`menu-${menu.id}`}
                  onClick={() => setOpenMenu(open ? null : menu.id)}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition ${
                    open || sectionActive ? 'text-purple-700' : 'text-gray-700 hover:text-purple-700'
                  }`}
                >
                  {menu.label}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                <div
                  id={`menu-${menu.id}`}
                  className={`absolute top-full pt-3 transition-all duration-200 ${
                    menu.id === 'solutions' ? 'left-1/2 -translate-x-1/2' : 'left-0'
                  } ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
                >
                  <div className={`${menu.width} rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl shadow-gray-900/10`}>
                    <div className={`grid gap-6 ${menu.columns}`}>
                      {menu.groups.map((group) => (
                        <div key={group.heading}>
                          <p className="mb-2 px-2.5 text-xs font-semibold uppercase tracking-wider text-gray-400">{group.heading}</p>
                          <div className="space-y-0.5">
                            {group.items.map((item) => (
                              <MenuLink key={item.href + item.label} item={item} pathname={pathname} onNavigate={() => setOpenMenu(null)} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Link
            href="/pricing"
            aria-current={pricingActive ? 'page' : undefined}
            className={`rounded-lg px-3 py-2 text-[15px] font-medium transition ${pricingActive ? 'text-purple-700' : 'text-gray-700 hover:text-purple-700'}`}
          >
            Pricing
          </Link>
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          {session.authenticated ? (
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:from-purple-700 hover:to-pink-700"
            >
              <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/signin" className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:text-purple-700">
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl"
              >
                Start free trial
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {MENUS.map((menu) => {
              const expanded = mobileSection === menu.id;
              return (
                <div key={menu.id} className="border-b border-gray-100 pb-1">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : menu.id)}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-base font-semibold text-gray-900"
                  >
                    {menu.label}
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {expanded && (
                    <div className="space-y-4 pb-3">
                      {menu.groups.map((group) => (
                        <div key={group.heading}>
                          <p className="px-2.5 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">{group.heading}</p>
                          <div className="grid gap-0.5 sm:grid-cols-2">
                            {group.items.map((item) => (
                              <MenuLink key={item.href + item.label} item={item} pathname={pathname} compact onNavigate={() => setMobileOpen(false)} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link href="/pricing" className="block rounded-lg px-2 py-3 text-base font-semibold text-gray-900">
              Pricing
            </Link>
          </div>

          <div className="sticky bottom-0 border-t border-gray-100 bg-white px-4 py-4 sm:px-6">
            {session.authenticated ? (
              <Link
                href="/dashboard"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-base font-semibold text-white"
              >
                <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
                Go to dashboard
              </Link>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link href="/signin" className="flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-base font-semibold text-gray-800">
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-base font-semibold text-white"
                >
                  Start free trial
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
