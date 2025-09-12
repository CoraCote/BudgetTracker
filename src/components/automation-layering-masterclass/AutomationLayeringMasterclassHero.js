'use client';

import { useState } from 'react';
import VideoCard from './VideoCard';

export default function AutomationLayeringMasterclassHero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setEmail('');
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for subscribing! You\'ll be notified of new episodes.');
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full blur-3xl animate-float-medium"></div>
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #e0e0e0 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text and Form */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Learn how to make
                <br />
                <span className="gradient-text-purple-pink">automation work for you.</span>
                <br />
                <span className="text-gray-900">Not the ad platforms.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">
              Automation Layering Masterclass is a video series from Adsoptima featuring the best PPC practitioners and experts in the industry who'll teach you how to use automation in the right way to safeguard your PPC accounts and grow your business.
            </p>

            {/* Signup Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Sign up now to get notified of new episodes:
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address*"
                    required
                    className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Subscribe
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section - Video Card */}
          <div className="flex justify-center lg:justify-end">
            <VideoCard
              title="Automation Layering Masterclass"
              subtitle="Introducing:"
              hasPlayButton={true}
              gradient="purple-pink"
              className="w-full max-w-md"
              presenter="PPC Experts"
              company="Industry Leaders"
              duration="Series"
              views="10K+"
              tags={["PPC", "Automation", "Masterclass"]}
              isNew={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
