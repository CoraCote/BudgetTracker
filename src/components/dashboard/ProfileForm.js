'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormAlert, SubmitButton, TextField, sendJson } from '../forms/FormControls';
import { cleanName, validateName } from '@/lib/validation';

export default function ProfileForm({ user, onSaved }) {
  const router = useRouter();
  const [values, setValues] = useState({ firstName: user.firstName, lastName: user.lastName });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [saving, setSaving] = useState(false);

  const dirty = cleanName(values.firstName) !== user.firstName || cleanName(values.lastName) !== user.lastName;

  const update = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
    setStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { firstName: cleanName(values.firstName), lastName: cleanName(values.lastName) };
    const nextErrors = {
      firstName: validateName(payload.firstName, 'First name'),
      lastName: validateName(payload.lastName, 'Last name'),
    };
    setErrors(nextErrors);
    if (nextErrors.firstName || nextErrors.lastName) return;

    setSaving(true);
    const { ok, status: httpStatus, data } = await sendJson('/api/user', { method: 'PATCH', body: payload });
    setSaving(false);

    if (httpStatus === 401) {
      router.replace('/signin?next=/dashboard');
      return;
    }
    if (!ok) {
      if (data.fields) setErrors(data.fields);
      setStatus({ type: 'error', message: data.error || 'Could not save your changes.' });
      return;
    }

    setValues({ firstName: data.user.firstName, lastName: data.user.lastName });
    onSaved(data.user);
    setStatus({ type: 'success', message: 'Your profile has been updated.' });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status && <FormAlert type={status.type}>{status.message}</FormAlert>}

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="First name"
          name="firstName"
          autoComplete="given-name"
          value={values.firstName}
          onChange={update}
          error={errors.firstName}
          disabled={saving}
          maxLength={100}
        />
        <TextField
          label="Last name"
          name="lastName"
          autoComplete="family-name"
          value={values.lastName}
          onChange={update}
          error={errors.lastName}
          disabled={saving}
          maxLength={100}
        />
      </div>

      <TextField
        label="Email"
        name="email"
        type="email"
        value={user.email}
        disabled
        readOnly
        hint="Contact support to change the email address on your account."
      />

      <div className="flex justify-end border-t border-gray-100 pt-5">
        <SubmitButton loading={saving} loadingText="Saving…" disabled={!dirty}>
          Save changes
        </SubmitButton>
      </div>
    </form>
  );
}
