export default function EnterprisesFeatures() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Maximize ROI with intelligent automation",
      description: "Connect your first-party business data (CSV, XML, and more) to help ad platform automation make better decisions. Get exclusive access to AdsOptima's API to integrate data with other tools in your marketing stack.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Enterprise-grade security & compliance",
      description: "Bank-level security with SOC 2 Type II compliance, enterprise SSO, advanced role-based permissions, and dedicated infrastructure for your team's peace of mind.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: "Advanced analytics & benchmarking",
      description: "Compare your performance against industry verticals, track competitive insights, and leverage machine learning for predictive analytics and optimization recommendations.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: "Dedicated enterprise support",
      description: "24/7 priority support with dedicated account managers, custom onboarding, training programs, and strategic consultation to ensure your success.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2v-4a2 2 0 00-2-2H6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Custom integrations & API access",
      description: "Seamlessly integrate with your existing tech stack including CRM systems, analytics platforms, and custom workflows through our comprehensive API.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
        </svg>
      ),
      title: "Scalable team collaboration",
      description: "Manage multiple accounts, teams, and clients with advanced collaboration tools, workflow automation, and centralized reporting dashboards.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The PPC management platform built for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              enterprise teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scale efficiently across any number of accounts. Empower your team to collaborate, analyze, 
            and deliver results for clients with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-gray-50 to-purple-50 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Connect and view informative data from different sources at one place
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Seamlessly integrate with your existing marketing stack and data sources for a unified view of your PPC performance.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Google Spreadsheet', color: 'bg-green-100 text-green-700' },
                  { name: 'HubSpot', color: 'bg-orange-100 text-orange-700' },
                  { name: 'Zoho', color: 'bg-blue-100 text-blue-700' },
                  { name: 'Salesforce', color: 'bg-indigo-100 text-indigo-700' },
                  { name: 'Shopify', color: 'bg-emerald-100 text-emerald-700' },
                  { name: 'Other Integrations', color: 'bg-gray-100 text-gray-700' }
                ].map((integration, index) => (
                  <div key={index} className={`flex items-center px-4 py-3 rounded-lg ${integration.color} font-medium`}>
                    <span className="w-2 h-2 bg-current rounded-full mr-3"></span>
                    {integration.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Create A New Strategy</h4>
              <p className="text-gray-600 mb-6">
                You can create your own strategy with the scope "Custom Data Source". You can take multiple actions within this strategy by creating your own rules, conditions and actions.
              </p>
              
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Upload Offline Conversion
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Include in Report
                  </li>
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Create Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
