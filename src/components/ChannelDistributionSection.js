export default function ChannelDistributionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Performance Max Campaign Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Make insight-backed decisions on channel distribution
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Check the distribution of KPIs across PMax channels using the Performance Max channel distribution widget. 
                Then, you can A/B test your best-performing channels with a specific set of PMax campaigns of your choice 
                to make informed PPC decisions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <h4 className="text-xl font-semibold text-gray-900">PMax Channel Distribution</h4>
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

            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
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
                    <span className="text-sm font-bold text-gray-900">25%</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">Shopping</p>
              </div>

              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
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
                    <span className="text-sm font-bold text-gray-900">25%</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">Display</p>
              </div>

              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
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
                    <span className="text-sm font-bold text-gray-900">25%</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">Video</p>
              </div>

              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
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
                    <span className="text-sm font-bold text-gray-900">25%</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">Other</p>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                View full table
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                    <span className="text-sm font-medium text-gray-700">Cost</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                    <span className="text-sm font-medium text-gray-700">For Last 30 Days</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                    <span className="text-sm font-medium text-gray-700">View By: Value</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 bg-blue-50">PMax Campaign Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Shopping Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Display Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Video Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Other Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">PPC workflows</td>
                      <td className="py-3 px-4 text-gray-700">$1,744.54</td>
                      <td className="py-3 px-4 text-gray-700">$0.21</td>
                      <td className="py-3 px-4 text-gray-700">$6.10</td>
                      <td className="py-3 px-4 text-gray-700">$110.01</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Spend Projection</td>
                      <td className="py-3 px-4 text-gray-700">$1,841.44</td>
                      <td className="py-3 px-4 text-gray-700">$0.28</td>
                      <td className="py-3 px-4 text-gray-700">$0.10</td>
                      <td className="py-3 px-4 text-gray-700">$0.67</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Geo Heatmap</td>
                      <td className="py-3 px-4 text-gray-700">$228.76</td>
                      <td className="py-3 px-4 text-gray-700">$4.28</td>
                      <td className="py-3 px-4 text-gray-700">$0.40</td>
                      <td className="py-3 px-4 text-gray-700">$0.35</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Campaign Automator</td>
                      <td className="py-3 px-4 text-gray-700">$192.01</td>
                      <td className="py-3 px-4 text-gray-700">$0.21</td>
                      <td className="py-3 px-4 text-gray-700">$0.00</td>
                      <td className="py-3 px-4 text-gray-700">$0.01</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
