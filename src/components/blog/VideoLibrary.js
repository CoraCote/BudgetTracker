'use client';

import { useState } from 'react';

const videoContent = [
  {
    id: 1,
    title: "Lessons From 20 Years in PPC: How Agencies Should Prepare For The Future",
    speaker: "Aaron Levy",
    speakerTitle: "PPC Expert & Agency Owner",
    date: "Aug 27, 2025",
    category: "PPC TOWN HALL",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    highlightText: "20 YEARS OF PPC WISDOM",
    color: "white"
  },
  {
    id: 2,
    title: "How Agencies Can Thrive in the Age of AI",
    speaker: "Kirk Williams",
    speakerTitle: "AI Marketing Strategist",
    date: "Aug 06, 2025",
    category: "PPC TOWN HALL",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    highlightText: "HOW AGENCIES CAN THRIVE WITH AI",
    color: "yellow"
  },
  {
    id: 3,
    title: "The #1 Reason Your Brand is INVISIBLE to AI (And How to Fix It)",
    speaker: "Kasim Aslam",
    speakerTitle: "Brand Visibility Expert",
    date: "Jul 16, 2025",
    category: "PPC TOWN HALL",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    highlightText: "HOW TO RANK ON CHATGPT",
    color: "yellow"
  }
];

export default function VideoLibrary() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videoContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoContent.length) % videoContent.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From AdsOptima Library
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Video Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoContent.map((video, index) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Video Thumbnail Section */}
                <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 relative h-64 flex flex-col justify-between p-6">
                  {/* Diagonal stripe pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                    }}></div>
                  </div>

                  {/* Category Label */}
                  <div className="relative z-10">
                    <span className="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">ADSOPTIMA PPC TOWN HALL</span>
                  </div>

                  {/* Main Content */}
                  <div className="relative z-10 flex-1 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-yellow-300 leading-tight">
                        {video.highlightText}
                      </h3>
                    </div>
                    
                    {/* Play Button */}
                    <div className="ml-4">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                      <div className="text-white text-xs mt-1 text-center">Click watch</div>
                    </div>
                  </div>

                  {/* Speaker Avatar and Info */}
                  <div className="relative z-10 flex items-center justify-end">
                    <div className="text-right">
                      <div className="relative">
                        <img
                          src={video.avatar}
                          alt={video.speaker}
                          className="w-16 h-16 rounded-full border-4 border-white object-cover"
                        />
                      </div>
                      <div className="mt-2 px-3 py-1 bg-purple-600 rounded text-xs font-semibold text-white">
                        {video.speaker.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Details */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 text-sm font-medium">{video.category}</span>
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm">{video.date}</span>
                      <div className="w-2 h-2 bg-purple-600 rounded-full ml-2"></div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                    {video.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600">
                    {video.speakerTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {videoContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
