'use client';

import { useState } from 'react';
import VideoCard from './VideoCard';

const episodes = [
  {
    id: 9,
    title: "How Layered Automation Turned Around a Lead-Gen Account",
    date: "Aug 25, 2025",
    description: "How a performance agency combined bid strategies, scripts and rules to steady a struggling lead-gen account.",
    presenter: "Northfield Digital",
    company: "Paid search team",
    gradient: "teal-green",
    hasVideoCard: true,
    videoCardTitle: "How Layered Automation Turned Around a Lead-Gen Account",
    videoCardSubtitle: "AUTOMATION LAYERING MASTERCLASS",
    duration: "52 min",
    views: "3.2K",
    isNew: true,
    tags: ["ROI", "Lead Gen", "Case Study"],
    isLive: false,
    highlightText: "Layered Automation"
  },
  {
    id: 8,
    title: "Google Ads automations for small accounts",
    date: "Dec 9, 2024",
    description: "10 automations an agency team uses every day to manage small Google Ads accounts.",
    presenter: "Tallgrass Media",
    company: "Agency account team",
    gradient: "teal-green",
    hasVideoCard: true,
    videoCardTitle: "Google Ads automations for small accounts",
    videoCardSubtitle: "AUTOMATION LAYERING MASTERCLASS",
    duration: "38 min",
    views: "2.8K",
    tags: ["Small Business", "Google Ads", "Automation"],
    isLive: false
  },
  {
    id: 7,
    title: "7 PPC Automations That Save You From Burnout",
    date: "Jun 25, 2024",
    description: "Discover the essential automations that help PPC managers work smarter, not harder.",
    presenter: "AdsOptima Customer Success",
    company: "AdsOptima",
    gradient: "purple-pink",
    hasVideoCard: false,
    duration: "45 min",
    views: "1.9K",
    tags: ["Productivity", "Workflow", "Efficiency"]
  },
  {
    id: 6,
    title: "How to Build Trust in the World of PPC Automation",
    date: "May 2, 2024",
    description: "Learn how to maintain client confidence while implementing automated solutions.",
    presenter: "AdsOptima Product Team",
    company: "AdsOptima",
    gradient: "blue-purple",
    hasVideoCard: false,
    duration: "41 min",
    views: "2.1K",
    tags: ["Client Relations", "Trust", "Strategy"]
  },
  {
    id: 5,
    title: "How Two Agency Teams Manage Multiple Clients at Lower Cost",
    date: "Jan 15, 2024",
    description: "How we manage multiple clients at a fraction of the cost",
    presenter: "Northfield Digital",
    company: "Agency strategist",
    presenter2: "Tallgrass Media",
    company2: "Account director",
    gradient: "blue-purple",
    hasVideoCard: true,
    videoCardTitle: "How we manage multiple clients at a fraction of the cost",
    videoCardSubtitle: "AUTOMATION LAYERING MASTERCLASS",
    duration: "58 min",
    views: "4.1K",
    tags: ["Agency", "Cost Management", "Scaling"],
    isDualPresenter: true,
    isLive: false,
    highlightText: "at a fraction of",
    specialIcon: (
      <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
        <path d="M12 2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6H9a1 1 0 110-2h1V3a1 1 0 011-1z" />
      </svg>
    ),
    specialText: "eliminate wasted spend"
  },
  {
    id: 4,
    title: "How to Win With Seasonality Bid Adjustments",
    date: "Dec 11, 2023",
    description: "Master seasonal bidding strategies that maximize ROI throughout the year.",
    presenter: "Copperleaf Home",
    company: "E-commerce marketing team",
    gradient: "indigo-blue",
    hasVideoCard: true,
    videoCardTitle: "How to win with Seasonality Bid Adjustments",
    videoCardSubtitle: "AUTOMATION LAYERING MASTERCLASS",
    duration: "47 min",
    views: "3.7K",
    tags: ["Seasonality", "Bidding", "Strategy"],
    isLive: false,
    highlightText: "Seasonality"
  },
  {
    id: 3,
    title: "Advanced Scripts for PPC Account Management",
    date: "Nov 8, 2023",
    description: "Learn how to create powerful Google Ads scripts for automated account management.",
    presenter: "AdsOptima Product Team",
    company: "AdsOptima",
    gradient: "orange-red",
    hasVideoCard: true,
    videoCardTitle: "Advanced Scripts for PPC Account Management",
    videoCardSubtitle: "AUTOMATION LAYERING MASTERCLASS",
    duration: "63 min",
    views: "2.9K",
    tags: ["Scripts", "Advanced", "Google Ads"],
    isLive: false
  },
  {
    id: 2,
    title: "Meta Ads Automation Best Practices",
    date: "Oct 15, 2023",
    description: "Master Meta's automation tools and create winning campaigns with minimal manual work.",
    presenter: "Bluepine Travel",
    company: "Paid social team",
    gradient: "purple-pink",
    hasVideoCard: true,
    videoCardTitle: "Meta Ads Automation Best Practices",
    videoCardSubtitle: "AUTOMATION LAYERING MASTERCLASS",
    duration: "44 min",
    views: "3.5K",
    tags: ["Meta Ads", "Social Media", "Best Practices"],
    isLive: false
  },
  {
    id: 1,
    title: "Introduction to PPC Automation Fundamentals",
    date: "Sep 20, 2023",
    description: "Get started with PPC automation - the essential concepts every marketer needs to know.",
    presenter: "AdsOptima Customer Success",
    company: "AdsOptima",
    gradient: "teal-green",
    hasVideoCard: true,
    videoCardTitle: "Introduction to PPC Automation Fundamentals",
    videoCardSubtitle: "AUTOMATION LAYERING MASTERCLASS",
    duration: "39 min",
    views: "5.2K",
    tags: ["Fundamentals", "Introduction", "Basics"],
    isLive: false
  }
];

const INITIAL_COUNT = 6;

export default function PreviousEpisodes() {
  const [showAll, setShowAll] = useState(false);
  const visibleEpisodes = showAll ? episodes : episodes.slice(0, INITIAL_COUNT);

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-0">
            Previous Episodes
          </h2>
          
          <a
            href="#masterclass-signup"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg self-start"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            Get notified of new episodes
          </a>
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleEpisodes.map((episode) => (
            <div key={episode.id} className="space-y-4">
              {episode.hasVideoCard ? (
                <VideoCard
                  title={episode.videoCardTitle}
                  subtitle={episode.videoCardSubtitle}
                  gradient={episode.gradient}
                  hasPlayButton={true}
                  className="h-full"
                  presenter={episode.presenter}
                  company={episode.company}
                  isDualPresenter={episode.isDualPresenter}
                  presenter2={episode.presenter2}
                  company2={episode.company2}
                  duration={episode.duration}
                  views={episode.views}
                  isNew={episode.isNew}
                  isLive={episode.isLive}
                  tags={episode.tags}
                  highlightText={episode.highlightText}
                  specialIcon={episode.specialIcon}
                  specialText={episode.specialText}
                />
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[420px] flex flex-col justify-between border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  {/* Header with icon and status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                    </div>
                    {episode.isNew && (
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {episode.title}
                    </h3>
                    
                    {/* Tags */}
                    {episode.tags && episode.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {episode.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Presenter info */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {episode.presenter.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()}
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">{episode.presenter}</p>
                        <p className="text-gray-600 text-xs">{episode.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer with stats */}
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-4">
                      {episode.duration && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span>{episode.duration}</span>
                        </div>
                      )}
                      {episode.views && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          <span>{episode.views}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs">
                      Episode {episode.id}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Episode Info */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-900">
                    Automation Layering Masterclass {episode.id}
                  </span>
                  <span className="text-sm text-gray-600">
                    {episode.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {episode.description}
                </h3>
                
                {episode.isNew && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                    NEW
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {episodes.length > INITIAL_COUNT && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              {showAll ? 'Show Fewer Episodes' : `Load ${episodes.length - INITIAL_COUNT} More Episodes`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
