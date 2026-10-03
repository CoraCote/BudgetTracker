'use client';

import { useState } from 'react';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Light-background email subscribe form with client-side validation and an
 * inline confirmation message. Nothing is sent to a server.
 */
export default function EmailSubscribeForm({
  id = 'subscribe-email',
  buttonLabel = 'Subscribe',
  successMessage = "Thanks! You're subscribed.",
  className = '',
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | invalid | success

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus('invalid');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800 ${className}`} role="status">
        <svg className="w-5 h-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-sm font-medium">{successMessage}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={className}>
      <div className="flex flex-col sm:flex-row gap-4">
        <label htmlFor={id} className="sr-only">Email address</label>
        <input
          id={id}
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === 'invalid') setStatus('idle');
          }}
          placeholder="Enter Your Email Address*"
          aria-invalid={status === 'invalid'}
          aria-describedby={status === 'invalid' ? `${id}-error` : undefined}
          className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105"
        >
          {buttonLabel}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      {status === 'invalid' && (
        <p id={`${id}-error`} className="mt-2 text-sm text-pink-600">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
