'use client';
import { useState } from 'react';

const categories = [
  { name: 'All', color: 'bg-gray-400', count: 24 },
  { name: 'Announcement', color: 'bg-orange-500', count: 3 },
  { name: 'Fix', color: 'bg-orange-500', count: 5 },
  { name: 'Improvement', color: 'bg-blue-500', count: 8 },
  { name: 'New', color: 'bg-pink-500', count: 6 },
  { name: 'AdsOptima For Social', color: 'bg-green-500', count: 2 },
  { name: 'Premium & Enterprise...', color: 'bg-yellow-500', count: 4 }
];

const archives = [
  'September 2025',
  'August 2025', 
  'July 2025',
  'June 2025',
  'May 2025',
  'April 2025',
  'March 2025',
  'February 2025',
  'January 2025',
  'December 2024',
  'November 2024',
  'October 2024',
  'Older'
];

export default function UpdateSidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-8">
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search in this feed"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-gray-400"
          />
          <svg className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                selectedCategory === category.name 
                  ? 'bg-purple-50 text-purple-700 border border-purple-200' 
                  : 'hover:bg-gray-50 text-gray-700 hover:border-gray-200 border border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-2.5 h-2.5 rounded-full ${category.color} shadow-sm`}></div>
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
          {archives.map((month) => (
            <button
              key={month}
              className="w-full text-left p-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-xl border border-purple-100 shadow-sm">
        <h4 className="text-sm font-bold text-gray-900 mb-2">Stay Updated</h4>
        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
          Get notified about new features and updates directly in your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
          />
          <button className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-sm hover:shadow-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
