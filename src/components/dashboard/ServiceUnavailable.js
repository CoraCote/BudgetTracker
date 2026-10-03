import Link from 'next/link';
import { ServerCrash } from 'lucide-react';

export default function ServiceUnavailable() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
          <ServerCrash className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-xl font-semibold text-gray-900">We&apos;ll be right back</h1>
        <p className="mt-2 text-gray-600">
          Your dashboard is temporarily unavailable. Your data is safe. Please try again in a minute.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/dashboard"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-purple-700 hover:to-pink-700"
          >
            Try again
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Back to site
          </Link>
        </div>
      </div>
    </div>
  );
}
