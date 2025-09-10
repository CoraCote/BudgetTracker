import AutomationLayeringMasterclassHero from '@/components/automation-layering-masterclass/AutomationLayeringMasterclassHero';
import PreviousEpisodes from '@/components/automation-layering-masterclass/PreviousEpisodes';
import FAQSection from '@/components/automation-layering-masterclass/FAQSection';

export const metadata = {
  title: 'Automation Layering Masterclass - Learn PPC Automation | AdsOptima',
  description: 'Learn how to make automation work for you, not the ad platforms. Join our video series featuring the best PPC practitioners and experts in the industry.',
  keywords: ['PPC Automation', 'Google Ads Automation', 'Facebook Ads Automation', 'PPC Masterclass', 'Digital Marketing Training'],
};

export default function AutomationLayeringMasterclassPage() {
  return (
    <div className="min-h-screen bg-white">
      <AutomationLayeringMasterclassHero />
      <PreviousEpisodes />
      <FAQSection />
    </div>
  );
}
