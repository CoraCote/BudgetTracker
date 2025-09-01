import PerformanceMaxHero from '@/components/PerformanceMaxHero';
import ChannelDistributionSection from '@/components/ChannelDistributionSection';
import CaseStudySection from '@/components/CaseStudySection';
import CapabilitiesSection from '@/components/CapabilitiesSection';

export const metadata = {
  title: 'Performance Max Campaign Management - AdOptima',
  description: 'Meet your co-pilot for Performance Max success. Simplify PMax campaign management and ensure your money goes where you want it to go with more visibility and control over performance.',
  keywords: ['Performance Max', 'PMax', 'Google Ads', 'Campaign Management', 'PPC Optimization'],
};

export default function PerformanceMaxPage() {
  return (
    <div className="min-h-screen bg-white">
      <PerformanceMaxHero />
      <ChannelDistributionSection />
      <CaseStudySection />
      <CapabilitiesSection />
    </div>
  );
}
