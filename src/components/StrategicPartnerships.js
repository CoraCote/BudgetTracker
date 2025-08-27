/**
 * Strategic Partnerships component with enhanced bubble effects and organized sections
 * Features partnership cards with interactive hover effects and floating elements
 */
export default function StrategicPartnerships() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute top-20 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-xl animate-bounce opacity-60" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-lg animate-bounce opacity-50" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Strategic Partnerships
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry leaders to deliver cutting-edge advertising solutions and drive exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 overflow-hidden">
            <div className="absolute top-4 right-4 w-3 h-3 bg-green-300 rounded-full animate-ping opacity-60"></div>
            
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Google Partner</h3>
              <p className="text-gray-600 leading-relaxed">
                Premier Google Partner with direct access to beta features and dedicated support teams.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Partner Level</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Premier</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Years Active</span>
                <span className="text-lg font-bold text-purple-600">8+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Client Success Rate</span>
                <span className="text-lg font-bold text-green-600">94%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Beta feature access
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Dedicated support
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advanced optimization tools
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 overflow-hidden">
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
            
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.5 2.75a.75.75 0 00-1.5 0V5.5a.75.75 0 001.5 0V2.75zM11.5 18.5a.75.75 0 00-1.5 0v2.75a.75.75 0 001.5 0V18.5zM2.75 11.5a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zM18.5 11.5a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zM8.75 6.75a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zM16.25 6.75a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zM8.75 16.25a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zM16.25 16.25a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1z" />
              </svg>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Microsoft Advertising</h3>
              <p className="text-gray-600 leading-relaxed">
                Select Partner 2023 with exclusive access to Microsoft's latest advertising innovations.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Partner Level</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Select 2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Years Active</span>
                <span className="text-lg font-bold text-blue-600">6+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Revenue Growth</span>
                <span className="text-lg font-bold text-green-600">+127%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                AI-powered insights
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Priority support access
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Early feature access
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100 overflow-hidden">
            <div className="absolute top-4 right-4 w-3 h-3 bg-pink-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
            
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Meta Business Partner</h3>
              <p className="text-gray-600 leading-relaxed">
                Certified Meta Partner with advanced targeting and optimization capabilities.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Partner Level</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Certified</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Years Active</span>
                <span className="text-lg font-bold text-blue-600">5+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Ad Performance</span>
                <span className="text-lg font-bold text-green-600">+89%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advanced targeting
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Creative optimization
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Performance insights
              </div>
            </div>
          </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-shadow group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.537 13.97a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5a.75.75 0 01.75-.75z" />
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3A.75.75 0 016.75 2.25zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Amazon Ads</h4>
                <p className="text-sm text-gray-600">Verified Partner</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">Sponsored Products</span>
                  <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full ml-2">Brand Ads</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200 hover:shadow-lg transition-shadow group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.24 3.04.4 4.54-.96-.23-1.96-.4-2.92-.6-1.74-.4-3.48-.8-5.23-1.2-.02-.01-.04-.03-.06-.04-.01-.06-.02-.11-.03-.18 1.38-.31 2.75-.62 4.12-.93.01.06.01.12.02.18.96.23 1.93.4 2.88.6 1.74.4 3.48.8 5.23 1.2.02.01.04.03.06.04.01.06.02.11.03.18-1.38.31-2.75.62-4.12.93-.01-.06-.01-.12-.02-.18-.96-.23-1.93-.4-2.88-.6-1.74-.4-3.48-.8-5.23-1.2-.02-.01-.04-.03-.06-.04-.01-.06-.02-.11-.03-.18z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">TikTok Ads</h4>
                <p className="text-sm text-gray-600">Official Partner</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs text-pink-600 bg-pink-100 px-2 py-1 rounded-full">Video Ads</span>
                  <span className="text-xs text-pink-600 bg-pink-100 px-2 py-1 rounded-full ml-2">In-Feed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Partnership Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-purple-600 mb-2">$2.4B+</div>
              <div className="text-sm text-gray-600">Total Ad Spend Managed</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Active Clients</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-sm text-gray-600">Client Retention Rate</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-pink-600 mb-2">8+</div>
              <div className="text-sm text-gray-600">Years of Partnership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
