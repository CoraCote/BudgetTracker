import React from 'react';
import Link from 'next/link';
import {
  ChartBarIcon,
  DocumentChartBarIcon,
  ChartPieIcon,
  MapIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
  CursorArrowRaysIcon,
} from '../../../components/ui/icons';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export default function ReportingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Navigation />
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-teal-200 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-30">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Reporting
              </span>
              <br />
              <span className="text-gray-800">that showcases the impact</span>
              <br />
              <span className="text-gray-800">of your expertise</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Reporting is a vital but often tedious part of PPC management. Our platform makes it easy to create reports that highlight the insights that matter: performance trends, key KPI shifts, and the impact of campaign changes. Combine data from multiple ad platforms into a single, clear view that guides both your team and your clients toward smarter decisions and better results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/signup"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Trial →
              </Link>
              <Link href="/demo" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book A Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Paint a complete picture of PPC's impact on marketing and growth
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Customize PPC reports to match exactly what your clients or bosses want to see, using dozens of innovative widgets that highlight your contributions. Whether you're showcasing account performance to clients or presenting advertising results to your boss, our reports have you covered!
              </p>
            </div>

            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:border-purple-200">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Funnel Chart</h3>
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      <div className="text-2xl font-bold">749,331</div>
                      <div className="text-blue-100">Impressions</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-lg text-center mx-8 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      <div className="text-xl font-bold">15,135</div>
                      <div className="text-orange-100">Clicks (2.0%)</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-lg text-center mx-16 hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      <div className="text-lg font-bold">830</div>
                      <div className="text-green-100">Conversions (5.5%)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Performance</h3>
                  <div className="relative bg-gray-100 rounded-lg p-4 h-48">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapIcon className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="absolute top-4 left-4 w-3 h-3 bg-purple-500 rounded-full opacity-70"></div>
                    <div className="absolute top-8 left-20 w-4 h-4 bg-purple-500 rounded-full opacity-70"></div>
                    <div className="absolute top-16 left-32 w-5 h-5 bg-purple-500 rounded-full opacity-70"></div>
                    <div className="absolute top-24 left-16 w-6 h-6 bg-purple-500 rounded-full opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ArrowTrendingUpIcon className="w-6 h-6 text-green-500 mr-2" />
                  Key Performance Indicators
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <MagnifyingGlassIcon className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-sm text-gray-700">Impressions</div>
                    <div className="text-2xl font-bold text-gray-900">72,656</div>
                    <div className="text-red-500 text-sm flex items-center justify-center">
                      <span className="mr-1">▼</span>10%
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-green-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <CursorArrowRaysIcon className="w-8 h-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-sm text-gray-700">Clicks</div>
                    <div className="text-2xl font-bold text-gray-900">361</div>
                    <div className="text-red-500 text-sm flex items-center justify-center">
                      <span className="mr-1">▼</span>34%
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-yellow-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <CurrencyDollarIcon className="w-8 h-8 text-yellow-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-sm text-gray-700">Cost</div>
                    <div className="text-2xl font-bold text-gray-900">$802</div>
                    <div className="text-red-500 text-sm flex items-center justify-center">
                      <span className="mr-1">▼</span>3%
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <CurrencyDollarIcon className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-sm text-gray-700">Avg CPC</div>
                    <div className="text-2xl font-bold text-gray-900">$2.22</div>
                    <div className="text-red-500 text-sm flex items-center justify-center">
                      <span className="mr-1">▼</span>34%
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-green-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <ChartBarIcon className="w-5 h-5 text-green-700" />
                    </div>
                    <div className="text-sm text-gray-700">CTR</div>
                    <div className="text-2xl font-bold text-gray-900">0.5%</div>
                    <div className="text-green-500 text-sm flex items-center justify-center">
                      <span className="mr-1">▲</span>34%
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-purple-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <ChartPieIcon className="w-5 h-5 text-purple-700" />
                    </div>
                    <div className="text-sm text-gray-700">Conversions</div>
                    <div className="text-2xl font-bold text-gray-900">0.5%</div>
                    <div className="text-red-500 text-sm flex items-center justify-center">
                      <span className="mr-1">▼</span>26%
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <CurrencyDollarIcon className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="text-sm text-gray-700">Conv Value</div>
                    <div className="text-2xl font-bold text-gray-900">$0.00</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="group cursor-pointer">
                    <h4 className="font-semibold text-gray-900 mb-3">Conversions</h4>
                    <div className="relative w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1e40af" strokeWidth="3" strokeDasharray="51.3, 100" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-900">51.3%</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 text-center mt-2 group-hover:text-blue-600 transition-colors duration-300">Mobile devices</div>
                  </div>

                  <div className="group cursor-pointer">
                    <h4 className="font-semibold text-gray-900 mb-3">Conv Value</h4>
                    <div className="relative w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#0d9488" strokeWidth="3" strokeDasharray="49.7, 100" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-900">49.7%</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 text-center mt-2 group-hover:text-teal-600 transition-colors duration-300">Computers</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Analytics Dashboard
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Real-time insights, AI-powered recommendations, and comprehensive performance tracking that gives you the complete picture of your PPC campaigns.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-purple-200 transition-all duration-300">
                    <ChartBarIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">PPC Investigator Pro</h3>
                    <p className="text-gray-600">Advanced campaign analysis and optimization recommendations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    <DocumentChartBarIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">ADSOPTIMA</h3>
                    <p className="text-gray-600">AI-powered PPC management and automation platform</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-yellow-200 transition-all duration-300">
                    <CurrencyDollarIcon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">Spend Analytics</h3>
                    <p className="text-gray-600">Comprehensive budget tracking and ROI analysis</p>
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
              Digital marketers use our platform to deliver high-quality, timely reports that keep clients happy
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Case study
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Read how this Data-Driven Digital Marketing Agency taps into our AI for timely, data-packed reports that delight their clients.
              </p>

              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
                <ArrowTrendingUpIcon className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:border-blue-200">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-blue-500 to-blue-600 rounded-l-2xl flex items-center justify-center">
                  <div className="text-white font-bold text-sm writing-mode-vertical">
                    CASE STUDY
                  </div>
                </div>

                <div className="ml-20">
                  <div className="text-right mb-6">
                    <div className="flex items-center justify-end space-x-2 text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-teal-500" />
                      <span className="font-semibold">ADSOPTIMA</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      METRIK
                      <span className="text-green-500 ml-2 animate-pulse">→</span>
                    </div>
                    <div className="text-green-500 text-xl">marketing</div>
                    <div className="text-green-600 text-lg font-medium">Marketing That Makes Sense</div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-4">CASE STUDY</div>
                    <div className="flex justify-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <ArrowTrendingUpIcon
                          key={i}
                          className="w-6 h-6 text-gray-300 hover:text-green-400 transition-colors duration-300"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3 text-white hover:text-teal-100 transition-colors duration-300 cursor-pointer group">
              <CheckCircleIcon className="w-6 h-6 text-teal-200 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">No changes without your approval, ever</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white hover:text-teal-100 transition-colors duration-300 cursor-pointer group">
              <CheckCircleIcon className="w-6 h-6 text-teal-200 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">Full data encryption and GDPR compliance</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white hover:text-teal-100 transition-colors duration-300 cursor-pointer group">
              <CheckCircleIcon className="w-6 h-6 text-teal-200 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">No ad platform access to account data</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
