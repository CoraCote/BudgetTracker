import Logo from './Logo';
import ScrollToTop from './ScrollToTop';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-600/30 to-blue-600/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 group">
              <Logo size="default" variant="white" />
              <div className="ml-3 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your advertising campaigns with AI-powered optimization. 
              Real-time insights, proven ROI, and results that speak for themselves.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" className="group relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transform duration-300 shadow-lg hover:shadow-blue-500/25">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Follow us on Twitter</span>
              </a>
              
              <a href="#" className="group relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transform duration-300 shadow-lg hover:shadow-blue-500/25">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Connect on LinkedIn</span>
              </a>
              
              <a href="#" className="group relative">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center hover:scale-110 transform duration-300 shadow-lg hover:shadow-pink-500/25">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Follow on Pinterest</span>
              </a>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <h4 className="text-sm font-semibold mb-2 text-gray-200">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-r-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  →
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></span>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Our Mission</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Careers</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Press & Media</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></span>
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">AI Campaign Manager</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Analytics Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">ROI Calculator</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Pricing Plans</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">API Documentation</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></span>
              Contact & Support
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us at</p>
                  <a href="mailto:wilhelm@adoptima.com" className="text-green-400 hover:text-green-300 transition-colors font-medium">wilhelm@adoptima.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us at</p>
                  <a href="tel:+1-800-ADOPTIMA" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">+1 (903) 780-2323 </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Visit us at</p>
                  <p className="text-purple-400 font-medium">123 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Help Center</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Live Chat</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">&copy; 2025 AdOptima. All rights reserved.</p>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-medium">Live Status: Operational</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors group">
                <span className="group-hover:underline decoration-purple-400 decoration-2">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors group">
                <span className="group-hover:underline decoration-blue-400 decoration-2">Terms of Service</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors group">
                <span className="group-hover:underline decoration-green-400 decoration-2">Cookie Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors group">
                <span className="group-hover:underline decoration-pink-400 decoration-2">GDPR Compliance</span>
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700/30">
            <div className="flex flex-wrap items-center justify-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>
    </footer>
  );
}
