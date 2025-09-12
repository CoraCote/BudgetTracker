'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
  };

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with AdsOptima
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Sign up for our newsletter to receive the latest insights, industry updates, and tips directly to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address*"
              className="w-full px-6 py-4 text-gray-900 bg-white rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-200"
          >
            Subscribe
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          You may opt out at any time. Check out our{' '}
          <a href="#" className="text-teal-400 hover:text-teal-300 underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
