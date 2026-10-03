/**
 * Initials avatar: a gradient circle with up to two initials.
 * The gradient is derived from the name so it stays stable between renders.
 */

const AVATAR_GRADIENTS = [
  'from-purple-500 to-pink-500',
  'from-indigo-500 to-purple-500',
  'from-teal-500 to-blue-500',
  'from-blue-500 to-indigo-600',
  'from-pink-500 to-purple-600',
];

const SIZE_CLASSES = {
  xs: 'w-6 h-6 text-[10px]',
  small: 'w-8 h-8 text-xs',
  medium: 'w-11 h-11 text-sm',
  large: 'w-14 h-14 text-base',
  xl: 'w-24 h-24 text-2xl',
};

export function getInitials(name = '') {
  const words = String(name)
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function InitialsAvatar({ name = '', size = 'small', className = '' }) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  const gradient = AVATAR_GRADIENTS[hash % AVATAR_GRADIENTS.length];

  return (
    <span
      className={`inline-flex flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-bold text-white ${SIZE_CLASSES[size] || SIZE_CLASSES.small} ${className}`}
      aria-hidden="true"
    >
      {getInitials(name)}
    </span>
  );
}
