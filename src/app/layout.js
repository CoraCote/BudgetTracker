import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';

export const metadata = {
  title: 'AdsOptima - Smarter PPC Management, Simplified',
  description: 'Get better results with paid media while staying in charge of your account. Review insights, monitor campaigns, optimize performance, and build safeguards with AdsOptima\'s round-the-clock PPC automation.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: ['PPC Management', 'Google Ads', 'Facebook Ads', 'Advertising Automation', 'Campaign Optimization', 'ROI Tracking'],
  authors: [{ name: 'AdsOptima Team' }],
  openGraph: {
    title: 'AdsOptima - Smarter PPC Management, Simplified',
    description: 'Get better results with paid media while staying in charge of your account.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
