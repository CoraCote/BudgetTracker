/**
 * Client Logos component with enhanced bubble effects and animations
 * Features client logos with subtle floating elements
 */
export default function ClientLogos() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-pink-200/20 to-blue-200/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
          <div className="text-gray-700 font-semibold hover:opacity-100 transition-opacity duration-300 group">
            <span className="group-hover:scale-110 transition-transform duration-300 inline-block">PEAK ACE</span>
          </div>
          <div className="text-gray-700 font-semibold hover:opacity-100 transition-opacity duration-300 group">
            <span className="group-hover:scale-110 transition-transform duration-300 inline-block">madwire</span>
          </div>
          <div className="text-gray-700 font-semibold hover:opacity-100 transition-opacity duration-300 group">
            <span className="group-hover:scale-110 transition-transform duration-300 inline-block">BBQGUYS</span>
          </div>
          <div className="text-gray-700 font-semibold hover:opacity-100 transition-opacity duration-300 group">
            <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Emma.</span>
          </div>
          <div className="text-gray-700 font-semibold hover:opacity-100 transition-opacity duration-300 group">
            <span className="group-hover:scale-110 transition-transform duration-300 inline-block">MedStar Health</span>
          </div>
          <div className="text-gray-700 font-semibold hover:opacity-100 transition-opacity duration-300 group">
            <span className="group-hover:scale-110 transition-transform duration-300 inline-block">SECURE TICKET PURCHASE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
