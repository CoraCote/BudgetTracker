'use client';
import { useState } from 'react';

export default function PricingComparison({ billingCycle = 'monthly', adSpend = '25K' }) {
  const [expandedFeatures, setExpandedFeatures] = useState(new Set(['real-time-data']));

  // Base monthly prices for different ad spend tiers (same as PricingPlans)
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

  // Get billing cycle label
  const getBillingLabel = (billingCycle) => {
    switch (billingCycle) {
      case '6months':
        return '/Mo (6 months)';
      case 'annual':
        return '/Mo (annual)';
      default:
        return '/Mo billed monthly';
    }
  };

  const basePrice = getBasePrice(adSpend);

  const features = [
    {
      id: 'real-time-data',
      name: 'Real-time data refresh',
      expandable: true,
      subFeatures: [
        'Data is pulled in real time from ad platforms for analysis',
        'Changes are pushed instantly to ad platforms without delays'
      ],
      essentials: 'all',
      premium: 'all',
      enterprise: 'all'
    },
    {
      id: 'optimizations',
      name: 'Optimizations, Audits, Insights, and Monitoring',
      essentials: 'limited',
      premium: 'all',
      enterprise: 'all'
    },
    {
      id: 'reporting',
      name: 'Reporting and Dashboards',
      essentials: 'limited',
      premium: 'all',
      enterprise: 'all'
    },
    {
      id: 'shopping',
      name: 'Shopping / PMax Retail Campaign and Feed Management',
      essentials: 'not-included',
      premium: 'all',
      enterprise: 'all'
    },
    {
      id: 'budget',
      name: 'Budget Monitoring and Optimization',
      essentials: 'limited',
      premium: 'all',
      enterprise: 'all'
    },
    {
      id: 'campaign-creation',
      name: 'Advanced Campaign Creation',
      essentials: 'limited',
      premium: 'all',
      enterprise: 'all'
    },
    {
      id: 'workflow',
      name: 'Workflow Management',
      essentials: 'limited',
      premium: 'limited',
      enterprise: 'all'
    },
    {
      id: 'feature-access',
      name: 'Feature Access',
      essentials: 'limited',
      premium: 'limited',
      enterprise: 'all'
    },
    {
      id: 'support',
      name: 'Support and Onboarding',
      essentials: 'limited',
      premium: 'limited',
      enterprise: 'all'
    }
  ];

  const plans = [
    {
      name: 'ESSENTIALS',
      price: `$${getFinalPrice(basePrice, billingCycle)}${getBillingLabel(billingCycle)}`,
      primaryButton: 'Start Trial',
      secondaryButton: 'Request Demo',
      primaryButtonStyle: 'outline'
    },
    {
      name: 'PREMIUM',
      price: `$${getFinalPrice(basePrice + 90, billingCycle)}${getBillingLabel(billingCycle)}`,
      primaryButton: 'Start Trial',
      secondaryButton: 'Request Demo',
      primaryButtonStyle: 'filled'
    },
    {
      name: 'ENTERPRISE',
      price: 'Get a Custom Plan',
      primaryButton: 'Get In Touch',
      secondaryButton: 'Request Demo',
      primaryButtonStyle: 'outline'
    }
  ];

  const getAvailabilityIcon = (availability) => {
    switch (availability) {
      case 'all':
        return (
          <div className="text-center">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs text-purple-600 font-medium">All</span>
          </div>
        );
      case 'limited':
        return (
          <div className="text-center">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs text-purple-600 font-medium">Limited</span>
          </div>
        );
      case 'not-included':
        return (
          <div className="text-center">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs text-red-600 font-medium">Not Included</span>
          </div>
        );
      default:
        return null;
    }
  };

  const toggleFeature = (featureId) => {
    const newExpanded = new Set(expandedFeatures);
    if (newExpanded.has(featureId)) {
      newExpanded.delete(featureId);
    } else {
      newExpanded.add(featureId);
    }
    setExpandedFeatures(newExpanded);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Compare All Plans and Features
        </h2>

        {/* Pricing Summary */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-6">
            Monthly ad spend: <span className="font-semibold text-purple-600">${adSpend}</span> • 
            Billing: <span className="font-semibold text-purple-600">{billingCycle === 'monthly' ? 'Monthly' : billingCycle === '6months' ? '6 Months' : 'Annual'}</span>
            {(billingCycle === '6months' || billingCycle === 'annual') && (
              <span className="ml-2 text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                {billingCycle === '6months' ? 'Save 10%' : 'Save 30%'}
              </span>
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-4 border-b border-gray-200">
            <div className="p-6 bg-gray-50"></div>
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`p-6 text-center ${
                  index === 1 ? 'bg-gradient-to-br from-purple-50 to-pink-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.price}</p>
                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 mb-2 ${
                    plan.primaryButtonStyle === 'filled'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                      : 'border border-purple-500 text-purple-600 hover:bg-purple-50 hover:border-purple-600'
                  }`}
                >
                  {plan.primaryButton}
                </button>
                <button className="w-full py-2 px-4 text-purple-600 hover:text-purple-700 font-medium text-sm">
                  {plan.secondaryButton}
                </button>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {features.map((feature) => (
            <div key={feature.id}>
              <div className="grid grid-cols-4 border-b border-gray-100">
                <div className="p-6 bg-gray-50">
                  <button
                    onClick={() => feature.expandable && toggleFeature(feature.id)}
                    className="flex items-center space-x-2 text-left w-full hover:text-purple-600 transition-colors"
                  >
                    {feature.expandable && (
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          expandedFeatures.has(feature.id) ? 'rotate-90' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                    <span className="font-medium text-gray-900">{feature.name}</span>
                  </button>
                </div>
                <div className="p-6 flex items-center justify-center">
                  {getAvailabilityIcon(feature.essentials)}
                </div>
                <div className="p-6 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
                  {getAvailabilityIcon(feature.premium)}
                </div>
                <div className="p-6 flex items-center justify-center">
                  {getAvailabilityIcon(feature.enterprise)}
                </div>
              </div>

              {/* Sub-features for expandable features */}
              {feature.expandable && expandedFeatures.has(feature.id) && (
                <div className="bg-gray-50">
                  {feature.subFeatures.map((subFeature, subIndex) => (
                    <div key={subIndex} className="grid grid-cols-4 border-b border-gray-100 last:border-b-0">
                      <div className="p-6 pl-16 bg-gray-50">
                        <span className="text-sm text-gray-700">{subFeature}</span>
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        {getAvailabilityIcon(feature.essentials)}
                      </div>
                      <div className="p-6 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
                        {getAvailabilityIcon(feature.premium)}
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        {getAvailabilityIcon(feature.enterprise)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-gray-600">
            *Hourly and annual automation available on demand.
          </p>
          <p className="text-sm text-gray-600">
            **Facebook, Instagram, and Linkedin data are available through the AdOptima for Social add-on subscription.
          </p>
        </div>
      </div>
    </section>
  );
}
