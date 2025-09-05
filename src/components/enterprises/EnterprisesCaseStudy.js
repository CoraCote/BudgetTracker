import Link from 'next/link';

export default function EnterprisesCaseStudy() {
  const caseStudies = [
    {
      badge: "Case study",
      title: "Peak Ace improves engagement and conversion rates with more personalized campaigns",
      company: "PEAK ACE",
      gradient: "from-purple-600 to-blue-600",
      description: "Digital marketing agency achieves 40% increase in client ROI through advanced automation and data-driven insights."
    },
    {
      badge: "Case study", 
      title: "Mabo increases account manager productivity by 56% with AdsOptima",
      company: "MABO",
      gradient: "from-teal-600 to-cyan-600",
      description: "Enterprise team scales operations efficiently while maintaining quality and client satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Enterprise PPC teams manage accounts securely in{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              record time
            </span>
            {' '}with AdsOptima, following best practices
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                  {study.badge}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {study.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <Link 
                  href="/case-studies" 
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className={`h-32 bg-gradient-to-r ${study.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold mb-2">{study.company}</div>
                    <div className="text-sm opacity-90">CASE STUDY</div>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 text-white/80 font-bold text-sm">ADSOPTIMA</div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Enterprise Clients", color: "text-purple-600" },
              { number: "40%", label: "Average ROI Increase", color: "text-pink-600" },
              { number: "24/7", label: "Dedicated Support", color: "text-blue-600" },
              { number: "99.9%", label: "Uptime SLA", color: "text-green-600" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl text-purple-200 mb-6">"</div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "AdsOptima has transformed how our enterprise team manages PPC campaigns. The automation capabilities 
              and enterprise-grade security give us confidence to scale our operations while maintaining the highest 
              standards for our clients."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                SM
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                <div className="text-gray-600">VP of Digital Marketing, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
