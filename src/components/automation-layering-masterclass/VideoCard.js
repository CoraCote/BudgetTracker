'use client';

import { useState } from 'react';

export default function VideoCard({ 
  title, 
  subtitle, 
  hasPlayButton = false, 
  gradient = 'purple-pink',
  className = '',
  onClick = null,
  isClickable = false,
  presenter = "Expert Presenter",
  company = "PPC Specialist",
  isDualPresenter = false,
  presenter2 = null,
  company2 = null,
  duration = "45 min",
  views = "2.3K",
  isLive = false,
  isNew = false,
  tags = [],
  presenterImage = null,
  presenter2Image = null,
  highlightText = null,
  specialIcon = null,
  specialText = null
}) {
  const [isHovered, setIsHovered] = useState(false);

  const gradientClasses = {
    'purple-pink': 'from-purple-600 via-purple-500 to-pink-600',
    'blue-purple': 'from-blue-600 via-indigo-500 to-purple-600',
    'teal-green': 'from-teal-500 via-emerald-500 to-green-500',
    'orange-red': 'from-orange-500 via-red-500 to-pink-500',
    'indigo-blue': 'from-indigo-600 via-blue-500 to-cyan-500'
  };

  const handleClick = () => {
    if (isClickable && onClick) {
      onClick();
    }
  };

  // Generate realistic avatar initials
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Generate avatar background color based on name
  const getAvatarColor = (name) => {
    const colors = [
      'bg-gradient-to-br from-blue-400 to-blue-600',
      'bg-gradient-to-br from-purple-400 to-purple-600',
      'bg-gradient-to-br from-pink-400 to-pink-600',
      'bg-gradient-to-br from-green-400 to-green-600',
      'bg-gradient-to-br from-orange-400 to-orange-600',
      'bg-gradient-to-br from-teal-400 to-teal-600',
      'bg-gradient-to-br from-indigo-400 to-indigo-600',
      'bg-gradient-to-br from-red-400 to-red-600'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div 
      className={`relative rounded-3xl shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:shadow-3xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Background with enhanced gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradient]} opacity-90 animate-gradient-shift`}></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px',
            animation: 'float 20s linear infinite'
          }}></div>
        </div>
      </div>
      
      {/* Enhanced abstract shapes overlay */}
      <div className="absolute inset-0">
        {/* Top left shape */}
        <div className="absolute top-6 left-6 w-20 h-20 bg-white/15 rounded-full animate-float-slow blur-sm animate-glow-pulse-soft"></div>
        
        {/* Top right shape */}
        <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-float-medium blur-sm"></div>
        
        {/* Bottom right shape */}
        <div className="absolute bottom-8 right-6 w-24 h-24 bg-white/8 rounded-full animate-float-fast blur-sm"></div>
        
        {/* Center left shape */}
        <div className="absolute top-1/2 left-6 w-12 h-12 bg-white/12 rounded-full animate-pulse-slow blur-sm"></div>
        
        {/* Bottom left shape */}
        <div className="absolute bottom-6 left-8 w-14 h-14 bg-white/6 rounded-full animate-float-medium blur-sm"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white/5 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-white/8 rounded-full animate-float-medium blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex min-h-[420px]">
        {/* Left side - Content */}
        <div className="flex-1 flex flex-col justify-between pr-6">
          {/* Top section with header */}
          <div className="space-y-6">
            {subtitle && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                    {subtitle}
                  </p>
                </div>
                
                {/* Special icon and text (like piggy bank) */}
                {specialIcon && specialText && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                      {specialIcon}
                    </div>
                    <span className="text-cyan-300 text-sm font-medium">
                      {specialText}
                    </span>
                  </div>
                )}
              </div>
            )}
            
            {/* Main title with highlighting */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {highlightText ? (
                <span>
                  {title.split(highlightText)[0]}
                  <span className="text-green-400">{highlightText}</span>
                  {title.split(highlightText)[1]}
                </span>
              ) : (
                title
              )}
            </h2>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white/20 text-white/90 text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom section - Presenter info */}
          <div className="space-y-4">
            {isDualPresenter ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                    {presenterImage ? (
                      <img 
                        src={presenterImage} 
                        alt={presenter}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full ${getAvatarColor(presenter)} flex items-center justify-center text-white font-bold text-sm`}>
                        {getInitials(presenter)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-white/95 text-sm font-semibold">{presenter}</p>
                    <p className="text-white/75 text-xs">{company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                    {presenter2Image ? (
                      <img 
                        src={presenter2Image} 
                        alt={presenter2 || "Expert 2"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full ${getAvatarColor(presenter2 || "Expert 2")} flex items-center justify-center text-white font-bold text-sm`}>
                        {getInitials(presenter2 || "Expert 2")}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-white/95 text-sm font-semibold">{presenter2 || "Expert 2"}</p>
                    <p className="text-white/75 text-xs">{company2 || "Company 2"}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                  {presenterImage ? (
                    <img 
                      src={presenterImage} 
                      alt={presenter}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full ${getAvatarColor(presenter)} flex items-center justify-center text-white font-bold text-sm`}>
                      {getInitials(presenter)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-white/95 text-sm font-semibold">{presenter}</p>
                  <p className="text-white/75 text-xs">{company}</p>
                </div>
              </div>
            )}

            {/* Production credit */}
            <p className="text-white/70 text-sm">
              An OPTMYZR Production
            </p>
          </div>
        </div>

        {/* Right side - Presenter Images */}
        <div className="w-32 flex flex-col justify-center space-y-4">
          {isDualPresenter ? (
            <>
              {/* First presenter */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/30 shadow-lg mx-auto mb-2">
                  {presenterImage ? (
                    <img 
                      src={presenterImage} 
                      alt={presenter}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full ${getAvatarColor(presenter)} flex items-center justify-center text-white font-bold text-lg`}>
                      {getInitials(presenter)}
                    </div>
                  )}
                </div>
                <p className="text-white/95 text-sm font-semibold text-center">{presenter}</p>
              </div>
              
              {/* Second presenter */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/30 shadow-lg mx-auto mb-2">
                  {presenter2Image ? (
                    <img 
                      src={presenter2Image} 
                      alt={presenter2 || "Expert 2"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full ${getAvatarColor(presenter2 || "Expert 2")} flex items-center justify-center text-white font-bold text-lg`}>
                      {getInitials(presenter2 || "Expert 2")}
                    </div>
                  )}
                </div>
                <p className="text-white/95 text-sm font-semibold text-center">{presenter2 || "Expert 2"}</p>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/30 shadow-lg mx-auto mb-2">
                {presenterImage ? (
                  <img 
                    src={presenterImage} 
                    alt={presenter}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full ${getAvatarColor(presenter)} flex items-center justify-center text-white font-bold text-lg`}>
                    {getInitials(presenter)}
                  </div>
                )}
              </div>
              <p className="text-white/95 text-sm font-semibold text-center">{presenter}</p>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced hover overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
