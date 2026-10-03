'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import { FormAlert, PasswordField, SubmitButton, TextField, sendJson } from './forms/FormControls';
import {
  PASSWORD_MIN_LENGTH,
  cleanName,
  normalizeEmail,
  passwordStrength,
  validateEmail,
  validateName,
  validatePassword,
} from '@/lib/validation';

const STRENGTH_LABELS = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];
const STRENGTH_COLORS = ['bg-red-400', 'bg-orange-400', 'bg-amber-400', 'bg-lime-500', 'bg-emerald-500'];

function PasswordRequirements({ password }) {
  const strength = passwordStrength(password);
  const rules = [
    { met: password.length >= PASSWORD_MIN_LENGTH, label: `${PASSWORD_MIN_LENGTH}+ characters` },
    { met: /[a-zA-Z]/.test(password), label: 'A letter' },
    { met: /\d/.test(password), label: 'A number' },
  ];

  return (
    <div className="mt-3" aria-live="polite">
      <div className="flex items-center gap-3">
        <div className="flex flex-1 gap-1" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                password && i < Math.max(strength, 1) ? STRENGTH_COLORS[strength] : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <span className="w-16 text-right text-xs font-medium text-gray-500">
          {password ? STRENGTH_LABELS[strength] : ''}
        </span>
      </div>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {rules.map((rule) => (
          <li
            key={rule.label}
            className={`flex items-center gap-1 text-xs transition-colors ${rule.met ? 'text-emerald-600' : 'text-gray-500'}`}
          >
            <Check className={`h-3.5 w-3.5 ${rule.met ? 'opacity-100' : 'opacity-30'}`} aria-hidden="true" />
            {rule.label}
            <span className="sr-only">{rule.met ? '(met)' : '(not met)'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SignupForm() {
  const router = useRouter();
  const [values, setValues] = useState({ firstName: '', lastName: '', email: '', password: '' });
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

    const payload = {
      firstName: cleanName(values.firstName),
      lastName: cleanName(values.lastName),
      email: normalizeEmail(values.email),
      password: values.password,
    };
    const nextErrors = {
      firstName: validateName(payload.firstName, 'First name'),
      lastName: validateName(payload.lastName, 'Last name'),
      email: validateEmail(payload.email),
      password: validatePassword(payload.password),
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setLoading(true);
    setFormError(null);
    const { ok, data } = await sendJson('/api/signup', { body: payload });

    if (ok) {
      router.replace('/dashboard?welcome=1');
      router.refresh();
      return;
    }

    setLoading(false);
    if (data.fields) setErrors((prev) => ({ ...prev, ...data.fields }));
    if (!data.fields) setFormError(data.error || 'We could not create your account. Please try again.');
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormAlert>{formError}</FormAlert>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="First name"
          name="firstName"
          autoComplete="given-name"
          placeholder="Alex"
          value={values.firstName}
          onChange={update}
          error={errors.firstName}
          disabled={loading}
          optional
          maxLength={100}
        />
        <TextField
          label="Last name"
          name="lastName"
          autoComplete="family-name"
          placeholder="Morgan"
          value={values.lastName}
          onChange={update}
          error={errors.lastName}
          disabled={loading}
          optional
          maxLength={100}
        />
      </div>

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

      <PasswordField
        name="password"
        autoComplete="new-password"
        placeholder="Create a password"
        value={values.password}
        onChange={update}
        error={errors.password}
        disabled={loading}
        maxLength={72}
      >
        <PasswordRequirements password={values.password} />
      </PasswordField>

      <SubmitButton loading={loading} loadingText="Creating your account…" className="w-full">
        Create account
      </SubmitButton>

      <p className="text-center text-xs leading-relaxed text-gray-500">
        By creating an account, you agree to the AdsOptima Terms of Service and acknowledge our Privacy Policy.
      </p>
    </form>
  );
}
