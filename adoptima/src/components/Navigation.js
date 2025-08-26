import Link from 'next/link';
import Logo from './Logo';

/**
 * Navigation component with bubble effects and modern design
 * Features a fixed navigation bar with backdrop blur and smooth transitions
 */
export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-4 right-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-6 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo size="default" variant="default" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer group">
              <span className="relative">
                Products
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              </span>
              <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className="flex items-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer group">
              <span className="relative">
                Solutions
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              </span>
              <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className="flex items-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer group">
              <span className="relative">
                Resources
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              </span>
              <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className="flex items-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer group">
              <span className="relative">
                Company
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              </span>
              <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className="flex items-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer group">
              <span className="relative">
                Pricing
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              </span>
              <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/signin" 
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors relative group"
            >
              <span>Log In</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:-top-16 group-hover:-left-16"></div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
