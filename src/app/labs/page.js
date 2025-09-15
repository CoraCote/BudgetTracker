'use client';

import LabsHero from '../../components/labs/LabsHero';
import LabsVideoCards from '../../components/labs/LabsVideoCards';
import LabsFeatures from '../../components/labs/LabsFeatures';
import LabsCaseStudy from '../../components/labs/LabsCaseStudy';
import FloatingChatIcon from '../../components/labs/FloatingChatIcon';

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
