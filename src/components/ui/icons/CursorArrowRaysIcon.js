/**
 * CursorArrowRaysIcon - Custom SVG icon component for cursor with arrow rays
 * Replaces Heroicons CursorArrowRaysIcon for deployment compatibility
 */
export default function CursorArrowRaysIcon({ className = "w-6 h-6", ...props }) {
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
        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2V4m0 0V6m0-2h2m-2 0H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
