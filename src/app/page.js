import HeroSection from '../components/HeroSection';
import DashboardShowcase from '../components/DashboardShowcase';
import CustomerSuccessStories from '../components/CustomerSuccessStories';
import StrategicPartnerships from '../components/StrategicPartnerships';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import ClientLogos from '../components/ClientLogos';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <HeroSection />
      <DashboardShowcase />
      <CustomerSuccessStories />
      <StrategicPartnerships />
      <StatsSection />
      <ClientLogos />
      <CTASection />
    </div>
  );
}
