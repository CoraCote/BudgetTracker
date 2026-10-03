'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormAlert, PasswordField, SubmitButton, sendJson } from '../forms/FormControls';
import { validatePassword } from '@/lib/validation';

const EMPTY = { currentPassword: '', newPassword: '', confirmPassword: '' };

export default function PasswordForm() {
  const router = useRouter();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [saving, setSaving] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
    setStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {
      currentPassword: values.currentPassword ? null : 'Current password is required',
      newPassword: validatePassword(values.newPassword),
      confirmPassword:
        values.confirmPassword === values.newPassword ? null : "Passwords don't match",
    };
    if (!nextErrors.newPassword && values.newPassword === values.currentPassword) {
      nextErrors.newPassword = 'New password must be different from your current password';
    }
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setSaving(true);
    const { ok, status: httpStatus, data } = await sendJson('/api/user/password', {
      body: { currentPassword: values.currentPassword, newPassword: values.newPassword },
    });
    setSaving(false);

    if (httpStatus === 401) {
      router.replace('/signin?next=/dashboard%23security');
      return;
    }
    if (!ok) {
      if (data.fields) setErrors(data.fields);
      else setStatus({ type: 'error', message: data.error || 'Could not update your password.' });
      return;
    }

    setValues(EMPTY);
    setStatus({ type: 'success', message: 'Your password has been changed.' });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status && <FormAlert type={status.type}>{status.message}</FormAlert>}

      <PasswordField
        label="Current password"
        name="currentPassword"
        autoComplete="current-password"
        value={values.currentPassword}
        onChange={update}
        error={errors.currentPassword}
        disabled={saving}
      />
      <PasswordField
        label="New password"
        name="newPassword"
        autoComplete="new-password"
        value={values.newPassword}
        onChange={update}
        error={errors.newPassword}
        disabled={saving}
        maxLength={72}
      />
      <PasswordField
        label="Confirm new password"
        name="confirmPassword"
        autoComplete="new-password"
        value={values.confirmPassword}
        onChange={update}
        error={errors.confirmPassword}
        disabled={saving}
        maxLength={72}
      />

      <div className="flex justify-end border-t border-gray-100 pt-5">
        <SubmitButton loading={saving} loadingText="Updating…">
          Update password
        </SubmitButton>
      </div>
    </form>
  );
}
