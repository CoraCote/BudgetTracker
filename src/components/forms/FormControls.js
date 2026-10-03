'use client';

import { forwardRef, useId, useState } from 'react';
import { AlertCircle, CheckCircle2, Eye, EyeOff, Loader2 } from 'lucide-react';

const inputBase =
  'block w-full rounded-xl border bg-white px-4 py-2.5 text-[15px] text-gray-900 shadow-sm transition ' +
  'placeholder:text-gray-400 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500';

function inputClasses(error, extra = '') {
  const state = error
    ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
    : 'border-gray-200 hover:border-gray-300 focus:border-purple-500 focus:ring-purple-100';
  return `${inputBase} ${state} ${extra}`;
}

export function FieldShell({ id, label, hint, error, optional, children, labelAction }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
          {optional && <span className="ml-1 font-normal text-gray-400">(optional)</span>}
        </label>
        {labelAction}
      </div>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-600" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-gray-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

function describedBy(id, error, hint) {
  if (error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}

export const TextField = forwardRef(function TextField(
  { label, hint, error, optional, labelAction, className = '', id: idProp, ...props },
  ref
) {
  const generatedId = useId();
  const id = idProp || generatedId;

  return (
    <FieldShell id={id} label={label} hint={hint} error={error} optional={optional} labelAction={labelAction}>
      <input
        ref={ref}
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={inputClasses(error, className)}
        {...props}
      />
    </FieldShell>
  );
});

export function PasswordField({ label = 'Password', hint, error, labelAction, children, id: idProp, ...props }) {
  const generatedId = useId();
  const id = idProp || generatedId;
  const [visible, setVisible] = useState(false);

  return (
    <FieldShell id={id} label={label} hint={hint} error={error} labelAction={labelAction}>
      <div className="relative">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy(id, error, hint)}
          className={inputClasses(error, 'pr-12')}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-xl text-gray-400 transition hover:text-gray-600 focus:outline-none focus-visible:text-purple-600"
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
        >
          {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
      {children}
    </FieldShell>
  );
}

export function SelectField({ label, hint, error, optional, options, placeholder, id: idProp, ...props }) {
  const generatedId = useId();
  const id = idProp || generatedId;

  return (
    <FieldShell id={id} label={label} hint={hint} error={error} optional={optional}>
      <select
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={inputClasses(error, 'appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%2020%2020%27%20fill%3D%27%239ca3af%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20d%3D%27M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%27/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10')}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value ?? option} value={option.value ?? option}>
            {option.label ?? option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function TextAreaField({ label, hint, error, optional, id: idProp, ...props }) {
  const generatedId = useId();
  const id = idProp || generatedId;

  return (
    <FieldShell id={id} label={label} hint={hint} error={error} optional={optional}>
      <textarea
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={inputClasses(error, 'min-h-[132px] resize-y')}
        {...props}
      />
    </FieldShell>
  );
}

export function SubmitButton({ loading, loadingText, children, className = '', variant = 'primary', ...props }) {
  const variants = {
    primary:
      'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl hover:shadow-purple-500/25 focus-visible:ring-purple-200',
    secondary:
      'border border-gray-200 bg-white text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-200',
  };

  return (
    <button
      type="submit"
      disabled={loading || props.disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition focus:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {loading ? loadingText || children : children}
    </button>
  );
}

export function FormAlert({ type = 'error', children }) {
  if (!children) return null;
  const isError = type === 'error';
  const Icon = isError ? AlertCircle : CheckCircle2;

  return (
    <div
      role={isError ? 'alert' : 'status'}
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
        isError ? 'border-red-200 bg-red-50 text-red-800' : 'border-emerald-200 bg-emerald-50 text-emerald-800'
      }`}
    >
      <Icon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${isError ? 'text-red-500' : 'text-emerald-500'}`} aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}

/** POSTs/PATCHes JSON and normalises the response into `{ ok, status, data }`. */
export async function sendJson(url, { method = 'POST', body } = {}) {
  try {
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'same-origin',
    });
    const data = await response.json().catch(() => ({}));
    return { ok: response.ok, status: response.status, data };
  } catch {
    return {
      ok: false,
      status: 0,
      data: { error: "We couldn't reach the server. Check your connection and try again." },
    };
  }
}
