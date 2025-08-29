import Link from 'next/link';
import { 
  Search, 
  Calendar, 
  Play, 
  Building2, 
  Rocket, 
  Star, 
  Plus, 
  Folder, 
  CheckCircle,
  ArrowRight,
  Shield,
  Lock,
  Eye
} from 'lucide-react';

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - First Image Content */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
                <Search className="w-4 h-4 mr-2" />
                PPC Workflows & Integrations
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unify your digital marketing operations and build a more{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  agile PPC team
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Good teams become great with the right tech. AdOptima helps you build SOPs and checklists, 
                sync with project management and workplace communication tools, and integrate any type of 
                data to build the team and systems you want.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Start Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-200">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book A Demo
                </button>
              </div>
            </div>
            
            {/* Right Content - Data Integrations Panel */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Data Integrations</h3>
                    <p className="text-gray-600">Connect and view informative data from different sources at one place</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">BETA</span>
                </div>
                
                {/* Tabs */}
                <div className="flex space-x-8 mb-6 border-b border-gray-200">
                  <button className="pb-2 text-gray-500 hover:text-gray-700">Data Sets</button>
                  <button className="pb-2 text-purple-600 border-b-2 border-purple-600 font-medium">Data Connectors</button>
                </div>
                
                {/* Connectors */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Connectors</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <Plus className="w-8 h-8 text-blue-600 mb-2" />
                      <span className="text-sm text-blue-700 font-medium">Add New Data Connector</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <Folder className="w-8 h-8 text-orange-600 mb-2" />
                      <span className="text-sm text-orange-700 font-medium">Hubspot</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg border border-green-200">
                      <Folder className="w-8 h-8 text-green-600 mb-2" />
                      <span className="text-sm text-green-700 font-medium">Google Spreadsheet</span>
                    </div>
                  </div>
                  
                  {/* Integrations Dropdown */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Integrations</label>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="space-y-3">
                        {[
                          { name: 'Google Spreadsheet', icon: '📊', color: 'text-green-600' },
                          { name: 'Hubspot', icon: '🔴', color: 'text-orange-600' },
                          { name: 'Zoho', icon: '🔵', color: 'text-red-600' },
                          { name: 'Salesforce', icon: '🔵', color: 'text-blue-600' },
                          { name: 'Shopify', icon: '🟢', color: 'text-green-600' },
                          { name: 'Other Integrations', icon: '@', color: 'text-gray-600' }
                        ].map((integration, index) => (
                          <div key={index} className="flex items-center space-x-3 p-2 hover:bg-white rounded cursor-pointer">
                            <span className="text-lg">{integration.icon}</span>
                            <span className={`font-medium ${integration.color}`}>{integration.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PPC Workflows Section - Second Image Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 border-t-4 border-green-500">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  Fully customize your PPC experience with custom data sources
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  AdOptima lets you connect first-party and business data using any format or source—customer 
                  lists exported from your CRM, margin data to optimize product grouping, offline conversions 
                  for value-based bidding, and more.
                </p>
              </div>
              
              {/* Right Content - Account Blueprints */}
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Account Blueprints</h3>
                      <p className="text-gray-600">Set up blueprints for efficient team workflow and account management</p>
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Create New Blueprint
                    </button>
                  </div>
                  
                  <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500 fill-current" />
                    Try AI Generated Blueprints
                  </button>
                </div>
                
                {/* Navigation Bar */}
                <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
                  <Search className="w-5 h-5 text-gray-500" />
                  <button className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg">My Tasks</button>
                  <button className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-200">User Roles</button>
                  <select className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-200">
                    <option>All</option>
                  </select>
                  <button className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Bulk Actions
                  </button>
                </div>
                
                {/* Blueprint Table */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blueprint</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Run Blueprint</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[1, 2, 3, 4].map((num) => (
                        <tr key={num} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-medium text-gray-900">New Blueprint {num}</span>
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">A</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Published
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            Unscheduled tasks{' '}
                            <button className="text-blue-600 hover:text-blue-800">View Details</button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-800 font-medium">
                              Start Blueprint Now
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button className="text-gray-400 hover:text-gray-600">
                                <Search className="w-4 h-4" />
                              </button>
                              <button className="text-gray-400 hover:text-gray-600">
                                <CheckCircle className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - Third Image Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Paid media teams run more efficient processes and operations using AdOptima
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                Case study
              </span>
              <p className="text-xl text-gray-600 leading-relaxed">
                See how Driva structured key optimizations under a weekly Account Blueprint to automate 
                tracking and democratize accountability.
              </p>
              <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>
            
            {/* Right Content - Case Study Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  {/* Upward arrows */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-8 opacity-20">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 transform -rotate-90" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="flex justify-end mb-4">
                    <div className="flex items-center space-x-1 text-black font-bold">
                      <CheckCircle className="w-5 h-5" />
                      <span>ADOPTIMA</span>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold text-black mb-2">EDRIVA</h3>
                  <p className="text-lg text-black font-medium">CASE STUDY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <Shield className="w-8 h-8 text-white" />
              <p className="text-white font-medium">No changes without your approval, ever</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Lock className="w-8 h-8 text-white" />
              <p className="text-white font-medium">Full data encryption and GDPR compliance</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Eye className="w-8 h-8 text-white" />
              <p className="text-white font-medium">No ad platform access to account data</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
