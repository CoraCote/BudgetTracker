import Link from 'next/link';

export default function MarketingTeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                For Marketing Teams
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Make PPC integral to your{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  brand's digital strategy
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Integrate your performance marketing operations more closely with your broader strategy. 
                Brands accelerate growth with AdsOptima's optimization suggestions, data insight tools, 
                best-in-class reporting, and time-saving automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signup" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
                >
                  <span>Start Trial</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  href="/demo" 
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 0h8m-8 0H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3" />
                  </svg>
                  Book A Demo
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">ADSOPTIMA</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Marketing Teams</h3>
                  <p className="text-white/80">Uncover insights and deliver growth for your brands</p>
                </div>
                
                <div className="absolute top-8 left-8 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-xs font-medium mb-2">PENDING TASKS</div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-xs">Campaign Review</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                      <span className="text-xs">Budget Optimization</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white/60 rounded-full mr-2"></div>
                      <span className="text-xs">Performance Analysis</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-8 right-8 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-xs font-medium mb-2">KEY METRICS</div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-xs">ADS</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-xs">SALES</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-xs">LEADS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              PPC Management Platform for In-House Marketing Teams
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Put account monitoring on autopilot
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ad campaigns need round-the-clock monitoring, but not at the cost of your sleep and leisure time. 
                Know what your accounts are up to no matter where you are. Set up alerts, conduct root cause analysis, 
                and get notifications delivered to you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 account monitoring</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Smart alert system</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Root cause analysis</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-50">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Account</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Alert Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Alert Level</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Target Value</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Deviation</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Users</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-2">
                            <span className="text-xs font-medium text-blue-600">BF</span>
                          </div>
                          <span className="text-sm text-gray-900">All Accounts</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-900">Anomaly - Impressions</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">All Google, Microsoft, Facebook accounts</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Automatic</td>
                      <td className="px-4 py-3 text-sm text-gray-900">-</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Account owner + Others</td>
                      <td className="px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-2">
                            <span className="text-xs font-medium text-blue-600">BF</span>
                          </div>
                          <span className="text-sm text-gray-900">All Accounts (123456789)</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-900">KPI- Avg CPC</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">Accounts</td>
                      <td className="px-4 py-3 text-sm text-gray-900">$0.47</td>
                      <td className="px-4 py-3 text-sm text-gray-900">10%</td>
                      <td className="px-4 py-3 text-sm text-gray-900">User Name</td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L13 4.172l2.828 2.828-1.621 1.621a2 2 0 01-2.828 0z" />
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              PPC marketing teams use AdsOptima to mine powerful insights and deliver growth for their brand
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                Case study
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                BBQGuys saves 4-6 hours weekly and gains over $450k in revenue since 2021, managing Shopping and PMax campaigns.
              </h3>
              
              <Link 
                href="/case-studies/bbqguys" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">ADSOPTIMA</div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">BBQGUYS</div>
                <div className="text-white/80 mb-4">CASE STUDY</div>
                <div className="w-24 h-1 bg-white/30 mx-auto mb-4"></div>
                <div className="text-sm text-white/80">
                  Revenue growth: $450k+<br/>
                  Time saved: 4-6 hours/week
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                Case study
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bruce Automotive Group doubled its CTR and cut ad spend by 40% using flexible campaign templates and inventory syncing.
              </h3>
              
              <Link 
                href="/case-studies/bruce-automotive" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">ADSOPTIMA</div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">bruce</div>
                <div className="text-white/80 mb-4">auto glass</div>
                <div className="text-sm text-white/80 mb-4">CASE STUDY</div>
                <div className="w-24 h-1 bg-white/30 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to transform your PPC strategy?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of marketing teams who trust AdsOptima to deliver better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/demo" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
