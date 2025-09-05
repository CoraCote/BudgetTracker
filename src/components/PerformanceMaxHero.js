import Link from 'next/link';

export default function PerformanceMaxHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-400/15 to-purple-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-purple-700 font-medium text-sm">PPC Optimization Engine</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-20 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Meet your co-pilot for{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            Performance Max
          </span>{' '}
          success.
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-30 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          AdsOptima simplifies PMax campaign management and ensures your money goes where you want it to go by giving you more visibility and control over performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link 
            href="/signup" 
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="relative z-10">Start Trial</span>
            <svg className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link 
            href="/contact" 
            className="group inline-flex items-center px-8 py-4 bg-white border-2 border-purple-200 hover:border-purple-300 text-purple-700 hover:text-purple-800 font-semibold text-lg rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book A Demo
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-float-slow opacity-60"></div>
        <div className="absolute top-32 right-16 w-3 h-3 bg-pink-400 rounded-full animate-float-medium opacity-50"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-blue-400 rounded-full animate-float-fast opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-500 rounded-full animate-float-slow opacity-70"></div>
      </div>
    </section>
  );
}
