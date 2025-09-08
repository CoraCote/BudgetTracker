import { Play,ArrowRight, Clock, Youtube } from 'lucide-react';
import AvatarImage from '@/components/AvatarImage';

export const metadata = {
  title: 'PPC Town Hall - Video Podcast on All Things Search Marketing | AdsOptima',
  description: 'Join Optmyzr CEO, Frederick Vallaeys and his rotating panel of PPC expert guests twice a month at 9 am Pacific.',
};

export default function PPCTownHallPage() {
  const upcomingEpisodes = [
    {
      id: 118,
      title: "Next Town Hall coming soon :)",
      date: "Coming Soon",
      description: "Stay tuned for our next exciting episode"
    }
  ];

  const mostViewedEpisodes = [
    {
      id: 117,
      title: "20 YEARS OF PPC WISDOM",
      speaker: "AARON LEVY",
      date: "Aug 27, 2025",
      description: "Lessons From 20 Years in PPC: How Agencies Should Prepare For The...",
      thumbnail: "/api/placeholder/400/225",
      speakerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 116,
      title: "HOW AGENCIES CAN THRIVE WITH AI",
      speaker: "KIRK WILLIAMS",
      date: "Aug 6, 2025",
      description: "How Agencies Can Thrive in the Age of AI",
      thumbnail: "/api/placeholder/400/225",
      speakerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 115,
      title: "HOW TO RANK ON CHATGPT",
      speaker: "KASIM ASLAM",
      date: "Jul 16, 2025",
      description: "The #1 Reason Your Brand is INVISIBLE to AI (And How to Fix It)",
      thumbnail: "/api/placeholder/400/225",
      speakerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 114,
      title: "EVERYTHING GOOGLE DIDN'T",
      speaker: "SARAH JOHNSON",
      date: "Jul 2, 2025",
      description: "What Google Didn't Tell You About Performance Max",
      thumbnail: "/api/placeholder/400/225",
      speakerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 113,
      title: "THIS 3-STAGE LINKEDIN",
      speaker: "MIKE CHEN",
      date: "Jun 18, 2025",
      description: "The 3-Stage LinkedIn Strategy That Actually Works",
      thumbnail: "/api/placeholder/400/225",
      speakerImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 112,
      title: "WHAT'S COMING IN 2025. PMAX",
      speaker: "LISA RODRIGUEZ",
      date: "Jun 4, 2025",
      description: "What's Coming in 2025: Performance Max Predictions",
      thumbnail: "/api/placeholder/400/225",
      speakerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    }
  ];

  const recentEpisodes = [
    {
      id: 108,
      title: "PMax, First-Party Data, & AI: How to Win at PPC in 2025",
      date: "Mar 12, 2025",
      episode: "PPC Town Hall 108"
    },
    {
      id: 107,
      title: "AI Can't Fix Your Bad Feeds Alone— Here's Why You Still Matter!",
      date: "Feb 26, 2025",
      episode: "PPC Town Hall 107"
    },
    {
      id: 106,
      title: "PPC in 2025— What to Stop, Start & Double Down On",
      date: "Feb 12, 2025",
      episode: "PPC Town Hall 106"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #D3D3D3 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                PPC Town Hall, video podcast on all things search marketing
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Join Optmyzr CEO, Frederick Vallaeys and his rotating panel of PPC expert guests twice a month at 9 am Pacific.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address*"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{
                  background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                }}>
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                  
                  <div className="absolute top-4 right-4 flex items-center space-x-2 px-3 py-2 rounded-full" style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                  }}>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">PPC TOWN HALL by ADSOPTIMA</span>
                  </div>
                  
                  <div className="relative z-10">
                    <button className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl" style={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                      boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)'
                    }}>
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg p-0.5">
                        <AvatarImage 
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                          alt="Frederick Vallaeys"
                          size="small"
                          fallbackClassName="w-11 h-11 bg-gray-600 rounded-full items-center justify-center"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Frederick Vallaeys</p>
                        <p className="text-sm text-gray-300">Optmyzr CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Upcoming Episodes
          </h2>
          
          <div className="space-y-4">
            {upcomingEpisodes.map((episode) => (
              <div key={episode.id} className="bg-gray-50 rounded-lg p-6">
                <p className="text-lg text-gray-700">{episode.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
              Most Viewed Episodes
            </h2>
            
            <button className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{
              background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
            }}>
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe to our YouTube Channel
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mostViewedEpisodes.map((episode) => (
              <div key={episode.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="relative aspect-video overflow-hidden" style={{background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'}}>
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%), linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                  }}></div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl" style={{
                      background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
                      boxShadow: '0 8px 25px rgba(236, 72, 153, 0.4)'
                    }}>
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 right-4">
                    <h3 className="text-yellow-300 font-bold text-lg leading-tight drop-shadow-lg">
                      {episode.title}
                    </h3>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl p-0.5">
                      <AvatarImage 
                        src={episode.speakerImage} 
                        alt={episode.speaker}
                        size="medium"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="px-3 py-1 rounded-lg backdrop-blur-sm" style={{
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8) 0%, rgba(236, 72, 153, 0.8) 100%)'
                    }}>
                      <p className="text-white text-sm font-medium">{episode.speaker}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white font-medium border border-white/30">
                      ADSOPTIMA PPC TOWN HALL
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="text-sm font-medium">Click to watch</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 font-medium">PPC Town Hall {episode.id}</p>
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-500">{episode.date}</p>
                    <p className="text-gray-900 font-medium leading-relaxed group-hover:text-purple-600 transition-colors duration-300">
                      {episode.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Recent Episodes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEpisodes.map((episode) => (
              <div key={episode.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="p-6 relative overflow-hidden" style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                }}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-white text-sm font-medium">{episode.episode}</p>
                      <Clock className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <p className="text-white text-sm">{episode.date}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 leading-relaxed group-hover:text-purple-600 transition-colors duration-300">
                    {episode.title}
                  </h3>
                  
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-sm text-gray-500">Recent Episode</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-1 bg-white rounded-xl shadow-lg p-2">
              <button className="px-4 py-2 text-gray-500 hover:text-purple-600 transition-colors duration-300 hover:bg-purple-50 rounded-lg font-medium">
                Previous
              </button>
              
              <div className="flex items-center space-x-1">
                <button className="px-4 py-2 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                }}>
                  1
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium">
                  2
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium">
                  3
                </button>
                <span className="px-2 text-gray-400">...</span>
                <button className="px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium">
                  8
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium">
                  9
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium">
                  10
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium">
                  11
                </button>
              </div>
              
              <button className="px-4 py-2 text-gray-500 hover:text-purple-600 transition-colors duration-300 hover:bg-purple-50 rounded-lg font-medium">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Want to be a panelist?
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Are you a serious PPC practitioner and ready to share what you know with the community? 
            Request to be a panelist on an upcoming episode.
          </p>
          
          <button className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{
            background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
            boxShadow: '0 6px 20px rgba(139, 92, 246, 0.4)'
          }}>
            Contact us
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}
