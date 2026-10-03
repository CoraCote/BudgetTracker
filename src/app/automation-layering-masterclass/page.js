import AutomationLayeringMasterclassHero from '@/components/automation-layering-masterclass/AutomationLayeringMasterclassHero';
import FAQSection from '@/components/automation-layering-masterclass/FAQSection';
import PreviousEpisodes from '@/components/automation-layering-masterclass/PreviousEpisodes';

export const metadata = {
  title: 'Automation Layering Masterclass | AdsOptima',
  description: 'A video series from AdsOptima on using PPC automation safely to protect your accounts and grow your business.',
};

export default function AutomationLayeringMasterclassPage() {
  return (
    <div className="min-h-screen">
      <AutomationLayeringMasterclassHero />
      <PreviousEpisodes />
      <FAQSection />
    </div>
  );
}
