const dataStudies = [
  {
    id: 1,
    title: "Amazon's Exit from Google Ads Triggered a Traffic Surge — But ROI Didn't Follow: an AdsOptima Study",
    category: "EXPERT SERIES",
    subcategory: "DATA STUDIES",
    date: "Aug 15, 2025",
    description: "On July 23, 2025, Amazon abruptly pulled all its ads from Google shopping.",
    icon: "📈"
  },
  {
    id: 2,
    title: "Is Performance Max Cannibalizing Your Search Campaigns?",
    category: "EXPERT SERIES",
    subcategory: "DATA STUDIES",
    date: "Jul 31, 2025",
    description: "When Google launched Performance Max (PMax), it was positioned as the ultimate automated campaign, designed to unify an...",
    icon: "❓"
  },
  {
    id: 3,
    title: "Amazon Ads Reporting Delay Is Killing Your Conversions. Here's the Fix. (Lessons From Studying 14,991 Campaigns)",
    category: "DATA STUDIES",
    subcategory: "AMAZON ADS",
    date: "Jun 11, 2025",
    description: "One of the first things you notice when managing Amazon Ads is that the data doesn't settle right away.",
    icon: "📋"
  }
];

export default function DataStudies() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Data Studies
          </h2>
          <p className="text-xl text-gray-600">
            In-depth studies and surveys conducted by AdsOptima to uncover trends and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dataStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                  <div className="text-6xl mb-4 text-center">{study.icon}</div>
                  <h3 className="text-white text-lg font-bold leading-tight text-center">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* White Content Section */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                    {study.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                    {study.subcategory}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-500 text-sm">{study.date}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
