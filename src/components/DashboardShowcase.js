import Logo from './Logo';
import LogoMark from './LogoMark';

/**
 * Dashboard Showcase component with enhanced bubble effects and organized sections
 * Features three main panels with interactive elements
 */
export default function DashboardShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Advanced Analytics Dashboard
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time insights, AI-powered recommendations, and comprehensive performance tracking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 group">
            <div className="absolute top-4 right-4 w-3 h-3 bg-purple-300 rounded-full animate-ping opacity-60"></div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <LogoMark size="small" variant="minimal" animated={false} />
                <h3 className="text-lg font-semibold text-gray-800">PPC Investigator Pro</h3>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <div className="space-y-6">
              {/* Metric Selector */}
              <div className="space-y-3">
                <select className="w-full text-sm text-gray-600 border border-purple-200 rounded-lg px-3 py-2 bg-white/50 backdrop-blur-sm hover:border-purple-300 transition-colors">
                  <option>📊 Clicks Performance</option>
                  <option>🎯 Conversion Rate</option>
                  <option>💰 Cost Analysis</option>
                  <option>📈 ROI Metrics</option>
                </select>
                <select className="w-full text-sm text-gray-600 border border-purple-200 rounded-lg px-3 py-2 bg-white/50 backdrop-blur-sm hover:border-purple-300 transition-colors">
                  <option>📅 Last 30 Days vs Previous Period</option>
                  <option>📅 Last 7 Days vs Previous Week</option>
                  <option>📅 Last Quarter vs Previous Quarter</option>
                </select>
              </div>

              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-xl p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full -mr-10 -mt-10 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-purple-700 mb-1">+21.85%</div>
                    <div className="text-sm text-gray-700 font-medium">Clicks Growth</div>
                  </div>

                  <div className="flex items-end justify-center space-x-1 h-12">
                    <div className="w-2 bg-purple-400 rounded-t h-8 animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 bg-purple-500 rounded-t h-10 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 bg-purple-600 rounded-t h-12 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-2 bg-purple-700 rounded-t h-9 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    <div className="w-2 bg-pink-500 rounded-t h-14 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                    <div className="w-2 bg-pink-600 rounded-t h-16 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="w-2 bg-pink-700 rounded-t h-13 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 rounded-lg p-3 hover:bg-white/80 transition-colors">
                <div className="text-xs text-gray-600 mb-2">💡 Quick Insights</div>
                <div className="text-sm text-gray-700">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>Top performing keyword: "PPC tools"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></span>
                    <span>Consider increasing budget for Q4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 group">
            <div className="absolute top-4 right-4 w-3 h-3 bg-pink-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
            
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <Logo size="small" variant="minimal" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">AdOptima Command Center</h3>
              <div className="text-xs text-gray-500">Last updated: 2 minutes ago</div>
            </div>

            <div className="space-y-5">
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-lg border border-purple-100 hover:border-purple-200 transition-colors">
                <div className="flex items-center space-x-3">
                  <LogoMark size="small" variant="minimal" animated={false} />
                  <div>
                    <span className="text-sm font-semibold text-gray-800">AdOptima v2.1</span>
                    <div className="text-xs text-gray-500">Premium Plan</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 border border-gray-200 hover:border-purple-200 transition-colors">
                <div className="text-xs mb-3">
                  <div className="grid grid-cols-4 gap-3 text-center font-semibold text-gray-600">
                    <div>📊 Impressions</div>
                    <div>🎯 Clicks</div>
                    <div>💰 Cost</div>
                    <div>📈 Avg CPC</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="text-sm">
                    <div className="font-bold text-lg text-gray-800">192,369</div>
                    <div className="text-red-500 font-medium">↓ 12%</div>
                    <div className="text-xs text-gray-500">vs prev period</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-lg text-gray-800">6,102</div>
                    <div className="text-red-500 font-medium">↓ 12%</div>
                    <div className="text-xs text-gray-500">vs prev period</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-lg text-gray-800">$2,163</div>
                    <div className="text-red-500 font-medium">↓ 30%</div>
                    <div className="text-xs text-gray-500">vs prev period</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-lg text-gray-800">$0.35</div>
                    <div className="text-red-500 font-medium">↓ 82%</div>
                    <div className="text-xs text-gray-500">vs prev period</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white p-4 rounded-lg relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="text-sm font-semibold mb-2">🤖 AdOptima Sidekick AI</div>
                  <div className="text-xs mb-3 opacity-90">
                    <span className="bg-red-400 px-2 py-1 rounded-full mr-2 animate-pulse">64 Tasks Overdue</span>
                    <span className="bg-yellow-400 px-2 py-1 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}>19 Alerts</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-colors">
                      🚀 Try Now
                    </button>
                    <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-white/30 transition-colors">
                      📊 View AI Report
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 rounded-lg p-4 text-center border border-purple-100 hover:border-purple-200 transition-colors">
                <div className="text-3xl font-bold text-gray-800 mb-2">84/100</div>
                <div className="text-sm text-gray-600 mb-3">
                  <span className="text-green-600">↑ Previous Score: 82</span>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-xs">
                    <span>Campaigns</span>
                    <span className="text-green-600 font-medium">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-full animate-pulse"></div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span>Keywords</span>
                    <span className="text-yellow-600 font-medium">33%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-1/3 animate-pulse"></div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span>Performance</span>
                    <span className="text-green-600 font-medium">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-full animate-pulse"></div>
                  </div>
                </div>

                <a href="#" className="text-purple-600 text-sm hover:underline font-medium">🔍 View Detailed Audit</a>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 group">
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <LogoMark size="small" variant="minimal" animated={false} />
                <h3 className="text-lg font-semibold text-gray-800">💰 Spend Analytics</h3>
              </div>
              <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium animate-pulse">
                ⚠️ Over Budget
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full -mr-12 -mt-12 animate-pulse"></div>
                <div className="relative z-10 text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">£ 836.18</div>
                  <div className="text-sm text-gray-700 mb-3">185.82% of target budget</div>

                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-gray-200" stroke="currentColor" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-red-500" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" strokeDashoffset="0" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-red-600">186%</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  173% Pacing
                </div>
              </div>

              <div className="bg-white/60 rounded-lg p-4 hover:bg-white/80 transition-colors">
                <div className="text-sm font-semibold text-gray-700 mb-3">📊 Spend Breakdown</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span>Google Ads</span>
                    <span className="font-medium">£ 456.23</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full animate-pulse" style={{ width: '55%' }}></div>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span>Facebook Ads</span>
                    <span className="font-medium">£ 234.67</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-pink-500 h-1.5 rounded-full animate-pulse" style={{ width: '28%' }}></div>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span>LinkedIn Ads</span>
                    <span className="font-medium">£ 145.28</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-purple-500 h-1.5 rounded-full animate-pulse" style={{ width: '17%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 border border-yellow-200 hover:border-yellow-300 transition-colors">
                <div className="text-xs text-yellow-800 mb-2">💡 Smart Recommendations</div>
                <div className="text-xs text-yellow-700 space-y-1">
                  <div>• Pause low-performing campaigns</div>
                  <div>• Reduce daily budgets by 15%</div>
                  <div>• Focus on top-converting keywords</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow group">
            <div className="text-2xl font-bold text-purple-600 mb-1 group-hover:scale-110 transition-transform">2.4%</div>
            <div className="text-sm text-gray-600">Conversion Rate</div>
            <div className="text-xs text-green-600 mt-1">↑ +0.3% from last month</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow group">
            <div className="text-2xl font-bold text-pink-600 mb-1 group-hover:scale-110 transition-transform">£ 12.45</div>
            <div className="text-sm text-gray-600">Cost per Conversion</div>
            <div className="text-xs text-red-600 mt-1">↓ -8% from last month</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow group">
            <div className="text-2xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform">4.2x</div>
            <div className="text-sm text-gray-600">ROAS</div>
            <div className="text-xs text-green-600 mt-1">↑ +0.5x from last month</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow group">
            <div className="text-2xl font-bold text-green-600 mb-1 group-hover:scale-110 transition-transform">89%</div>
            <div className="text-sm text-gray-600">Quality Score</div>
            <div className="text-xs text-green-600 mt-1">↑ +2% from last month</div>
          </div>
        </div>
      </div>
    </section>
  );
}
