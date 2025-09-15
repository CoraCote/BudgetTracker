import UpdateAdsHero from '../../components/update-ads/UpdateAdsHero';
import UpdateCards from '../../components/update-ads/UpdateCards';
import UpdateSidebar from '../../components/update-ads/UpdateSidebar';

export const metadata = {
  title: 'Releases and Updates | AdsOptima',
  description: 'Stay up to date with the latest features, improvements, and fixes in AdsOptima. Discover what\'s new in our PPC management platform.',
  keywords: ['AdsOptima updates', 'PPC platform updates', 'new features', 'product releases', 'changelog'],
};

export default function UpdateAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <UpdateAdsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <UpdateCards />
          </div>
          <div className="lg:col-span-1">
            <UpdateSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
