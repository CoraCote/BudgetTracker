'use client';

import { useState } from 'react';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | invalid | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus('invalid');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <section id="newsletter" className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with AdsOptima
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Sign up for our newsletter to receive the latest insights, industry updates, and tips directly to your inbox.
        </p>

        {status === 'success' ? (
          <div className="max-w-md mx-auto flex items-center justify-center gap-3 rounded-lg border border-green-400/40 bg-green-500/10 px-6 py-4 text-green-300" role="status">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Thanks for subscribing! Look out for our next issue.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto" noValidate>
            <div className="mb-4">
              <label htmlFor="blog-newsletter-email" className="sr-only">Email address</label>
              <input
                id="blog-newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'invalid') setStatus('idle');
                }}
                placeholder="Enter Your Email Address*"
                aria-invalid={status === 'invalid'}
                aria-describedby={status === 'invalid' ? 'blog-newsletter-error' : undefined}
                className="w-full px-6 py-4 text-gray-900 bg-white rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
              {status === 'invalid' && (
                <p id="blog-newsletter-error" className="mt-2 text-left text-sm text-pink-300">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Subscribe
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        )}

        <p className="text-sm text-gray-400 mt-4">
          You may opt out at any time.
        </p>
      </div>
    </section>
  );
}
