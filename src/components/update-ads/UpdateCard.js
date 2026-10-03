'use client';
import { useState } from 'react';
import Link from 'next/link';
import InitialsAvatar from '../InitialsAvatar';

const REACTIONS = [
  { value: 'unhappy', emoji: '😢', label: 'Not helpful' },
  { value: 'neutral', emoji: '😐', label: 'Okay' },
  { value: 'happy', emoji: '😊', label: 'Helpful' },
];

export default function UpdateCard({ update, feedback, onFeedbackChange }) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [reaction, setReaction] = useState(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [shareStatus, setShareStatus] = useState('');

  const handleShare = async () => {
    const url = `${window.location.origin}/update-ads#update-${update.id}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: update.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setShareStatus('Link copied');
    } catch {
      setShareStatus('');
      return;
    }
    setTimeout(() => setShareStatus(''), 2000);
  };

  const handleSubmitFeedback = () => {
    if (!feedback.trim()) return;
    onFeedbackChange('');
    setFeedbackSent(true);
    setShowFeedback(false);
  };

  return (
    <article id={`update-${update.id}`} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-200 scroll-mt-24">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${update.typeColor} ${update.typeTextColor || 'text-white'} shadow-sm`}>
            {update.type}
          </span>
          <span className="text-gray-500 text-sm font-medium">{update.date}</span>
        </div>
        <div className="flex items-center gap-2">
          {shareStatus && <span className="text-xs text-green-600 font-medium" role="status">{shareStatus}</span>}
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share this update"
            title="Share this update"
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Author Info */}
      <div className="flex items-center space-x-3 mb-5">
        <InitialsAvatar name={update.author.name} size="medium" className="ring-2 ring-white shadow-sm" />
        <div>
          <p className="font-semibold text-gray-900 text-sm">{update.author.name}</p>
          <p className="text-gray-500 text-xs font-medium">{update.author.role}</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
        {update.title}
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-6 leading-relaxed text-base">
        {update.description}
      </div>

      {/* Call to Action */}
      <div className="mb-6">
        <Link
          href={update.ctaLink}
          className="text-purple-600 hover:text-purple-700 font-semibold transition-colors inline-flex items-center group text-base"
        >
          {update.cta}
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Feedback Section */}
      <div className="border-t border-gray-200 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <button
            type="button"
            onClick={() => setShowFeedback(!showFeedback)}
            aria-expanded={showFeedback}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors group"
          >
            <span className="text-sm font-medium">Send us your feedback</span>
            <svg className={`w-4 h-4 transition-transform group-hover:text-gray-700 ${showFeedback ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="flex items-center space-x-3" role="group" aria-label="Rate this update">
            {REACTIONS.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setReaction(reaction === item.value ? null : item.value)}
                aria-pressed={reaction === item.value}
                aria-label={item.label}
                title={item.label}
                className={`rounded-full p-1 transition-all transform hover:scale-110 ${
                  reaction === item.value ? 'bg-purple-100 ring-2 ring-purple-300 scale-110' : reaction ? 'opacity-50' : ''
                }`}
              >
                <span className="text-xl" aria-hidden="true">{item.emoji}</span>
              </button>
            ))}
          </div>
        </div>

        {reaction && !showFeedback && !feedbackSent && (
          <p className="text-sm text-gray-500" role="status">Thanks for rating this update!</p>
        )}

        {feedbackSent && !showFeedback && (
          <p className="text-sm text-green-600 font-medium" role="status">Thanks! Your feedback helps us improve AdsOptima.</p>
        )}

        {showFeedback && (
          <div className="mt-4 space-y-3">
            <label htmlFor={`feedback-${update.id}`} className="sr-only">Your feedback</label>
            <textarea
              id={`feedback-${update.id}`}
              value={feedback}
              onChange={(e) => onFeedbackChange(e.target.value)}
              placeholder="Share your thoughts about this update..."
              className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm placeholder-gray-400"
              rows={3}
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSubmitFeedback}
                disabled={!feedback.trim()}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
