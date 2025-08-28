'use client';
import { useRouter } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

/**
 * Automation Solutions Page
 * Features multiple UI sections showcasing automation capabilities
 * Inspired by modern PPC automation platforms with purple/pink color scheme
 */
export default function AutomationPage() {
  const router = useRouter();

  /**
   * Handles navigation to signup page when Start Trial button is clicked
   */
  const handleStartTrial = () => {
    router.push('/signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section - Inspired by 1st image */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                PPC Automation
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automate the busywork.{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Focus on managing performance and maximizing results.
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                PPC still has its share of necessary but tedious tasks. AdOptima automates them with built-in guardrails, 
                freeing your team to focus on creative ideas, testing, and high-impact strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleStartTrial}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Trial
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book A Demo
                </button>
              </div>
            </div>
            
            {/* Right Content - Automation Schedules UI */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Automation Schedules</h3>
                    <p className="text-gray-600">Edit your automations in one place.</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Filter Bar */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {['All Platforms', 'All Accounts', 'All Automation Types', 'All Users', 'All Frequencies', 'Enabled'].map((filter, index) => (
                    <button key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                      {filter}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ))}
                </div>
                
                {/* Table */}
                <div className="space-y-3">
                  {[
                    { account: 'Account Name (123-456-7890)', type: 'Shopping Campaign Refresher', schedule: 'Weekly Tue Between 9:00-12:00 GMT', status: 'Complete', owner: 'example@website.net' },
                    { account: 'Account Name (123-456-7890)', type: 'Rule Engine', schedule: 'Daily Between 9:00-12:00 GMT', status: 'Complete', owner: 'example@website.net' }
                  ].map((row, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{row.account}</p>
                          <p className="text-sm text-gray-600">{row.type}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{row.schedule}</div>
                      <div className="text-sm">
                        <span className="text-green-600 font-medium">{row.status}</span>
                      </div>
                      <div className="text-sm text-gray-600">{row.owner}</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-6 bg-green-500 rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                        </div>
                        <button className="p-1 hover:bg-gray-200 rounded">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="p-1 hover:bg-gray-200 rounded">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PPC Automation Capabilities Section - Inspired by 2nd image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            PPC Automation Capabilities for Google & Microsoft Ads
          </h2>
          
          <div className="bg-gray-100 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Sustain a high level of delivery even in lean times.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  It's a challenging time for PPC teams — tighter budgets, smaller staff, and rising demands. 
                  Automation can help you do more with less, delivering results efficiently. Meanwhile, AdOptima's 
                  automation layering ensures your goals stay front and center, helping you improve profitability across the board.
                </p>
              </div>
              
              {/* Right Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Create Dynamic Campaigns */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Create dynamic campaigns</h4>
                  <div className="flex items-center space-x-8 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center relative">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H8z" clipRule="evenodd" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978a1.532 1.532 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 012.287.947c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Host source data feed</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center relative">
                        <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978a1.532 1.532 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 012.287.947c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Build dynamic campaigns</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center relative">
                        <div className="w-8 h-6 bg-orange-500 rounded text-white text-xs font-bold flex items-center justify-center">AD</div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Make your ads live</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-100 text-blue-700 font-medium rounded-lg border border-blue-300 hover:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Create Your Own Template
                    </button>
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-100 text-blue-700 font-medium rounded-lg border border-blue-300 hover:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy From Other Account
                    </button>
                  </div>
                </div>
                
                {/* Statistics Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Campaign', total: 15, stats: { create: 0, enable: 0, pause: 3, noChanges: 12, update: 0, warnings: 0 } },
                    { title: 'Ad Groups', total: 20, stats: { create: 3, enable: 2, pause: 1, noChanges: 14, update: 0, warnings: 0 } },
                    { title: 'Ads', total: 24, stats: { create: 1, enable: 0, pause: 1, noChanges: 22, update: 0, warnings: 0 } },
                    { title: 'Dynamic Ad Targets', total: 16, stats: { create: 2, enable: 0, pause: 0, noChanges: 12, update: 1, warnings: 1 } }
                  ].map((card, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-2">{card.title}</h5>
                      <div className="text-2xl font-bold text-gray-900 mb-3">{card.total}</div>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex justify-between">
                          <span>Create:</span>
                          <span>{card.stats.create}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Enable:</span>
                          <span>{card.stats.enable}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pause:</span>
                          <span>{card.stats.pause}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>No Changes:</span>
                          <span>{card.stats.noChanges}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Update:</span>
                          <span>{card.stats.update}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Warnings:</span>
                          <span>{card.stats.warnings}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - Inspired by 3rd image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Paid media experts get better results in less time using AdOptima's automation
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Case study
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                See how Google Ads consultant Matthieu Tran-Van uses our automation capabilities to get rid of 
                account management fatigue and prevent burnout.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
            
            {/* Right Content - Case Study Card */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-6xl font-bold text-blue-600 leading-none">CASE<br />STUDY</div>
                    <div className="text-purple-600 font-bold text-lg">ADOPTIMA</div>
                  </div>
                  
                  {/* 3D Cube Graphic */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 transform rotate-45">
                        <div className="w-16 h-16 bg-blue-400 transform rotate-45 translate-x-8 translate-y-8"></div>
                        <div className="w-16 h-16 bg-yellow-400 transform rotate-45 -translate-x-8 translate-y-8"></div>
                        <div className="w-16 h-16 bg-gray-600 transform rotate-45 translate-x-8 -translate-y-8"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">MATTHIEU TRAN-VAN</h4>
                    <p className="text-gray-700 font-semibold">CASE STUDY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Automation Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Advanced Automation Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'shield',
                title: 'Smart Guardrails',
                description: 'Built-in safety measures prevent costly mistakes while maintaining campaign performance.',
                color: 'green'
              },
              {
                icon: 'clock',
                title: 'Intelligent Scheduling',
                description: 'Automate campaigns based on optimal timing and performance patterns.',
                color: 'blue'
              },
              {
                icon: 'chart',
                title: 'Performance Optimization',
                description: 'AI-driven insights automatically adjust bids and targeting for better ROI.',
                color: 'purple'
              },
              {
                icon: 'users',
                title: 'Team Collaboration',
                description: 'Work together seamlessly with role-based permissions and approval workflows.',
                color: 'pink'
              },
              {
                icon: 'zap',
                title: 'Rule Engine',
                description: 'Create custom automation rules that adapt to your specific business needs.',
                color: 'orange'
              },
              {
                icon: 'eye',
                title: 'Real-time Monitoring',
                description: 'Stay informed with instant alerts and comprehensive performance tracking.',
                color: 'indigo'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                  <svg className={`w-8 h-8 text-${feature.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon === 'shield' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944A11.955 11.955 0 01.382 15.976a11.955 11.955 0 01-.764-3.576 12 12 0 016.824-8.976" />
                    )}
                    {feature.icon === 'clock' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {feature.icon === 'chart' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    )}
                    {feature.icon === 'users' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    )}
                    {feature.icon === 'zap' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {feature.icon === 'eye' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your PPC Success?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of PPC professionals who trust AdOptima to automate their campaigns 
            while maintaining full control and maximizing results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartTrial}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
