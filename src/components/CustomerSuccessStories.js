import Link from 'next/link';
import { getBrand } from './fictionalBrands';

const stories = [
  {
    company: 'Northfield Digital',
    headline: '18% increase in client revenue',
    results: ['22% lower average CPC', 'Faster Dynamic Search Ads setup'],
    ping: 'bg-purple-300',
  },
  {
    company: 'Tallgrass Media',
    headline: '30% more accounts per strategist',
    results: ['Faster ad copy testing', 'Less time on manual bid changes', 'Automated feed syncing'],
    ping: 'bg-pink-300',
  },
  {
    company: 'Harborline Outfitters',
    headline: 'Thousands saved on low-quality placements',
    results: ['Hours saved on weekly account maintenance'],
    ping: 'bg-blue-300',
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function CustomerSuccessStories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-200/20 to-blue-200/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            With great ad spend comes great responsibility
          </h2>
          <p className="text-xl text-gray-600">
            Explore how we delivered for our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const brand = getBrand(story.company);
            return (
              <Link
                key={story.company}
                href="/case-studies"
                className="block bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-purple-100 relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <div className={`absolute top-4 right-4 w-2 h-2 ${story.ping} rounded-full animate-ping opacity-60`} style={{ animationDelay: `${index}s` }}></div>

                <div className="flex justify-between items-start mb-4 gap-3">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div
                      className={`w-8 h-8 flex-shrink-0 bg-gradient-to-br ${brand ? brand.accent : 'from-purple-500 to-pink-500'} rounded-full flex items-center justify-center text-white text-[10px] font-bold group-hover:scale-110 transition-transform`}
                      aria-hidden="true"
                    >
                      {brand ? brand.initials : story.company.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-800 truncate">{story.company}</span>
                  </div>
                  <svg className="w-5 h-5 flex-shrink-0 text-purple-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-4">{story.headline}</div>
                <ul className="space-y-2">
                  {story.results.map((result) => (
                    <li key={result} className="flex items-center text-purple-600">
                      <CheckIcon />
                      <span className="text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-gray-500">
          Illustrative results. Individual outcomes vary by account, budget and market.
        </p>
      </div>
    </section>
  );
}
