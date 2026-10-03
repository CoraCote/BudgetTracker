'use client';

import { useEffect, useMemo, useState } from 'react';
import { BLOG_SEARCH_EVENT } from './BlogHero';

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
    description: "We looked at Google Ads accounts across different industries and spend levels to answer a simple question: does a higher optimization score mean better results?",
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

const toLabel = (category) =>
  category.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

export default function LatestArticles() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleSearch = (event) => setQuery(event.detail || '');
    window.addEventListener(BLOG_SEARCH_EVENT, handleSearch);
    return () => window.removeEventListener(BLOG_SEARCH_EVENT, handleSearch);
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(articles.map((article) => article.category))),
    []
  );

  const visibleArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const needle = query.toLowerCase();
    const matchesQuery =
      !needle ||
      [article.title, article.subtitle, article.description, article.category]
        .filter(Boolean)
        .some((text) => text.toLowerCase().includes(needle));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="latest-articles" className="bg-white py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
            Latest Articles
          </h2>

          <div className="flex items-center space-x-4">
            <label htmlFor="article-category" className="text-gray-700 font-medium">Filter By</label>
            <select
              id="article-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="All">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{toLabel(category)}</option>
              ))}
            </select>
          </div>
        </div>

        {query && (
          <div className="flex flex-wrap items-center gap-3 mb-8 text-gray-600">
            <span>
              Showing results for <span className="font-semibold text-gray-900">&ldquo;{query}&rdquo;</span>
            </span>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-sm font-medium text-purple-600 hover:text-purple-700 underline"
            >
              Clear search
            </button>
          </div>
        )}

        {visibleArticles.length === 0 ? (
          <div className="mb-12 rounded-xl border border-dashed border-purple-200 bg-purple-50/50 p-10 text-center">
            <p className="text-lg font-medium text-gray-800">No articles match your search yet.</p>
            <p className="mt-2 text-gray-600">Try a different keyword or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Purple-Pink Gradient Header Section */}
                <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 relative p-8 h-64 flex flex-col justify-between">
                  {/* Diagonal stripe pattern overlay */}
                  <div className="absolute inset-0 opacity-20" aria-hidden="true">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                    }}></div>
                  </div>

                  {/* ADSOPTIMA branding */}
                  <div className="relative z-10">
                    <span className="text-white text-sm font-semibold">ADSOPTIMA</span>
                  </div>

                  {/* Icon and Title */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <div className="text-6xl mb-4 text-center" aria-hidden="true">{article.icon}</div>
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
              </article>
            ))}
          </div>
        )}

        <div className="text-right">
          <a
            href="#newsletter"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200"
          >
            Get new articles by email
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
