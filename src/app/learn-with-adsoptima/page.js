'use client';

import { useState } from 'react';
import VideoCard from '../../components/VideoCard';
import PromotionalBanner from '../../components/PromotionalBanner';

export default function LearnWithAdsOptima() {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 4;

  // Sample video data - you can replace with real data
  const videos = [
    {
      id: 1,
      title: "How to Optimize Shopping & PMAX Performance Like a Wizard 🧙‍♀️",
      episode: "Learn With AdsOptima 24",
      date: "Sep 1, 2025",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "teal",
      character: "woman",
      highlightText: "OPTIMIZE SHOPPING & PMAX PERFORMANCE",
      views: "15.2K",
      duration: "18:45",
      rating: "4.9"
    },
    {
      id: 2,
      title: "Smarter Portfolio Budgeting With AdsOptima (No Math Anxiety!) 🧮",
      episode: "Learn With AdsOptima 23", 
      date: "Jul 23, 2025",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "purple",
      character: "robot",
      highlightText: "SMARTER PORTFOLIO BUDGETING",
      views: "12.8K",
      duration: "22:30",
      rating: "4.8"
    },
    {
      id: 3,
      title: "Fix PPC Issues Like a Pro (Even When You Feel Like a Noob) 🔧",
      episode: "Learn With AdsOptima 20",
      date: "Jun 10, 2025", 
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "blue",
      character: "man",
      highlightText: "FIX PPC ISSUES LIKE A PRO",
      views: "18.5K",
      duration: "16:20",
      rating: "4.9"
    },
    {
      id: 4,
      title: "Optimize Budget Pacing for Better ROI (Money Talks!) 💰",
      episode: "Learn With AdsOptima 19",
      date: "Apr 3, 2025",
      thumbnail: "/api/placeholder/400/225", 
      backgroundPattern: "green",
      character: "ninja",
      highlightText: "OPTIMIZE BUDGET PACING FOR BETTER ROI",
      views: "14.3K",
      duration: "19:15",
      rating: "4.7"
    },
    {
      id: 5,
      title: "Improve Location Targeting Through Geo Heatmaps 🌍",
      episode: "Learn With AdsOptima 18",
      date: "Mar 15, 2025",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "red", 
      character: "woman",
      highlightText: "IMPROVE LOCATION TARGETING THROUGH GEO HEATMAPS",
      views: "11.7K",
      duration: "21:40",
      rating: "4.6"
    },
    {
      id: 6,
      title: "Building DSA Campaigns With Campaign Automator 🤖",
      episode: "Learn With AdsOptima 17",
      date: "Feb 28, 2025",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "dark",
      character: "robot",
      highlightText: "BUILDING DSA CAMPAIGNS WITH CAMPAIGN AUTOMATOR",
      views: "16.9K",
      duration: "25:10",
      rating: "4.8"
    },
    {
      id: 7,
      title: "Advanced Keyword Research Strategies (Detective Mode ON!) 🔍",
      episode: "Learn With AdsOptima 16",
      date: "Feb 10, 2025",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "teal",
      character: "man",
      highlightText: "ADVANCED KEYWORD RESEARCH STRATEGIES",
      views: "13.4K",
      duration: "17:55",
      rating: "4.9"
    },
    {
      id: 8,
      title: "Mastering Google Ads Automation Rules (Set It & Forget It!) ⚙️",
      episode: "Learn With AdsOptima 15",
      date: "Jan 25, 2025",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "purple",
      character: "ninja",
      highlightText: "MASTERING GOOGLE ADS AUTOMATION RULES",
      views: "20.1K",
      duration: "23:25",
      rating: "4.8"
    },
    {
      id: 9,
      title: "Facebook Ads Creative Testing Best Practices (Art Meets Science!) 🎨",
      episode: "Learn With AdsOptima 14",
      date: "Jan 8, 2025",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "blue",
      character: "woman",
      highlightText: "FACEBOOK ADS CREATIVE TESTING BEST PRACTICES",
      views: "15.6K",
      duration: "20:30",
      rating: "4.7"
    },
    {
      id: 10,
      title: "LinkedIn Ads for B2B Lead Generation (Professional Networking!) 💼",
      episode: "Learn With AdsOptima 13",
      date: "Dec 20, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "green",
      character: "man",
      highlightText: "LINKEDIN ADS FOR B2B LEAD GENERATION",
      views: "12.2K",
      duration: "18:45",
      rating: "4.6"
    },
    {
      id: 11,
      title: "TikTok Advertising Campaign Optimization (Viral Vibes!) 🎵",
      episode: "Learn With AdsOptima 12",
      date: "Dec 5, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "red",
      character: "robot",
      highlightText: "TIKTOK ADVERTISING CAMPAIGN OPTIMIZATION",
      views: "22.3K",
      duration: "19:20",
      rating: "4.9"
    },
    {
      id: 12,
      title: "YouTube Ads Video Strategy & Production (Lights, Camera, Action!) 🎬",
      episode: "Learn With AdsOptima 11",
      date: "Nov 18, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "dark",
      character: "ninja",
      highlightText: "YOUTUBE ADS VIDEO STRATEGY & PRODUCTION",
      views: "17.8K",
      duration: "26:15",
      rating: "4.8"
    },
    {
      id: 13,
      title: "Amazon PPC Campaign Management (E-commerce Mastery!) 🛒",
      episode: "Learn With AdsOptima 10",
      date: "Nov 2, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "teal",
      character: "woman",
      highlightText: "AMAZON PPC CAMPAIGN MANAGEMENT",
      views: "14.7K",
      duration: "24:40",
      rating: "4.7"
    },
    {
      id: 14,
      title: "Microsoft Ads vs Google Ads Strategy (Battle of the Giants!) ⚔️",
      episode: "Learn With AdsOptima 9",
      date: "Oct 15, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "purple",
      character: "man",
      highlightText: "MICROSOFT ADS VS GOOGLE ADS STRATEGY",
      views: "16.4K",
      duration: "21:50",
      rating: "4.8"
    },
    {
      id: 15,
      title: "Conversion Tracking & Attribution Models (Follow the Money!) 💸",
      episode: "Learn With AdsOptima 8",
      date: "Sep 28, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "blue",
      character: "robot",
      highlightText: "CONVERSION TRACKING & ATTRIBUTION MODELS",
      views: "19.2K",
      duration: "22:35",
      rating: "4.9"
    },
    {
      id: 16,
      title: "A/B Testing Your Ad Copy & Landing Pages (Split Personality!) 🧪",
      episode: "Learn With AdsOptima 7",
      date: "Sep 10, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "green",
      character: "ninja",
      highlightText: "A/B TESTING YOUR AD COPY & LANDING PAGES",
      views: "13.9K",
      duration: "18:25",
      rating: "4.6"
    },
    {
      id: 17,
      title: "Retargeting Campaign Setup & Optimization (Stalker Mode!) 👀",
      episode: "Learn With AdsOptima 6",
      date: "Aug 25, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "red",
      character: "woman",
      highlightText: "RETARGETING CAMPAIGN SETUP & OPTIMIZATION",
      views: "15.1K",
      duration: "20:15",
      rating: "4.7"
    },
    {
      id: 18,
      title: "Local Business PPC Strategies (Think Global, Act Local!) 🏪",
      episode: "Learn With AdsOptima 5",
      date: "Aug 8, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "dark",
      character: "man",
      highlightText: "LOCAL BUSINESS PPC STRATEGIES",
      views: "11.6K",
      duration: "17:30",
      rating: "4.5"
    },
    {
      id: 19,
      title: "E-commerce Shopping Campaign Optimization (Shop Till You Drop!) 🛍️",
      episode: "Learn With AdsOptima 4",
      date: "Jul 22, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "teal", 
      character: "robot",
      highlightText: "E-COMMERCE SHOPPING CAMPAIGN OPTIMIZATION",
      views: "18.7K",
      duration: "23:45",
      rating: "4.8"
    },
    {
      id: 20,
      title: "Mobile-First PPC Campaign Design (Thumb-Friendly!) 📱",
      episode: "Learn With AdsOptima 3",
      date: "Jul 5, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "purple",
      character: "ninja",
      highlightText: "MOBILE-FIRST PPC CAMPAIGN DESIGN",
      views: "14.3K",
      duration: "19:55",
      rating: "4.7"
    },
    {
      id: 21,
      title: "Advanced Audience Targeting Strategies (Know Your Crowd!) 🎯",
      episode: "Learn With AdsOptima 2",
      date: "Jun 18, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "blue",
      character: "woman",
      highlightText: "ADVANCED AUDIENCE TARGETING STRATEGIES",
      views: "16.8K",
      duration: "21:20",
      rating: "4.8"
    },
    {
      id: 22,
      title: "PPC Analytics & Reporting Like a Data Scientist 📊",
      episode: "Learn With AdsOptima 1",
      date: "Jun 1, 2024",
      thumbnail: "/api/placeholder/400/225",
      backgroundPattern: "green",
      character: "man",
      highlightText: "PPC ANALYTICS & REPORTING LIKE A DATA SCIENTIST",
      views: "20.5K",
      duration: "25:10",
      rating: "4.9"
    }
  ];

  const totalPages = Math.ceil(videos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const currentVideos = videos.slice(startIndex, startIndex + videosPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 overflow-hidden">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Learn With AdsOptima
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our full video library — including upcoming and past product webinars, 
            new features, guides, tips, tricks, event highlights, and more.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
              All learning
            </h2>
            <a 
              href="https://youtube.com/@adsoptima" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-100 text-gray-900 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <span className="mr-2">Subscribe to our YouTube Channel</span>
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {currentVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded ${
                    page === currentPage 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <PromotionalBanner />
    </div>
  );
}
