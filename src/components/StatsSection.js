import Logo from './Logo';

/**
 * Stats Section component with enhanced bubble effects and organized sections
 * Features key metrics with interactive animations and floating elements
 */
export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50 relative overflow-hidden">
      {/* Background decorative elements with enhanced bubble effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating bubbles */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full animate-bounce opacity-60" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full animate-bounce opacity-50" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Logo size="default" variant="default" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            AdOptima By The Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming digital advertising through intelligent automation and data-driven insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full animate-ping opacity-60"></div>
            
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold mb-4">$5.27B</div>
              <div className="text-xl mb-2">Ad Spend Managed</div>
              <div className="text-purple-100 text-sm">Using AdOptima Platform</div>

              <div className="relative w-24 h-24 mx-auto mt-6">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="8" fill="none"
                    strokeDasharray="251.2" strokeDashoffset="75.36"
                    className="animate-pulse" style={{ animationDuration: '3s' }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-bold">94%</div>
                </div>
              </div>
              <div className="text-purple-100 text-sm mt-2">Efficiency Rate</div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform">378K+</div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-gray-600 mb-3">Ad Accounts Connected</div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Growth</span>
                  <span className="text-green-600 font-semibold">+23%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform">4.7</div>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-gray-600 mb-3">Average Product Rating</div>

              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <div className="text-sm text-gray-500">G2 & Capterra</div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform">21,851</div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-gray-600 mb-3">Active Automation Events</div>

              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Live</span>
                <span className="text-sm text-gray-500">• 24/7 Monitoring</span>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform">480M+</div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-gray-600 mb-3">Optimization Actions</div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>2024 Target</span>
                  <span className="text-green-600 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Performance Trends</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">ROAS Improvement</span>
                <span className="text-green-600 font-semibold">+42%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full animate-pulse" style={{ width: '42%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cost Reduction</span>
                <span className="text-blue-600 font-semibold">-28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full animate-pulse" style={{ width: '28%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Conversion Rate</span>
                <span className="text-purple-600 font-semibold">+35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full animate-pulse" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Real-time Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Campaign optimization in progress</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-gray-600">Bid adjustments applied</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <span className="text-gray-600">Budget reallocation completed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
                <span className="text-gray-600">Performance alerts generated</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                <span className="text-sm text-purple-600 font-medium">Live monitoring active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
