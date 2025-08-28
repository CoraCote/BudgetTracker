/**
 * ArrowTrendingUpIcon - Custom SVG icon component for trending up arrow
 * Replaces Heroicons ArrowTrendingUpIcon for deployment compatibility
 */
export default function ArrowTrendingUpIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.307l2.44-1.22M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
