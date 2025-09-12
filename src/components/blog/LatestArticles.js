'use client';

import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: "New to AdsOptima?",
    subtitle: "Here's What You Should Test In Your Free Trial Period",
    category: "GUIDE",
    date: "Sep 10, 2025",
    description: "When you're moving from one PPC platform to another, the trial period is your best chance to see if the tool is truly worth it.",
    icon: "📝"
  },
  {
    id: 2,
    title: "8 Tips to Improve Google Ads Optimization Score",
    category: "GOOGLE ADS",
    date: "Sep 8, 2025",
    description: "In 2024, we studied over 17,000 Google Ads accounts across different industries and spend levels to answer a simple question: Does...",
    icon: "⭐"
  },
  {
    id: 3,
    title: "Avoid These 6 Common (and Costly) Mistakes When Migrating To A New PPC Platform",
    category: "GUIDE",
    date: "Sep 4, 2025",
    description: "Migrating PPC platforms looks simple until you're in the middle of it.",
    icon: "❌"
  }
];

export default function LatestArticles() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
            Latest Articles
          </h2>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Filter By</span>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">Select category</option>
              <option value="Guide">Guide</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Data Studies">Data Studies</option>
              <option value="Expert Series">Expert Series</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Purple-Pink Gradient Header Section */}
              <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 relative p-8 h-64 flex flex-col justify-between">
                {/* Diagonal stripe pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                  }}></div>
                </div>
                
                {/* ADSOPTIMA branding */}
                <div className="relative z-10">
                  <span className="text-white text-sm font-semibold">ADSOPTIMA</span>
                </div>

                {/* Icon and Title */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="text-6xl mb-4 text-center">{article.icon}</div>
                  <h3 className="text-yellow-300 text-xl font-bold leading-tight text-center">
                    {article.title}
                  </h3>
                  {article.subtitle && (
                    <p className="text-white text-sm mt-2 text-center opacity-90">
                      {article.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* White Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200">
            Read All Articles
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
