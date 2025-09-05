import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, ArrowRight, Calendar, Play, Building, Megaphone, Copy, FileText, X, Check, TrendingUp } from 'lucide-react';

export default function PaidSearchOptimizationPage() {
  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                <Search className="w-4 h-4 mr-2" />
                Paid Search Optimization
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your all-in-one toolkit for great{' '}
                <span className="text-purple-600">paid search</span>{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  results
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Manual campaign management (especially at scale) is fraught with the risk of fatigue, burnout and error. 
                AdsOptima provides the tools you need to speed up account management, make fewer mistakes, and still 
                have time and energy to impact growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                  Start Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book A Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Create Schedule</h3>
                    <p className="text-sm text-gray-500">Edit details of the schedule</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="text-gray-500">×</span>
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot (3 Hours)</label>
                    <input 
                      type="text" 
                      defaultValue="00:00 - 03:00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone for this schedule: GMT</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2 text-sm text-gray-700">Apply Changes</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2 text-sm text-gray-700">Add To Alerts</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Send Notification</label>
                    <div className="space-y-2">
                      <input 
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                      <input 
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Export Result To Spreadsheet</label>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="Google Spreadsheet URL"
                        defaultValue="example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                      <input 
                        type="text" 
                        placeholder="Specify a sheet name"
                        defaultValue="Text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2 text-sm text-gray-700">Include run time, strategy name, and account name</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">Create Dynamic Campaigns</h4>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">Host source data feed</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Building className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">Build dynamic campaigns</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Megaphone className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm text-gray-700">Make your ads live</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                      <FileText className="w-4 h-4 mr-2" />
                      Create your own template
                    </button>
                    <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy from another account
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-3xl blur-3xl"></div>

              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Deploy advanced e-commerce tactics using custom Smart Campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Create advanced campaign structures based on weather conditions, product inventory, and more. 
              Split shopping and PMax campaigns by product performance metrics like ROAS. Campaigns are kept 
              up-to-date automatically by ADSOPTIMA.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="bg-green-100 rounded-t-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Campaign Type</h3>
                  <p className="text-sm text-gray-600">Select campaign type, feed label and locations to get</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">ADSOPTIMA Smart Campaigns</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Create Standard Shopping campaigns with automated Target ROAS bidding. See query data and add 
                      negative keywords while leveraging Googles smart bidding. Do advanced product grouping based on 
                      product performance using metrics like ROAS and attributes like price.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">Standard Shopping Campaigns</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Create Standard Shopping Campaigns with manual bidding (max CPC) or automated bidding strategies. 
                      Set bids for individual product groups and have complete control over each aspect of your campaign. 
                      See query data and add negative keywords.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">PMax Retail Campaigns</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Create Performance Max Retail Campaigns that are completely automated. Show ads on different 
                      advertising channels like Gmail, Discovery, etc. for more exposure. No access to granular query 
                      data and no support for adding negatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Feed Label</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                  <option>Use All Available Fields</option>
                  <option>Custom Fields</option>
                  <option>Product Categories</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Locations To Target</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                  <option>All Countries & Territories</option>
                  <option>United States</option>
                  <option>Europe</option>
                  <option>Asia Pacific</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Paid media teams use ADSOPTIMA to manage PPC accounts their way
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-gray-800 rounded-full text-sm font-medium">
                Case study
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                See how Driva used the Search Terms N-Grams tool to analyze spend on one- and two-word combinations 
                that hadn't generated conversions.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-b from-yellow-200 to-orange-400 rounded-2xl p-8 h-64 relative overflow-hidden">
                <div className="absolute left-4 right-4">
                  <div className="text-center flex-1">
                    <div className="text-3xl font-bold text-gray-900 mb-2">DRIVA</div>
                    <div className="text-sm text-gray-700">CASE STUDY</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 text-gray-800 font-semibold">
                    <Check className="w-4 h-4" />
                    <span>ADSOPTIMA</span>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex justify-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-white opacity-60" />
                    <TrendingUp className="w-6 h-6 text-white opacity-40" />
                    <TrendingUp className="w-6 h-6 text-white opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Morefire Case Study */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-gray-800 rounded-full text-sm font-medium">
                Case study
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                See how Morefire regained control over account performance using the Keyword Lasso and Traffic 
                Sculptor tools.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-b from-yellow-200 to-orange-400 rounded-2xl p-8 h-64 relative overflow-hidden">
                <div className="absolute left-4 right-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-gray-900">Morefire</span>
                    </div>
                    <div className="text-sm text-gray-700">CASE STUDY</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 text-gray-800 font-semibold">
                    <Check className="w-4 h-4" />
                    <span>ADSOPTIMA</span>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex justify-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-white opacity-60" />
                    <TrendingUp className="w-6 h-6 text-white opacity-40" />
                    <TrendingUp className="w-6 h-6 text-white opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
