import { Inter } from 'next/font/google';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:7000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AdsOptima - Smarter PPC Management, Simplified',
    template: '%s | AdsOptima',
  },
  description:
    "Get better results with paid media while staying in charge of your account. Review insights, monitor campaigns, optimize performance, and build safeguards with AdsOptima's round-the-clock PPC automation.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: ['PPC Management', 'Google Ads', 'Microsoft Ads', 'Advertising Automation', 'Campaign Optimization', 'Budget Pacing'],
  authors: [{ name: 'AdsOptima Team' }],
  openGraph: {
    title: 'AdsOptima - Smarter PPC Management, Simplified',
    description: 'Get better results with paid media while staying in charge of your account.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AdsOptima',
  },
};

export const viewport = {
  themeColor: '#7c3aed',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
