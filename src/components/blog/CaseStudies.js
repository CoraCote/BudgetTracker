const caseStudies = [
  {
    id: 1,
    title: "DealerJazz Equalizes the Dealership Ad Game Using AdsOptima",
    category: "ADSOPTIMA",
    subcategory: "CASE STUDY",
    date: "Jul 21, 2020",
    description: "DealerJazz, an AI-powered advertising platform for vehicle dealerships, has been custom-tuned to work elegantly with...",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop&auto=format&q=80",
    imageAlt: "Car dealership parking lot with multiple vehicles"
  },
  {
    id: 2,
    title: "Jason Rothman: An AdWords Management Game-Changer",
    category: "ADSOPTIMA",
    subcategory: "CASE STUDY",
    date: "Sep 19, 2016",
    description: "According to Merriam-Webster, a game-changer is \"a newly introduced element or factor that changes an existing situation or...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&auto=format&q=80",
    imageAlt: "Abstract business analytics illustration"
  },
  {
    id: 3,
    title: "The Granular Story: Real-Life Agency, Real Love for AdsOptima",
    category: "ADSOPTIMA",
    subcategory: "CASE STUDY",
    date: "Feb 23, 2016",
    description: "We're a small agency in Milwaukee with big PPC experience.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&auto=format&q=80",
    imageAlt: "Abstract geometric business illustration"
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real success stories of customers optimizing with paid media automation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
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
                
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3">
                  {study.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right">
          <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
            Read more from Case Study
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
