import Link from 'next/link';

export default function OptimizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <section className="relative pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mt-30">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
              PPC Optimization Engine
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Make changes that{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                maximize the impact
              </span>{' '}
              of your ad spend
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our optimization engine makes it easier to take actions that move performance forward, 
              while stripping away recurring and repetitive work. Optimize one account or apply changes 
              across many, all in a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Trial →
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
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
                All the flexibility you need to{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  run accounts your way
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you prefer automation or hands-on management, our platform gives you complete control. 
                Run more efficient campaigns on a leaner budget, launch new ads and campaigns faster, and make 
                quick edits without needing to open the ads interface directly.
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">AdsOptima Express</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <select className="text-sm bg-white border border-gray-200 rounded-md px-3 py-1">
                        <option>All Accounts</option>
                      </select>
                      <select className="text-sm bg-white border border-gray-200 rounded-md px-3 py-1">
                        <option>All Suggestion Types</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        'Fix Products with empty Image Link',
                        'Fix Impression Share Lost Due To Budget',
                        'More Traffic for Converting Keywords',
                        'Increase Impression Share Converting Target ROAS'
                      ].map((suggestion, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded border border-gray-100">
                          <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">{suggestion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                                       <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                       <h4 className="font-semibold text-gray-900 mb-3">Account Level Placement Exclusion</h4>
                       <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-3 mb-4">
                         <div className="text-sm text-yellow-800">
                           <strong>Potential Wasted Spend = $191.89</strong>
                         </div>
                       </div>
                       
                       <div className="space-y-3 mb-4">
                         <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-100">
                           <div className="flex items-center space-x-2">
                             <input type="checkbox" className="rounded border-gray-300" />
                             <span className="text-sm text-gray-700">http://example.com</span>
                           </div>
                           <div className="text-xs text-gray-500">
                             <div>Cost: $45.67</div>
                             <div>Clicks: 23</div>
                           </div>
                         </div>
                         <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-100">
                           <div className="flex items-center space-x-2">
                             <input type="checkbox" className="rounded border-gray-300" />
                             <span className="text-sm text-gray-700">http://sample.org</span>
                           </div>
                           <div className="text-xs text-gray-500">
                             <div>Cost: $67.89</div>
                             <div>Clicks: 34</div>
                           </div>
                         </div>
                         <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-100">
                           <div className="flex items-center space-x-2">
                             <input type="checkbox" className="rounded border-gray-300" />
                             <span className="text-sm text-gray-700">http://test.net</span>
                           </div>
                           <div className="text-xs text-gray-500">
                             <div>Cost: $78.33</div>
                             <div>Clicks: 41</div>
                           </div>
                         </div>
                       </div>
                       
                       <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                         Apply Suggestions
                       </button>
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900 mb-6">
               Intelligent{' '}
               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                 Bid Management
               </span>
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Optimize your bids across demographics, devices, and time periods with AI-powered insights 
               that maximize ROI while maintaining your budget constraints.
             </p>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
               <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center justify-between mb-6">
                   <h3 className="text-xl font-bold text-gray-900">Demographic Bid Adjustments</h3>
                   <div className="flex space-x-2">
                     <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                     <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                     <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                   </div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                     <h4 className="font-semibold text-gray-900 mb-3">Performance Analysis (Last 90 Days)</h4>
                     
                     <div className="overflow-x-auto">
                       <table className="w-full text-sm">
                         <thead>
                           <tr className="border-b border-gray-200">
                             <th className="text-left py-2 px-2">Age Range</th>
                             <th className="text-left py-2 px-2">Current Bid</th>
                             <th className="text-left py-2 px-2">Suggested</th>
                             <th className="text-left py-2 px-2">Clicks</th>
                             <th className="text-left py-2 px-2">CTR</th>
                             <th className="text-left py-2 px-2">Conv. Rate</th>
                           </tr>
                         </thead>
                         <tbody className="space-y-2">
                           {[
                             { age: '25-34', current: '0.00%', suggested: '-5.00%', clicks: 13, ctr: '0.00%', conv: '0.00%' },
                             { age: '35-44', current: '0.00%', suggested: '-5.00%', clicks: 47, ctr: '8.25%', conv: '0.00%' },
                             { age: '45-54', current: '0.00%', suggested: '-5.00%', clicks: 65, ctr: '7.80%', conv: '0.00%' },
                             { age: '55-64', current: '0.00%', suggested: '5.00%', clicks: 106, ctr: '10.15%', conv: '0.00%' },
                             { age: '65+', current: '0.00%', suggested: '10.00%', clicks: 111, ctr: '12.35%', conv: '0.00%' }
                           ].map((row, index) => (
                             <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                               <td className="py-2 px-2 font-medium">{row.age}</td>
                               <td className="py-2 px-2 text-gray-600">{row.current}</td>
                               <td className="py-2 px-2">
                                 <span className={`px-2 py-1 rounded text-xs font-medium ${
                                   row.suggested.startsWith('-') 
                                     ? 'bg-red-100 text-red-700' 
                                     : 'bg-green-100 text-green-700'
                                 }`}>
                                   {row.suggested}
                                 </span>
                               </td>
                               <td className="py-2 px-2">{row.clicks}</td>
                               <td className="py-2 px-2">{row.ctr}</td>
                               <td className="py-2 px-2">{row.conv}</td>
                             </tr>
                           ))}
                         </tbody>
                       </table>
                     </div>
                     
                     <div className="flex space-x-3 mt-4">
                       <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                         Snooze
                       </button>
                       <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                         Apply New Bid Adjustments
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             <div>
               <div className="space-y-8">
                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
                     <p className="text-gray-600">AI analyzes 90-day performance data to identify optimal bid adjustments for each demographic segment.</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Recommendations</h3>
                     <p className="text-gray-600">Get actionable bid suggestions based on CTR, conversion rates, and historical performance patterns.</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Budget Optimization</h3>
                     <p className="text-gray-600">Automatically adjust bids to maximize ROI while staying within your daily and monthly budget limits.</p>
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
               Unlock{' '}
               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                 Hidden Opportunities
               </span>
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Discover underperforming campaigns and identify high-potential keywords with our advanced 
               performance analysis and predictive modeling capabilities.
             </p>
           </div>

           <div className="grid lg:grid-cols-3 gap-8 mb-12">
             <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-semibold text-gray-900">ROAS Improvement</h3>
                 <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                   </svg>
                 </div>
               </div>
               <div className="text-3xl font-bold text-purple-600 mb-2">+47%</div>
               <p className="text-sm text-gray-600">Average improvement across optimized campaigns</p>
               <div className="mt-4 p-3 bg-white rounded-lg">
                 <div className="text-xs text-gray-500 mb-2">Top Performers</div>
                 <div className="space-y-1">
                   <div className="flex justify-between text-sm">
                     <span>Summer Sale Campaign</span>
                     <span className="text-green-600">+89%</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span>Brand Awareness</span>
                     <span className="text-green-600">+67%</span>
                   </div>
                 </div>
               </div>
             </div>

             <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-semibold text-gray-900">Cost Reduction</h3>
                 <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                   </svg>
                 </div>
               </div>
               <div className="text-3xl font-bold text-pink-600 mb-2">-23%</div>
               <p className="text-sm text-gray-600">Average cost per conversion reduction</p>
               <div className="mt-4 p-3 bg-white rounded-lg">
                 <div className="text-xs text-gray-500 mb-2">Savings This Month</div>
                 <div className="text-lg font-bold text-green-600">$12,847</div>
                 <div className="text-xs text-gray-500">Across 15 campaigns</div>
               </div>
             </div>

             <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-semibold text-gray-900">Conversion Lift</h3>
                 <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
               </div>
               <div className="text-3xl font-bold text-blue-600 mb-2">+34%</div>
               <p className="text-sm text-gray-600">Average conversion rate improvement</p>
               <div className="mt-4 p-3 bg-white rounded-lg">
                 <div className="text-xs text-gray-500 mb-2">New Conversions</div>
                 <div className="text-lg font-bold text-green-600">+1,247</div>
                 <div className="text-xs text-gray-500">vs. last month</div>
               </div>
             </div>
           </div>

           <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
             <div className="flex items-center justify-between mb-6">
               <h3 className="text-xl font-bold text-gray-900">Campaign Performance Trends</h3>
               <div className="flex space-x-2">
                 <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">7 Days</button>
                 <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">30 Days</button>
                 <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">90 Days</button>
               </div>
             </div>
             
             <div className="grid grid-cols-4 gap-6 mb-6">
               <div className="text-center">
                 <div className="text-2xl font-bold text-gray-900">$45.2K</div>
                 <div className="text-sm text-gray-600">Total Spend</div>
                 <div className="text-xs text-green-600">+12% vs last period</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl font-bold text-gray-900">2.4K</div>
                 <div className="text-sm text-gray-600">Conversions</div>
                 <div className="text-xs text-green-600">+18% vs last period</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl font-bold text-gray-900">5.2%</div>
                 <div className="text-sm text-gray-600">Conv. Rate</div>
                 <div className="text-xs text-green-600">+0.8% vs last period</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl font-bold text-gray-900">$18.83</div>
                 <div className="text-sm text-gray-600">Cost per Conv.</div>
                 <div className="text-xs text-red-600">-5% vs last period</div>
               </div>
             </div>

            
             <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 h-32 flex items-end justify-center space-x-2">
               {[20, 35, 28, 45, 38, 52, 48, 65, 58, 72, 68, 85].map((height, index) => (
                 <div key={index} className="w-6 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t" style={{ height: `${height}%` }}></div>
               ))}
             </div>
             <div className="text-center text-sm text-gray-500 mt-2">Performance over time showing steady improvement</div>
           </div>
         </div>
       </section>

      
       <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Rule-Based Automation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Set up intelligent automation rules that work 24/7 to optimize your campaigns 
              based on real-time performance data and your business objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
           
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ad Copies with Decline in CTR (30 Days)</h3>
                
                <div className="space-y-6">
                 
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      IF (Conditions)
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border border-red-100">
                        <div className="text-sm text-gray-700">
                          <strong>Ad state:</strong> enabled
                        </div>
                      </div>
                      <div className="bg-white rounded p-3 border border-red-100">
                        <div className="text-sm text-gray-700">
                          <strong>CTR comparison:</strong> Preceding 30 days ≥ 1.3x Recent 30 days
                        </div>
                      </div>
                      <div className="bg-white rounded p-3 border border-red-100">
                        <div className="text-sm text-gray-700">
                          <strong>Minimum CTR:</strong> Preceding 30 days &gt; 0
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-red-600 text-sm font-medium hover:text-red-700 mt-3">
                      + Add Another Condition
                    </button>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      THEN (Actions)
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border border-green-100">
                        <div className="text-sm text-gray-700">
                          <strong>Apply Label:</strong> Declining CTR - Refresh Ad Copies
                        </div>
                      </div>
                      <div className="bg-white rounded p-3 border border-green-100">
                        <div className="text-sm text-gray-700">
                          <strong>Include in report:</strong> Yes
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-green-600 text-sm font-medium hover:text-green-700 mt-3">
                      + Add Another Action
                    </button>
                  </div>

                                     <div className="flex items-center justify-between">
                     <label className="flex items-center space-x-2">
                       <input type="checkbox" className="rounded border-gray-300" />
                       <span className="text-sm text-gray-700">Exclude recent changes applied from Rule Engine</span>
                     </label>
                     <select className="text-sm bg-white border border-gray-200 rounded-md px-3 py-1">
                       <option>Last 30 Days</option>
                     </select>
                   </div>

                   <div className="bg-gray-50 rounded-lg p-4 mt-4">
                     <div className="grid grid-cols-3 gap-4 text-center">
                       <div>
                         <div className="text-lg font-bold text-purple-600">24</div>
                         <div className="text-xs text-gray-600">Rules Active</div>
                       </div>
                       <div>
                         <div className="text-lg font-bold text-green-600">156</div>
                         <div className="text-xs text-gray-600">Actions Taken</div>
                       </div>
                       <div>
                         <div className="text-lg font-bold text-blue-600">$8.2K</div>
                         <div className="text-xs text-gray-600">Savings Generated</div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast Execution</h3>
                    <p className="text-gray-600">Rules execute in real-time, ensuring your campaigns are always optimized for maximum performance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Safeguards</h3>
                    <p className="text-gray-600">Built-in safety measures prevent over-optimization and ensure changes align with your business goals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Analytics</h3>
                    <p className="text-gray-600">Track the impact of your automation rules with detailed performance metrics and ROI analysis.</p>
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
               AI-Powered{' '}
               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                 Predictive Analytics
               </span>
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Leverage machine learning algorithms to predict campaign performance, identify trends, 
               and make data-driven decisions before your competitors.
             </p>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
               <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-2xl border border-gray-100 p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center justify-between mb-6">
                   <h3 className="text-xl font-bold text-gray-900">Predictive Performance Dashboard</h3>
                   <div className="flex space-x-2">
                     <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                     <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                     <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                   </div>
                 </div>
                 
                 <div className="space-y-6">
                   {/* Prediction Cards */}
                   <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white rounded-lg p-4 border border-purple-200">
                       <div className="text-xs text-purple-600 mb-2">Next 7 Days</div>
                       <div className="text-lg font-bold text-gray-900">+23%</div>
                       <div className="text-xs text-gray-600">Expected CTR</div>
                       <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                         <div className="bg-purple-500 h-2 rounded-full" style={{ width: '73%' }}></div>
                       </div>
                     </div>
                     
                     <div className="bg-white rounded-lg p-4 border border-pink-200">
                       <div className="text-xs text-pink-600 mb-2">Next 7 Days</div>
                       <div className="text-lg font-bold text-gray-900">+18%</div>
                       <div className="text-xs text-gray-600">Expected Conv.</div>
                       <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                         <div className="bg-pink-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                       </div>
                     </div>
                   </div>

                   {/* AI Recommendations */}
                   <div className="bg-white rounded-lg p-4 border border-gray-200">
                     <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                       <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                       </svg>
                       AI Recommendations
                     </h4>
                     
                     <div className="space-y-3">
                       <div className="flex items-start space-x-3 p-2 bg-green-50 rounded border border-green-200">
                         <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <div>
                           <div className="text-sm font-medium text-green-800">Increase budget for "Summer Sale" campaign</div>
                           <div className="text-xs text-green-600">95% confidence - Expected +34% ROI</div>
                         </div>
                       </div>
                       
                       <div className="flex items-start space-x-3 p-2 bg-blue-50 rounded border border-blue-200">
                         <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                         <div>
                           <div className="text-sm font-medium text-blue-800">Pause underperforming keywords</div>
                           <div className="text-xs text-blue-600">87% confidence - Save $2.1K monthly</div>
                         </div>
                       </div>
                       
                       <div className="flex items-start space-x-3 p-2 bg-purple-50 rounded border border-purple-200">
                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                         <div>
                           <div className="text-sm font-medium text-purple-800">Test new ad copy variations</div>
                           <div className="text-xs text-purple-600">78% confidence - Expected +12% CTR</div>
                         </div>
                       </div>
                     </div>
                   </div>

                   <div className="text-center">
                     <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                       View All AI Insights
                     </button>
                   </div>
                 </div>
               </div>
             </div>

             <div>
               <div className="space-y-8">
                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Modeling</h3>
                     <p className="text-gray-600">Our AI analyzes historical data and market trends to predict future performance with up to 95% accuracy.</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Learning</h3>
                     <p className="text-gray-600">The system continuously learns from new data, improving predictions and recommendations over time.</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Intelligence</h3>
                     <p className="text-gray-600">Stay ahead of the competition with insights into market trends and competitor performance patterns.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Your data security is our top priority
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">No changes without your approval, ever</h3>
              <p className="text-white/80">Every optimization action requires your explicit approval before implementation.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Full data encryption and GDPR compliance</h3>
              <p className="text-white/80">Enterprise-grade security with end-to-end encryption and full regulatory compliance.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">No ad platform access to account data</h3>
              <p className="text-white/80">Your data stays private and secure, never shared with third-party platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              PPC performance?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of advertisers who have already optimized their campaigns 
            and achieved remarkable results with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/demo" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Schedule a Demo
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
