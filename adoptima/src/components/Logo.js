import React from 'react';

/**
 * AdOptima Logo Component
 * Displays the company logo with customizable size and variant options
 */
const Logo = ({ 
  size = 'default', // 'small', 'default', 'large'
  variant = 'default', // 'default', 'white', 'minimal'
  className = '',
  showText = true 
}) => {
  const sizeConfig = {
    small: { icon: 'w-6 h-6', text: 'text-sm', spacing: 'ml-2' },
    default: { icon: 'w-8 h-8', text: 'text-xl', spacing: 'ml-2' },
    large: { icon: 'w-12 h-12', text: 'text-2xl', spacing: 'ml-3' }
  };

  const variantConfig = {
    default: {
      icon: 'bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600',
      text: 'text-gray-800',
      iconText: 'text-white'
    },
    white: {
      icon: 'bg-gradient-to-br from-white to-gray-100',
      text: 'text-white',
      iconText: 'text-purple-600'
    },
    minimal: {
      icon: 'bg-gradient-to-br from-purple-500 to-pink-500',
      text: 'text-gray-700',
      iconText: 'text-white'
    },
    premium: {
      icon: 'bg-gradient-to-br from-purple-700 via-pink-700 to-blue-700',
      text: 'text-gray-900',
      iconText: 'text-white'
    },
    light: {
      icon: 'bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400',
      text: 'text-gray-700',
      iconText: 'text-white'
    }
  };

  const config = sizeConfig[size];
  const variantStyle = variantConfig[variant];

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${config.icon} ${variantStyle.icon} rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
        <div className="relative">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
            
            <path 
              d="M12 2L22 20H2L12 2Z" 
              fill="currentColor" 
              className={variantStyle.iconText}
            />
            
            <path 
              d="M12 6L18 18H6L12 6Z" 
              fill="currentColor" 
              opacity="0.3"
              className={variantStyle.iconText}
            />
            
            <rect 
              x="8" 
              y="14" 
              width="8" 
              height="2" 
              fill="currentColor" 
              className={variantStyle.iconText}
            />
          </svg>
          
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl blur-sm animate-pulse"></div>
        </div>
      </div>

      {showText && (
        <span className={`${config.text} ${config.spacing} font-bold ${variantStyle.text} tracking-wide`}>
          ADOPTIMA
        </span>
      )}
    </div>
  );
};

export default Logo;
