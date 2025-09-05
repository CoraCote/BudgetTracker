'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FeedManagementPage() {
  const [activeTab, setActiveTab] = useState('audit');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-25 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Feed Management Solutions
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Effortless</span>{' '}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    feed management
                  </span>{' '}
                  <span className="text-gray-900">for ever-changing e-commerce campaigns.</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Managing multiple product feeds across several accounts is too time-consuming and carries a high risk of error. 
                  AdOptima simplifies the process for eCommerce brands and agencies, giving you greater control over Shopping and Performance Max.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  <span>Start Trial</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-purple-300 text-gray-700 hover:text-purple-700 font-semibold rounded-xl transition-all duration-300 hover:bg-purple-50 group">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Book A Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">Feed Audit Dashboard</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border border-green-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Feed Audit Score</h3>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Report →</button>
                  </div>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeDasharray="94, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-green-600">94/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product Level</span>
                      <span className="font-semibold text-green-600">94</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product Titles And Descriptions</span>
                      <span className="font-semibold text-blue-600">96</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Basic Product Data</span>
                      <span className="font-semibold text-green-600">93</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product Identifiers</span>
                      <span className="font-semibold text-green-600">97</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">2700</div>
                    <div className="text-xs text-gray-600">Products Missing Brand</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600">1356</div>
                    <div className="text-xs text-gray-600">Missing Descriptions</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg border border-red-100">
                    <div className="text-2xl font-bold text-red-600">680</div>
                    <div className="text-xs text-gray-600">Missing Images</div>
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
              Product & Data Feed Capabilities for PPC Campaigns
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Perform the fastest feed audit yet.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  A well-optimized feed, complete with strong titles, images, and descriptions, is the foundation for successful e-commerce 
                  PPC. Quickly review, edit, and optimize critical feed attributes in bulk to save time and capture more opportunities. 
                  Plus, track your feed's health with an always-visible audit score right in your account dashboard.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'audit', label: 'Audit Outline', color: 'purple' },
                    { id: 'titles', label: 'Product Titles', color: 'blue' },
                    { id: 'data', label: 'Basic Product Data', color: 'green' },
                    { id: 'identifiers', label: 'Product Identifiers', color: 'orange' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? `bg-${tab.color}-100 text-${tab.color}-700 border-2 border-${tab.color}-200`
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-gray-900">Shopping Feed Audit</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-md font-medium">Send Email</button>
                  <button className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-md font-medium">Save PDF</button>
                  <button className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-md font-medium">Download ↓</button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-3">Product Titles and Descriptions</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">2700 out of 15339 (17.6%) products are missing product brand in the titles.</span>
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">!</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">1356 out of 15339 (88.44%) products are missing Product Brand in the Description.</span>
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-xs">!</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-3">Basic Product Data ( Empty for Products )</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">14929 out of 15339 (97.33%) products have too long Product Titles.</span>
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-xs">!</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">2700 out of 15339 (17.6%) products are missing Product Brand in the Product Title.</span>
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">!</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">680 out of 15339 (4.43%) products are missing Description.</span>
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xs">✓</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">1356 out of 15339 (88.44%) products are missing Product Brand in the Description.</span>
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-xs">!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Retail PPC teams worldwide use AdOptima to audit and optimize merchant feeds
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-6">
                Case study
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Matthieu Tran-Van relies on Shopping Feed Audits to monitor account stats and feed hygiene, proactively preventing campaign issues.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MT</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">MATTHIEU TRAN-VAN</div>
                  <div className="text-gray-600 text-sm">CASE STUDY</div>
                </div>
              </div>
              
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-6">
                Case study
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Colewood Digital uses Smart Product Labeler to create time-saving feed management strategies.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CD</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">colewood.digital</div>
                  <div className="text-gray-600 text-sm">CASE STUDY</div>
                </div>
              </div>
              
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to transform your feed management?
            </h2>
            
            <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Join thousands of PPC professionals who trust AdOptima to optimize their product feeds and drive better campaign performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-purple-600 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <span>Start Free Trial</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:border-purple-200 text-white hover:text-purple-100 font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 group">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
