const expertInsights = [
  {
    id: 1,
    title: "Amazon's Exit from Google Ads Triggered a Traffic Surge — But ROI Didn't Follow: an AdsOptima Study",
    category: "EXPERT SERIES",
    subcategory: "DATA STUDIES",
    date: "Aug 15, 2025",
    description: "On July 23, 2025, Amazon abruptly pulled all its ads from Google shopping.",
    icon: "📊"
  },
  {
    id: 2,
    title: "Meta Ads Targeting Strategies to Find Your Ideal Customers",
    category: "PAID SOCIAL",
    subcategory: "EXPERT SERIES",
    date: "Aug 8, 2025",
    description: "As technology advances and privacy legislation evolves, Meta Ads has adapted accordingly, altering how we reach and...",
    icon: "👑"
  },
  {
    id: 3,
    title: "How to Run a Seasonality Analysis of Your PPC Data Using ChatGPT",
    category: "EXPERT SERIES",
    subcategory: "GUIDE",
    date: "Jun 13, 2025",
    description: "Most people assume Q4 is the busiest time of year.",
    icon: "⚙️"
  }
];

export default function ExpertInsights() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expert Insights
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive ecommerce guides and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expertInsights.map((insight) => (
            <div key={insight.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Teal Header Section */}
              <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 relative p-8 h-64 flex flex-col justify-between">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* ADSOPTIMA branding */}
                <div className="relative z-10">
                  <span className="text-white text-sm font-semibold">ADSOPTIMA</span>
                </div>

                {/* Icon and Title */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="text-6xl mb-4 text-center">{insight.icon}</div>
                  <h3 className="text-white text-lg font-bold leading-tight text-center">
                    {insight.title}
                  </h3>
                </div>
              </div>

              {/* White Content Section */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                    {insight.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                    {insight.subcategory}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-500 text-sm">{insight.date}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right">
          <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
            Read more from Expert series
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
