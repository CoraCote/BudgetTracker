export default function EnterprisesTestimonials() {
  const testimonials = [
    {
      quote: "AdsOptima's enterprise features have made our PPC management far more predictable. Automation and advanced analytics help us keep campaigns for every clinic location on track.",
      role: "Director of Digital Marketing",
      company: "Brightwell Clinics",
      avatar: "BC",
      rating: 5
    },
    {
      quote: "The security and permission controls give us confidence to scale across teams, and the support team is responsive whenever we need them.",
      role: "VP of Marketing",
      company: "Keystone Ticketing",
      avatar: "KT",
      rating: 5
    },
    {
      quote: "We've seen a clear improvement in campaign efficiency since adopting AdsOptima. API access and custom integrations have streamlined our reporting workflow.",
      role: "Head of Performance Marketing",
      company: "Bluepine Travel",
      avatar: "BT",
      rating: 5
    }
  ];

  const customers = [
    "Harborline Outfitters",
    "Brightwell Clinics",
    "Copperleaf Home",
    "Northfield Digital",
    "Tallgrass Media",
    "Summit Ridge Auto",
    "Bluepine Travel",
    "Keystone Ticketing"
  ];

  const highlights = [
    { metric: "Multi-platform", label: "Google, Microsoft & Amazon Ads", icon: "📊" },
    { metric: "99.9%", label: "Uptime target", icon: "⚙️" },
    { metric: "SOC 2-ready", label: "Security controls", icon: "🔒" },
    { metric: "24/7", label: "Account monitoring", icon: "🛡️" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by growing{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              enterprise teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how enterprise organizations are transforming their PPC operations with AdsOptima&apos;s
            advanced automation and analytics capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.company}
              className="group relative bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center mb-6" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0" aria-hidden="true">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.role}</div>
                  <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                </div>
              </figcaption>

              <div className="absolute top-4 right-4 text-purple-200 text-4xl font-serif" aria-hidden="true">
                &rdquo;
              </div>
            </figure>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-3xl p-6 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Teams that rely on AdsOptima
            </h3>
            <p className="text-gray-600">
              From e-commerce and healthcare to travel and agencies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 items-center">
            {customers.map((company) => (
              <div key={company} className="flex items-center justify-center gap-2 text-center">
                <span className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-purple-300 to-pink-300 flex-shrink-0" aria-hidden="true"></span>
                <span className="font-semibold tracking-tight text-gray-500">{company}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div key={item.label} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {item.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {item.metric}
              </div>
              <div className="text-gray-600 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
