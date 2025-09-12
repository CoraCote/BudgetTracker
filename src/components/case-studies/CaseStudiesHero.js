export default function CaseStudiesHero() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            See how PPC teams around the world{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              improve performance
            </span>
            , increase efficiency, and scale their businesses with AdsOptima
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Real success stories from agencies, freelancers, and marketing teams who've transformed their PPC operations
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Filter By:</span>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Select Category</option>
                <option>All Case Studies</option>
                <option>Agency</option>
                <option>E-commerce</option>
                <option>Lead Generation</option>
                <option>Freelancer</option>
                <option>Enterprise</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
