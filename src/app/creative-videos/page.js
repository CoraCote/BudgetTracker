import CreativeVideoCard from '@/components/CreativeVideoCard';

export default function CreativeVideosPage() {
  const sampleVideos = [
    {
      id: 1,
      title: "Advanced PPC Automation Strategies That Actually Work",
      description: "Learn how to implement sophisticated automation rules that save time and boost performance across all your campaigns.",
      thumbnail: "/api/placeholder/400/225",
      duration: "12:34",
      views: "15.2K",
      likes: "892",
      author: {
        name: "Sarah Chen",
        verified: true
      },
      authorAvatar: "/api/placeholder/32/32",
      creativityTitle: "AI-Powered Optimization",
      category: "PPC Automation",
      tags: ["automation", "ppc", "ai", "optimization"],
      publishedAt: "2 days ago",
      isLive: false,
      isPremium: true
    },
    {
      id: 2,
      title: "Creative Ad Copy That Converts: A Complete Guide",
      description: "Discover the psychology behind high-converting ad copy and how to write compelling messages that drive action.",
      thumbnail: "/api/placeholder/400/225",
      duration: "18:45",
      views: "28.7K",
      likes: "1.2K",
      author: {
        name: "Mike Rodriguez",
        verified: true
      },
      authorAvatar: "/api/placeholder/32/32",
      creativityTitle: "Creative Excellence",
      category: "Ad Copywriting",
      tags: ["copywriting", "conversion", "psychology", "ads"],
      publishedAt: "1 week ago",
      isLive: false,
      isPremium: false
    },
    {
      id: 3,
      title: "Live Q&A: PPC Budget Optimization Best Practices",
      description: "Join our live session where we answer your burning questions about budget allocation and optimization strategies.",
      thumbnail: "/api/placeholder/400/225",
      duration: "45:12",
      views: "3.1K",
      likes: "156",
      author: {
        name: "AdsOptima Team",
        verified: true
      },
      authorAvatar: "/api/placeholder/32/32",
      creativityTitle: "Live Learning",
      category: "Live Session",
      tags: ["live", "q&a", "budget", "optimization"],
      publishedAt: "Live now",
      isLive: true,
      isPremium: false
    },
    {
      id: 4,
      title: "Data-Driven Insights: Understanding Your Audience",
      description: "Deep dive into audience analysis and how to use data to create more targeted and effective campaigns.",
      thumbnail: "/api/placeholder/400/225",
      duration: "22:18",
      views: "9.4K",
      likes: "445",
      author: {
        name: "Dr. Emily Watson",
        verified: true
      },
      authorAvatar: "/api/placeholder/32/32",
      creativityTitle: "Data Science",
      category: "Analytics",
      tags: ["data", "audience", "analytics", "targeting"],
      publishedAt: "3 days ago",
      isLive: false,
      isPremium: true
    },
    {
      id: 5,
      title: "Creative Testing: A/B Testing Your Way to Success",
      description: "Master the art of creative testing and learn how to systematically improve your ad performance through experimentation.",
      thumbnail: "/api/placeholder/400/225",
      duration: "16:33",
      views: "12.8K",
      likes: "678",
      author: {
        name: "Alex Thompson",
        verified: false
      },
      authorAvatar: "/api/placeholder/32/32",
      creativityTitle: "Testing Mastery",
      category: "Testing",
      tags: ["testing", "ab-testing", "creative", "experimentation"],
      publishedAt: "5 days ago",
      isLive: false,
      isPremium: false
    },
    {
      id: 6,
      title: "ROI Optimization: Getting More Bang for Your Buck",
      description: "Advanced strategies for maximizing return on investment across all your PPC campaigns and channels.",
      thumbnail: "/api/placeholder/400/225",
      duration: "25:07",
      views: "19.3K",
      likes: "1.1K",
      author: {
        name: "Jennifer Liu",
        verified: true
      },
      authorAvatar: "/api/placeholder/32/32",
      creativityTitle: "ROI Mastery",
      category: "ROI Optimization",
      tags: ["roi", "optimization", "profit", "efficiency"],
      publishedAt: "1 week ago",
      isLive: false,
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Creative Video Library
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover innovative PPC strategies, creative techniques, and expert insights through our comprehensive video collection.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">🎥 {sampleVideos.length} Videos</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">⭐ Premium Content</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">🔴 Live Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Creative Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts and discover creative approaches to PPC management that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleVideos.map((video) => (
              <CreativeVideoCard
                key={video.id}
                video={video}
                showAvatar={true}
                showCreativityTitle={true}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Level Up Your PPC Game?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of marketers who are already using these creative strategies to achieve better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Free Trial
            </a>
            <a 
              href="/demo" 
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
