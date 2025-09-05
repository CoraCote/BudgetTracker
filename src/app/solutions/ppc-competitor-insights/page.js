import Navigation from '../../../components/Navigation';

export default function PPCCompetitorInsights() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/15 to-purple-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Real-time Monitoring
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                Keep tabs on your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                PPC accounts{' '}
              </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-black">
                no matter where your focus is
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Ad platform automation can be volatile and unpredictable. AdsOptima makes it easy to monitor campaign performance across all your accounts without actually having to be in the ad interface.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Trial
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group flex items-center px-8 py-4 border-2 border-purple-200 hover:border-purple-300 text-purple-700 hover:text-purple-800 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-purple-50">
                Book A Demo
                <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Monitoring</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                5min
              </div>
              <div className="text-gray-600 font-medium">Alert Time</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                  Live Monitoring Dashboard
                </span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">All Accounts</h3>
                    <p className="text-gray-600">Monitor all your PPC accounts from a single, unified dashboard with real-time status updates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                    <p className="text-gray-600">Track key metrics and performance indicators with +12% improvement tracking.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
                    <p className="text-gray-600">Real-time analytics and insights to help you make data-driven decisions quickly.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h4 className="font-semibold text-purple-900 mb-4">Live Activity</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-purple-700">Campaign "Summer Sale" budget updated</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-pink-700">New conversion recorded</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Live Monitoring Dashboard</h3>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900">All Accounts</span>
                      </div>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl border border-pink-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900">Performance</span>
                      </div>
                      <span className="text-green-600 font-semibold">+12%</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900">Analytics</span>
                      </div>
                      <span className="text-purple-600 font-semibold">Real-time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              PPC Campaign Insights & Competitor Intelligence
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Get actionable insights from industry vertical data, auction trends, and competitor benchmarks. Understand who's bidding on your keywords, how your performance ranks in the industry, and use competitor site visitors to build high-intent audiences to sharpen targeting and drive ROI growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">
                See how your PPC stacks up against the competition
              </h3>
              <p className="text-purple-100 mb-8 leading-relaxed">
                Get actionable insights from industry vertical data, auction trends, and competitor benchmarks. Understand who's bidding on your keywords, how your performance ranks in the industry, and use competitor site visitors to build high-intent audiences to sharpen targeting and drive ROI growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                  Start Trial
                </button>
                <button className="border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10">
                  Book A Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-bold text-gray-900">All Accounts Dashboard</h4>
                    <div className="text-sm text-gray-500">Live Performance Data</div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'Account Series 1', health: 'Healthy', suggestions: 'Audit Score', alerts: 'Tasks', budget: 'Monthly Budget', cost: 'Cost', impressions: '$15,000', clicks: '$14,000.00', conversions: '794,000', ctr: '11.97', cpc: '$1.23', convRate: '8.8', costPerConv: '$59.36', roas: '$47.18', roi: '30%' },
                      { name: 'Account Series 2', health: 'Healthy', suggestions: 'Audit Score', alerts: 'Tasks', budget: 'Monthly Budget', cost: 'Cost', impressions: '$35,000', clicks: '$28,000.00', conversions: '829,000', ctr: '22.16', cpc: '$1.75', convRate: '9.7', costPerConv: '$48.36', roas: '$77.18', roi: '40%' },
                      { name: 'Account Series 3', health: 'Warning', suggestions: 'Audit Score', alerts: 'Tasks', budget: 'Monthly Budget', cost: 'Cost', impressions: '$25,000', clicks: '$20,000.00', conversions: '610,000', ctr: '18.19', cpc: '$2.16', convRate: '7.2', costPerConv: '$65.36', roas: '$45.18', roi: '25%' }
                    ].map((account, index) => (
                      <div key={index} className="grid grid-cols-12 gap-2 text-xs border-b border-gray-100 pb-2">
                        <div className="col-span-2 flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${account.health === 'Healthy' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                          <span className="font-medium text-gray-900">{account.name}</span>
                        </div>
                        <div className="text-center text-gray-600">{account.health === 'Healthy' ? '✓' : '⚠'}</div>
                        <div className="text-center text-gray-600">4</div>
                        <div className="text-center text-gray-600">1</div>
                        <div className="text-center text-gray-600">{account.impressions}</div>
                        <div className="text-center text-gray-600">{account.clicks}</div>
                        <div className="text-center text-gray-600">{account.conversions}</div>
                        <div className="text-center text-gray-600">{account.ctr}</div>
                        <div className="text-center text-gray-600">{account.cpc}</div>
                        <div className="text-center text-gray-600">{account.convRate}</div>
                        <div className="text-center text-gray-600">{account.costPerConv}</div>
                        <div className="text-center font-semibold text-green-600">{account.roi}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-16 -translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <button className="text-gray-400 hover:text-gray-600">←</button>
                    <h3 className="text-lg font-bold text-gray-900">Create Custom Segment Audience</h3>
                    <button className="text-gray-400 hover:text-gray-600">×</button>
                  </div>
                  
                  <p className="text-gray-600 mb-6">Target the right audience with competitor websites, interests, and search terms</p>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Custom Segment Audience Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter the custom segment audience name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Include people who browse websites similar to</label>
                    <p className="text-xs text-gray-500 mb-3">These URLs were selected automatically based on the highest number of competing keywords</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['semrush.com', 'wonderteam.com', 'linkedin.com', 'fluency.inc', 'searchings.com'].map((url, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                          {url}
                          <button className="ml-2 text-purple-500 hover:text-purple-700">×</button>
                        </span>
                      ))}
                    </div>
                    
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
                      <span className="mr-1">+</span> Add URL
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                  Create audience segments from competitor website visitors
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build high-intent custom audiences using URLs from competitor product pages, right from the Dashboard. Target users who've shown interest in similar businesses and improve ROAS by focusing on audiences likely to convert.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart URL Selection</h3>
                    <p className="text-gray-600">Automatically identify competitor URLs based on the highest number of competing keywords.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Intent Targeting</h3>
                    <p className="text-gray-600">Target users who have already shown interest in similar products or services.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Improved ROAS</h3>
                    <p className="text-gray-600">Focus your budget on audiences most likely to convert and drive better returns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                Paid media teams use Adoptima for real-time insights and to stay ahead of the curve
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Morefire Case Study */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 text-white relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Case study</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold">ADSOPTIMA</div>
                      <div className="flex items-center mt-2">
                        <div className="w-8 h-8 bg-red-500 rounded mr-2"></div>
                        <span className="font-bold text-xl">morefire</span>
                      </div>
                      <div className="text-sm mt-1">CASE STUDY</div>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-8 leading-relaxed">
                    See how Morefire relies on scheduled PPC Account Audit reports to catch issues early and maintain their high account management standards.
                  </p>
                  
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-teal-500/25">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* B&S Media Case Study */}
            <div className="group">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Case study</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold">ADSOPTIMA</div>
                      <div className="flex items-center mt-2">
                        <div className="text-2xl font-bold text-white">B&S Media</div>
                      </div>
                      <div className="text-sm mt-1">INTERNETMARKETING</div>
                      <div className="text-sm">CASE STUDY</div>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-8 leading-relaxed">
                    B&S Media sets up custom dashboards and alerts to quickly spot discrepancies.
                  </p>
                  
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-teal-400/25">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your PPC Performance?
          </h2>
          <p className="text-xl mb-12 text-purple-100">
            Join thousands of marketers who trust AdsOptima to monitor, optimize, and scale their campaigns with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white text-purple-600 hover:text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1">
              <span className="flex items-center">
                Start Free Trial
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10">
              Book A Demo
            </button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 mt-12 text-purple-100">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
