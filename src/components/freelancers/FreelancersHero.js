import Link from 'next/link';

export default function FreelancersHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 shadow-sm">
              <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-purple-700">For PPC Freelancers</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Everything you need to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  run and scale
                </span>{' '}
                a one-person{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  PPC consultancy
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Grow revenue, keep expenses in check, and delight PPC clients. AdsOptima has everything you need to deliver high-quality account management for Google and Microsoft Ads.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Start Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-purple-200 text-purple-700 font-semibold rounded-xl hover:bg-purple-50 hover:border-purple-300 transform hover:scale-105 transition-all duration-300"
              >
                Book A Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="relative z-10 flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 w-20 h-12 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
                    <div className="w-16 h-8 bg-blue-500 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700">Google Ads</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700">Microsoft</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">∞</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700">Meta</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <div className="bg-white rounded-xl p-3 shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Growth</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-3 shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
