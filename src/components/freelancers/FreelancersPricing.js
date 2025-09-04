'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FreelancersPricing() {
  const [selectedTier, setSelectedTier] = useState(4); // $150K tier

  const pricingTiers = [
    { spend: '$10K', label: 'Starter', price: 99, originalPrice: 149 },
    { spend: '$25K', label: 'Growth', price: 199, originalPrice: 249 },
    { spend: '$50K', label: 'Professional', price: 299, originalPrice: 349 },
    { spend: '$75K', label: 'Pro', price: 399, originalPrice: 449 },
    { spend: '$150K', label: 'Pro', price: 416, originalPrice: 499 },
    { spend: '$250K', label: 'Pro', price: 499, originalPrice: 599 },
    { spend: '$350K', label: 'Pro+', price: 599, originalPrice: 699 },
    { spend: '$500K', label: 'Pro+', price: 799, originalPrice: 899 },
    { spend: 'Enterprise', label: 'Enterprise', price: 'Custom', originalPrice: null }
  ];

  const features = [
    'All Core Features',
    'All Automations',
    'PPC Vertical Benchmarks',
    'Real Time Data Refresh',
    'Two 30-minute Onboarding sessions',
    '1 Personalised Video Training Session every 6 Months',
    'Up to 50 Accounts',
    `${pricingTiers[selectedTier].spend} Monthly Ad Spend`
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            PPC Management Platform for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              PPC Freelancers
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                No penalties for keeping clients happy and successful.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Grow your client base without worrying about rising costs or limitations. AdOptima's flexible pricing means you won't be charged more until you hit the next tier of spend. In fact, you'll pay a lower percentage of ad spend as you move up.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Flexible pricing that grows with you</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">No hidden fees or surprise charges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Cancel anytime, no long-term contracts</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-xl font-semibold text-gray-900">What's Your Monthly Ad Spend?</h4>
              
              <div className="space-y-4">
                <div className="relative">
                  <div className="flex justify-between items-center mb-4">
                    {pricingTiers.map((tier, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === selectedTier 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                            : 'bg-purple-200'
                        }`}></div>
                        <div className="text-xs text-gray-600 mt-1">{tier.spend}</div>
                        {tier.label && (
                          <div className="text-xs font-medium text-purple-600 mt-1">{tier.label}</div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="relative h-2 bg-purple-100 rounded-full">
                    <div 
                      className="absolute h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                      style={{ width: `${((selectedTier + 1) / pricingTiers.length) * 100}%` }}
                    ></div>
                  </div>
                  
                  <input
                    type="range"
                    min="0"
                    max={pricingTiers.length - 1}
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              <div className="text-center space-y-2">
                {pricingTiers[selectedTier].originalPrice && (
                  <div className="text-2xl text-gray-400 line-through">
                    ${pricingTiers[selectedTier].originalPrice}
                  </div>
                )}
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">
                  {pricingTiers[selectedTier].price === 'Custom' ? 'Custom' : `$${pricingTiers[selectedTier].price}/Mo`}
                </div>
                {pricingTiers[selectedTier].price !== 'Custom' && (
                  <div className="text-sm text-purple-600 font-medium">Save ${pricingTiers[selectedTier].originalPrice - pricingTiers[selectedTier].price}/month</div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signup" 
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Start Trial
                </Link>
                <Link 
                  href="/contact" 
                  className="flex-1 bg-white border-2 border-purple-200 text-purple-700 font-semibold py-3 px-6 rounded-xl hover:bg-purple-50 hover:border-purple-300 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Book Demo
                </Link>
              </div>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
