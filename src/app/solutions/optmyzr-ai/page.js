import Link from 'next/link';
import { ArrowRight, Calendar, Brain, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'AI For Paid Media - ADSOPTIMA Sidekick | AdsOptima',
  description: 'Amplify and complement your human marketing team with AI. Get AI-generated insights, ad copy, and performance narratives with ADSOPTIMA Sidekick.',
};

export default function ADSOPTIMAAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Marketing Solution
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Amplify and complement your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  human marketing team
                </span>{' '}
                with AI
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                AI is most valuable when it's built right into the tools and workflows you already use. 
                In ADSOPTIMA, it's there to surface account insights, craft RSA suggestions, build 
                machine-learning budget forecasts, and more — right where you work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/demo" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold rounded-xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book A Demo
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">Ask ADSOPTIMA Sidekick</h3>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Beta</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-6">
                  Get help from ADSOPTIMA sidekick to know more about PPC account performance, 
                  optimization suggestions and more.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-medium">ADSOPTIMA Sidekick</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Hi Development! 👋 I am ADSOPTIMA Sidekick - your AI based PPC Assistant. 
                          I can help you find some interesting insights about your account. 
                          I am still learning about PPC and this world and my creators have put me in Beta. 
                          What can I help you with?
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">Suggested questions:</p>
                    <div className="space-y-2">
                      {[
                        "Quick Performance Summary",
                        "How did the account performance change in the last 30 days compared to the previous period?",
                        "What are some of the top optimization opportunities for this account?",
                        "See the reason for change in a particular account KPI",
                        "Tell me three good things about my account.",
                        "Show me some express optimization suggestions.",
                        "Show me why my conversions reduced last month"
                      ].map((question, index) => (
                        <div 
                          key={index}
                          className={`text-sm p-3 rounded-lg cursor-pointer transition-colors ${
                            index === 6 ? 'bg-purple-100 text-purple-700' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {question}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3">
                    <input 
                      type="text" 
                      placeholder="Ask custom questions" 
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                    <button className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" />
                    </button>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Enhancements for PPC Account Management
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Escape account management fatigue with AI-backed insights
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sidekick, the AI assistant built into ADSOPTIMA, makes sense of countless insights 
                and opportunities so you don't have to dig through endless screens. Just ask what 
                you need, from recent wins to performance trends, and get actionable answers you 
                can use to impress your clients.
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">Ask ADSOPTIMA Sidekick</h3>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Beta</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-6">
                  Get help from ADSOPTIMA sidekick to know more about PPC account performance, 
                  optimization suggestions and more.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-900 font-medium mb-2">Sample Name</p>
                    <p className="text-sm text-gray-700">
                      What are some of the top optimization opportunities for this account?
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-medium mb-2">ADSOPTIMA Sidekick</p>
                        <div className="text-sm text-gray-700 space-y-3">
                          <p className="font-medium">Performance Improvement Opportunities:</p>
                          <ol className="list-decimal list-inside space-y-2 ml-4">
                            <li>
                              <strong>Optimize High-Cost Campaigns:</strong> Identify and optimize campaigns 
                              like 'Google Ads Campaign-1' and 'Google Ads Campaign-2' for cost efficiency. 
                              <a href="#" className="text-blue-600 hover:underline ml-1">PPC Investigator Tool</a>
                            </li>
                            <li>
                              <strong>Negative Keyword Management:</strong> Use ADSOPTIMA tool for "Non Converting 
                              Queries (Shopping)" to add negative keywords for queries with high cost, low CTR, 
                              and zero conversions. <a href="#" className="text-blue-600 hover:underline ml-1">Negative Keyword Tool</a>
                            </li>
                            <li>
                              <strong>Monitor Keywords With Cost Increase:</strong> Monitor keywords with 
                              significant cost increases using ADSOPTIMA's tool to manage bids and budgets. 
                              <a href="#" className="text-blue-600 hover:underline ml-1">Cost Increase Keyword Monitoring Tool</a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input 
                      type="text" 
                      placeholder="Ask a question..." 
                      className="flex-1 bg-gray-50 rounded-lg px-4 py-2 text-sm outline-none"
                    />
                    <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm hover:bg-gray-300 transition-colors">
                      Clear Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Data Security is Our Priority
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We understand the importance of protecting your sensitive marketing data. 
              That's why we've built security into every layer of our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No changes without your approval, ever",
                description: "Every AI-suggested change requires your explicit approval before implementation."
              },
              {
                title: "Full data encryption and GDPR compliance",
                description: "Your data is encrypted in transit and at rest, with full GDPR compliance."
              },
              {
                title: "No ad platform access to account data",
                description: "We never share your account data with advertising platforms without permission."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="opacity-80 leading-relaxed">{item.description}</p>
              </div>
            ))}
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

      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your PPC Management with AI?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of marketers who are already using ADSOPTIMA Sidekick to 
            amplify their results and save hours every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/demo" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-xl transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
