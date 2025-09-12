'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@/components/ui/icons';

export default function BlogHero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
            <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full opacity-40"></div>
            <div className="absolute top-32 left-32 w-1.5 h-1.5 bg-white rounded-full opacity-30"></div>
            <div className="absolute top-16 left-48 w-1 h-1 bg-white rounded-full opacity-50"></div>
            <div className="absolute top-24 left-64 w-2 h-2 bg-white rounded-full opacity-35"></div>
            <div className="absolute top-40 left-80 w-1 h-1 bg-white rounded-full opacity-25"></div>
            <div className="absolute top-12 left-96 w-1.5 h-1.5 bg-white rounded-full opacity-45"></div>
            <div className="absolute top-28 left-112 w-1 h-1 bg-white rounded-full opacity-30"></div>
            <div className="absolute top-36 left-128 w-2 h-2 bg-white rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          The AdsOptima Blog
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
          Data studies, expert tips, industry analysis, and more to help advertisers manage their paid media accounts like a pro.
        </p>

        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Our Catalog Of Great Campaign Management"
              className="w-full px-6 py-4 pr-12 text-gray-900 bg-white rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
