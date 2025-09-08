'use client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function DataInsightsPage() {
  const router = useRouter();

  const handleStartTrial = () => {
    router.push('/signup');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 mt-30">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Smarter Analysis,
            </span>
            <br />
            <span className="text-gray-800">Faster Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Adsoptima finds the signal in your data. Cause charts, change logs, and personalized recommendations help you understand results and act on them in record time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg" onClick={handleStartTrial}>
              Start Trial
            </button>
            <button className="px-8 py-4 bg-white border-2 border-purple-200 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book A Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Analyze account trends and forecast monthly spend more accurately.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get up-to-date forecasts for both monthly and daily budgets, and understand how much you're likely to spend by the end of the month compared to your target. And when changes are made, you can track every adjustment down to the keyword level, including who made it, so you stay fully informed and in control.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Spend Projection (Daily)</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Daily Spend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-orange-400 border-dashed rounded-full"></div>
                    <span className="text-sm text-gray-600">Daily Target Budget</span>
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded-lg relative px-4 py-2">
                  <div className="flex items-end justify-between h-full">
                    {[120, 180, 150, 220, 160, 190, 140, 170, 200, 180, 160, 190, 210, 180, 170, 190, 200, 180, 160, 190, 210, 180, 170, 190, 200, 180, 160, 190, 210, 180, 170].map((value, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className="w-3 bg-blue-500 rounded-t-sm hover:bg-blue-600 transition-colors cursor-pointer"
                          style={{ height: `${(value / 200) * 100}%` }}
                          title={`Day ${index + 1}: $${value}`}
                        ></div>
                        {index % 5 === 0 && (
                          <span className="text-xs text-gray-500 mt-1">
                            {index + 1} July
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-4 top-32 border-t-2 border-orange-400 border-dashed"></div>
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>$200</span>
                    <span>$150</span>
                    <span>$100</span>
                    <span>$50</span>
                    <span>$0</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Spend Projection (Cumulative)</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Projected Spend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Target budget for the date range</span>
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded-lg relative px-4 py-2">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path
                      d="M 0 180 Q 50 160 100 140 T 200 120 T 300 100 T 400 80"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      className="hover:stroke-blue-600 transition-colors"
                    />
                    <path
                      d="M 0 180 Q 50 160 100 140 T 200 120 T 300 100 T 400 80 L 400 200 L 0 200 Z"
                      fill="url(#blueGradient)"
                      opacity="0.2"
                    />
                    <path
                      d="M 0 190 Q 50 170 100 150 T 200 130 T 300 110 T 400 90"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      opacity="0.5"
                    />
                    <path
                      d="M 0 170 Q 50 150 100 130 T 200 110 T 300 90 T 400 70"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      opacity="0.5"
                    />
                    <defs>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-x-4 top-20 border-t-2 border-orange-500 border-dashed"></div>
                  <div className="absolute left-4 top-16 text-xs text-gray-500">Today</div>
                  <div className="absolute right-4 top-16 text-xs text-gray-500">End of month</div>
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>$5,000</span>
                    <span>$4,000</span>
                    <span>$3,000</span>
                    <span>$2,000</span>
                    <span>$1,000</span>
                    <span>$0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="flex space-x-8 mb-8 border-b border-gray-200">
              <button className="pb-4 px-2 border-b-2 border-blue-500 text-blue-600 font-semibold">
                Cause Chart
              </button>
              <button className="pb-4 px-2 text-gray-500 hover:text-gray-700 font-semibold">
                Root Cause Analysis
              </button>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Conversions went up by 11 percent. This is because, clicks increased.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="bg-gray-50 rounded-xl p-6 h-96">
                  <div className="h-full relative">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-100 border-2 border-green-300 rounded-lg px-4 py-2 text-center shadow-lg">
                        <div className="font-bold text-green-800">Conversions</div>
                        <div className="text-sm text-green-700">+11% ↗</div>
                      </div>
                    </div>

                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
                      <path d="M 300 60 L 300 100" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
                      <path d="M 300 100 L 150 140" stroke="#EF4444" strokeWidth="2" fill="none"/>
                      <path d="M 300 100 L 450 140" stroke="#10B981" strokeWidth="2" fill="none"/>
                      
                      <path d="M 150 140 L 150 180" stroke="#9CA3AF" strokeWidth="1" fill="none"/>
                      <path d="M 150 180 L 100 220" stroke="#EF4444" strokeWidth="1" fill="none"/>
                      <path d="M 150 180 L 200 220" stroke="#EF4444" strokeWidth="1" fill="none"/>
                      <path d="M 150 180 L 150 220" stroke="#EF4444" strokeWidth="1" fill="none"/>
                      
                      <path d="M 450 140 L 450 180" stroke="#9CA3AF" strokeWidth="1" fill="none"/>
                      <path d="M 450 180 L 400 220" stroke="#10B981" strokeWidth="1" fill="none"/>
                      <path d="M 450 180 L 500 220" stroke="#10B981" strokeWidth="1" fill="none"/>
                      <path d="M 450 180 L 450 220" stroke="#10B981" strokeWidth="1" fill="none"/>
                    </svg>

                    <div className="absolute top-32 left-16">
                      <div className="bg-red-100 border-2 border-red-300 rounded-lg px-3 py-2 text-center shadow-lg">
                        <div className="font-bold text-red-800">Conv. Rate</div>
                        <div className="text-sm text-red-700">-1.21% ↘</div>
                      </div>
                    </div>

                    <div className="absolute top-32 right-16">
                      <div className="bg-green-100 border-2 border-green-300 rounded-lg px-3 py-2 text-center shadow-lg">
                        <div className="font-bold text-green-800">Clicks</div>
                        <div className="text-sm text-green-700">+12.16% ↗</div>
                      </div>
                    </div>

                    <div className="absolute top-56 left-8">
                      <div className="bg-red-50 border border-red-200 rounded px-2 py-1 text-center text-xs shadow">
                        <div className="font-medium text-red-700">CTR</div>
                        <div className="text-red-600">+5.44% ↗</div>
                      </div>
                    </div>
                    <div className="absolute top-56 left-24">
                      <div className="bg-red-50 border border-red-200 rounded px-2 py-1 text-center text-xs shadow">
                        <div className="font-medium text-red-700">Avg CPC</div>
                        <div className="text-red-600">-1.46% ↗</div>
                      </div>
                    </div>
                    <div className="absolute top-56 left-40">
                      <div className="bg-red-50 border border-red-200 rounded px-2 py-1 text-center text-xs shadow">
                        <div className="font-medium text-red-700">Impressions</div>
                        <div className="text-red-600">+5.34% ↗</div>
                      </div>
                    </div>

                    <div className="absolute top-56 right-8">
                      <div className="bg-green-50 border border-green-200 rounded px-2 py-1 text-center text-xs shadow">
                        <div className="font-medium text-green-700">Est. Avg Pos</div>
                        <div className="text-green-600">+6.25% ↗</div>
                      </div>
                    </div>
                    <div className="absolute top-56 right-24">
                      <div className="bg-green-50 border border-green-200 rounded px-2 py-1 text-center text-xs shadow">
                        <div className="font-medium text-green-700">Cost</div>
                        <div className="text-green-600">-10.54% ↗</div>
                      </div>
                    </div>
                    <div className="absolute top-56 right-40">
                      <div className="bg-green-50 border border-green-200 rounded px-2 py-1 text-center text-xs shadow">
                        <div className="font-medium text-green-700">Search Impr. Share</div>
                        <div className="text-green-600">-3.15% ↘</div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-center text-xs">
                        <div className="font-medium text-gray-700">Search Query Volume</div>
                        <div className="text-gray-600">+9.81% ↗</div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-32">
                      <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-center text-xs">
                        <div className="font-medium text-gray-700">Display Impr. Share</div>
                        <div className="text-gray-600">0.00%</div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-32">
                      <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-center text-xs">
                        <div className="font-medium text-gray-700">Search Lost IS (Rank)</div>
                        <div className="text-gray-600">-0.75% ↘</div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-center text-xs">
                        <div className="font-medium text-gray-700">Search Lost IS (Budget)</div>
                        <div className="text-gray-600">+inf% ↗</div>
                      </div>
                    </div>

                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-0.5 bg-green-500"></div>
                        <span className="text-gray-600">Positive Impact</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-0.5 bg-red-500"></div>
                        <span className="text-gray-600">Negative Impact</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-0.5 bg-gray-400"></div>
                        <span className="text-gray-600">Neutral</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Change History</h4>
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-2xl font-bold text-white">3K</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Top 3 Categories of changes:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Bidding Changes 3116
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Status Changes 40
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      Budget Changes 7
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-sm text-blue-600 font-medium">Changes made in Last 30 Days</p>
                    <a href="#" className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-1">
                      View Details 
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Express Optimizations</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 cursor-pointer group">
                      <span className="text-green-500 group-hover:translate-x-1 transition-transform">→</span>
                      Fix Products with empty brand (1)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 cursor-pointer group">
                      <span className="text-green-500 group-hover:translate-x-1 transition-transform">→</span>
                      Fix Impression share lost due to budget - Campaign Budget (1)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 cursor-pointer group">
                      <span className="text-green-500 group-hover:translate-x-1 transition-transform">→</span>
                      Fix products with empty description (1)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 cursor-pointer group">
                      <span className="text-green-500 group-hover:translate-x-1 transition-transform">→</span>
                      Fix Products with empty Price (1)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Paid media teams trust Adsoptima to speed up PPC analysis
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Case study
              </span>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                See how PixelRush used the Quality Score Tracker and Search Terms N-Grams for faster, more efficient monitoring.
              </p>
              <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded"></div>
                  <div className="absolute top-12 left-12 w-4 h-4 border-2 border-white/30 rounded"></div>
                  <div className="absolute top-20 left-8 w-6 h-6 border-2 border-white/30 rounded"></div>
                  <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white/30 rounded"></div>
                  <div className="absolute top-16 right-4 w-4 h-4 border-2 border-white/30 rounded"></div>
                  <div className="absolute top-24 right-12 w-8 h-8 border-2 border-white/30 rounded"></div>
                </div>
                
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <path d="M 20 160 L 30 140 L 40 160 L 30 140 L 30 120" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M 60 140 L 70 120 L 80 140 L 70 120 L 70 100" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M 100 120 L 110 100 L 120 120 L 110 100 L 110 80" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M 140 100 L 150 80 L 160 100 L 150 80 L 150 60" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M 180 80 L 190 60 L 200 80 L 190 60 L 190 40" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="text-8xl mb-6">🚀</div>
                  <h3 className="text-3xl font-bold text-white mb-2">PixelRush</h3>
                  <p className="text-white/90 uppercase tracking-wider font-medium">Case Study</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                <span className="text-sm font-bold text-gray-800">ADSOPTIMA ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
