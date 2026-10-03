import Link from 'next/link';

export default function EnterprisesCaseStudy() {
  const caseStudies = [
    {
      badge: "Case study",
      title: "Northfield Digital improves engagement and conversion rates with more personalized campaigns",
      company: "Northfield Digital",
      initials: "ND",
      gradient: "from-purple-600 to-indigo-600",
      description: "Performance agency lifts client conversion rates by 12% through advanced automation and data-driven insights."
    },
    {
      badge: "Case study",
      title: "Copperleaf Home increases account manager productivity by 25% with AdsOptima",
      company: "Copperleaf Home",
      initials: "CH",
      gradient: "from-pink-500 to-purple-600",
      description: "A home and sleep retailer's in-house team scales operations efficiently while maintaining quality."
    }
  ];

  const trustSignals = [
    { number: "SOC 2-ready", label: "Security controls", color: "text-purple-600" },
    { number: "SSO & roles", label: "Access management", color: "text-pink-600" },
    { number: "24/7", label: "Account monitoring", color: "text-blue-600" },
    { number: "99.9%", label: "Uptime target", color: "text-green-600" }
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
          {caseStudies.map((study) => (
            <div key={study.company} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="p-6 sm:p-8 flex-1">
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

              <div className={`h-36 bg-gradient-to-r ${study.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold flex-shrink-0" aria-hidden="true">
                      {study.initials}
                    </div>
                    <div>
                      <div className="text-2xl font-semibold tracking-tight">{study.company}</div>
                      <div className="text-sm opacity-90">CASE STUDY</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 text-white/80 font-bold text-sm">AdsOptima</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-6 sm:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustSignals.map((stat) => (
              <div key={stat.label} className="group">
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-6 sm:p-12">
          <figure className="text-center max-w-4xl mx-auto">
            <div className="text-6xl text-purple-200 mb-6 leading-none" aria-hidden="true">&ldquo;</div>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              AdsOptima has changed how our team manages PPC across a large catalog. The automation and
              permission controls give us confidence to scale while keeping every change reviewable.
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold" aria-hidden="true">
                HO
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Head of Paid Search</div>
                <div className="text-gray-600">Harborline Outfitters</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
