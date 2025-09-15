'use client';

export default function LabsFeatures() {
  const features = [
    {
      id: 1,
      title: "Rapid Campaign Launcher",
      description: "Rapid Campaign Launcher simplifies ad creation by allowing you to design templates for various verticals and use cases. Quickly launch campaigns by simply filling in placeholder values, saving time and ensuring consistency across your Google Ads campaigns.",
      gradient: "from-purple-600 to-pink-500",
      icon: "⚡",
      status: "Launch"
    },
    {
      id: 2,
      title: "Google Ads Billing Alerts in AdsOptima",
      description: "Receive alerts about billing issues, disapprovals, and policy changes for your Google Ads accounts in AdsOptima. This beta feature can be enabled by contacting support.",
      gradient: "from-purple-600 to-pink-500",
      icon: "🔔",
      status: "Launch"
    },
    {
      id: 3,
      title: "Web Page Audience Fit Analyzer",
      description: "Powered by AI, the Web Page Audience Fit Analyzer evaluates your page's suitability for a specific audience. Simply pick your target audience, and the tool will analyze whether your content resonates with them, offering insights to boost appeal and effectiveness.",
      gradient: "from-purple-600 to-pink-500",
      icon: "🎯",
      status: "Launch"
    },
    {
      id: 4,
      title: "AI Summary for PPC Investigator",
      description: "Experience the power of AI with the newly enhanced PPC Investigator! Beyond the usual charts and root-cause analysis, our latest update introduces AI-generated explanations that dive deeper into the reasons behind performance changes and identify the key contributors.",
      gradient: "from-purple-600 to-pink-500",
      icon: "🤖",
      status: "Launch"
    },
    {
      id: 5,
      title: "Magic Quadrants Insight Tool",
      description: "Analyze your keyword performance with our advanced Magic Quadrants tool. Visualize your data in a scatter plot format to identify high-performing keywords and optimization opportunities.",
      gradient: "from-purple-600 to-pink-500",
      icon: "📊",
      status: "Launch"
    },
    {
      id: 6,
      title: "AI-Powered Slide Generator",
      description: "Create stunning presentations automatically with our AI-powered slide generator. Transform your PPC data into compelling visual stories that impress clients and stakeholders.",
      gradient: "from-purple-600 to-pink-500",
      icon: "📈",
      status: "Launch"
    },
    {
      id: 7,
      title: "Weather-Responsive Campaign Manager",
      description: "Automate your campaigns based on weather conditions. Set up rules to adjust budgets, ad copy, and targeting when specific weather patterns occur in your target locations.",
      gradient: "from-purple-600 to-pink-500",
      icon: "🌤️",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See What's New
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="group">
              {/* Feature Card */}
              <div className={`relative bg-gradient-to-br ${feature.gradient} rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Binary Code Pattern for teal cards */}
                {feature.gradient.includes('teal-800') && (
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 text-white text-xs font-mono" style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`,
                      backgroundSize: '100% 4px'
                    }}></div>
                  </div>
                )}
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Logo */}
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="text-white font-bold text-sm">ADSOPTIMA</span>
                  </div>
                  
                  {/* Feature Icon and Title */}
                  <div className="mb-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Visual Elements */}
                  <div className="mb-6">
                    {feature.id === 1 && (
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                          </div>
                          <div className="text-white text-sm">
                            <div className="font-semibold mb-2">Campaign</div>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <input type="radio" className="w-3 h-3" />
                                <span className="text-xs">Create New Campaign</span>
                              </div>
                              <div className="bg-white/20 rounded px-2 py-1 text-xs">
                                Enter the Campaign Name
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {feature.id === 2 && (
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm font-semibold">Alert</span>
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">!</span>
                          </div>
                        </div>
                        <div className="text-white text-xs">
                          <div>A Google Ads Account</div>
                          <div>Payment Overdue</div>
                          <div>Email Alert</div>
                        </div>
                      </div>
                    )}
                    
                    {feature.id === 3 && (
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">3</span>
                          </div>
                          <div className="text-white text-sm">To</div>
                          <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">9</span>
                          </div>
                        </div>
                        <div className="text-white text-xs text-center mb-2">Improve</div>
                        <div className="bg-white/20 rounded px-3 py-2 text-xs">
                          https://example.com
                        </div>
                      </div>
                    )}
                    
                    {feature.id === 4 && (
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="bg-green-400 rounded px-2 py-1 text-xs text-center">
                            Search Impr. Share 0.14 +1.04%
                          </div>
                          <div className="flex justify-between">
                            <div className="bg-red-400 rounded px-2 py-1 text-xs">
                              Search Lost IS (Rank) ▲ 4.95 +62.82%
                            </div>
                            <div className="bg-green-400 rounded px-2 py-1 text-xs">
                              Search Lost IS (Budget) ▼ 5.09 -6.48%
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {feature.id === 5 && (
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        </div>
                        <div className="text-white text-xs">
                          <div className="font-semibold mb-1">Keyword</div>
                          <div>adwords tool</div>
                          <div>Impressions: 758</div>
                          <div>CTR: 3.43%</div>
                        </div>
                      </div>
                    )}
                    
                    {feature.id === 6 && (
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white/20 rounded p-2">
                            <div className="w-4 h-4 bg-gray-300 rounded mb-1"></div>
                            <div className="w-4 h-2 bg-yellow-400 rounded"></div>
                          </div>
                          <div className="bg-white/20 rounded p-2">
                            <div className="w-4 h-4 bg-gray-300 rounded mb-1"></div>
                            <div className="w-4 h-2 bg-teal-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {feature.id === 7 && (
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white text-sm">🌧️ 25.15° C</div>
                          <div className="text-white text-xs">Drizzle</div>
                        </div>
                        <div className="text-white text-xs">
                          <div className="font-semibold mb-1">Hyderabad</div>
                          <div>Weather is Rain</div>
                          <div className="mt-2 space-y-1">
                            <div className="bg-white/20 rounded px-2 py-1 text-xs">Make daily budget 1000</div>
                            <div className="bg-white/20 rounded px-2 py-1 text-xs">Change ads to Colder Climate CTA</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="flex justify-between items-center">
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      feature.status === 'Launch' 
                        ? 'bg-green-400 text-gray-800' 
                        : 'bg-gray-400 text-white'
                    }`}>
                      {feature.status}
                    </div>
                    <button className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      feature.status === 'Launch'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    }`}>
                      {feature.status === 'Launch' ? 'Launch' : 'Coming Soon'}
                      <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Description Below Card */}
              <div className="mt-6">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
