import Link from 'next/link';
import Logo from './Logo';

/**
 * CTA Section component with enhanced bubble effects and animations
 * Features a gradient background with interactive elements
 */
export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute top-20 right-20 w-8 h-8 bg-white/20 rounded-full animate-bounce opacity-60" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 bg-white/20 rounded-full animate-bounce opacity-50" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/20 rounded-full animate-ping opacity-40" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Logo size="default" variant="white" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to transform your advertising?
        </h2>
        
        <p className="text-xl text-purple-100 mb-8">
          Join thousands of marketers who've already optimized their campaigns with AdOptima.
        </p>
        
        <Link 
          href="/signup" 
          className="inline-flex items-center bg-white text-purple-600 hover:bg-gray-50 px-8 py-2 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden group"
        >
          <span className="relative z-10">Start Your Free Trial →</span>
          <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-purple-100 rounded-full transition-all duration-700 group-hover:w-40 group-hover:h-40 group-hover:-top-20 group-hover:-left-20"></div>
          <div className="absolute inset-0 bg-white rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
        </Link>
      </div>
    </section>
  );
}
