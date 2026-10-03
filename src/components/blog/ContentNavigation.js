const sections = [
  { id: 'expert-insights', name: 'Expert Insights' },
  { id: 'data-studies', name: 'Data Studies' },
  { id: 'video-library', name: 'Videos' },
  { id: 'customer-stories', name: 'Customer success stories' },
];

/**
 * In-page navigation for the blog. Each item jumps to the matching section below.
 */
export default function ContentNavigation() {
  return (
    <nav className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-100" aria-label="Blog sections">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
          Browse by topic
        </p>
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-block px-5 py-2.5 text-base sm:text-lg font-medium text-gray-600 rounded-full border border-transparent hover:text-purple-700 hover:border-purple-200 hover:bg-purple-50 transition-colors duration-200"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
