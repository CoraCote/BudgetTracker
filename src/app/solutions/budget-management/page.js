import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
                <span className="text-gray-900">Funnel your </span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ad spend</span>
                <br />
                <span className="text-gray-900">towards your most</span>
                <br />
                <span className="text-gray-900">lucrative </span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">PPC assets</span>
                <span className="text-gray-900">.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Shift your focus to high-level strategy while Adoptima's budget 
                and bid tools safeguard your money. Easily optimize smart 
                bidding campaigns, maintaining full control of your spending 
                decisions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden group inline-flex items-center justify-center"
              >
                <span className="relative z-10">Start Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/demo"
                className="border-2 border-gray-300 hover:border-teal-300 text-gray-700 hover:text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-teal-50 inline-flex items-center justify-center"
              >
                Book A Demo
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Budget Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                  <div className="flex items-end justify-between h-32 mb-4">
                    <div className="w-8 bg-purple-400 rounded-t" style={{ height: '60%' }}></div>
                    <div className="w-8 bg-pink-400 rounded-t" style={{ height: '80%' }}></div>
                    <div className="w-8 bg-blue-400 rounded-t" style={{ height: '70%' }}></div>
                    <div className="w-8 bg-teal-400 rounded-t" style={{ height: '90%' }}></div>
                    <div className="w-8 bg-purple-500 rounded-t" style={{ height: '100%' }}></div>
                    <div className="w-8 bg-pink-500 rounded-t" style={{ height: '85%' }}></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-purple-600">$329.80</div>
                      <div className="text-xs text-gray-600">Required Daily Spend</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-pink-600">131%</div>
                      <div className="text-xs text-gray-600">Budget Pacing</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-teal-600">$12,000</div>
                      <div className="text-xs text-gray-600">Target Budget</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium text-red-700">Over Spending</span>
                    </div>
                    <span className="text-sm text-red-600">+31%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-700">Target Budget</span>
                    </div>
                    <span className="text-sm text-green-600">On Track</span>
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

function BudgetCapabilitiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            PPC Budget & Bid Management Capabilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-teal-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Never overspend another ad budget.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Keep tabs on your spending across multiple platforms and get 
                notified over Email, Slack, or Microsoft Teams when budgets 
                exceed or underspend. Monitor Budget Pacing throughout the 
                month and create rules to change budgets on automation 
                based on your business requirements. Plus, automatically 
                pause campaigns once their monthly budgets are hit and 
                reenable them next month to prevent overspending. Supported 
                for all bid strategies and campaign types.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Real-time Budget Monitoring</h4>
                  <p className="text-gray-600">Track spending across Google Ads, Microsoft Ads, and Facebook Ads</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Smart Notifications</h4>
                  <p className="text-gray-600">Get alerts via Email, Slack, or Microsoft Teams for budget changes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Automated Budget Rules</h4>
                  <p className="text-gray-600">Create rules to automatically adjust budgets based on performance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 shadow-xl">
              {/* Budget Tracking Interface */}
              <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Google Ads Account</span>
                  </div>
                  <span className="text-sm text-gray-500">Monthly Budget</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Track all current and future budgets</span>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">What actions to take?</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Notify when target budget spend is 10% off</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Pause and notify when the aggregate spend of the campaigns approaches the target budget</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Re-enable the paused campaigns on 1st day of next month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Budget Status Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Budget Pacing</div>
                      <div className="text-2xl font-bold text-red-600">131%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Target Budget</div>
                      <div className="text-2xl font-bold text-gray-900">$12,000</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Required Daily Spend</div>
                      <div className="text-2xl font-bold text-gray-900">$329.80</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Budget Cycle Date</div>
                      <div className="text-2xl font-bold text-gray-900">1</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-red-600">Over Spending</span>
                    <div className="text-sm text-gray-600">Monthly Target Budget</div>
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

function CaseStudySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            PPC teams use Adoptima to manage bidding<br />
            and budget tracking
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              Case study
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900">
              Levitate Foundry drives 30% PMax ROAS growth with 500 
              hours saved.
            </h3>
            
            <Link 
              href="/case-studies/levitate-foundry"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="text-white font-bold text-xl">ADSOPTIMA</div>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-lg">L</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Levitate</div>
                    <div className="text-lg opacity-90">FOUNDRY</div>
                    <div className="text-sm opacity-75">CASE STUDY</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div>
                      <div className="text-2xl font-bold">+30%</div>
                      <div className="text-sm opacity-75">ROAS Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">500</div>
                      <div className="text-sm opacity-75">Hours Saved</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
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

export default function BudgetManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <BudgetCapabilitiesSection />
      <CaseStudySection />
      <Footer />
    </div>
  );
}
