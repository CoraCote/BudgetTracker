export default function CustomizableRulesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customizable Automated Rules for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Google, Microsoft & Amazon PPC
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never let another performance anomaly slip through the cracks. Set up custom rules to monitor account performance and receive alerts over email, Slack, or MS Teams for any anomalies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Never let another performance anomaly slip through the cracks.
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Set up custom rules to monitor account performance and receive alerts over email, Slack, or MS Teams for any anomalies. Stay on top of your campaigns and restore performance when needed.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Real-time Performance Monitoring</h4>
                  <p className="text-gray-600">Get instant alerts when campaigns need attention</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Multi-Platform Integration</h4>
                  <p className="text-gray-600">Works seamlessly with Google, Microsoft, and Amazon ads</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Custom Alert Channels</h4>
                  <p className="text-gray-600">Receive notifications via email, Slack, or MS Teams</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-gray-900">Ad copies with a decline in CTR</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4 text-xs font-semibold text-gray-600 mb-3">
                <div>Campaign</div>
                <div>Ad Group</div>
                <div>Ad</div>
                <div>Ad Type</div>
                <div>Label</div>
                <div>Rule</div>
                <div>State</div>
                <div>CTR</div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-3">
                <div className="grid grid-cols-8 gap-4 text-sm">
                  <div className="text-blue-600 font-medium">Adsoptima Express</div>
                  <div className="text-gray-700">Audits</div>
                  <div className="text-gray-700">Performance Max</div>
                  <div className="text-gray-700">Expanded Dynamic</div>
                  <div className="text-gray-700">Declining CTR</div>
                  <div className="text-gray-700">Refresh Ad Copies</div>
                  <div className="text-green-600 font-medium">Enabled</div>
                  <div className="text-gray-700">7.14</div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 text-sm mb-1">Identify recommendations Auto-applied by Google</h5>
                    <p className="text-xs text-gray-600 mb-3">Get a report of recommendations auto applied by Google in last 14 days.</p>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs rounded hover:bg-gray-50 transition-colors">
                        View/Edit Strategy
                      </button>
                      <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
                        View Suggestions
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold text-gray-900 mb-3">Analyze Product Trends</h5>
                <div className="space-y-2">
                  <div className="bg-green-50 border border-green-200 rounded p-2">
                    <div className="grid grid-cols-6 gap-4 text-xs">
                      <div className="font-medium">9999999</div>
                      <div>Campaign Automator</div>
                      <div>Trending Products</div>
                      <div>840</div>
                      <div>0.18</div>
                      <div>0.4</div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded p-2">
                    <div className="grid grid-cols-6 gap-4 text-xs">
                      <div className="font-medium">5555555</div>
                      <div>Performance Max</div>
                      <div>Declining Products</div>
                      <div>3540</div>
                      <div>3</div>
                      <div>0</div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded p-2">
                    <div className="grid grid-cols-6 gap-4 text-xs">
                      <div className="font-medium">6666666</div>
                      <div>PPC Workflows</div>
                      <div>Trending Products</div>
                      <div>900</div>
                      <div>2.01</div>
                      <div>3</div>
                    </div>
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
