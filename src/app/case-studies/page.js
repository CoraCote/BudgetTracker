import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';
import VideoCardsSection from '@/components/case-studies/VideoCardsSection';
import ClientLogos from '@/components/ClientLogos';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Case Studies - Real Success Stories with AdsOptima',
  description: 'Discover how PPC teams around the world improve performance, increase efficiency, and scale their businesses with AdsOptima. Read real success stories and case studies.',
  keywords: ['PPC Case Studies', 'Google Ads Success Stories', 'Digital Marketing Case Studies', 'PPC Results', 'AdsOptima Success'],
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <VideoCardsSection />
      <ClientLogos />
      <CTASection />
    </div>
  );
}
