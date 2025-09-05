import Link from 'next/link';

/**
 * Hero Section component with enhanced bubble effects and animations
 * Features floating bubbles, gradient text, and interactive elements
 */
export default function HeroSection() {
  return (
    <section className="relative pt-50 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "aliceblue" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full animate-bounce opacity-60" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full animate-bounce opacity-50" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-pink-200/30 to-blue-200/30 rounded-full animate-bounce opacity-40" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        
        <div className="absolute top-32 left-1/3 w-16 h-16 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full animate-pulse opacity-70" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-16 right-1/3 w-12 h-12 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full animate-pulse opacity-60" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute top-24 left-1/2 w-8 h-8 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full animate-ping opacity-50" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-36 right-1/4 w-6 h-6 bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-full animate-ping opacity-40" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-32 left-1/2 w-4 h-4 bg-gradient-to-br from-blue-300/30 to-pink-300/30 rounded-full animate-ping opacity-30" style={{ animationDelay: '7s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="flex justify-center mt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight relative">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
              Smarter PPC Management, Simplified
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent blur-sm opacity-30 -z-10"></div>
            </span>
          </h1>
        </div>

        <div className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed relative">
          <p className="mb-0">
            Get better results with paid media while staying in charge of your account. Review insights, monitor campaigns, optimize performance, and build safeguards with AdsOptima's round-the-clock PPC automation.
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <div className="flex items-center text-purple-600 group hover:scale-105 transition-transform duration-300">
            <div className="w-5 h-5 mr-2 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium group-hover:text-purple-700 transition-colors">Google Search & Shopping</span>
          </div>
          
          <div className="flex items-center text-purple-600 group hover:scale-105 transition-transform duration-300">
            <div className="w-5 h-5 mr-2 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium group-hover:text-purple-700 transition-colors">Performance Max</span>
          </div>
          
          <div className="flex items-center text-purple-600 group hover:scale-105 transition-transform duration-300">
            <div className="w-5 h-5 mr-2 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium group-hover:text-purple-700 transition-colors">Microsoft Ads</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            href="/signup" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="relative z-10">Start Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full transition-all duration-700 group-hover:w-40 group-hover:h-40 group-hover:-top-20 group-hover:-left-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
          </Link>
          
          <Link 
            href="#demo" 
            className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Book A Demo</span>
            <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border-2 border-purple-500 rounded-lg group-hover:border-purple-600 transition-colors duration-300"></div>
          </Link>
        </div>

        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full animate-pulse opacity-60" style={{ animationDelay: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-pulse opacity-50" style={{ animationDelay: '9s' }}></div>
      </div>
    </section>
  );
}
