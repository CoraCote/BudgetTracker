import './globals.css';

export const metadata = {
  title: 'AdOptima - Smarter PPC Management, Simplified',
  description: 'Get better results with paid media while staying in charge of your account. Review insights, monitor campaigns, optimize performance, and build safeguards with AdOptima\'s round-the-clock PPC automation.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: ['PPC Management', 'Google Ads', 'Facebook Ads', 'Advertising Automation', 'Campaign Optimization', 'ROI Tracking'],
  authors: [{ name: 'AdOptima Team' }],
  openGraph: {
    title: 'AdOptima - Smarter PPC Management, Simplified',
    description: 'Get better results with paid media while staying in charge of your account.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
