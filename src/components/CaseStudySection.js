import Link from 'next/link';

export default function CaseStudySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Paid media teams build powerful custom automations with the{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Rule Engine
              </span>
            </h2>
            
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Case study
              </span>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              See how Northfield Digital used Rule Engine automation to flag irrelevant placements every week and redirect wasted budget back into campaigns that convert.
            </p>

            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl p-8 pl-20 shadow-2xl overflow-hidden">
              <div className="absolute left-0 top-0 w-14 h-full bg-gradient-to-b from-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-white font-bold text-xs tracking-widest transform -rotate-90 whitespace-nowrap">
                  CASE STUDY
                </div>
              </div>

              <div className="absolute inset-0 left-14 opacity-50 pointer-events-none" style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}></div>

              <div className="relative z-10 text-center">
                <div className="mb-6 flex items-center justify-center gap-2">
                  <span className="w-3 h-3 rotate-45 bg-gradient-to-br from-purple-500 to-pink-500" aria-hidden="true"></span>
                  <span className="text-2xl font-semibold tracking-tight text-gray-700">Northfield Digital</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">Performance agency &middot; 40+ managed accounts</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-purple-600">-18%</div>
                    <div className="text-xs text-gray-600 mt-1">Wasted placement spend</div>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-pink-600">3 hrs</div>
                    <div className="text-xs text-gray-600 mt-1">Saved per account each week</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900">Automated placement exclusions with Rule Engine</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
