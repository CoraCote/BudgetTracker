'use client';

import Navigation from '../../../components/Navigation';
import Link from 'next/link';

export default function ShoppingSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Optimize Shopping campaigns for 
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> profit</span>, 
                  not just sales.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Streamline campaign management and maximize the value of your conversions with Adoptima's shopping capabilities. 
                  And get the perfect blend of automation and control with Adoptima Smart Campaigns.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Trial
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-200 text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300">
                  Book A Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5min</div>
                  <div className="text-sm text-gray-600">Alert Time</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Summary of changes</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">All Campaigns</span>
                      <span className="ml-auto text-sm font-medium text-gray-900">All Accounts</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">+ PPC Workflows</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">+ AI Audit</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">+ Campaign Automator</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">+ Campaign Express</span>
                      <span className="ml-auto text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">New</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-700">2 Modify Bids And Budgets</div>
                      <div className="text-sm text-gray-600 mt-1">Products</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">3 Additions</div>
                      <div className="text-sm text-gray-600 mt-1">Keywords</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Get new campaigns live faster and keep them in mint condition.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Build Shopping campaigns 10x faster than you can in Google Ads. Turn on Campaign Refresher to sync and auto-adjust 
                  campaigns based on changes in your feed, such as products being added or becoming unavailable.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Campaign Structure</h3>
                    <div className="text-sm text-gray-500">Select your campaign, ad group and product group creation strategy</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">Campaign Creation Strategy</h4>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="campaign" className="text-purple-600" />
                          <span className="text-sm text-gray-700">Single campaign</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="campaign" className="text-purple-600" checked />
                          <span className="text-sm text-gray-700">Multiple campaigns by performance or custom rules</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="campaign" className="text-purple-600" />
                          <span className="text-sm text-gray-700">Multiple campaigns by feed attributes</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Ad Group Creation Strategy</h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="adgroup" className="text-purple-600" />
                            <span className="text-xs text-gray-700">Single ad group</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="adgroup" className="text-purple-600" checked />
                            <span className="text-xs text-gray-700">Multiple ad groups</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Product Group Creation Strategy</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-700">Performance Buckets</span>
                            <button className="text-xs text-purple-600 hover:text-purple-700">+</button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-700">Brand</span>
                            <button className="text-xs text-purple-600 hover:text-purple-700">Add Attribute (Optional)</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 pt-4">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        Select Attribute
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Case study
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Paid media teams run more profitable Shopping campaigns with Adoptima
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  See how Mabo used our Campaign Builder & Product Group Refresher to make 89% faster changes to product groups.
                </p>
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            {/* Case Study Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-2xl font-bold">ADSOPTIMA</div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">MABO</span>
                      </div>
                      <div className="text-lg font-semibold">CASE STUDY</div>
                    </div>
                    
                    {/* Graph visualization */}
                    <div className="relative h-32">
                      <div className="absolute bottom-0 left-0 w-full flex items-end space-x-2">
                        {[40, 60, 45, 80, 70, 90, 85, 95].map((height, index) => (
                          <div key={index} className="flex-1 bg-white/30 rounded-t" style={{height: `${height}%`}}></div>
                        ))}
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center">
                        <svg className="w-full h-full" viewBox="0 0 100 50">
                          <polyline
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            points="10,40 20,30 30,35 40,20 50,25 60,15 70,18 80,10 90,12"
                          />
                          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((x, index) => (
                            <circle key={index} cx={x} cy={40 - index * 3} r="2" fill="white" />
                          ))}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                  <div className="w-full h-full bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Shopping Campaign Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize, monitor, and scale your shopping campaigns for maximum profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Campaign Builder</h3>
              <p className="text-gray-600">Build shopping campaigns 10x faster with automated structure optimization and feed-based targeting.</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600">Monitor campaign performance across all accounts with instant alerts and automated anomaly detection.</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Profit Optimization</h3>
              <p className="text-gray-600">Optimize for profit margins, not just sales volume, with advanced ROAS and margin-based bidding strategies.</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feed Management</h3>
              <p className="text-gray-600">Instant feed audits, optimizations, and automated product segmentation for better campaign performance.</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.532 1.532 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Campaign Automation</h3>
              <p className="text-gray-600">Automate search and display campaign creation from feeds with intelligent rule-based optimizations.</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border border-teal-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Reporting</h3>
              <p className="text-gray-600">Comprehensive analytics and custom reports to showcase campaign value and identify optimization opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to optimize your Shopping campaigns for profit?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Join thousands of advertisers who trust Adoptima to maximize their shopping campaign performance and profitability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free Trial
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                Book A Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 pt-8 text-purple-100">
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
        </div>
      </section>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
