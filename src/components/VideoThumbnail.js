/**
 * Self-contained video thumbnail.
 *
 * Renders a deterministic gradient (derived from `seed` or `title`) in the
 * site palette, a subtle pattern, a centered play button and optional
 * category / duration chips. No external images are required.
 */

const GRADIENTS = [
  'from-purple-600 via-purple-500 to-pink-500',
  'from-indigo-600 via-purple-600 to-pink-500',
  'from-teal-500 via-cyan-600 to-blue-600',
  'from-blue-600 via-indigo-600 to-purple-600',
  'from-pink-500 via-purple-500 to-indigo-600',
  'from-indigo-700 via-blue-600 to-teal-500',
];

const PATTERNS = [
  { backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.35) 1px, transparent 0)', backgroundSize: '18px 18px' },
  { backgroundImage: 'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)', backgroundSize: '28px 28px' },
  { backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0, rgba(255,255,255,0.14) 2px, transparent 2px, transparent 14px)' },
  { backgroundImage: 'radial-gradient(circle at 0 0, transparent 14px, rgba(255,255,255,0.16) 15px, transparent 16px)', backgroundSize: '32px 32px' },
];

// Small decorative line charts so thumbnails feel on-topic for a PPC product.
const CHART_PATHS = [
  'M0,48 L20,40 L40,44 L60,30 L80,34 L100,18 L120,22 L140,8',
  'M0,40 L20,42 L40,30 L60,32 L80,20 L100,24 L120,12 L140,14',
  'M0,46 L20,36 L40,38 L60,26 L80,28 L100,22 L120,10 L140,6',
];

export function hashString(value) {
  const text = String(value ?? '');
  let hash = 5381;
  for (let i = 0; i < text.length; i += 1) {
    hash = ((hash << 5) + hash + text.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function getThumbnailGradient(seed) {
  return GRADIENTS[hashString(seed) % GRADIENTS.length];
}

export default function VideoThumbnail({
  title = '',
  seed,
  category,
  duration,
  className = '',
  aspect = true,
  showPlay = true,
  playSize = 'md',
  children,
}) {
  const hash = hashString(seed ?? title);
  const gradient = GRADIENTS[hash % GRADIENTS.length];
  const pattern = PATTERNS[(hash >>> 3) % PATTERNS.length];
  const chartPath = CHART_PATHS[(hash >>> 5) % CHART_PATHS.length];
  const playClasses = playSize === 'lg' ? 'w-20 h-20' : playSize === 'sm' ? 'w-11 h-11' : 'w-16 h-16';
  const iconClasses = playSize === 'lg' ? 'w-8 h-8' : playSize === 'sm' ? 'w-4 h-4' : 'w-6 h-6';

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${aspect ? 'aspect-video' : ''} ${className}`}
      data-video-title={title || undefined}
    >
      {/* Pattern */}
      <div className="absolute inset-0 opacity-60" style={pattern} aria-hidden="true"></div>

      {/* Soft light blobs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" aria-hidden="true"></div>
      <div className="absolute -bottom-12 -left-8 w-36 h-36 rounded-full bg-black/10 blur-2xl" aria-hidden="true"></div>

      {/* Decorative trend line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-1/3 opacity-30"
        viewBox="0 0 140 56"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={`${chartPath} L140,56 L0,56 Z`} fill="rgba(255,255,255,0.35)" />
        <path d={chartPath} fill="none" stroke="white" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Play button */}
      {showPlay && (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className={`${playClasses} rounded-full bg-white/90 shadow-lg ring-4 ring-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
            <svg className={`${iconClasses} text-purple-700 ml-1`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {category && (
        <span className="absolute top-3 left-3 max-w-[70%] truncate rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-2.5 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      )}

      {duration && (
        <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
          {duration}
        </span>
      )}

      {children}
    </div>
  );
}
