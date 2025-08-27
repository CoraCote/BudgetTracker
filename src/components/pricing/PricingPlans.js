export default function PricingPlans({ billingCycle = 'monthly', adSpend = '25K' }) {
  // Base monthly prices for different ad spend tiers
  const getBasePrice = (adSpend) => {
    const spendMap = {
      '25K': 299,
      '50K': 349,
      '75K': 399,
      '150K': 449,
      '250K': 499,
      '350K': 549,
      '500K': 599,
      '500K+': 699
    };
    return spendMap[adSpend] || 299;
  };

  // Calculate final price based on billing cycle
  const getFinalPrice = (basePrice, billingCycle) => {
    switch (billingCycle) {
      case '6months':
        return Math.round(basePrice * 0.9); // 10% discount
      case 'annual':
        return Math.round(basePrice * 0.7); // 30% discount
      default:
        return basePrice;
    }
  };

  // Get billing cycle label and savings info
  const getBillingInfo = (billingCycle) => {
    switch (billingCycle) {
      case '6months':
        return { label: '/mo (6 months)', savings: 'Save 10%' };
      case 'annual':
        return { label: '/mo (annual)', savings: 'Save 30%' };
      default:
        return { label: '/month', savings: null };
    }
  };

  const basePrice = getBasePrice(adSpend);
  const billingInfo = getBillingInfo(billingCycle);

  const plans = [
    {
      name: 'ESSENTIALS',
      description: 'For up to 25 Accounts',
      basePrice: basePrice,
      finalPrice: getFinalPrice(basePrice, billingCycle),
      billingInfo: billingInfo,
      primaryButton: 'Start Trial',
      secondaryButton: 'Request Demo',
      primaryButtonStyle: 'outline',
      features: [
        'Keyword, Search Query, Ad Optimizations',
        'PMax Optimizations and Insights',
        'Account Audits and Performance Reports',
        'Budget Monitoring, Management and Optimization',
        'Performance Monitoring and KPI Alerts',
        'Data Insights - Geo, Audience and Time',
        'Custom Strategies and Insights With Rule Engine',
        'Real-time data refresh'
      ]
    },
    {
      name: 'PREMIUM',
      description: 'Unlimited Ad Accounts*',
      basePrice: basePrice + 90, // $90 more than Essentials
      finalPrice: getFinalPrice(basePrice + 90, billingCycle),
      billingInfo: billingInfo,
      primaryButton: 'Start Trial',
      secondaryButton: 'Request Demo',
      primaryButtonStyle: 'filled',
      recommended: true,
      features: [
        'All features in Essentials Plan, plus:',
        'Shopping/PMax Retail Campaign Management',
        'Campaign Automator',
        'PPC Vertical Benchmarks',
        'Multi-Account / Cross-Platform Budget Management and Reports',
        'Multi-Account / Cross-Platform Reporting and Dashboards',
        'Smart Placement Exclusions',
        'Daily Automations for Shopping, Reports, and Optimizations',
        'Two 30-minute onboarding sessions',
        'One personalized video training session every six months'
      ]
    },
    {
      name: 'ENTERPRISE',
      description: 'Unlimited Ad Accounts*',
      price: 'Get a Custom Plan',
      priceSubtitle: "Let's Talk",
      primaryButton: 'Get In Touch',
      secondaryButton: 'Request Demo',
      primaryButtonStyle: 'outline',
      features: [
        'All features in Premium Plan, plus:',
        'Custom Data Integrations and Solutions',
        'Access to AdOptima API on request',
        'Okta SSO',
        'Dedicated account manager',
        'Monthly training sessions and check-ins',
        'And much more!'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Summary */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Dynamic Pricing Based on Your Ad Spend
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Monthly ad spend: <span className="font-semibold text-purple-600">${adSpend}</span> • 
            Billing: <span className="font-semibold text-purple-600">{billingCycle === 'monthly' ? 'Monthly' : billingCycle === '6months' ? '6 Months' : 'Annual'}</span>
            {billingInfo.savings && (
              <span className="ml-2 text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                {billingInfo.savings}
              </span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.recommended
                  ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-xl'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  {plan.name === 'ENTERPRISE' ? (
                    <>
                      <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                      <div className="text-lg text-gray-600 mt-1">{plan.priceSubtitle}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-3xl font-bold text-gray-900">${plan.finalPrice}</div>
                      <div className="text-lg text-gray-600 mt-1">{plan.billingInfo.label}</div>
                      {billingInfo.savings && (
                        <div className="text-sm text-green-600 mt-1">
                          <span className="line-through">${plan.basePrice}</span> {billingInfo.savings}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.primaryButtonStyle === 'filled'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      : 'border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:border-purple-600'
                  }`}
                >
                  {plan.primaryButton}
                </button>
                <button className="w-full py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 text-gray-600 hover:border-purple-300 hover:text-purple-600 transition-all duration-300">
                  {plan.secondaryButton}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
