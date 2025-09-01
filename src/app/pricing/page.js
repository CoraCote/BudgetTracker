'use client';
import { useState } from 'react';
import PricingHero from '../../components/pricing/PricingHero';
import PricingPlans from '../../components/pricing/PricingPlans';
import PricingComparison from '../../components/pricing/PricingComparison';
import PricingFAQs from '../../components/pricing/PricingFAQs';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [adSpend, setAdSpend] = useState('25K');

  const handleBillingChange = (cycle) => {
    setBillingCycle(cycle);
  };

  const handleAdSpendChange = (spend) => {
    setAdSpend(spend);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <PricingHero 
        onBillingChange={handleBillingChange}
        onAdSpendChange={handleAdSpendChange}
      />
      <PricingPlans 
        billingCycle={billingCycle}
        adSpend={adSpend}
      />
      <PricingComparison 
        billingCycle={billingCycle}
        adSpend={adSpend}
      />
      <PricingFAQs 
        billingCycle={billingCycle}
        adSpend={adSpend}
      />
    </div>
  );
}
