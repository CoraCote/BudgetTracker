'use client';

import { useState } from 'react';
import InitialsAvatar from './InitialsAvatar';

/**
 * Avatar that shows an image when one is provided and loads correctly,
 * otherwise falls back to an initials circle derived from `alt`.
 */
export default function AvatarImage({
  src,
  alt = '',
  className = "w-14 h-14 rounded-full object-cover border-2 border-white",
  size = "medium"
}) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    small: "w-11 h-11",
    medium: "w-14 h-14",
    large: "w-16 h-16"
  };

  const initialsSize = {
    small: 'medium',
    medium: 'large',
    large: 'large'
  };

  if (!src || imageError) {
    return <InitialsAvatar name={alt} size={initialsSize[size] || 'large'} />;
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
