'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormAlert, PasswordField, SubmitButton, TextField, sendJson } from '../forms/FormControls';
import { normalizeEmail, validateEmail } from '@/lib/validation';
import { safeRedirectPath } from '@/lib/redirect';

export default function SigninForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = safeRedirectPath(searchParams.get('next'));
  const justSignedOut = searchParams.get('signedOut') === '1';

  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    if (formError) setFormError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = normalizeEmail(values.email);
    const nextErrors = {
      email: validateEmail(email),
      password: values.password ? null : 'Password is required',
    };
    setErrors(nextErrors);
    if (nextErrors.email || nextErrors.password) return;

    setLoading(true);
    setFormError(null);
    const { ok, data } = await sendJson('/api/signin', { body: { email, password: values.password } });

    if (ok) {
      router.replace(next);
      router.refresh();
      return; // keep the button in its loading state while we navigate
    }

    setLoading(false);
    setFormError(data.error || 'Sign in failed. Please try again.');
    setValues((prev) => ({ ...prev, password: '' }));
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {justSignedOut && !formError && <FormAlert type="success">You&apos;ve been signed out.</FormAlert>}
      <FormAlert>{formError}</FormAlert>

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
        autoFocus
      />

      <PasswordField
        name="password"
        autoComplete="current-password"
        placeholder="Enter your password"
        value={values.password}
        onChange={update}
        error={errors.password}
        disabled={loading}
      />

      <SubmitButton loading={loading} loadingText="Signing in…" className="w-full">
        Sign in
      </SubmitButton>
    </form>
  );
}
