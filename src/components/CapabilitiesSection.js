import Link from 'next/link';

export default function CapabilitiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet your co-pilot for{' '}
                <Link href="/solutions/performance-max" className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4 transition-colors">
                  Performance Max
                </Link>{' '}
                success.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                AdOptima simplifies PMax campaign management and ensures your money goes where you want it to go 
                by giving you more visibility and control over performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white hover:bg-purple-700 font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Trial
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-purple-200 hover:border-purple-300 text-purple-700 hover:text-purple-800 font-semibold text-lg rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book A Demo
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative z-10">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h4 className="text-lg font-semibold text-gray-900">PMax Channel Distribution</h4>
                    <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                    <span className="text-sm font-medium text-gray-700">Cost</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-200"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-green-500"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="25, 100"
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-900">25%</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-gray-700">Shopping</p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-200"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-orange-500"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="25, 100"
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-900">25%</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-gray-700">Display</p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-200"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-pink-500"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="25, 100"
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-900">25%</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-gray-700">Video</p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-200"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-blue-400"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="25, 100"
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-900">25%</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-gray-700">Other</p>
                  </div>
                </div>

                <div className="text-center">
                  <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                    View full table →
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start space-x-3">
                  <input type="radio" className="mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Identify Expensive Listing Groups</h4>
                    <p className="text-sm text-gray-600">
                      Find Listing Groups That Have A Higher CPA Than The Typical Listing Group In The Campaign, 
                      Or Listing Groups That Have No Conversions Despite Having More Clicks Than Typically Required 
                      To Get At Least 1 Conversion In The Campaign. Compatible With Performance Max Campaigns
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-6 border border-gray-100 w-80 animate-float-slow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Create Or Select Audience Signal</h4>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Performance Max Utilizes An Audience Signal To Increase The Speed Of Reaching The Correct Target Audience Across Google Inventory.
              </p>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Existing Audience Signals</label>
                  <input 
                    type="text" 
                    placeholder="Q Search" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <p className="text-xs text-gray-500">1 Of 1 Audience Signal Selected</p>
                <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-3 rounded-lg">
                  <span className="font-medium">Automotive</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
