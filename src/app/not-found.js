import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Page not found',
};

const SUGGESTIONS = [
  { href: '/solutions/monitoring', label: 'Monitoring' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/contact', label: 'Contact us' },
];

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-purple-50/60 to-white px-4 py-20">
      <div className="max-w-lg text-center">
        <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">We couldn&apos;t find that page</h1>
        <p className="mt-3 text-gray-600">It may have moved, or the link might be out of date.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:from-purple-700 hover:to-pink-700"
          >
            Go to homepage <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-sm font-medium text-gray-500">Popular pages</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {SUGGESTIONS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-700 transition hover:border-purple-200 hover:text-purple-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
