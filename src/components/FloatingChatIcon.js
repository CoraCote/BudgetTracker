import Link from 'next/link';

/**
 * Floating "talk to us" button. Links to the contact page.
 * Positioned above the global ScrollToTop button so the two never overlap.
 */
export default function FloatingChatIcon() {
  return (
    <div className="fixed bottom-24 right-7 z-50">
      <Link
        href="/contact"
        aria-label="Contact the AdsOptima team"
        title="Questions? Talk to our team"
        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </Link>
    </div>
  );
}
