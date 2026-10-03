'use client';

import { useState } from 'react';
import VideoThumbnail from '@/components/VideoThumbnail';
import { getBrand } from '@/components/fictionalBrands';

const caseStudies = [
  {
    id: 1,
    company: 'Harborline Outfitters',
    title: 'Harborline Outfitters Keeps a Seasonal Catalog in Sync With Less Manual Work',
    description: 'An outdoor e-commerce brand uses Shopping automation to keep thousands of products, prices and bids aligned through peak season.',
    category: ['ECOMMERCE', 'BRAND'],
    highlights: ['Product groups refresh automatically', 'Fewer clicks on out-of-stock items', 'Hours saved on weekly feed checks'],
  },
  {
    id: 2,
    company: 'Brightwell Clinics',
    title: 'Brightwell Clinics Brings Every Location Account Into One Budget View',
    description: 'A healthcare network monitors spend and lead volume across its locations, with alerts when a clinic falls behind pace.',
    category: ['LEAD-GEN', 'ENTERPRISE'],
    highlights: ['Cross-account budget pacing', 'Daily anomaly alerts', 'Consistent location reporting'],
  },
  {
    id: 3,
    company: 'Copperleaf Home',
    title: 'Copperleaf Home Improves Performance Max Efficiency During Sales Events',
    description: 'A home and sleep retailer uses AdsOptima insights to adjust Performance Max budgets ahead of promotional peaks.',
    category: ['ECOMMERCE', 'BRAND'],
    highlights: ['Better ROAS during promotions', 'Faster budget reallocation', 'Clearer asset group insights'],
  },
  {
    id: 4,
    company: 'Northfield Digital',
    title: 'Northfield Digital Frees Up Strategist Time Across Its Client Roster',
    description: 'A performance agency automates routine account maintenance so its team can focus on strategy and client growth.',
    category: ['AGENCY', 'LEAD-GEN'],
    highlights: ['Automated weekly account checks', 'Bulk changes across accounts', 'More time for strategy work'],
  },
  {
    id: 5,
    company: 'Tallgrass Media',
    title: 'Tallgrass Media Delivers Consistent Client Reports in a Fraction of the Time',
    description: 'A full-service agency standardizes reporting and audits so every client gets timely, data-rich updates.',
    category: ['AGENCY', 'BLENDED (ECOM & LEAD-GEN)'],
    highlights: ['Scheduled client reports', 'Reusable audit templates', 'AI-written performance summaries'],
  },
  {
    id: 6,
    company: 'Summit Ridge Auto',
    title: 'Summit Ridge Auto Lowers CPCs Across Its Dealership Accounts',
    description: 'A multi-location dealer group pairs AdsOptima rules with its own campaign templates to keep every rooftop on budget.',
    category: ['LEAD-GEN', 'ENTERPRISE'],
    highlights: ['Lower average CPC', 'Templated campaign launches', 'Budget alerts per location'],
  },
  {
    id: 7,
    company: 'Bluepine Travel',
    title: 'Bluepine Travel Manages Thousands of Travel Packages With a Lean Team',
    description: 'Scaling paid search across a large, changing inventory with a small team and smart tools.',
    category: ['ECOMMERCE', 'LEAD-GEN'],
    highlights: ['Ads generated from inventory data', 'Seasonal bid adjustments', 'Paused ads for sold-out packages'],
  },
  {
    id: 8,
    company: 'Keystone Ticketing',
    title: 'Keystone Ticketing Keeps Event Campaigns Aligned With Live Inventory',
    description: 'A ticketing marketplace uses rules to launch, pause and adjust event campaigns as availability changes.',
    category: ['ECOMMERCE'],
    highlights: ['Event-driven campaign rules', 'Less spend on sold-out events', 'Faster launches for new events'],
  },
];

const FILTERS = ['ALL', 'AGENCY', 'ECOMMERCE', 'LEAD-GEN', 'ENTERPRISE', 'BRAND'];

const filterLabel = (value) =>
  value === 'ALL' ? 'All Case Studies' : value === 'LEAD-GEN' ? 'Lead Generation' : value === 'ECOMMERCE' ? 'E-commerce' : value.charAt(0) + value.slice(1).toLowerCase();

export default function CaseStudiesGrid() {
  const [filter, setFilter] = useState('ALL');
  const [expandedId, setExpandedId] = useState(null);

  const visibleStudies = caseStudies.filter(
    (study) => filter === 'ALL' || study.category.includes(filter)
  );

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <label htmlFor="case-study-filter" className="text-sm font-medium text-gray-700">Filter By:</label>
          <select
            id="case-study-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {FILTERS.map((value) => (
              <option key={value} value={value}>{filterLabel(value)}</option>
            ))}
          </select>
          <span className="text-sm text-gray-500" aria-live="polite">
            {visibleStudies.length} {visibleStudies.length === 1 ? 'story' : 'stories'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleStudies.map((study) => {
            const brand = getBrand(study.company);
            const isExpanded = expandedId === study.id;
            return (
              <article key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                {/* Header visual */}
                <VideoThumbnail title={study.title} seed={study.company} aspect={false} showPlay={false} className="h-48">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 border border-white/30 text-lg font-bold mb-3">
                      {brand ? brand.initials : study.company.charAt(0)}
                    </span>
                    <span className="text-2xl font-bold drop-shadow">{study.company}</span>
                    <span className="text-sm text-white/80 mt-1">CASE STUDY</span>
                  </div>
                  <span className="absolute top-4 right-4 text-xs font-bold text-white/90">ADSOPTIMA</span>
                </VideoThumbnail>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full border border-gray-200"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>

                  <p className={`text-gray-600 text-sm mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {study.description}
                  </p>

                  {isExpanded && (
                    <ul id={`case-study-${study.id}-details`} className="mb-6 space-y-2">
                      {study.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start text-sm text-purple-700">
                          <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : study.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`case-study-${study.id}-details`}
                    className="mt-auto w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300"
                  >
                    {isExpanded ? 'Show Less' : 'Read Key Results'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          Customer stories are illustrative examples. Individual results vary by account, budget and market.
        </p>
      </div>
    </section>
  );
}
