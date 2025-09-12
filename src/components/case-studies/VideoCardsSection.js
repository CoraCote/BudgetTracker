export default function VideoCardsSection() {
  const videoCards = [
    {
      id: 1,
      title: "Creative PPC Strategies That Convert",
      author: "Sarah Johnson",
      role: "Senior PPC Manager",
      company: "Digital Growth Co.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      duration: "8:45",
      views: "12.5K",
      thumbnail: "bg-gradient-to-br from-purple-500 to-pink-500",
      creativity: "High Impact Visuals",
      tags: ["Creative", "Strategy", "Conversion"]
    },
    {
      id: 2,
      title: "Advanced Automation Techniques",
      author: "Michael Chen",
      role: "PPC Automation Expert",
      company: "TechAds Agency",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      duration: "12:30",
      views: "8.9K",
      thumbnail: "bg-gradient-to-br from-blue-500 to-purple-500",
      creativity: "Technical Innovation",
      tags: ["Automation", "Technical", "Advanced"]
    },
    {
      id: 3,
      title: "Creative Ad Copy That Sells",
      author: "Emma Rodriguez",
      role: "Creative Director",
      company: "Creative Minds",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      duration: "6:20",
      views: "15.2K",
      thumbnail: "bg-gradient-to-br from-pink-500 to-red-500",
      creativity: "Copywriting Mastery",
      tags: ["Copywriting", "Creative", "Sales"]
    },
    {
      id: 4,
      title: "Data-Driven Design Decisions",
      author: "David Kim",
      role: "Data Analyst",
      company: "Analytics Pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      duration: "10:15",
      views: "7.3K",
      thumbnail: "bg-gradient-to-br from-green-500 to-blue-500",
      creativity: "Data Visualization",
      tags: ["Data", "Analytics", "Design"]
    },
    {
      id: 5,
      title: "Creative Landing Page Optimization",
      author: "Lisa Thompson",
      role: "UX Designer",
      company: "Conversion Experts",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      duration: "9:45",
      views: "11.8K",
      thumbnail: "bg-gradient-to-br from-orange-500 to-pink-500",
      creativity: "UX Innovation",
      tags: ["UX", "Optimization", "Creative"]
    },
    {
      id: 6,
      title: "Visual Storytelling in PPC",
      author: "Alex Martinez",
      role: "Creative Strategist",
      company: "StoryBrand Agency",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      duration: "7:55",
      views: "9.7K",
      thumbnail: "bg-gradient-to-br from-purple-500 to-indigo-500",
      creativity: "Storytelling Excellence",
      tags: ["Storytelling", "Visual", "Strategy"]
    }
  ];

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
            Discover innovative strategies and creative approaches from industry experts
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCards.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              {/* Video Thumbnail */}
              <div className={`${video.thumbnail} h-40 relative overflow-hidden`}>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>

                {/* Creativity Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {video.creativity}
                  </span>
                </div>
              </div>

              {/* Video Content */}
              <div className="p-4">
                {/* Author Info */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={video.avatar} 
                      alt={video.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm truncate">{video.author}</h4>
                    <p className="text-xs text-gray-600 truncate">{video.role}</p>
                  </div>
                </div>

                {/* Video Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {video.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {video.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats and Button Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span>{video.views} views</span>
                    <div className="flex items-center space-x-1">
                      <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>4.8</span>
                    </div>
                  </div>
                  
                  {/* Watch Button */}
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Watch</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            View All Creative Videos
          </button>
        </div>
      </div>
    </section>
  );
}
