'use client';

export default function PromotionalBanner() {
  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gray-700 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gray-700 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-700 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Graphic */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-700 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Content */}
            <div className="lg:flex-1 mb-8 lg:mb-0">
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <span className="text-2xl font-bold text-white">ADSOPTIMA</span>
                  <div className="absolute -top-1 left-0 w-3 h-3 bg-teal-400 rounded-sm"></div>
                </div>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Experience AdsOptima for yourself for 2 full weeks.
              </h2>
              
              {/* Sub-text */}
              <p className="text-lg text-gray-300 mb-8">
                Start your 14-day free trial today. No credit card required.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:ml-8">
              <button className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center">
                Start Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book A Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
