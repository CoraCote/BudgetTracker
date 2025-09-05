import React from 'react';

/**
 * AdsOptima Logo Mark Component
 * Displays only the icon part of the logo without text
 */
const LogoMark = ({ 
  size = 'default', // 'small', 'default', 'large', 'xl'
  variant = 'default', // 'default', 'white', 'minimal', 'premium', 'light'
  className = '',
  animated = true
}) => {
  const sizeConfig = {
    small: 'w-6 h-6',
    default: 'w-8 h-8',
    large: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const variantConfig = {
    default: {
      icon: 'bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600',
      iconText: 'text-white'
    },
    white: {
      icon: 'bg-gradient-to-br from-white to-gray-100',
      iconText: 'text-purple-600'
    },
    minimal: {
      icon: 'bg-gradient-to-br from-purple-500 to-pink-500',
      iconText: 'text-white'
    },
    premium: {
      icon: 'bg-gradient-to-br from-purple-700 via-pink-700 to-blue-700',
      iconText: 'text-white'
    },
    light: {
      icon: 'bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400',
      iconText: 'text-white'
    }
  };

  const config = sizeConfig[size];
  const variantStyle = variantConfig[variant];

  return (
    <div className={`${config} ${variantStyle.icon} rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${className}`}>
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
        
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl blur-sm animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default LogoMark;
