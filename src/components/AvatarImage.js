'use client';

import { useState } from 'react';
import { Users } from 'lucide-react';

export default function AvatarImage({ 
  src, 
  alt, 
  className = "w-14 h-14 rounded-full object-cover border-2 border-white",
  fallbackClassName = "w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full items-center justify-center",
  size = "medium"
}) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    small: "w-11 h-11",
    medium: "w-14 h-14",
    large: "w-16 h-16"
  };

  const fallbackSizeClasses = {
    small: "w-11 h-11",
    medium: "w-14 h-14", 
    large: "w-16 h-16"
  };

  if (imageError) {
    return (
      <div className={`${fallbackSizeClasses[size]} ${fallbackClassName} flex`}>
        <Users className="w-6 h-6 text-white" />
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt}
      className={`${sizeClasses[size]} ${className}`}
      onError={() => setImageError(true)}
    />
  );
}
