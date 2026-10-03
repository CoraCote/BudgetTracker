import Link from 'next/link';
import { ArrowLeft, BellRing, Gauge, ShieldCheck, Sparkles } from 'lucide-react';
import Logo from '../Logo';

const HIGHLIGHTS = [
  {
    icon: BellRing,
    title: 'Round-the-clock monitoring',
    body: 'Get alerted the moment spend, conversions or CPA drift outside the range you expect.',
  },
  {
    icon: Gauge,
    title: 'Budget pacing you can trust',
    body: 'See month-to-date pacing across Google, Microsoft and Amazon Ads in one view.',
  },
  {
    icon: Sparkles,
    title: 'Optimizations, your way',
    body: 'Review AI-assisted suggestions and apply only the changes you approve.',
  },
];

const STATS = [
  { value: '14 days', label: 'Free trial' },
  { value: '3', label: 'Ad platforms' },
  { value: '24/7', label: 'Monitoring' },
];

/**
 * Two-column layout for the sign-in and sign-up pages: the form on the left and
 * a product panel on the right (hidden on small screens).
 */
export default function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/60">
      <div className="mx-auto grid min-h-screen max-w-[1400px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col px-4 py-6 sm:px-8 lg:px-14 lg:py-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="rounded-lg transition hover:opacity-80" aria-label="AdsOptima home">
              <Logo size="default" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-gray-500 transition hover:text-gray-800"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to site
            </Link>
          </div>

          <main className="flex flex-1 items-center justify-center py-10">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-[2rem]">{title}</h1>
                {subtitle && <p className="mt-2 text-base text-gray-600">{subtitle}</p>}
              </div>
              {children}
              {footer && <div className="mt-8 text-center text-sm text-gray-600">{footer}</div>}
            </div>
          </main>

          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} AdsOptima. All rights reserved.
          </p>
        </div>

        <aside className="hidden p-3 lg:block" aria-label="Why AdsOptima">
          <div className="relative flex h-full min-h-[calc(100vh-1.5rem)] flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-16 h-[28rem] w-[28rem] rounded-full bg-indigo-500/30 blur-3xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '44px 44px',
              }}
            />

            <div className="relative flex flex-1 flex-col justify-between gap-10 p-12 xl:p-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 ring-1 ring-white/20">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Smarter PPC management
                </span>
                <h2 className="mt-6 max-w-lg text-4xl font-bold leading-tight tracking-tight text-white xl:text-[2.75rem]">
                  Stay in control of every ad dollar.
                </h2>
                <p className="mt-4 max-w-md text-lg text-purple-100">
                  AdsOptima watches your campaigns around the clock, so you can focus on strategy instead of spreadsheets.
                </p>
              </div>

              <ul className="space-y-5">
                {HIGHLIGHTS.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-purple-100">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="space-y-6">
                <figure className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-sm">
                  <blockquote className="text-[15px] leading-relaxed text-white">
                    “We replaced a tangle of scripts and spreadsheets with AdsOptima alerts. Budget surprises at month-end
                    are a thing of the past.”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-purple-700">
                      HO
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold text-white">Head of Paid Search</span>
                      <span className="text-purple-200">Harborline Outfitters</span>
                    </span>
                  </figcaption>
                </figure>

                <dl className="grid grid-cols-3 gap-3">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
                      <dt className="text-xs text-purple-200">{stat.label}</dt>
                      <dd className="mt-0.5 text-xl font-bold text-white">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
