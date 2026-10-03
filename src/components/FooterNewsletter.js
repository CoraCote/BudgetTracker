'use client';

import { useState } from 'react';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Compact newsletter form for the dark footer.
 * Client-side only: validates the address and shows an inline confirmation.
 */
export default function FooterNewsletter() {
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
      <p className="flex items-center text-sm text-green-400" role="status">
        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Thanks! You&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex">
        <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
        <input
          id="footer-newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === 'invalid') setStatus('idle');
          }}
          placeholder="Enter your email"
          aria-invalid={status === 'invalid'}
          aria-describedby={status === 'invalid' ? 'footer-newsletter-error' : undefined}
          className="flex-1 min-w-0 bg-gray-700 text-white px-3 py-2 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-r-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          →
        </button>
      </div>
      {status === 'invalid' && (
        <p id="footer-newsletter-error" className="mt-2 text-xs text-pink-300">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
