import FreelancersHero from '@/components/freelancers/FreelancersHero';
import FreelancersFeatures from '@/components/freelancers/FreelancersFeatures';
import FreelancersPricing from '@/components/freelancers/FreelancersPricing';
import FreelancersCaseStudy from '@/components/freelancers/FreelancersCaseStudy';
import FreelancersTestimonials from '@/components/freelancers/FreelancersTestimonials';
import FreelancersCTA from '@/components/freelancers/FreelancersCTA';

export default function FreelancersPage() {
  return (
    <div className="min-h-screen bg-white">
      <FreelancersHero />
      <FreelancersFeatures />
      <FreelancersPricing />
      <FreelancersCaseStudy />
      <FreelancersTestimonials />
      <FreelancersCTA />
    </div>
  );
}
