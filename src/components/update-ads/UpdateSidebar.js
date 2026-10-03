'use client';
import { useState } from 'react';

const CATEGORY_COLORS = {
  All: 'bg-gray-400',
  New: 'bg-pink-500',
  Improvement: 'bg-blue-500',
  'AdsOptima For Social': 'bg-green-500',
  'Premium & Enterprise': 'bg-yellow-500',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function SidebarNewsletter() {
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

  return (
    <div className="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-xl border border-purple-100 shadow-sm">
      <h4 className="text-sm font-bold text-gray-900 mb-2">Stay Updated</h4>
      {status === 'success' ? (
        <p className="text-sm text-green-700 font-medium" role="status">
          Thanks! We&apos;ll email you when new updates ship.
        </p>
      ) : (
        <>
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            Get notified about new features and updates directly in your inbox.
          </p>
          <form onSubmit={handleSubmit} noValidate className="space-y-3">
            <label htmlFor="updates-newsletter-email" className="sr-only">Email address</label>
            <input
              id="updates-newsletter-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status === 'invalid') setStatus('idle');
              }}
              placeholder="Enter your email"
              aria-invalid={status === 'invalid'}
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
            />
            {status === 'invalid' && (
              <p className="text-xs text-pink-600">Please enter a valid email address.</p>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default function UpdateSidebar({
  searchQuery = '',
  onSearchChange = () => {},
  categories = [],
  selectedCategory = 'All',
  onCategoryChange = () => {},
  months = [],
  selectedMonth = null,
  onMonthChange = () => {},
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-24">
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <label htmlFor="updates-search" className="sr-only">Search updates</label>
          <input
            id="updates-search"
            type="search"
            placeholder="Search in this feed"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm placeholder-gray-400"
          />
          <svg className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-900 mb-5">Categories</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => onCategoryChange(category.name)}
              aria-pressed={selectedCategory === category.name}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                selectedCategory === category.name
                  ? 'bg-purple-50 text-purple-700 border border-purple-200'
                  : 'hover:bg-gray-50 text-gray-700 hover:border-gray-200 border border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-2.5 h-2.5 rounded-full ${CATEGORY_COLORS[category.name] || 'bg-purple-400'} shadow-sm`}></div>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
              <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Archive */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-900 mb-5">Archive</h3>
        <div className="space-y-1">
          {months.map((month) => (
            <button
              key={month}
              type="button"
              onClick={() => onMonthChange(selectedMonth === month ? null : month)}
              aria-pressed={selectedMonth === month}
              className={`w-full text-left p-3 rounded-lg text-sm transition-colors font-medium ${
                selectedMonth === month
                  ? 'bg-purple-50 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      <SidebarNewsletter />
    </div>
  );
}
