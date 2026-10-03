export default function FreelancersTestimonials() {
  const testimonials = [
    {
      role: "Contract PPC Consultant",
      company: "Harborline Outfitters",
      avatar: "HO",
      quote: "AdsOptima has changed how I manage client accounts. The automation features save me hours every week, and the detailed reports make my work easy to explain.",
      stats: "Hours saved every week"
    },
    {
      role: "Freelance Google Ads Specialist",
      company: "Bluepine Travel",
      avatar: "BT",
      quote: "The flexible pricing model works well for freelancers. I can scale up as my client list grows without worrying about expensive upgrades.",
      stats: "Grew from 3 to 6 clients"
    },
    {
      role: "Independent Paid Media Consultant",
      company: "Brightwell Clinics",
      avatar: "BC",
      quote: "Real-time monitoring and alerts help me catch issues before they become problems. My clients appreciate the proactive approach.",
      stats: "Fewer missed account issues"
    },
    {
      role: "Freelance PPC Manager",
      company: "Copperleaf Home",
      avatar: "CH",
      quote: "The analytics help me make data-driven decisions that steadily improve performance. It feels like having an extra analyst on the team.",
      stats: "Steadier conversion rates"
    },
    {
      role: "Founder",
      company: "Tallgrass Media",
      avatar: "TM",
      quote: "White-labeled reporting is a big help. Clients get professional reports that clearly show the value we deliver each month.",
      stats: "Every client renewed this year"
    },
    {
      role: "Contract Search Specialist",
      company: "Keystone Ticketing",
      avatar: "KT",
      quote: "The platform is intuitive. Even complex automation rules are straightforward to set up, and they keep running while I focus on strategy.",
      stats: "More managed spend, same workload"
    }
  ];

  const highlights = [
    { value: "14 days", label: "Free trial" },
    { value: "No card", label: "Required to start" },
    { value: "24/7", label: "Account monitoring" },
    { value: "Anytime", label: "Cancel or change plans" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              independent PPC professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how freelancers and contract specialists use AdsOptima&apos;s automation and analytics to run leaner, more profitable practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.company}
              className="group relative isolate bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 flex flex-col"
            >
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <blockquote className="mb-6 pr-8 flex-1">
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-purple-700">{testimonial.stats}</span>
                </div>
              </div>

              <figcaption className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0" aria-hidden="true">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.role}</div>
                  <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                </div>
              </figcaption>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
