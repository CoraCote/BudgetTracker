'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What is Automation Layering Masterclass?",
    answer: "Automation Layering Masterclass is our new video podcast with the goal to teach you how to use automation to protect your PPC accounts and grow your business.",
    isOpen: true
  },
  {
    id: 2,
    question: "What is the purpose of this series?",
    answer: "The purpose of this series is to help PPC professionals understand how to implement automation strategies that work for their business, not against it. We focus on practical, actionable insights from industry experts.",
    isOpen: false
  },
  {
    id: 3,
    question: "What is PPC automation?",
    answer: "PPC automation refers to the use of tools, scripts, and algorithms to automatically manage and optimize pay-per-click advertising campaigns. This includes bid management, keyword optimization, ad testing, and performance monitoring.",
    isOpen: false
  },
  {
    id: 4,
    question: "What are the benefits of PPC automation?",
    answer: "PPC automation offers several benefits including improved efficiency, better performance optimization, reduced manual work, faster campaign adjustments, and the ability to scale campaigns effectively while maintaining quality control.",
    isOpen: false
  },
  {
    id: 5,
    question: "How often are new episodes released?",
    answer: "New episodes are typically released monthly, featuring industry experts and practitioners who share their real-world experiences with PPC automation strategies and best practices.",
    isOpen: false
  },
  {
    id: 6,
    question: "Is this content suitable for beginners?",
    answer: "Yes! Our content is designed to be accessible to PPC professionals at all levels, from beginners to advanced practitioners. Each episode includes practical examples and actionable insights that can be applied immediately.",
    isOpen: false
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([1]); // First item is open by default

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #e0e0e0 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-100 last:border-b-0">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(faq.id) ? (
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Contact Support
            </button>
            <button className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
