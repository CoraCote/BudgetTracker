import { FICTIONAL_BRANDS } from './fictionalBrands';

/**
 * Client wordmark strip.
 * Renders text-based wordmarks for (fictional) customers instead of
 * third-party logo images.
 */
export default function ClientLogos() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Teams using AdsOptima">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-pink-200/20 to-blue-200/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-500 mb-8">
          Trusted by in-house teams and agencies
        </p>
        <ul className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 lg:gap-x-14">
          {FICTIONAL_BRANDS.slice(0, 6).map((brand) => (
            <li
              key={brand.name}
              className="group flex items-center gap-2 text-gray-500 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${brand.accent} text-[10px] font-bold text-white group-hover:scale-110 transition-transform duration-300`}
                aria-hidden="true"
              >
                {brand.initials}
              </span>
              <span className={`${brand.wordmarkClass} text-gray-600 group-hover:text-gray-800 transition-colors whitespace-nowrap`}>
                {brand.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
