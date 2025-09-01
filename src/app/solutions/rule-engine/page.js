import RuleEngineHero from '@/components/RuleEngineHero';
import AutomationSection from '@/components/AutomationSection';
import CustomizableRulesSection from '@/components/CustomizableRulesSection';
import CaseStudySection from '@/components/CaseStudySection';
import TestimonialSection from '@/components/TestimonialSection';

export const metadata = {
  title: 'Rule Engine - Automate PPC Management with Custom Rules | AdOptima',
  description: 'Automate any PPC management strategy or task with Rule Engine. Put repetitive tasks like weekly reporting and keyword management on autopilot, create intricate automated rules with custom data, and maintain full control over your campaigns.',
  keywords: ['Rule Engine', 'PPC Automation', 'Custom Rules', 'Campaign Management', 'PPC Optimization', 'Automated Reporting'],
};

export default function RuleEnginePage() {
  return (
    <div className="min-h-screen bg-white">
      <RuleEngineHero />
      <AutomationSection />
      <CustomizableRulesSection />
      <CaseStudySection />
      <TestimonialSection />
    </div>
  );
}
