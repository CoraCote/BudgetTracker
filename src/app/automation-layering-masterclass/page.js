import AutomationLayeringMasterclassHero from '@/components/automation-layering-masterclass/AutomationLayeringMasterclassHero';
import FAQSection from '@/components/automation-layering-masterclass/FAQSection';
import PreviousEpisodes from '@/components/automation-layering-masterclass/PreviousEpisodes';

export default function AutomationLayeringMasterclassPage() {
  return (
    <div className="min-h-screen">
      <AutomationLayeringMasterclassHero />
      <PreviousEpisodes />
      <FAQSection />
    </div>
  );
}
