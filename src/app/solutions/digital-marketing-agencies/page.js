import Link from 'next/link';

export default function DigitalMarketingAgenciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                PPC Management Platform for Digital Marketing Agencies
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Delight clients, employees – and your{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  bottom line.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Digital marketing agencies around the world get better operational ROI with AdsOptima. 
                Our customers reduce account management time, manage more ad spend, and look great in front of clients.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="/signup" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Start Trial
                </Link>
                <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md">
                  Book A Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  No credit card required
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Free 14-day trial
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl p-8 flex flex-col items-center">
                <div className="w-full flex justify-center mb-6">
                  <img 
                    src="/industry/agency-growth-illustration.webp" 
                    alt="Team collaborating on digital marketing analytics dashboards with Google integration" 
                    className="w-[540px] h-auto object-contain"
                    style={{ maxWidth : 540 }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Agency Growth</h3>
                  <p className="text-gray-600">
                    Scale efficiently across any number of accounts.<br />
                    Empower your team to collaborate, analyze, and deliver results for clients with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              PPC Management Platform for Digital Marketing Agencies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Make the strongest case yet for your impact.
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Preserve the value of your agency in lean and prosperous times alike. 
                Build custom reports that illustrate the impact of your inputs on PPC account performance. 
                With dozens of widgets, our reporting tools allow you to tell any story.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Key Performance Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="flex items-center justify-center mb-2">
                        <svg className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                        </svg>
                        <span className="text-xs text-gray-500">Clicks</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">361</div>
                      <div className="text-xs text-red-500">▼ 34%</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="flex items-center justify-center mb-2">
                        <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-gray-500">Avg CPC</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">$2.22</div>
                      <div className="text-xs text-red-500">▼ 34%</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="flex items-center justify-center mb-2">
                        <svg className="w-5 h-5 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-gray-500">CTR</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">0.5%</div>
                      <div className="text-xs text-green-500">▲ 34%</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="text-xs font-semibold text-gray-700 mb-3">Conversions</h5>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-xs font-bold">64.1%</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="text-xs font-semibold text-gray-700 mb-3">Conv Value</h5>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-xs font-bold">69.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              PPC agencies worldwide use AdsOptima to cut client account management time and retain client trust
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-purple-600 to-blue-700 p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">ADSOPTIMA</div>
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    <path d="M20 20L80 20L80 80L20 80Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                    <path d="M30 30L70 30M30 40L70 40M30 50L60 50" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="text-right mb-4">
                    <div className="text-4xl font-bold">SEARCHLAB</div>
                    <div className="text-sm opacity-90">CASE STUDY</div>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-24 h-24 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Case study
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  SearchLab Digital increased conversions by 42% by switching to a scalable, feed-driven campaign structure.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">ADSOPTIMA</div>
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                    <path d="M35 50L45 60L65 40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="text-right mb-4">
                    <div className="text-4xl font-bold">METRIK</div>
                    <div className="text-lg">marketing</div>
                    <div className="text-sm opacity-90">Marketing That Makes Sense</div>
                    <div className="text-xs mt-2 font-medium">CASE STUDY</div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Case study
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Metrik Marketing delights clients with AI summary-enriched reports.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything agencies need to scale efficiently
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From automated reporting to advanced optimization, AdsOptima provides the tools 
              digital marketing agencies need to manage more accounts with better results.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Reporting</h3>
              <p className="text-gray-600 leading-relaxed">
                Create custom reports that showcase your agency's impact with dozens of widgets and visualization options.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Set up rules and automation to optimize campaigns 24/7, reducing manual work and improving performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Client Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Manage multiple client accounts from a single dashboard with role-based access and white-label options.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Budget Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor and optimize budget allocation across campaigns with intelligent recommendations and alerts.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Get intelligent recommendations and insights powered by machine learning to improve campaign performance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep campaigns running smoothly with round-the-clock monitoring and automatic alerts for issues.
              </p>
            </div>
          </div>
        </div>
      </section>
            
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-md animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your agency's PPC management?
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Join thousands of digital marketing agencies who trust AdsOptima to deliver better results for their clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/signup" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Demo
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mt-12 text-sm opacity-80">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              14-day free trial
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              No setup fees
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
