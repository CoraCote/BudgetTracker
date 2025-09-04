import EnterprisesHero from '@/components/enterprises/EnterprisesHero';
import EnterprisesFeatures from '@/components/enterprises/EnterprisesFeatures';
import EnterprisesCaseStudy from '@/components/enterprises/EnterprisesCaseStudy';
import EnterprisesTestimonials from '@/components/enterprises/EnterprisesTestimonials';
import EnterprisesCTA from '@/components/enterprises/EnterprisesCTA';

export default function EnterprisesPage() {
  return (
    <div className="min-h-screen bg-white">
      <EnterprisesHero />
      <EnterprisesFeatures />
      <EnterprisesCaseStudy />
      <EnterprisesTestimonials />
      <EnterprisesCTA />
    </div>
  );
}
