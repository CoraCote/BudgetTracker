export default function CaseStudiesGrid() {
  const caseStudies = [
    {
      id: 1,
      company: "Marketing 360°",
      title: "From Blind Spots to Breakthroughs: How Marketing 360° Boosted ROAS and...",
      description: "With a growing client base and limited bandwidth, Marketing 360° used AdsOptima to scale operations, boost ROAS, and accelerate campaign launches.",
      category: "LEAD-GEN",
      headerBg: "bg-gray-50",
      headerPattern: "grid-pattern",
      logo: "marketing 360°",
      logoColor: "text-black",
      accentColor: "bg-blue-500"
    },
    {
      id: 2,
      company: "Voordeeluitjes.nl",
      title: "How Voordeeluitjes Manages 12,000+ Travel Packages with Just Two...",
      description: "Scaling paid search across thousands of SKUs with a lean team and smart tools: here's how Voordeeluitjes does it.",
      category: "LEAD-GEN",
      headerBg: "bg-purple-900",
      headerPattern: "arrows",
      logo: "Voordeeluitjes.nl",
      logoColor: "text-white",
      accentColor: "bg-pink-500"
    },
    {
      id: 3,
      company: "Colewood Digital",
      title: "Colewood Digital Gains 15% Revenue and Saves 2,900+ Hours in 2024",
      description: "AdsOptima's Shopping Campaign Management Hub helps this England-based agency boost CTR by 61% in record time.",
      category: ["ECOMMERCE", "AGENCY"],
      headerBg: "bg-gray-50",
      headerPattern: "grid-pattern",
      logo: "colewood.digital",
      logoColor: "text-black",
      accentColor: "bg-orange-500"
    },
    {
      id: 4,
      company: "Levitate Foundry",
      title: "Levitate Foundry Drives 30% PMax ROAS Growth with 500 Hours Saved",
      description: "Leveraging AdsOptima, Levitate Foundry doubles managed ad spend during BFCM and boosts ROAS in 2024.",
      category: ["AGENCY", "LEAD-GEN"],
      headerBg: "bg-purple-900",
      headerPattern: "arrows",
      logo: "Levitate FOUNDRY",
      logoColor: "text-white",
      accentColor: "bg-pink-500"
    },
    {
      id: 5,
      company: "BBQGuys",
      title: "BBQGuys Manages Nearly 30,000 SKUs in 50% Less Time with AdsOptima",
      description: "Louisiana-based online retailer saves 4-6 hours weekly and gains over $450k in revenue since 2021",
      category: ["BRAND", "ECOMMERCE"],
      headerBg: "bg-teal-900",
      headerPattern: "chart",
      logo: "BBQGUYS",
      logoColor: "text-white",
      accentColor: "bg-orange-500"
    },
    {
      id: 6,
      company: "Metrik Marketing",
      title: "AdsOptima Helps Metrik Marketing Deliver Top-Quality Reports and Navigate...",
      description: "Read how this Data-Driven Digital Marketing Agency taps into AdsOptima's AI for timely, data-packed reports that delight their clients.",
      category: ["AGENCY", "BLENDED (ECOM & LEAD-GEN)"],
      headerBg: "bg-gray-50",
      headerPattern: "grid-pattern",
      logo: "METRIK marketing",
      logoColor: "text-black",
      accentColor: "bg-blue-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Header Image */}
              <div className={`${study.headerBg} h-48 relative overflow-hidden`}>
                {/* Background Pattern */}
                {study.headerPattern === 'grid-pattern' && (
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="absolute top-8 left-8 w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="absolute top-12 left-12 w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <div className="absolute top-16 left-16 w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="absolute top-20 left-20 w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                )}
                
                {study.headerPattern === 'arrows' && (
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-4 h-4 text-white transform rotate-45"
                        style={{
                          top: `${20 + (i * 10)}%`,
                          left: `${15 + (i * 12)}%`,
                        }}
                      >
                        ↗
                      </div>
                    ))}
                  </div>
                )}

                {study.headerPattern === 'chart' && (
                  <div className="absolute bottom-4 left-4 right-4 h-16">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                      <polyline
                        points="0,50 20,45 40,40 60,35 80,30 100,25 120,20 140,15 160,10 180,5 200,0"
                        fill="none"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="2"
                      />
                      <circle cx="20" cy="45" r="2" fill="rgba(255,255,255,0.5)" />
                      <circle cx="40" cy="40" r="2" fill="rgba(255,255,255,0.5)" />
                      <circle cx="60" cy="35" r="2" fill="rgba(255,255,255,0.5)" />
                      <circle cx="80" cy="30" r="2" fill="rgba(255,255,255,0.5)" />
                      <circle cx="100" cy="25" r="2" fill="rgba(255,255,255,0.5)" />
                    </svg>
                  </div>
                )}

                {/* Vertical Bar for grid pattern */}
                {study.headerPattern === 'grid-pattern' && (
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold transform -rotate-90">CASE STU</span>
                  </div>
                )}

                {/* Company Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold ${study.logoColor} mb-2`}>
                      {study.logo}
                    </h3>
                    <p className={`text-sm ${study.logoColor} opacity-80`}>CASE STUDY</p>
                  </div>
                </div>

                {/* AdsOptima Logo */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold text-green-600">ADSOPTIMA</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(study.category) ? (
                    study.category.map((cat, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full border border-gray-200"
                      >
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full border border-gray-200">
                      {study.category}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {study.description}
                </p>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
