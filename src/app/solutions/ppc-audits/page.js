import Link from 'next/link';
import { CheckCircle, FileText, Download, Mail, Save } from 'lucide-react';

export default function PPCAuditsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative overflow-hidden py-20"
        style={{
          background: `
            linear-gradient(120deg, #f8f6fc 0%, #fff 60%, #fff0fa 100%),
            radial-gradient(circle at 20% 30%, #e9d8fd 0%, transparent 70%),
            radial-gradient(circle at 80% 70%, #fbcfe8 0%, transparent 80%)
          `
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              PPC Audit Solution
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Effortlessly grade the health of any{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PPC account
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Run in-depth PPC audits to pinpoint improvement opportunities — from account structure and feature adoption to merchant feed setup, so your campaigns stay optimized and perform at their best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Trial
                <span className="ml-2">→→</span>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book A Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Get instant insights into your PPC performance
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive audit system provides detailed scoring across all major PPC components, helping you identify areas for improvement and track progress over time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Account structure analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Campaign performance insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Feed optimization recommendations</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">PPC Audit Score</h3>
                  </div>
                  <Link href="/audits" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All Audits
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-500">
                    <span className="text-2xl font-bold text-green-600">95</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Previous Score</p>
                    <p className="text-lg font-semibold text-green-600">A</p>
                  </div>
                </div>
                
                <Link href="/reports" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6">
                  View Report
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Campaigns</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-red-600">65</span>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Performance Max</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-yellow-600">85</span>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Ad Groups</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-yellow-600">89</span>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Responsive Search Ads</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-600">100</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Keywords</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-yellow-600">87</span>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Performance</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-600">98</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Feed Audit Score</h3>
                  </div>
                  <Link href="/feed-audits" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All Feed Audits
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-500">
                    <span className="text-2xl font-bold text-green-600">94</span>
                  </div>
                </div>
                
                <Link href="/feed-reports" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6">
                  View Report
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Product Level</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-600">94</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Product Titles & Descriptions</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-yellow-600">83</span>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Basic Product Data</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-600">93</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Product Identifiers</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-600">97</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Product Category</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-yellow-600">83</span>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
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
          <div className="bg-gray-50 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-1 bg-green-400"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Spot issues early with PPC account structure audits
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get a grade for your PPC Account based on its performance and structure. Check if your account has the right number of keywords and ads, detect conflicting keywords, and spot campaigns still using the last-click attribution model. Fix such issues without leaving the page, and schedule the audit to monitor your account regularly.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="bg-blue-50 rounded-t-xl p-6 -m-8 mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">PPC Account Audit</h3>
                  <p className="text-blue-700 text-sm">Find and resolve potential account issues</p>
                  <div className="flex items-center space-x-3 mt-4">
                    <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      <Save className="w-4 h-4 mr-2" />
                      Save PDF
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Audit Outline</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Account', color: 'bg-blue-500' },
                        { name: 'Campaigns', color: 'bg-red-500' },
                        { name: 'Display Campaigns', color: 'bg-blue-500' },
                        { name: 'Ad Groups', color: 'bg-yellow-500' },
                        { name: 'Ads', color: 'bg-yellow-500' },
                        { name: 'Assets (Extensions)', color: 'bg-yellow-500' },
                        { name: 'Keywords', color: 'bg-red-500' },
                        { name: 'Negative Keywords', color: 'bg-green-500' },
                        { name: 'Advanced Targeting', color: 'bg-green-500' },
                        { name: 'Conversion Tracking', color: 'bg-blue-500' },
                        { name: 'Performance', color: 'bg-green-500' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                          <span className="text-sm text-gray-700">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Audit Details</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm text-gray-700">89% Conversions are from exact match queries</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-blue-600">-</span>
                          </div>
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm text-gray-700">100% keywords have Quality Score greater than 7</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-green-600">100</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm text-gray-700">95% keywords have an above average Ad Relevance Score</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-green-600">97</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <span className="text-sm text-gray-700">52% keywords have an average Landing Page Score</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-yellow-600">95</span>
                          </div>
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AdsOptima customers run faster audits to deliver better results for clients and in-house accounts
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                Case study
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                See how Morefire relies on scheduled PPC Account Audit reports to catch issues early and maintain their high account management standards.
              </p>
              <Link 
                href="/case-studies/morefire" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="absolute bottom-4 left-8 w-6 h-6 text-white/30">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                </div>
                <div className="absolute bottom-8 right-12 w-4 h-4 text-white/20">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                </div>
                <div className="absolute bottom-12 left-16 w-5 h-5 text-white/25">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                </div>
                
                <div className="absolute top-4 right-4 text-white/60 text-xs font-medium">
                  ADSOPTIMA
                </div>
                
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">morefire</h3>
                    <div className="text-center">
                      <span className="text-white text-sm font-medium uppercase tracking-wide">Case Study</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your PPC performance?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Start your free trial today and discover how our comprehensive audit tools can help you optimize your campaigns and drive better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Free Trial
              <span className="ml-2">→→</span>
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
