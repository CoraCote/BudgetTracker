export default function FreelancersTestimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "PPC Consultant",
      company: "Chen Digital Marketing",
      avatar: "SC",
      quote: "AdsOptima has transformed how I manage my client accounts. The automation features save me hours every week, and my clients love the detailed reports.",
      stats: "40% time savings, 25% better ROI"
    },
    {
      name: "Marcus Rodriguez",
      role: "Google Ads Specialist",
      company: "Rodriguez PPC",
      avatar: "MR",
      quote: "The flexible pricing model is perfect for freelancers like me. I can scale up as my business grows without worrying about expensive upgrades.",
      stats: "Scaled from 3 to 12 clients in 8 months"
    },
    {
      name: "Emily Watson",
      role: "Paid Media Consultant",
      company: "Watson Marketing",
      avatar: "EW",
      quote: "The real-time monitoring and alerts have prevented countless issues. My clients appreciate the proactive approach to campaign management.",
      stats: "60% reduction in account issues"
    },
    {
      name: "David Kim",
      role: "PPC Freelancer",
      company: "Kim Digital Solutions",
      avatar: "DK",
      quote: "AdsOptima's analytics help me make data-driven decisions that consistently improve my clients' performance. It's like having a team of experts.",
      stats: "35% average improvement in conversion rates"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Consultant",
      company: "Thompson Marketing",
      avatar: "LT",
      quote: "The white-labeled reporting feature is a game-changer. My clients get professional reports that showcase the value I'm delivering.",
      stats: "90% client retention rate"
    },
    {
      name: "Alex Johnson",
      role: "PPC Specialist",
      company: "Johnson Ads",
      avatar: "AJ",
      quote: "I love how intuitive the platform is. Even complex automation rules are easy to set up, and the results speak for themselves.",
      stats: "50% increase in managed ad spend"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              successful PPC freelancers
            </span>{' '}
            worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of freelancers who have transformed their PPC business with AdsOptima's powerful automation and analytics platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
            >
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-purple-700">{testimonial.stats}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
            <div className="text-gray-600">Active Freelancers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">$50M+</div>
            <div className="text-gray-600">Managed Ad Spend</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
            <div className="text-gray-600">Average Time Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
}
