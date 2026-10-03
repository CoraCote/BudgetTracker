'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Circle,
  GraduationCap,
  LayoutDashboard,
  Lock,
  Newspaper,
  Plug,
  User,
  Video,
  X,
} from 'lucide-react';
import DashboardHeader from './DashboardHeader';
import ProfileForm from './ProfileForm';
import PasswordForm from './PasswordForm';

const TRIAL_DAYS = 14;

const TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'security', label: 'Security', icon: Lock },
];

const PLATFORMS = [
  { id: 'google', name: 'Google Ads', description: 'Search, Shopping, Performance Max and YouTube', glyph: 'G', tone: 'from-blue-500 to-emerald-500' },
  { id: 'microsoft', name: 'Microsoft Ads', description: 'Bing search and the Microsoft Audience Network', glyph: 'M', tone: 'from-sky-500 to-indigo-500' },
  { id: 'amazon', name: 'Amazon Ads', description: 'Sponsored Products, Brands and Display', glyph: 'A', tone: 'from-amber-500 to-orange-500' },
  { id: 'meta', name: 'Meta Ads', description: 'Facebook and Instagram campaigns', glyph: 'f', tone: 'from-indigo-500 to-purple-500' },
];

const RESOURCES = [
  { href: '/learn-with-adsoptima', title: 'Learn with AdsOptima', body: 'Short walkthroughs of every feature.', icon: GraduationCap },
  { href: '/automation-layering-masterclass', title: 'Automation Layering Masterclass', body: 'Add automation without losing control.', icon: BookOpen },
  { href: '/ppctownhall', title: 'PPC Town Hall', body: 'Our monthly webcast with practitioners.', icon: Video },
  { href: '/blog', title: 'AdsOptima Blog', body: 'Data studies and industry analysis.', icon: Newspaper },
];

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

function trialStatus(createdAt) {
  const start = new Date(createdAt);
  const end = new Date(start.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
  const msLeft = end.getTime() - Date.now();
  const daysLeft = Math.max(0, Math.ceil(msLeft / (24 * 60 * 60 * 1000)));
  const progress = Math.min(100, Math.max(0, ((TRIAL_DAYS - daysLeft) / TRIAL_DAYS) * 100));
  return { end, daysLeft, progress, expired: msLeft <= 0 };
}

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

function Card({ title, description, action, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-gray-200/80 bg-white shadow-sm ${className}`}>
      {(title || action) && (
        <header className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-100 px-6 py-5">
          <div>
            <h2 className="text-base font-semibold text-gray-900">{title}</h2>
            {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
          </div>
          {action}
        </header>
      )}
      <div className="p-6">{children}</div>
    </section>
  );
}

function SetupChecklist({ user, onNavigate }) {
  const steps = [
    { id: 'account', label: 'Create your AdsOptima account', done: true },
    {
      id: 'profile',
      label: 'Add your name to your profile',
      done: Boolean(user.firstName),
      action: () => onNavigate('profile'),
      actionLabel: 'Add name',
    },
    {
      id: 'connect',
      label: 'Connect your first ad account',
      done: false,
      href: '/contact?topic=onboarding',
      actionLabel: 'Request',
    },
    {
      id: 'learn',
      label: 'Watch the five-minute product tour',
      done: false,
      href: '/learn-with-adsoptima',
      actionLabel: 'Watch',
    },
  ];
  const completed = steps.filter((step) => step.done).length;
  const percent = Math.round((completed / steps.length) * 100);

  return (
    <Card
      title="Get set up"
      description={`${completed} of ${steps.length} steps complete`}
      action={<span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700">{percent}%</span>}
    >
      <div className="mb-5 h-2 overflow-hidden rounded-full bg-gray-100" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label="Setup progress">
        <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
      <ol className="space-y-1">
        {steps.map((step) => (
          <li key={step.id} className="flex items-center gap-3 rounded-xl px-2 py-2.5">
            {step.done ? (
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-500" aria-hidden="true" />
            ) : (
              <Circle className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
            )}
            <span className={`flex-1 text-sm ${step.done ? 'text-gray-400 line-through' : 'font-medium text-gray-800'}`}>
              {step.label}
              <span className="sr-only">{step.done ? ' (done)' : ' (to do)'}</span>
            </span>
            {!step.done && step.href && (
              <Link href={step.href} className="text-sm font-semibold text-purple-600 hover:text-purple-700">
                {step.actionLabel}
              </Link>
            )}
            {!step.done && step.action && (
              <button type="button" onClick={step.action} className="text-sm font-semibold text-purple-600 hover:text-purple-700">
                {step.actionLabel}
              </button>
            )}
          </li>
        ))}
      </ol>
    </Card>
  );
}

function PlatformList() {
  return (
    <Card
      title="Ad accounts"
      description="Connections are set up with our onboarding team so permissions stay tight."
      action={
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
          <Plug className="h-3.5 w-3.5" aria-hidden="true" />0 connected
        </span>
      }
    >
      <ul className="divide-y divide-gray-100">
        {PLATFORMS.map((platform) => (
          <li key={platform.id} className="flex flex-wrap items-center gap-4 py-4 first:pt-0 last:pb-0">
            <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${platform.tone} text-lg font-bold text-white shadow-sm`} aria-hidden="true">
              {platform.glyph}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-gray-900">{platform.name}</p>
              <p className="truncate text-sm text-gray-500">{platform.description}</p>
            </div>
            <Link
              href={`/contact?topic=onboarding&platform=${platform.id}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-semibold text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
            >
              Request connection
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function TrialCard({ createdAt }) {
  const trial = trialStatus(createdAt);

  return (
    <Card title="Your trial">
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight text-gray-900">{trial.daysLeft}</span>
        <span className="text-sm text-gray-500">{trial.daysLeft === 1 ? 'day left' : 'days left'}</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
        <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: `${trial.progress}%` }} />
      </div>
      <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
        <CalendarClock className="h-4 w-4" aria-hidden="true" />
        {trial.expired ? 'Ended' : 'Ends'} {dateFormatter.format(trial.end)}
      </p>
      <Link
        href="/pricing"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        Compare plans <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}

function Resources() {
  return (
    <Card title="Resources">
      <ul className="space-y-1">
        {RESOURCES.map(({ href, title, body, icon: Icon }) => (
          <li key={href}>
            <Link href={href} className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-gray-50">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-gray-900 group-hover:text-purple-700">{title}</span>
                <span className="block text-sm text-gray-500">{body}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function DashboardView({ initialUser, isNewAccount }) {
  const router = useRouter();
  const [user, setUser] = useState(initialUser);
  const [tab, setTab] = useState('overview');
  const [showWelcome, setShowWelcome] = useState(isNewAccount);
  const [hello, setHello] = useState('Welcome');

  // Time-of-day greeting depends on the viewer's clock, so compute it after hydration.
  useEffect(() => setHello(greeting()), []);

  useEffect(() => {
    const fromHash = window.location.hash.replace('#', '');
    if (TABS.some((t) => t.id === fromHash)) setTab(fromHash);
    if (isNewAccount) router.replace('/dashboard', { scroll: false });
  }, [isNewAccount, router]);

  const selectTab = (id) => {
    setTab(id);
    window.history.replaceState(null, '', id === 'overview' ? '/dashboard' : `/dashboard#${id}`);
  };

  const memberSince = useMemo(() => dateFormatter.format(new Date(user.createdAt)), [user.createdAt]);
  const displayName = user.firstName || user.email.split('@')[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader user={user} />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {showWelcome && (
          <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-6 pr-14 text-white shadow-lg shadow-purple-500/20">
            <p className="text-lg font-semibold">Your account is ready</p>
            <p className="mt-1 text-purple-100">
              Your {TRIAL_DAYS}-day trial has started. Work through the setup steps below to get the most out of it.
            </p>
            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label="Dismiss welcome message"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {hello}, {displayName}
            </h1>
            <p className="mt-1 text-gray-500">Member since {memberSince}</p>
          </div>
        </div>

        <div className="mt-6 border-b border-gray-200">
          <nav className="-mb-px flex gap-6 overflow-x-auto" role="tablist" aria-label="Dashboard sections">
            {TABS.map(({ id, label, icon: Icon }) => {
              const active = tab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={active}
                  aria-controls={`panel-${id}`}
                  onClick={() => selectTab(id)}
                  className={`inline-flex items-center gap-2 whitespace-nowrap border-b-2 px-1 pb-3 text-sm font-semibold transition ${
                    active ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-8" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
          {tab === 'overview' && (
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <SetupChecklist user={user} onNavigate={selectTab} />
                <PlatformList />
              </div>
              <div className="space-y-6">
                <TrialCard createdAt={user.createdAt} />
                <Resources />
              </div>
            </div>
          )}

          {tab === 'profile' && (
            <div className="max-w-2xl">
              <Card title="Profile" description="This is how you appear to teammates and in reports.">
                <ProfileForm user={user} onSaved={setUser} />
              </Card>
            </div>
          )}

          {tab === 'security' && (
            <div className="max-w-2xl">
              <Card title="Change password" description="Use at least 8 characters with a mix of letters and numbers.">
                <PasswordForm />
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
