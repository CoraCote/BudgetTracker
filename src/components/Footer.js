import Link from 'next/link';
import Logo from './Logo';
import ScrollToTop from './ScrollToTop';
import FooterNewsletter from './FooterNewsletter';

const resourceLinks = [
  { label: 'Blog', href: '/blog', dot: 'bg-purple-400' },
  { label: 'Case Studies', href: '/case-studies', dot: 'bg-blue-400' },
  { label: 'Learn with AdsOptima', href: '/learn-with-adsoptima', dot: 'bg-green-400' },
  { label: 'PPC Town Hall', href: '/ppctownhall', dot: 'bg-yellow-400' },
  { label: 'Product Updates', href: '/update-ads', dot: 'bg-pink-400' },
];

const productLinks = [
  { label: 'AdsOptima AI', href: '/solutions/adsoptima-ai', dot: 'bg-blue-400' },
  { label: 'Rule Engine', href: '/solutions/rule-engine', dot: 'bg-cyan-400' },
  { label: 'Reporting', href: '/solutions/reporting', dot: 'bg-teal-400' },
  { label: 'Pricing Plans', href: '/pricing', dot: 'bg-indigo-400' },
  { label: 'Integrations', href: '/solutions/integrations', dot: 'bg-purple-400' },
];

const supportLinks = [
  { label: 'Contact Support', href: '/contact', dot: 'bg-green-400' },
  { label: 'Book a Demo', href: '/contact?topic=demo', dot: 'bg-emerald-400' },
];

// Legal pages are not published yet, so these render as plain text rather than dead links.
const legalItems = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

function FooterLink({ label, href, dot }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors group flex items-center">
      <span className={`w-2 h-2 ${dot} rounded-full mr-3 group-hover:scale-150 transition-transform duration-300`}></span>
      <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">{label}</span>
    </Link>
  );
}

function FooterLinkColumn({ title, barClass, links }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6 flex items-center">
        <span className={`w-1 h-6 bg-gradient-to-b ${barClass} rounded-full mr-3`}></span>
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-600/30 to-blue-600/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 group">
              <Logo size="default" variant="white" />
              <div className="ml-3 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your advertising campaigns with AI-powered optimization. 
              Real-time insights, proven ROI, and results that speak for themselves.
            </p>
            
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <h4 className="text-sm font-semibold mb-2 text-gray-200">Stay Updated</h4>
              <FooterNewsletter />
            </div>
          </div>

          <FooterLinkColumn title="Resources" barClass="from-purple-400 to-pink-400" links={resourceLinks} />

          <FooterLinkColumn title="Product" barClass="from-blue-400 to-cyan-400" links={productLinks} />

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></span>
              Contact & Support
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Write to us</p>
                  <Link href="/contact" className="text-green-400 hover:text-green-300 transition-colors font-medium">Send a message</Link>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">See it in action</p>
                  <Link href="/contact?topic=demo" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">Book a demo</Link>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Response time</p>
                  <p className="text-purple-400 font-medium">Within one business day</p>
                </div>
              </div>
            </div>

            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} AdsOptima. All rights reserved.</p>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-medium">Live Status: Operational</span>
              </div>
            </div>
            
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Legal">
              {legalItems.map((item) => (
                <li key={item} className="text-gray-500 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700/30">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-500">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Official platform APIs</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Encrypted connections</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">24/7 account monitoring</span>
              </div>
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>
    </footer>
  );
}
