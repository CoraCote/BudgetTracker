'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function UpdateCard({ update, feedback, onFeedbackChange }) {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center space-x-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white ${update.typeColor} ${update.typeTextColor || 'text-white'} shadow-sm`}>
            {update.type}
          </span>
          <span className="text-gray-500 text-sm font-medium">{update.date}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>

      {/* Author Info */}
      <div className="flex items-center space-x-3 mb-5">
        <div className="relative">
          <Image
            src={update.author.avatar}
            alt={update.author.name}
            width={44}
            height={44}
            className="rounded-full object-cover ring-2 ring-white shadow-sm"
          />
          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full shadow-sm"></div>
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{update.author.name}</p>
          <p className="text-gray-500 text-xs font-medium">{update.author.role}</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
        {update.title}
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-6 leading-relaxed text-base">
        {update.description}
      </div>

      {/* Call to Action */}
      <div className="mb-6">
        <a 
          href={update.ctaLink}
          className="text-purple-600 hover:text-purple-700 font-semibold transition-colors inline-flex items-center group text-base"
        >
          {update.cta}
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Feedback Section */}
      <div className="border-t border-gray-200 pt-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowFeedback(!showFeedback)}
              className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors group"
            >
              <span className="text-sm font-medium">Send us your feedback</span>
              <svg className={`w-4 h-4 transition-transform group-hover:text-gray-700 ${showFeedback ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-yellow-500 hover:text-yellow-600 transition-colors transform hover:scale-110">
              <span className="text-xl">😢</span>
            </button>
            <button className="text-yellow-500 hover:text-yellow-600 transition-colors transform hover:scale-110">
              <span className="text-xl">😐</span>
            </button>
            <button className="text-yellow-500 hover:text-yellow-600 transition-colors transform hover:scale-110">
              <span className="text-xl">😊</span>
            </button>
          </div>
        </div>
        
        {showFeedback && (
          <div className="mt-4 space-y-3">
            <textarea
              value={feedback}
              onChange={(e) => onFeedbackChange(e.target.value)}
              placeholder="Share your thoughts about this update..."
              className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm placeholder-gray-400"
              rows={3}
            />
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md">
                Submit Feedback
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
