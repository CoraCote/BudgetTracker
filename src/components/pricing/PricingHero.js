'use client';
import { useState, useEffect } from 'react';

export default function PricingHero({ onBillingChange, onAdSpendChange }) {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [adSpend, setAdSpend] = useState('25K');

  const billingOptions = [
    { id: 'monthly', label: 'Monthly', discount: null },
    { id: '6months', label: '6 Months', discount: 'SAVE 10%' },
    { id: 'annual', label: 'Annual', discount: 'SAVE 30%' }
  ];

  const adSpendOptions = ['25K', '50K', '75K', '150K', '250K', '350K', '500K', '500K+'];

  // Calculate dynamic starting price
  const getStartingPrice = () => {
    const basePrice = getBasePrice(adSpend);
    return getFinalPrice(basePrice, billingCycle);
  };

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

  // Notify parent component when values change
  useEffect(() => {
    if (onBillingChange) onBillingChange(billingCycle);
    if (onAdSpendChange) onAdSpendChange(adSpend);
  }, [billingCycle, adSpend, onBillingChange, onAdSpendChange]);

  const handleBillingChange = (cycle) => {
    setBillingCycle(cycle);
  };

  const handleAdSpendChange = (spend) => {
    setAdSpend(spend);
  };

  return (
    <section className="pt-30 pb-16 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The complete PPC toolkit, starting at ${getStartingPrice()} a month
          </h1>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            AdsOptima for search is simple. Pick a plan, connect your ad accounts, and unlock dozens of insight, optimization, and automation tools.
          </p>

          {/* Billing Cycle Selection */}
          <div className="flex justify-center items-center space-x-6 mb-12">
            {billingOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <button
                  onClick={() => handleBillingChange(option.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none ${
                    billingCycle === option.id
                      ? 'bg-white text-purple-900 shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${
                    billingCycle === option.id ? 'bg-purple-900' : 'border-2 border-white'
                  }`}>
                    {billingCycle === option.id && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                    )}
                  </div>
                  <span className="font-medium">{option.label}</span>
                  {option.discount && (
                    <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full font-bold">
                      {option.discount}
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Ad Spend Slider */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-6">
              What's your monthly ad spend?
            </h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                {adSpendOptions.map((spend) => (
                  <button
                    key={spend}
                    onClick={() => handleAdSpendChange(spend)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 focus:outline-none ${
                      adSpend === spend
                        ? 'bg-pink-500 text-white shadow-lg scale-110'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    ${spend}
                  </button>
                ))}
              </div>
              <div className="w-full bg-white/20 h-1 rounded-full">
                <div 
                  className="bg-pink-500 h-1 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${(adSpendOptions.indexOf(adSpend) / (adSpendOptions.length - 1)) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>

          <p className="text-sm text-purple-200">*All prices are in USD</p>
        </div>
      </div>
    </section>
  );
}
