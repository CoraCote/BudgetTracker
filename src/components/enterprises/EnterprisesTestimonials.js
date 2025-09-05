export default function EnterprisesTestimonials() {
  const testimonials = [
    {
      quote: "AdsOptima's enterprise features have revolutionized our PPC management. The automation capabilities and advanced analytics help us deliver exceptional results for our Fortune 500 clients.",
      author: "Michael Chen",
      role: "Director of Digital Marketing",
      company: "GlobalTech Solutions",
      avatar: "MC",
      rating: 5
    },
    {
      quote: "The enterprise-grade security and compliance features give us confidence to scale our operations. The dedicated support team is always there when we need them.",
      author: "Jennifer Rodriguez",
      role: "VP of Marketing",
      company: "InnovateCorp",
      avatar: "JR",
      rating: 5
    },
    {
      quote: "We've seen a 45% increase in campaign efficiency since implementing AdsOptima. The custom integrations and API access have streamlined our entire marketing workflow.",
      author: "David Thompson",
      role: "Head of Performance Marketing",
      company: "ScaleUp Inc",
      avatar: "DT",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by leading{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              enterprise teams
            </span>
            {' '}worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how enterprise organizations are transforming their PPC operations with AdsOptima's 
            advanced automation and analytics capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-purple-200 text-4xl font-serif">
                "
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Fortune 500 companies
            </h3>
            <p className="text-gray-600">
              Leading enterprises choose AdsOptima for their PPC management needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "TechCorp", "GlobalTech", "InnovateCorp", "ScaleUp Inc", 
              "FutureTech", "DigitalFirst", "GrowthCorp", "SmartSolutions",
              "NextGen", "EliteTech", "PrimeCorp", "VisionTech"
            ].map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-24 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { metric: "2.5M+", label: "Campaigns Managed", icon: "📊" },
            { metric: "$500M+", label: "Ad Spend Optimized", icon: "💰" },
            { metric: "98%", label: "Client Satisfaction", icon: "⭐" },
            { metric: "24/7", label: "Support Available", icon: "🛡️" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
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
