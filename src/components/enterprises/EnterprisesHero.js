import Link from 'next/link';

export default function EnterprisesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 animate-pulse"></span>
              PPC Management Platform for Enterprise Teams
              <span className="ml-2 text-xs bg-purple-200 px-2 py-1 rounded-full">NEW</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering top PPC teams with{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  unmatched automation
                </span>
                , insights, and enterprise support
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Enterprise and fast-growth brands create substantial growth with AdOptima's critical data insights, 
              high-value automation, competitive benchmarking, and best-in-class reporting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup" 
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <span className="relative z-10">Start Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:-top-16 group-hover:-left-16"></div>
              </Link>
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold text-lg hover:border-purple-500 hover:text-purple-600 transition-all duration-300 bg-white hover:bg-purple-50"
              >
                <span>Book A Demo</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center text-sm text-gray-600 group">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:text-green-600 transition-colors duration-300">No credit card required</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 group">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:text-blue-600 transition-colors duration-300">Free 14-day trial</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 group">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:text-purple-600 transition-colors duration-300">Cancel anytime</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                Real-time Performance Insights
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">$2.4M</div>
                  <div className="text-xs text-gray-600">Revenue Generated</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">+47%</div>
                  <div className="text-xs text-gray-600">ROI Increase</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">89%</div>
                  <div className="text-xs text-gray-600">Time Saved</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500 group">
              <div className="bg-gradient-to-r from-gray-50 to-purple-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">PPC Vertical Benchmarks</h3>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm group-hover:bg-purple-200 transition-colors duration-300">Month Over Month</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm group-hover:bg-gray-200 transition-colors duration-300">Vs. Accounts In My Vertical</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-5 gap-4">
                  {[
                    { label: 'Avg CPC', you: '▼20%', others: '▼10%', color: 'text-red-600', trend: 'improving' },
                    { label: 'CPA', you: '▼13%', others: '▼15%', color: 'text-red-600', trend: 'improving' },
                    { label: 'CTR', you: '▲0%', others: '▼0%', color: 'text-green-600', trend: 'stable' },
                    { label: 'Conv Rate', you: '▲32%', others: '▼11%', color: 'text-green-600', trend: 'excellent' },
                    { label: 'ROAS', you: '▲13%', others: '▼12%', color: 'text-green-600', trend: 'excellent' }
                  ].map((metric, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                      <div className="text-sm font-semibold">
                        <span className={`${metric.color} group-hover:scale-110 transition-transform duration-300 inline-block`}>
                          You {metric.you}
                        </span>
                        <br />
                        <span className="text-gray-600">Others {metric.others}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {metric.trend}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-700">Performance Trend</h4>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-24 bg-white rounded-lg p-3 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-between px-3 pb-3">
                      {[20, 35, 28, 45, 38, 52, 48, 65, 58, 72].map((height, index) => (
                        <div key={index} className="w-1 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full" style={{ height: `${height}%` }}></div>
                      ))}
                    </div>
                    <div className="absolute bottom-1 left-1 right-1 h-px bg-gray-200"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-gray-900">41,086</div>
                    <div className="text-xs text-gray-600">Clicks</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-gray-900">1,181</div>
                    <div className="text-xs text-gray-600">Conversions</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-gray-900">$383</div>
                    <div className="text-xs text-gray-600">Cost</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-gray-900">$0.32</div>
                    <div className="text-xs text-gray-600">Avg CPC</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-blue-800">AI Insight</span>
                  </div>
                  <p className="text-xs text-blue-700">
                    Your conversion rate is 43% higher than industry average. Consider increasing budget allocation to high-performing campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-200 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
