import Link from 'next/link';
import { ArrowRight, Calendar, Brain, Sparkles, Zap, Star, TrendingUp, Shield, Users, Rocket, ChevronRight, Play, CheckCircle, ArrowUpRight, BarChart3 } from '../../../components/ui/icons/IconComponents';

export const metadata = {
  title: 'AI For Paid Media - ADSOPTIMA Sidekick | AdsOptima',
  description: 'Amplify and complement your human marketing team with AI. Get AI-generated insights, ad copy, and performance narratives with ADSOPTIMA Sidekick.',
};

export default function ADSOPTIMAAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-blue-400 rounded-full animate-bounce animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium group hover:scale-105 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI-Powered Marketing Solution
                </span>
                <Zap className="w-4 h-4 ml-2 text-yellow-400 animate-pulse" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Amplify and complement your</span>
                <br />
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
                    human marketing team
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                </span>
                <br />
                <span className="text-white">with AI</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                AI is most valuable when it's built right into the tools and workflows you already use. 
                In ADSOPTIMA, it's there to surface account insights, craft RSA suggestions, build 
                machine-learning budget forecasts, and more — right where you work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/signup" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white font-semibold rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <span className="relative flex items-center">
                    <Rocket className="w-5 h-5 mr-2 animate-bounce" />
                    Start Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link 
                  href="/demo" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">10,000+ marketers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-300 text-sm">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 max-w-lg mx-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Brain className="w-6 h-6 text-white animate-pulse" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">ADSOPTIMA Sidekick</h3>
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 text-xs font-medium rounded-full border border-purple-400/30">
                            AI Assistant
                          </span>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full border border-yellow-400/30">
                            Beta
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-1000"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse animation-delay-2000"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                    Get help from ADSOPTIMA sidekick to know more about PPC account performance, 
                    optimization suggestions and more.
                  </p>
                  
                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <p className="text-white font-semibold">ADSOPTIMA Sidekick</p>
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-200"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-400"></div>
                            </div>
                          </div>
                          <p className="text-gray-200 leading-relaxed">
                            Hi Development! 👋 I am ADSOPTIMA Sidekick - your AI based PPC Assistant. 
                            I can help you find some interesting insights about your account. 
                            I am still learning about PPC and this world and my creators have put me in Beta. 
                            What can I help you with?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-white font-semibold text-sm">Suggested questions:</p>
                    <div className="grid gap-3">
                      {[
                        { text: "Quick Performance Summary", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
                        { text: "Account performance change analysis", icon: BarChart3, color: "from-green-500 to-emerald-500" },
                        { text: "Top optimization opportunities", icon: Star, color: "from-yellow-500 to-orange-500" },
                        { text: "KPI change reasons", icon: ArrowUpRight, color: "from-purple-500 to-pink-500" },
                        { text: "Account highlights", icon: CheckCircle, color: "from-indigo-500 to-purple-500" },
                        { text: "Express optimization suggestions", icon: Zap, color: "from-pink-500 to-rose-500" },
                        { text: "Conversion reduction analysis", icon: TrendingUp, color: "from-red-500 to-pink-500" }
                      ].map((question, index) => (
                        <div 
                          key={index}
                          className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                            index === 6 
                              ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/50' 
                              : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-gradient-to-r ${question.color} rounded-lg flex items-center justify-center shadow-lg`}>
                              <question.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white text-sm font-medium group-hover:text-purple-200 transition-colors">
                              {question.text}
                            </span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-white/30 transition-all duration-300">
                      <input 
                        type="text" 
                        placeholder="Ask custom questions..." 
                        className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm outline-none"
                      />
                      <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Enhancements
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Escape account management fatigue with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                AI-backed insights
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Sidekick makes sense of countless insights and opportunities
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The AI assistant built into ADSOPTIMA eliminates the need to dig through endless screens. 
                  Just ask what you need, from recent wins to performance trends, and get actionable answers 
                  you can use to impress your clients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Brain, title: "Smart Insights", desc: "AI-powered account analysis", color: "from-purple-500 to-pink-500" },
                  { icon: TrendingUp, title: "Performance Trends", desc: "Real-time optimization suggestions", color: "from-blue-500 to-cyan-500" },
                  { icon: Zap, title: "Instant Reports", desc: "Automated client-ready summaries", color: "from-green-500 to-emerald-500" },
                  { icon: Star, title: "Proactive Alerts", desc: "Never miss optimization opportunities", color: "from-yellow-500 to-orange-500" }
                ].map((feature, index) => (
                  <div key={index} className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:border-purple-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-white to-purple-50/30 rounded-3xl shadow-2xl border border-purple-100/50 p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">AI Demo Interface</h3>
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            Live Demo
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                            Beta
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Online</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    Experience how ADSOPTIMA Sidekick analyzes your PPC account and provides actionable insights.
                  </p>

                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900">Sample User</span>
                        <span className="text-xs text-gray-500">2 minutes ago</span>
                      </div>
                      <p className="text-gray-800 font-medium">
                        What are some of the top optimization opportunities for this account?
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="font-semibold text-gray-900">ADSOPTIMA Sidekick</span>
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-200"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-400"></div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <p className="font-semibold text-gray-900 text-lg">Performance Improvement Opportunities:</p>
                            
                            <div className="space-y-4">
                              {[
                                {
                                  title: "Optimize High-Cost Campaigns",
                                  desc: "Identify and optimize campaigns like 'Google Ads Campaign-1' and 'Google Ads Campaign-2' for cost efficiency.",
                                  tool: "PPC Investigator Tool",
                                  color: "from-red-500 to-orange-500",
                                  icon: TrendingUp
                                },
                                {
                                  title: "Negative Keyword Management", 
                                  desc: "Use ADSOPTIMA tool for 'Non Converting Queries (Shopping)' to add negative keywords for queries with high cost, low CTR, and zero conversions.",
                                  tool: "Negative Keyword Tool",
                                  color: "from-blue-500 to-cyan-500",
                                  icon: Shield
                                },
                                {
                                  title: "Monitor Keywords With Cost Increase",
                                  desc: "Monitor keywords with significant cost increases using ADSOPTIMA's tool to manage bids and budgets.",
                                  tool: "Cost Increase Keyword Monitoring Tool",
                                  color: "from-green-500 to-emerald-500",
                                  icon: Zap
                                }
                              ].map((item, index) => (
                                <div key={index} className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:border-purple-200/50 transition-all duration-300">
                                  <div className="flex items-start space-x-3">
                                    <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                      <item.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                                      <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                                      <a href="#" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-300">
                                        {item.tool}
                                        <ArrowUpRight className="w-3 h-3 ml-1" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <input 
                        type="text" 
                        placeholder="Ask a question..." 
                        className="w-full bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 text-sm outline-none border border-gray-200 hover:border-purple-300 focus:border-purple-400 transition-colors duration-300"
                      />
                    </div>
                    <button className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                      Send
                    </button>
                    <button className="px-4 py-4 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-2xl text-sm font-medium transition-colors duration-300">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise-Grade Security
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Your Data Security is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Our Priority
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We understand the importance of protecting your sensitive marketing data. 
              That's why we've built security into every layer of our platform with 
              enterprise-grade encryption and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No changes without your approval, ever",
                description: "Every AI-suggested change requires your explicit approval before implementation.",
                icon: CheckCircle,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-500/20 to-emerald-500/20"
              },
              {
                title: "Full data encryption and GDPR compliance",
                description: "Your data is encrypted in transit and at rest, with full GDPR compliance.",
                icon: Shield,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-500/20 to-cyan-500/20"
              },
              {
                title: "No ad platform access to account data",
                description: "We never share your account data with advertising platforms without permission.",
                icon: Users,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-500/20 to-pink-500/20"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-8">Trusted by leading organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20">
                <span className="text-sm font-medium">SOC 2 Type II</span>
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20">
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20">
                <span className="text-sm font-medium">ISO 27001</span>
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20">
                <span className="text-sm font-medium">256-bit SSL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Paid media teams love ADSOPTIMA's AI support, which makes PPC management even faster
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Case study
              </div>
              <p className="text-xl text-gray-700">
                BBQGuys uses ADSOPTIMA's AI-powered capabilities to grow performance and stay ahead of the curve.
              </p>
              <Link 
                href="/case-studies/bbqguys" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 font-semibold rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-teal-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white text-sm opacity-80">ADSOPTIMA®</div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold">BBQGUYS®</div>
                  </div>
                  <div className="text-lg opacity-90">CASE STUDY</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Case study
              </div>
              <p className="text-xl text-gray-700">
                Metrik Marketing delights clients with AI summary-enriched reports.
              </p>
              <Link 
                href="/case-studies/metrik-marketing" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 font-semibold rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700"></div>
              <div className="relative z-10 text-center text-white">
                <div className="text-2xl font-bold mb-2">CASE STUDY</div>
                <div className="text-sm opacity-80">Vertical Text</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="text-3xl font-bold text-gray-900 mr-2">METR</div>
                <div className="text-3xl font-bold text-green-600">1K</div>
              </div>
              <div className="text-lg text-green-600 font-medium mb-2">marketing</div>
              <div className="text-sm text-blue-600 mb-4">Marketing That Makes Sense</div>
              <div className="text-xl font-bold text-gray-900">CASE STUDY</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="absolute top-20 left-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-pink-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-blue-400 rounded-full animate-bounce animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce animation-delay-3000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-medium mb-8">
              <Rocket className="w-4 h-4 mr-2 animate-bounce" />
              <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
              <Star className="w-4 h-4 ml-2 text-yellow-400 animate-pulse" />
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Ready to Transform Your{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 animate-gradient-x">
                  PPC Management
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              </span>
              <br />
              <span className="text-white">with AI?</span>
            </h2>

            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of marketers who are already using ADSOPTIMA Sidekick to 
              amplify their results and save hours every week. Start your free trial today 
              and experience the future of PPC management.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link 
                href="/signup" 
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-white via-white to-purple-50 hover:from-purple-50 hover:via-white hover:to-pink-50 text-purple-600 font-bold rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <span className="relative flex items-center text-lg">
                  <Rocket className="w-6 h-6 mr-3 animate-bounce" />
                  Start Free Trial
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link 
                href="/demo" 
                className="group inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-bold rounded-2xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
                <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm">10,000+ active users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm">4.9/5 average rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
