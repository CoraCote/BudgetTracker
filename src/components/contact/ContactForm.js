'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import {
  FormAlert,
  SelectField,
  SubmitButton,
  TextAreaField,
  TextField,
  sendJson,
} from '../forms/FormControls';
import { CONTACT_TOPICS, CONTACT_TOPIC_VALUES, MESSAGE_MAX_LENGTH, MONTHLY_SPEND_OPTIONS } from '@/lib/contact';
import { cleanName, normalizeEmail, validateEmail } from '@/lib/validation';

const PLATFORM_NAMES = {
  google: 'Google Ads',
  microsoft: 'Microsoft Ads',
  amazon: 'Amazon Ads',
  meta: 'Meta Ads',
};

function initialMessage(topic, platform) {
  if (topic === 'onboarding' && PLATFORM_NAMES[platform]) {
    return `I'd like to connect our ${PLATFORM_NAMES[platform]} account to AdsOptima.`;
  }
  return '';
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  // Links across the site use a few aliases (e.g. ?topic=enterprise from the pricing page).
  const TOPIC_ALIASES = { enterprise: 'sales', pricing: 'sales', help: 'support' };
  const requested = searchParams.get('topic');
  const requestedTopic = TOPIC_ALIASES[requested] || requested;
  const topic = CONTACT_TOPIC_VALUES.includes(requestedTopic) ? requestedTopic : 'sales';

  const [values, setValues] = useState(() => ({
    name: '',
    email: '',
    company: '',
    topic,
    monthlySpend: '',
    message: initialMessage(topic, searchParams.get('platform')),
    website: '', // honeypot
  }));
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    if (formError) setFormError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      ...values,
      name: cleanName(values.name),
      email: normalizeEmail(values.email),
      company: cleanName(values.company),
      message: values.message.trim(),
    };
    const nextErrors = {
      name: payload.name ? null : 'Please tell us your name',
      email: validateEmail(payload.email),
      message: payload.message.length >= 10 ? null : 'Please add a few more details (at least 10 characters)',
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setLoading(true);
    const { ok, data } = await sendJson('/api/contact', { body: payload });
    setLoading(false);

    if (ok) {
      setSent(true);
      return;
    }
    if (data.fields) setErrors((prev) => ({ ...prev, ...data.fields }));
    else setFormError(data.error || 'We could not send your message. Please try again.');
  };

  if (sent) {
    return (
      <div className="py-10 text-center" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-8 w-8 text-emerald-500" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-xl font-semibold text-gray-900">Thanks, {values.name.split(' ')[0]}! We&apos;ve got your message.</h2>
        <p className="mx-auto mt-2 max-w-sm text-gray-600">
          Someone from our team will reply to <span className="font-medium text-gray-800">{normalizeEmail(values.email)}</span>{' '}
          within one business day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            Back to home
          </Link>
          <Link
            href="/learn-with-adsoptima"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-purple-700 hover:to-pink-700"
          >
            Explore product tours
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormAlert>{formError}</FormAlert>

      <SelectField label="How can we help?" name="topic" value={values.topic} onChange={update} options={CONTACT_TOPICS} disabled={loading} />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Full name" name="name" autoComplete="name" value={values.name} onChange={update} error={errors.name} disabled={loading} maxLength={100} />
        <TextField
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          value={values.email}
          onChange={update}
          error={errors.email}
          disabled={loading}
          maxLength={255}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Company" name="company" autoComplete="organization" value={values.company} onChange={update} error={errors.company} disabled={loading} optional maxLength={150} />
        <SelectField
          label="Monthly ad spend"
          name="monthlySpend"
          value={values.monthlySpend}
          onChange={update}
          options={MONTHLY_SPEND_OPTIONS}
          placeholder="Select a range"
          disabled={loading}
          optional
        />
      </div>

      <TextAreaField
        label="Message"
        name="message"
        placeholder="Tell us about your accounts, goals, or what you'd like to see in a demo."
        value={values.message}
        onChange={update}
        error={errors.message}
        disabled={loading}
        maxLength={MESSAGE_MAX_LENGTH}
      />

      {/* Honeypot field, hidden from people and assistive tech. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
        </label>
      </div>

      <SubmitButton loading={loading} loadingText="Sending…" className="w-full sm:w-auto">
        Send message
      </SubmitButton>
    </form>
  );
}
