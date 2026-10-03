import Link from 'next/link';
import VideoThumbnail from '@/components/VideoThumbnail';
import InitialsAvatar from '@/components/InitialsAvatar';

const videoContent = [
  {
    id: 117,
    title: "Lessons From Years in PPC: How Agencies Should Prepare For The Future",
    guest: "Northfield Digital",
    guestRole: "Agency strategist",
    date: "Aug 27, 2025",
    category: "PPC TOWN HALL",
    highlightText: "LESSONS FROM YEARS OF PPC"
  },
  {
    id: 116,
    title: "How Agencies Can Thrive in the Age of AI",
    guest: "Tallgrass Media",
    guestRole: "Paid media lead",
    date: "Aug 06, 2025",
    category: "PPC TOWN HALL",
    highlightText: "HOW AGENCIES CAN THRIVE WITH AI"
  },
  {
    id: 115,
    title: "Why Brands Go Missing From AI Answers (And How to Fix It)",
    guest: "AdsOptima Research Team",
    guestRole: "Research",
    date: "Jul 16, 2025",
    category: "PPC TOWN HALL",
    highlightText: "SHOWING UP IN AI ANSWERS"
  }
];

export default function VideoLibrary() {
  return (
    <section id="video-library" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From AdsOptima Library
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoContent.map((video) => (
            <article key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <VideoThumbnail title={video.title} seed={`town-hall-${video.id}`}>
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-white leading-tight drop-shadow-lg pr-2">
                    {video.highlightText}
                  </h3>
                  <span className="flex-shrink-0 bg-white/20 text-white text-[10px] font-semibold px-2 py-1 rounded-full border border-white/30">
                    PPC TOWN HALL
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <InitialsAvatar name={video.guest} size="small" className="ring-2 ring-white" />
                  <span className="px-2 py-1 bg-black/30 rounded text-xs font-semibold text-white">
                    {video.guest}
                  </span>
                </div>
              </VideoThumbnail>

              {/* Video Details */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 text-sm font-medium">{video.category}</span>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm">{video.date}</span>
                    <div className="w-2 h-2 bg-purple-600 rounded-full ml-2" aria-hidden="true"></div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                  {video.title}
                </h4>

                <p className="text-sm text-gray-600">
                  Guest: {video.guestRole}, {video.guest}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/ppctownhall"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200"
          >
            See all PPC Town Hall episodes
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
