export default function UpdateAdsHero() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">What's new on AdsOptima</h1>
              <p className="text-purple-100 text-lg mt-2">PPC Management and Optimization Platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
