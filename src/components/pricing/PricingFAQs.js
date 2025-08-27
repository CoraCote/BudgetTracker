'use client';
import { useState } from 'react';

export default function PricingFAQs({ billingCycle = 'monthly', adSpend = '25K' }) {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Which ad platforms does AdOptima support?',
      answer: 'AdOptima supports all major advertising platforms including Google Ads, Microsoft Advertising, Facebook Ads, Instagram Ads, LinkedIn Ads, and TikTok Ads. We provide comprehensive integration and optimization tools for each platform.'
    },
    {
      id: 2,
      question: 'Do you offer discounts for new businesses, agencies, or non-profit organizations?',
      answer: 'Yes, we offer special pricing for new businesses, agencies with multiple clients, and non-profit organizations. Please contact our sales team to discuss your specific needs and available discounts.'
    },
    {
      id: 3,
      question: 'What are the different billing cycles you offer?',
      answer: 'We offer flexible billing cycles including monthly, 6-month (with 10% savings), and annual (with 30% savings). All plans can be upgraded, downgraded, or cancelled at any time.'
    },
    {
      id: 4,
      question: 'Which payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners.'
    },
    {
      id: 5,
      question: 'What happens if I exceed the spend limits in my subscription plan?',
      answer: 'If you exceed your plan\'s spend limits, we\'ll notify you and work with you to either upgrade your plan or adjust your usage. We never charge overage fees without prior communication.'
    },
    {
      id: 6,
      question: 'Do you have an affiliate program?',
      answer: 'Yes, we have a comprehensive affiliate program for agencies and partners. Earn commissions for every successful referral. Contact our partnerships team to learn more about our affiliate program.'
    },
    {
      id: 7,
      question: 'Do I have to sign a contract?',
      answer: 'No, we offer month-to-month subscriptions with no long-term contracts required. You can cancel your subscription at any time with no penalties or hidden fees.'
    },
    {
      id: 8,
      question: 'How do I cancel my account?',
      answer: 'You can cancel your account at any time through your account settings or by contacting our support team. We\'ll process your cancellation immediately and you\'ll have access until the end of your current billing period.'
    },
    {
      id: 9,
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for new customers. If you\'re not satisfied with our service within the first 30 days, we\'ll provide a full refund. For existing customers, we handle refunds on a case-by-case basis.'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">Pricing FAQs</h2>
        
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full py-6 text-left flex items-center justify-between hover:text-purple-600 transition-colors group"
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-600">
                  {faq.question}
                </span>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                  <svg
                    className={`w-4 h-4 text-white transition-transform duration-300 ${
                      openFAQ === faq.id ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="pb-6 pr-16">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
