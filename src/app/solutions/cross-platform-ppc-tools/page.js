import Navigation from '@/components/Navigation';

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
         
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Break down barriers</span>
                <br />
                <span className="text-gray-900">between </span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ad platforms</span>
                <br />
                <span className="text-gray-900">and their data.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Manage your Google, Microsoft, Facebook and Amazon ad campaigns in one place. 
                Combine insights from multiple ad platforms in one report to send to your clients, 
                optimize and distribute budgets across platforms, and more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden group">
                <span className="relative z-10">Start Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="border-2 border-gray-300 hover:border-purple-300 text-gray-700 hover:text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-purple-50">
                Book A Demo
              </button>
            </div>
          </div>

         
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
               
                <div className="flex justify-center space-x-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="w-full h-3 bg-purple-200 rounded-full"></div>
                      <div className="w-3/4 h-3 bg-pink-200 rounded-full"></div>
                      <div className="w-1/2 h-3 bg-blue-200 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-4/5 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-3/5 h-2 bg-gray-200 rounded-full"></div>
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

function CapabilitiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cross-Platform PPC Management Capabilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Identify search themes across a portfolio of accounts
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Spot recurring word patterns in your search terms across accounts grouped into a portfolio, 
                even if they're spread across Google, Microsoft, and other search platforms. Discover shared themes, 
                surface high-performing keywords to target, and find negative keyword opportunities to cut waste 
                across the portfolio.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cross-Platform Keyword Analysis</h4>
                  <p className="text-gray-600">Identify high-performing keywords across Google, Microsoft, and other platforms</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Negative Keyword Opportunities</h4>
                  <p className="text-gray-600">Automatically surface negative keyword opportunities to reduce wasted spend</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Portfolio-Wide Insights</h4>
                  <p className="text-gray-600">Get comprehensive insights across your entire portfolio of accounts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Search Terms N-Grams</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last 30 Days</span>
                    <button className="text-purple-600 text-sm font-medium">Download</button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Sort By: Clicks</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Color By: Cost/Conv</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">N-Grams: Exact Unique Words</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="flex flex-wrap justify-center items-center gap-3">
                    <span className="text-3xl font-bold text-blue-600">marketing</span>
                    <span className="text-lg font-semibold text-purple-500">google</span>
                    <span className="text-2xl font-bold text-pink-600">optimization</span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">advertising</span>
                    <span className="text-xl font-bold text-green-600">ppc</span>
                    <span className="text-base font-semibold text-orange-500">campaigns</span>
                    <span className="text-lg font-semibold text-indigo-600">keyword</span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    <span className="text-sm font-medium text-gray-400">digital</span>
                    <span className="text-base font-semibold text-teal-500">optimizer</span>
                    <span className="text-sm font-medium text-gray-500">ads</span>
                    <span className="text-lg font-semibold text-purple-600">internet</span>
                    <span className="text-base font-semibold text-blue-500">per</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-600">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">5min</div>
                      <div className="text-sm text-gray-600">Alert Time</div>
                    </div>
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

function CaseStudiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            When it comes to cross-platform campaigns,<br />
            paid media teams rely on AdOptima
          </h2>
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Case study
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900">
                See how Metrik Marketing easily manages ads and budgets across multiple platforms using AdOptima.
              </h3>
              
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-bold text-xl">CASE STUDY</div>
                  <div className="flex items-center space-x-2">
                    <div className="text-white font-bold">ADOPTIMA</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-lg">M</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">METR1K</div>
                      <div className="text-lg opacity-90">marketing</div>
                      <div className="text-sm opacity-75">Marketing That Makes Sense</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-sm opacity-90 mb-2">CASE STUDY</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">+150%</div>
                        <div className="text-sm opacity-75">ROI Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">-40%</div>
                        <div className="text-sm opacity-75">Time Saved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Case study
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900">
                See how BBQGuys takes advantage of AdOptima's unmatched support for Microsoft Ads in addition to Google.
              </h3>
              
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>
            </div>

            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-bold text-xl">CASE STUDY</div>
                  <div className="flex items-center space-x-2">
                    <div className="text-white font-bold">ADOPTIMA</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">BBQGUYS</div>
                      <div className="text-sm opacity-75">CASE STUDY</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-end justify-between h-20 mb-4">
                      <div className="w-8 bg-white/30 rounded-t" style={{ height: '40%' }}></div>
                      <div className="w-8 bg-white/50 rounded-t" style={{ height: '60%' }}></div>
                      <div className="w-8 bg-white/70 rounded-t" style={{ height: '80%' }}></div>
                      <div className="w-8 bg-white rounded-t" style={{ height: '100%' }}></div>
                      <div className="w-8 bg-white/80 rounded-t" style={{ height: '90%' }}></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">+200%</div>
                        <div className="text-sm opacity-75">Conversion Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">-35%</div>
                        <div className="text-sm opacity-75">Cost Per Click</div>
                      </div>
                    </div>
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

export default function CrossPlatformPPCToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CapabilitiesSection />
      <CaseStudiesSection />
    </div>
  );
}
