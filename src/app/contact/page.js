import { Suspense } from 'react';
import { Clock, Headphones, PlayCircle, ShieldCheck } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact us',
  description: 'Talk to the AdsOptima team about pricing, a personalized demo, onboarding or support.',
};

const REASONS = [
  {
    icon: PlayCircle,
    title: 'Personalized demo',
    body: 'See AdsOptima on accounts like yours, with a walkthrough tailored to your goals.',
  },
  {
    icon: Headphones,
    title: 'Onboarding help',
    body: 'Our team connects your ad accounts with the minimum permissions needed.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & procurement',
    body: 'Questions about data handling, SSO, or vendor reviews? We can help.',
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-white">
      <div className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-pink-200/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
            Contact
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Let&apos;s talk about your accounts</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Whether you manage one brand or a hundred client accounts, we&apos;ll help you find the right setup.
          </p>

          <ul className="mt-10 space-y-6">
            {REASONS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm ring-1 ring-gray-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="mt-1 text-gray-600">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-gray-600 shadow-sm ring-1 ring-gray-200">
            <Clock className="h-4 w-4 text-purple-600" aria-hidden="true" />
            We reply within one business day.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xl shadow-purple-500/5 sm:p-10">
          <Suspense fallback={<div className="h-[560px]" aria-hidden="true" />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
