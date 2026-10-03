import LabsHero from '../../components/labs/LabsHero';
import LabsVideoCards from '../../components/labs/LabsVideoCards';
import LabsFeatures from '../../components/labs/LabsFeatures';
import LabsCaseStudy from '../../components/labs/LabsCaseStudy';
import FloatingChatIcon from '../../components/FloatingChatIcon';

export const metadata = {
  title: 'AdsOptima Labs - Experimental PPC Tools',
  description: 'Try experimental AdsOptima tools for Google Ads and Microsoft Advertising before they become part of the core platform.',
};

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-white">
      <LabsHero />
      <LabsFeatures />
      <LabsCaseStudy />
      <LabsVideoCards />
      <FloatingChatIcon />
    </div>
  );
}
