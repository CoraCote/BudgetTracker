import Link from 'next/link';
import VideoThumbnail from '@/components/VideoThumbnail';
import InitialsAvatar from '@/components/InitialsAvatar';

const videoCards = [
  {
    id: 1,
    title: "Creative PPC Strategies That Convert",
    byline: "Northfield Digital",
    role: "Paid media strategist",
    duration: "8:45",
    views: "12.5K",
    creativity: "High Impact Visuals",
    tags: ["Creative", "Strategy", "Conversion"]
  },
  {
    id: 2,
    title: "Advanced Automation Techniques",
    byline: "AdsOptima Product Team",
    role: "Automation walkthrough",
    duration: "12:30",
    views: "8.9K",
    creativity: "Technical Innovation",
    tags: ["Automation", "Technical", "Advanced"]
  },
  {
    id: 3,
    title: "Creative Ad Copy That Sells",
    byline: "Tallgrass Media",
    role: "Creative lead",
    duration: "6:20",
    views: "15.2K",
    creativity: "Copywriting Mastery",
    tags: ["Copywriting", "Creative", "Sales"]
  },
  {
    id: 4,
    title: "Data-Driven Design Decisions",
    byline: "AdsOptima Research Team",
    role: "Data analysis",
    duration: "10:15",
    views: "7.3K",
    creativity: "Data Visualization",
    tags: ["Data", "Analytics", "Design"]
  },
  {
    id: 5,
    title: "Creative Landing Page Optimization",
    byline: "Copperleaf Home",
    role: "E-commerce marketing team",
    duration: "9:45",
    views: "11.8K",
    creativity: "UX Innovation",
    tags: ["UX", "Optimization", "Creative"]
  },
  {
    id: 6,
    title: "Visual Storytelling in PPC",
    byline: "AdsOptima Customer Success",
    role: "Best-practice session",
    duration: "7:55",
    views: "9.7K",
    creativity: "Storytelling Excellence",
    tags: ["Storytelling", "Visual", "Strategy"]
  }
];

export default function VideoCardsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creative PPC Video Library
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategies and creative approaches from our team and customers
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCards.map((video) => (
            <article key={video.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <VideoThumbnail
                title={video.title}
                seed={`case-video-${video.id}`}
                aspect={false}
                className="h-40"
                playSize="sm"
                duration={video.duration}
              >
                <div className="absolute top-3 left-3">
                  <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {video.creativity}
                  </span>
                </div>
              </VideoThumbnail>

              {/* Video Content */}
              <div className="p-4">
                {/* Byline */}
                <div className="flex items-center space-x-3 mb-3">
                  <InitialsAvatar name={video.byline} size="small" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm truncate">{video.byline}</h4>
                    <p className="text-xs text-gray-600 truncate">{video.role}</p>
                  </div>
                </div>

                {/* Video Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {video.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{video.views} views</span>
                  <span>{video.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/creative-videos"
            className="inline-block bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            View All Creative Videos
          </Link>
        </div>
      </div>
    </section>
  );
}
