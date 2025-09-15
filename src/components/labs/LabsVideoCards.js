'use client';

import LabsVideoCard from './LabsVideoCard';

export default function LabsVideoCards() {
  const videoData = [
    {
      id: 1,
      title: "Rapid Campaign Launcher Masterclass",
      description: "Learn how to create and deploy campaign templates in minutes with our revolutionary launcher tool.",
      duration: "15:32",
      views: "2.1K",
      rating: "4.9",
      date: "Dec 15, 2024",
      episode: "Episode 1",
      character: "woman",
      backgroundPattern: "purple",
      highlightText: "RAPID CAMPAIGN",
      category: "Automation",
      featured: true
    },
    {
      id: 2,
      title: "Billing Alerts Deep Dive",
      description: "Master the art of automated billing monitoring and never miss a payment issue again.",
      duration: "12:45",
      views: "1.8K",
      rating: "4.8",
      date: "Dec 12, 2024",
      episode: "Episode 2",
      character: "man",
      backgroundPattern: "teal",
      highlightText: "BILLING ALERTS",
      category: "Monitoring",
      featured: true
    },
    {
      id: 3,
      title: "AI Audience Analysis Workshop",
      description: "Discover how our AI analyzes your web pages and provides actionable audience insights.",
      duration: "18:20",
      views: "3.2K",
      rating: "4.9",
      date: "Dec 10, 2024",
      episode: "Episode 3",
      character: "robot",
      backgroundPattern: "teal",
      highlightText: "AUDIENCE FIT",
      category: "AI Tools",
      featured: false
    },
    {
      id: 4,
      title: "PPC Investigator AI Features",
      description: "Explore the new AI-powered explanations and insights in our PPC Investigator tool.",
      duration: "14:15",
      views: "2.7K",
      rating: "4.7",
      date: "Dec 8, 2024",
      episode: "Episode 4",
      character: "ninja",
      backgroundPattern: "teal",
      highlightText: "AI SUMMARY",
      category: "AI Tools",
      featured: false
    },
    {
      id: 5,
      title: "Magic Quadrants Visualization",
      description: "Learn to use scatter plots and data visualization to optimize your keyword performance.",
      duration: "16:30",
      views: "1.9K",
      rating: "4.6",
      date: "Dec 5, 2024",
      episode: "Episode 5",
      character: "woman",
      backgroundPattern: "teal",
      highlightText: "MAGIC QUADRANTS",
      category: "Analytics",
      featured: false
    },
    {
      id: 6,
      title: "AI Presentation Generator",
      description: "Create stunning client presentations automatically with our AI-powered slide generator.",
      duration: "13:45",
      views: "2.4K",
      rating: "4.8",
      date: "Dec 3, 2024",
      episode: "Episode 6",
      character: "man",
      backgroundPattern: "teal",
      highlightText: "AI PRESENTATION",
      category: "AI Tools",
      featured: false
    },
    {
      id: 7,
      title: "Weather-Based Automation",
      description: "Set up weather-responsive campaigns that automatically adjust based on local conditions.",
      duration: "17:10",
      views: "1.6K",
      rating: "4.5",
      date: "Dec 1, 2024",
      episode: "Episode 7",
      character: "robot",
      backgroundPattern: "green",
      highlightText: "WEATHER AUTOMATION",
      category: "Automation",
      featured: false
    },
    {
      id: 8,
      title: "Advanced Rule Engine Setup",
      description: "Master complex automation rules and create sophisticated campaign management workflows.",
      duration: "19:25",
      views: "2.8K",
      rating: "4.9",
      date: "Nov 28, 2024",
      episode: "Episode 8",
      character: "ninja",
      backgroundPattern: "blue",
      highlightText: "RULE ENGINE",
      category: "Automation",
      featured: false
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Learn With AdsOptima Labs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our expert tutorials and master the latest experimental features from AdsOptima Labs.
          </p>
        </div>
        
        {/* Featured Videos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Tutorials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoData.filter(video => video.featured).map((video) => (
              <LabsVideoCard key={video.id} video={video} featured={true} />
            ))}
          </div>
        </div>
        
        {/* All Videos */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Tutorials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videoData.map((video) => (
              <LabsVideoCard key={video.id} video={video} featured={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
