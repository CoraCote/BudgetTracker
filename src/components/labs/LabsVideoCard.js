'use client';

export default function LabsVideoCard({ video, featured = false }) {
  const getBackgroundClass = (pattern) => {
    switch (pattern) {
      case 'teal':
        return 'bg-gradient-to-br from-purple-600 to-pink-500';
      case 'purple':
        return 'bg-gradient-to-br from-purple-600 to-pink-500';
      case 'green':
        return 'bg-gradient-to-br from-purple-600 to-pink-500';
      case 'blue':
        return 'bg-gradient-to-br from-purple-600 to-pink-500';
      default:
        return 'bg-gradient-to-br from-purple-600 to-pink-500';
    }
  };

  const getPatternStyle = (pattern) => {
    const patterns = {
      teal: {
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      },
      purple: {
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
      },
      green: {
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '15px 15px'
      },
      blue: {
        backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 10px, transparent 10px, transparent 20px)`,
        backgroundSize: '20px 20px'
      }
    };
    return patterns[pattern] || patterns.teal;
  };

  const getCharacterStyle = (character) => {
    const characters = {
      woman: {
        skin: 'bg-orange-200',
        hair: 'bg-gray-800',
        top: 'bg-pink-400',
        glasses: 'border-amber-300'
      },
      man: {
        skin: 'bg-amber-100',
        hair: 'bg-gray-700',
        top: 'bg-blue-500',
        glasses: 'border-gray-400'
      },
      robot: {
        skin: 'bg-gray-300',
        hair: 'bg-gray-600',
        top: 'bg-purple-500',
        glasses: 'border-blue-400'
      },
      ninja: {
        skin: 'bg-gray-400',
        hair: 'bg-black',
        top: 'bg-gray-800',
        glasses: 'border-red-400'
      }
    };
    return characters[character] || characters.woman;
  };

  const character = video.character || 'woman';
  const charStyle = getCharacterStyle(character);

  return (
    <div className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${featured ? 'lg:col-span-1' : ''}`}>
      {/* Thumbnail */}
      <div className={`relative ${getBackgroundClass(video.backgroundPattern)} rounded-xl overflow-hidden mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={getPatternStyle(video.backgroundPattern)}></div>
        
        {/* Binary Code Pattern for all cards */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`,
            backgroundSize: '100% 4px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-8 right-8 w-2 h-2 bg-pink-300 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
        
        {/* Character Illustration */}
        <div className="relative z-10 p-6 h-48 flex items-center justify-center">
          <div className="relative group-hover:scale-110 transition-transform duration-300">
            {/* Character Figure */}
            <div className="relative">
              {/* Head */}
              <div className={`w-12 h-12 ${charStyle.skin} rounded-full mx-auto mb-2 relative group-hover:animate-pulse`}>
                {/* Glasses */}
                <div className={`absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 border-2 ${charStyle.glasses} rounded-full`}></div>
                <div className={`absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 ${charStyle.glasses.replace('border-', 'bg-')} rounded-full`}></div>
                {/* Hair */}
                <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-6 ${charStyle.hair} rounded-full`}></div>
                {/* Expression */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded-full opacity-60"></div>
              </div>
              
              {/* Body */}
              <div className={`w-16 h-12 ${charStyle.top} mx-auto rounded-t-lg relative group-hover:animate-bounce`}>
                {/* Accessories */}
                {character === 'robot' && (
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
                {character === 'ninja' && (
                  <div className="absolute top-1 right-1 w-1 h-1 bg-red-400 rounded-full"></div>
                )}
                {/* Ponytail */}
                <div className={`absolute -top-1 -right-1 w-4 h-8 ${charStyle.hair} rounded-full transform rotate-12`}></div>
              </div>
              
              {/* Desk */}
              <div className="w-24 h-3 bg-amber-300 mx-auto mt-1 rounded group-hover:bg-amber-400 transition-colors"></div>
              
              {/* Laptop */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 group-hover:rotate-2 transition-transform">
                <div className="w-12 h-8 bg-gray-600 rounded-sm">
                  <div className="w-10 h-6 bg-gray-200 mx-auto mt-1 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Speech Bubble */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 group-hover:scale-110 transition-transform">
                <div className="w-6 h-4 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-sm"></div>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-200"></div>
                {/* Emoji */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-sm">😎</div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-3 -left-3 text-lg animate-bounce opacity-60">🚀</div>
              <div className="absolute -top-3 -right-3 text-sm animate-pulse opacity-50">💡</div>
              <div className="absolute -bottom-3 -left-1 text-xs animate-bounce opacity-40" style={{ animationDelay: '0.5s' }}>⚡</div>
            </div>
          </div>
        </div>

        {/* Logo with Animation */}
        <div className="absolute top-3 right-3 z-20 group-hover:scale-110 transition-transform">
          <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/30">
            <div className="w-2 h-2 bg-pink-300 rounded-sm animate-spin"></div>
            <span className="text-white text-xs font-bold">LABS</span>
          </div>
        </div>

        {/* Title Overlay with Gradient */}
        <div className="absolute bottom-3 left-3 right-3 z-20">
          <h3 className="text-white font-bold text-sm leading-tight mb-1 drop-shadow-lg">
            {video.highlightText}
            <span className="inline-block ml-1 group-hover:scale-125 transition-transform">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-0 h-0 border-l-2 border-l-gray-900 border-t-1 border-t-transparent border-b-1 border-b-transparent ml-0.5"></div>
              </div>
            </span>
          </h3>
          
          {/* Highlight Bar with Animation */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-lg inline-block shadow-lg group-hover:shadow-xl transition-all duration-300">
            <span className="text-white font-bold text-xs">WITH ADSOPTIMA</span>
          </div>
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Video Info with Enhanced Styling */}
      <div className="space-y-2 p-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">{video.episode}</span>
          <span className="text-gray-500 font-medium">{video.date}</span>
        </div>
        <h4 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-teal-600 transition-colors duration-300">
          {video.title}
        </h4>
        
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{video.category}</span>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="font-medium">{video.rating}</span>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {video.views} views
            </span>
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {video.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
