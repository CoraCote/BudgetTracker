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
              See how Eliminate Wasted Spend used the Rule Engine's automation to spot irrelevant placements and save their client thousands of dollars in ad spend.
            </p>
            
            <Link 
              href="/case-studies/eliminate-wasted-spend" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <div className="absolute -left-4 top-0 w-16 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-l-2xl flex items-center justify-center">
                <div className="text-white font-bold text-sm transform -rotate-90 whitespace-nowrap">
                  CASE STUDY
                </div>
              </div>

              <div className="absolute inset-0 bg-gray-50 rounded-2xl opacity-50" style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}></div>

              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <div className="text-green-600 font-bold text-lg">OPTMYZR</div>
                </div>

                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-green-600 font-bold text-lg">eliminatewastedspend</div>
                </div>

                <div className="mb-4">
                  <p className="text-green-600 text-sm">
                    SAVING YOU MORE THAN YOU PAY US
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">CASE STUDY</h3>
                </div>

                <div className="flex justify-center space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transform rotate-12">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center transform -rotate-12">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center transform rotate-45">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}