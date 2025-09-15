import Link from 'next/link';

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              AdsOptima vs. Other Platforms
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Find Your Best Fit
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              See how AdsOptima compares with other PPC Management tools in the market and understand which one fits you best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What makes AdsOptima really stand out?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Real-Time Data Refresh:</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Dashboards with live insights</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 anomaly tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Auto-updated report delivery</span>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Advanced Campaign Management:</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Weather-based campaign management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">E-commerce campaigns split by product performance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">PPC Vertical Benchmarking</span>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">A Leader in AI for Marketers:</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Smarter, faster ad copywriting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">On-demand insights and optimization opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Insightful performance narratives for client reports</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Webpage audience fit check</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Comparisons Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              All Comparisons
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Comparison Cards */}
            {[
              { name: "Acquisio", logo: "🔵" },
              { name: "Adalysis", logo: "🔵" },
              { name: "Adzooma", logo: "🚀" },
              { name: "Marin", logo: "🏔️" },
              { name: "NinjaCat", logo: "🐱" },
              { name: "Opteo", logo: "⭕" },
              { name: "Adpulse (PPC Samurai)", logo: "🟢" },
              { name: "SEMRush", logo: "🦊" },
              { name: "Skai", logo: "⚫" },
              { name: "Supermetrics", logo: "🔴" },
              { name: "TrueClicks", logo: "📈" }
            ].map((competitor, index) => (
              <Link 
                key={index}
                href={`/compare/${competitor.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{competitor.logo}</div>
                  <div className="text-sm text-gray-500 mb-2">AdsOptima vs</div>
                  <div className="font-bold text-gray-900">{competitor.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why PPC Pros Love AdsOptima Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why PPC Pros Love AdsOptima
            </h2>
          </div>
          
          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-8 relative">
              <div className="absolute top-4 left-4 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">Efficient Automation Capabilities</h3>
              <p className="text-gray-700">Streamline your PPC management with powerful automation tools that save time and improve performance.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 relative">
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">Customer Support & Onboarding</h3>
              <p className="text-gray-700">Get expert support and comprehensive onboarding to maximize your success with AdsOptima.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-8 relative">
              <div className="absolute top-4 left-4 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">Excellent Account Management & Return on Investment</h3>
              <p className="text-gray-700">Achieve superior ROI with our advanced account management features and optimization tools.</p>
            </div>
          </div>

          {/* Case Studies Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dealer Jazz Case Study */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 text-white relative">
                <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">ADSOPTIMA</div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">DEALER JAZZ</div>
                  <div className="text-white/80 mb-4">CASE STUDY</div>
                  <div className="w-16 h-1 bg-white/30 mx-auto"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">BRAND</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">LEAD-GEN</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">DealerJazz uses AdsOptima to lower CPCs by 30%</h3>
                <p className="text-gray-600 text-sm">Dealership marketing platform pairs AdsOptima with proprietary setup</p>
              </div>
            </div>

            {/* B&S Media Case Study */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 text-white relative">
                <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">ADSOPTIMA</div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">B&S Media</div>
                  <div className="text-white/80 mb-4">CASE STUDY</div>
                  <div className="w-16 h-1 bg-white/30 mx-auto"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">AGENCY</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">BLENDED (ECOM & LEAD-GEN)</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">B&S Media saves 2500+ hours with AdsOptima</h3>
                <p className="text-gray-600 text-sm">Full-service agency selects AdsOptima to deliver the best results for clients</p>
              </div>
            </div>

            {/* Matthieu Tran-Van Case Study */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-6 text-white relative">
                <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">ADSOPTIMA</div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">MATTHIEU TRAN-VAN</div>
                  <div className="text-white/80 mb-4">CASE STUDY</div>
                  <div className="w-16 h-1 bg-white/30 mx-auto"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">FREELANCER</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">BLENDED (ECOM & LEAD-GEN)</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Matthieu Tran-Van sees 10x productivity boost & 28%...</h3>
                <p className="text-gray-600 text-sm">Google Ads Expert saves 20 account management hours weekly, cuts CPCs, and boosts revenue through automated...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-700 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Getting started with <span className="text-cyan-400">ADSOPTIMA</span> is simpler than setting up your phone
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Sign up and connect ad accounts.</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Start with an audit <span className="text-yellow-400">(Recommended)</span></span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Optimize using Rule Engine or other tools.</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/signup" 
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    Start Trial
                  </Link>
                  
                  <Link 
                    href="/demo" 
                    className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    Book A Demo
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">ADSOPTIMA</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
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
        </div>
      </section>

      {/* CTA Section */}
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
