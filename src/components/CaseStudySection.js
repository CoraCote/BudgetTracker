import Link from 'next/link';

export default function CaseStudySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Paid media teams use AdOptima to stay in control of their{' '}
            <Link href="/solutions/performance-max" className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4 transition-colors">
              Performance Max
            </Link>{' '}
            campaigns
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
              <span className="text-green-700 font-medium text-sm">Case study</span>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Levitate Foundry drives 30% PMax ROAS growth with 500 hours saved
              </h3>
            </div>

            <Link 
              href="/case-studies/levitate-foundry" 
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white hover:bg-purple-700 font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </Link>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 rounded-2xl p-12 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-16 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
              </div>

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-16 left-16 w-8 h-8 text-white/30 animate-float-slow">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                </div>
                <div className="absolute top-24 right-20 w-6 h-6 text-white/40 animate-float-medium" style={{ animationDelay: '1s' }}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                </div>
                <div className="absolute bottom-24 left-24 w-10 h-10 text-white/20 animate-float-fast" style={{ animationDelay: '2s' }}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                </div>
                <div className="absolute bottom-16 right-16 w-4 h-4 text-white/50 animate-float-slow" style={{ animationDelay: '3s' }}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                </div>
                <div className="absolute top-1/2 left-1/3 w-7 h-7 text-white/35 animate-float-medium" style={{ animationDelay: '4s' }}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                </div>
                <div className="absolute top-1/3 right-1/4 w-5 h-5 text-white/45 animate-float-fast" style={{ animationDelay: '5s' }}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                </div>
              </div>

              <div className="absolute top-6 right-6">
                <span className="text-white/80 text-sm font-semibold tracking-wider">ADOPTIMA</span>
              </div>
      
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Levitate
                </h3>
                <h4 className="text-xl md:text-2xl text-white/90 font-light tracking-widest mb-2">
                  FOUNDRY
                </h4>
                <p className="text-sm md:text-base text-white/80 font-light tracking-widest">
                  CASE STUDY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
