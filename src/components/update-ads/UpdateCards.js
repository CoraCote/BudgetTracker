'use client';
import { useState } from 'react';
import UpdateCard from './UpdateCard';

const PRODUCT_TEAM = { name: 'AdsOptima Product Team', role: 'Product update' };

export const updates = [
  {
    id: 1,
    type: 'NEW',
    category: 'New',
    typeColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
    date: 'September 15, 2025',
    title: 'Build Microsoft Shopping campaigns with feed labels',
    description: 'Feed labels are now fully supported in the Shopping Campaign Builder and Refresher for Microsoft. That means you can easily create and update Microsoft Shopping campaigns that filter or group products by labels - whether that\'s for seasonal lines, clearance stock, or brand-specific categories. No extra workarounds needed - just a smoother way to manage campaigns at scale.',
    cta: 'Go to Shopping Campaign Builder',
    ctaLink: '/solutions/shopping',
    author: PRODUCT_TEAM
  },
  {
    id: 2,
    type: 'PREMIUM & ENTERPRISE ONLY',
    category: 'Premium & Enterprise',
    typeColor: 'bg-gradient-to-r from-orange-400 to-yellow-500',
    typeTextColor: 'text-gray-800',
    date: 'September 09, 2025',
    title: 'Fix feed issues directly in the Feed Audit tool',
    description: 'You no longer need to switch tools to resolve feed problems. Now, you can fix issues like missing brand, price, or GTIN right inside the Shopping Feed Audit tool. Apply bulk edits, use AI suggestions for titles and descriptions, and let AdsOptima handle supplemental feed creation automatically. Audits become not just diagnostic, but actionable, saving you time and improving product performance ahead of Q4.',
    cta: 'Audit your feeds now',
    ctaLink: '/solutions/feed-management',
    author: { name: 'AdsOptima Engineering Team', role: 'Product update' }
  },
  {
    id: 3,
    type: 'IMPROVEMENT',
    category: 'Improvement',
    typeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    date: 'September 04, 2025',
    title: 'Smarter ways to investigate performance shifts using PPC Investigator',
    description: 'We\'ve enhanced PPC Investigator with Root Cause Analysis and new metrics including CTR, CPC, CPM, ROAS, Conversion Rate, Interaction, and Value/Cost ratios. These additions help you quickly identify what\'s driving performance changes across your campaigns, making it easier to spot opportunities and address issues before they impact your bottom line.',
    cta: 'Go to PPC Investigator',
    ctaLink: '/solutions/data-insights',
    author: { name: 'AdsOptima Research Team', role: 'Product update' }
  },
  {
    id: 4,
    type: 'ADSOPTIMA FOR SOCIAL',
    category: 'AdsOptima For Social',
    typeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
    date: 'September 01, 2025',
    title: 'Quickly duplicate and edit existing Social ads',
    description: 'The Social Campaign Launcher now supports both single-image and carousel formats - perfect for working with pre-approved brand assets or seasonal visuals across multiple campaigns. You can copy and edit existing ads to maintain consistency while adapting content for different audiences and objectives.',
    cta: 'Go to Social Campaign Launcher',
    ctaLink: '/solutions/automation',
    author: PRODUCT_TEAM
  },
  {
    id: 5,
    type: 'NEW',
    category: 'New',
    typeColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
    date: 'August 19, 2025',
    title: 'Optional: Link Google Ads accounts to AdsOptima\'s MCC for better support',
    description: 'You can now connect your Google Ads accounts to AdsOptima\'s MCC, using the "Connect to AdsOptima MCC" button on the Manage Linked Accounts page. It\'s optional, but it helps us support you better with faster troubleshooting and deeper account diagnostics when needed.',
    cta: 'Go to the Manage Linked Accounts page',
    ctaLink: '/dashboard',
    author: { name: 'AdsOptima Customer Success', role: 'Product update' }
  },
  {
    id: 6,
    type: 'NEW',
    category: 'New',
    typeColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
    date: 'August 12, 2025',
    title: 'Create new Google Ads accounts directly in AdsOptima',
    description: 'Create Google Ads accounts right from the Manage Linked Accounts page - no need to go to Google Ads anymore! Just click "+ Create Account", pick your MCC, enter the account name, currency, and time zone, and you\'re all set. Perfect for teams looking to streamline their account setup process.',
    cta: 'Create your first account',
    ctaLink: '/dashboard',
    author: PRODUCT_TEAM
  }
];

// "September 15, 2025" -> "September 2025"
export const monthOf = (date) => {
  const [month, , year] = date.replace(',', '').split(' ');
  return `${month} ${year}`;
};

export default function UpdateCards({ items = updates, onClearFilters }) {
  const [feedback, setFeedback] = useState({});

  const handleFeedbackChange = (updateId, value) => {
    setFeedback(prev => ({
      ...prev,
      [updateId]: value
    }));
  };

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-dashed border-purple-200 p-10 text-center">
        <p className="text-lg font-semibold text-gray-800">No updates match your filters.</p>
        {onClearFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="mt-4 px-5 py-2 text-sm font-medium text-purple-700 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((update) => (
        <UpdateCard
          key={update.id}
          update={update}
          feedback={feedback[update.id] || ''}
          onFeedbackChange={(value) => handleFeedbackChange(update.id, value)}
        />
      ))}
    </div>
  );
}
