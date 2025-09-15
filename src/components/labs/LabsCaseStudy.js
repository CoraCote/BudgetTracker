'use client';

export default function LabsCaseStudy() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Case Study Content */}
          <div className="space-y-6">
            {/* Case Study Tag */}
            <div className="inline-block">
              <span className="bg-green-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Case study
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Paid media teams run more profitable Shopping campaigns with AdsOptima
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              See how Mabo used our Campaign Builder & Product Group Refresher to make 89% faster changes to product groups.
            </p>
            
            {/* Learn More Button */}
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Right Section - AdsOptima Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Subtle Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400 rounded-full opacity-20 transform translate-x-8 -translate-y-8"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* ADSOPTIMA Text */}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-2xl">ADSOPTIMA</h3>
                </div>
                
                {/* MABO Tag and CASE STUDY */}
                <div className="flex items-center space-x-4 mb-8">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    MABO
                  </span>
                  <span className="text-white font-semibold text-sm">
                    CASE STUDY
                  </span>
                </div>
                
                {/* Graph Icon */}
                <div className="flex justify-end">
                  <div className="w-24 h-16 relative">
                    {/* Line Graph */}
                    <svg className="w-full h-full" viewBox="0 0 100 60" fill="none">
                      {/* Grid Lines */}
                      <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                      <line x1="10" y1="40" x2="90" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                      <line x1="10" y1="30" x2="90" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                      <line x1="10" y1="20" x2="90" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                      <line x1="10" y1="10" x2="90" y2="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                      
                      {/* Data Line */}
                      <path d="M15,45 L25,35 L35,25 L45,20 L55,15 L65,10 L75,8 L85,5" 
                            stroke="white" 
                            strokeWidth="2" 
                            fill="none"/>
                      
                      {/* Data Points */}
                      <circle cx="15" cy="45" r="2" fill="white"/>
                      <circle cx="25" cy="35" r="2" fill="white"/>
                      <circle cx="35" cy="25" r="2" fill="white"/>
                      <circle cx="45" cy="20" r="2" fill="white"/>
                      <circle cx="55" cy="15" r="2" fill="white"/>
                      <circle cx="65" cy="10" r="2" fill="white"/>
                      <circle cx="75" cy="8" r="2" fill="white"/>
                      <circle cx="85" cy="5" r="2" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
