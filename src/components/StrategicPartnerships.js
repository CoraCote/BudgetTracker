import Link from 'next/link';

/**
 * Platform integrations section.
 * Describes the ad platforms AdsOptima connects to. It intentionally makes
 * no partner-tier or certification claims.
 */

const primaryPlatforms = [
  {
    name: 'Google Ads',
    description: 'Search, Shopping and Performance Max campaigns synced through the official Google Ads API.',
    cardClass: 'from-white to-purple-50 border-purple-100',
    iconClass: 'from-teal-400 to-blue-500',
    ping: 'bg-teal-300',
    icon: 'search',
    coverage: [
      ['Campaign types', 'Search, Shopping, PMax'],
      ['Data sync', 'Hourly'],
    ],
    features: ['Rule-based bid & budget changes', 'Search term & placement cleanup', 'Shopping feed optimization'],
  },
  {
    name: 'Microsoft Advertising',
    description: 'Manage Microsoft Advertising alongside Google Ads with shared rules, alerts and reports.',
    cardClass: 'from-white to-blue-50 border-blue-100',
    iconClass: 'from-blue-500 to-purple-600',
    ping: 'bg-blue-300',
    icon: 'grid',
    coverage: [
      ['Campaign types', 'Search, Shopping'],
      ['Data sync', 'Hourly'],
    ],
    features: ['Cross-platform budget pacing', 'Bulk edits across accounts', 'Unified reporting'],
  },
  {
    name: 'Meta Ads',
    description: 'Bring social campaign performance into the same dashboards and alerting workflows.',
    cardClass: 'from-white to-pink-50 border-pink-100',
    iconClass: 'from-indigo-500 to-pink-500',
    ping: 'bg-pink-300',
    icon: 'users',
    coverage: [
      ['Coverage', 'Reporting & alerts'],
      ['Data sync', 'Daily'],
    ],
    features: ['Spend & CPA monitoring', 'Creative performance views', 'Cross-channel reports'],
  },
];

const secondaryPlatforms = [
  {
    name: 'Amazon Ads',
    subtitle: 'Integration',
    tags: ['Sponsored Products', 'Sponsored Brands'],
    cardClass: 'from-orange-50 to-yellow-50 border-orange-200',
    iconClass: 'from-orange-400 to-yellow-500',
    tagClass: 'text-orange-600 bg-orange-100',
  },
  {
    name: 'Google Analytics 4',
    subtitle: 'Data connection',
    tags: ['Conversions', 'Audiences'],
    cardClass: 'from-pink-50 to-purple-50 border-pink-200',
    iconClass: 'from-pink-400 to-purple-500',
    tagClass: 'text-pink-600 bg-pink-100',
  },
];

const highlights = [
  { value: '5', label: 'Ad & analytics platforms', color: 'text-purple-600' },
  { value: '24/7', label: 'Automated monitoring', color: 'text-blue-600' },
  { value: 'Hourly', label: 'Data refresh for search', color: 'text-green-600' },
  { value: '1', label: 'Dashboard for every account', color: 'text-pink-600' },
];

function PlatformIcon({ type }) {
  if (type === 'search') {
    return (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    );
  }
  if (type === 'grid') {
    return (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    );
  }
  return (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function StrategicPartnerships() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-20 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-xl animate-bounce opacity-60" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-lg animate-bounce opacity-50" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Platform Integrations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AdsOptima connects to the ad and analytics platforms you already use, so every account lives in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {primaryPlatforms.map((platform, index) => (
            <div
              key={platform.name}
              className={`group relative bg-gradient-to-br ${platform.cardClass} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border overflow-hidden`}
            >
              <div className={`absolute top-4 right-4 w-3 h-3 ${platform.ping} rounded-full animate-ping opacity-60`} style={{ animationDelay: `${index}s` }}></div>
              <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${platform.iconClass} rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                <PlatformIcon type={platform.icon} />
              </div>

              <div className="mb-6 pr-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{platform.name}</h3>
                <p className="text-gray-600 leading-relaxed">{platform.description}</p>
              </div>

              <dl className="space-y-4 mb-6">
                {platform.coverage.map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center gap-4">
                    <dt className="text-sm text-gray-500">{label}</dt>
                    <dd className="text-sm font-semibold text-purple-600 text-right">{value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="space-y-2">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {secondaryPlatforms.map((platform) => (
            <div key={platform.name} className={`bg-gradient-to-r ${platform.cardClass} rounded-xl p-6 border hover:shadow-lg transition-shadow group`}>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 flex-shrink-0 bg-gradient-to-br ${platform.iconClass} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{platform.name}</h4>
                  <p className="text-sm text-gray-600">{platform.subtitle}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {platform.tags.map((tag) => (
                      <span key={tag} className={`text-xs ${platform.tagClass} px-2 py-1 rounded-full`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">One platform, every channel</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="text-center group hover:scale-105 transition-transform">
                <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/solutions/integrations"
              className="inline-flex items-center font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              Explore all integrations
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
