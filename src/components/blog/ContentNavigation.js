'use client';

import { useState } from 'react';

const categories = [
  { id: 'expert-insights', name: 'Expert Insights', active: true },
  { id: 'data-studies', name: 'Data Studies', active: false },
  { id: 'customer-success', name: 'Customer success stories', active: false },
  { id: 'tips-strategies', name: 'Tips & Strategies', active: false },
  { id: 'in-depth-guides', name: 'In-depth guides', active: false }
];

export default function ContentNavigation() {
  const [activeCategory, setActiveCategory] = useState('expert-insights');

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'text-gray-900 border-b-2 border-teal-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Category Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </h2>
        </div>
      </div>
    </div>
  );
}
