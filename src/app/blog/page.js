import BlogHero from '@/components/blog/BlogHero';
import LatestArticles from '@/components/blog/LatestArticles';
import FeaturedAuthors from '@/components/blog/FeaturedAuthors';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import ContentNavigation from '@/components/blog/ContentNavigation';
import ExpertInsights from '@/components/blog/ExpertInsights';
import DataStudies from '@/components/blog/DataStudies';
import VideoLibrary from '@/components/blog/VideoLibrary';
import CaseStudies from '@/components/blog/CaseStudies';
import FloatingChatIcon from '@/components/blog/FloatingChatIcon';

export const metadata = {
  title: 'The AdsOptima Blog - PPC Insights, Tips & Industry Analysis',
  description: 'Data studies, expert tips, industry analysis, and more to help advertisers manage their paid media accounts like a pro.',
  keywords: ['PPC Blog', 'Google Ads Tips', 'Facebook Ads Insights', 'Digital Marketing', 'PPC Automation', 'Paid Media'],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <LatestArticles />
      <FeaturedAuthors />
      <NewsletterSignup />
      <ContentNavigation />
      <ExpertInsights />
      <DataStudies />
      <VideoLibrary />
      <CaseStudies />
      <FloatingChatIcon />
    </div>
  );
}
