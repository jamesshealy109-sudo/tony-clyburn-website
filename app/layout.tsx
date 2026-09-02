import type { Metadata } from 'next';
import './globals.css';
import JsonLd from './components/JsonLd';
import Analytics from './components/Analytics';
import { absoluteUrl, basePath, siteName, siteUrl } from './lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tony Clyburn | Speaker & Broadcaster | At My Job And Loving It™',
    template: '%s | Tony Clyburn',
  },
  description: 'Tony Clyburn is a Columbia, South Carolina broadcaster, storyteller and speaker behind At My Job And Loving It™. Bring his curiosity to your audience.',
  applicationName: siteName,
  category: 'Business',
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: 'any' },
      { url: `${basePath}/favicon.png`, type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/manifest.webmanifest`,
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const entityGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${absoluteUrl('/')}#tony-clyburn`,
      name: 'Tony Clyburn',
      url: absoluteUrl('/'),
      image: absoluteUrl('/images/story/tony-hero-columbia.webp'),
      jobTitle: 'Broadcaster, Storyteller, Speaker',
      description: 'Tony Clyburn is the 93.1 The Lake afternoon host and the broadcaster, storyteller and speaker behind At My Job And Loving It™.',
      homeLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'West Columbia',
          addressRegion: 'South Carolina',
          addressCountry: 'US',
        },
      },
      worksFor: { '@type': 'Organization', name: '93.1 The Lake' },
      award: 'South Carolina Broadcasters Association Radio Personality of the Year, 2006',
      knowsAbout: ['Broadcasting', 'Storytelling', 'Communication', 'Community engagement'],
      sameAs: ['https://facebook.com/TonyClyburnSC', 'https://twitter.com/myjobandlovinit'],
    },
    {
      '@type': 'WebSite',
      '@id': `${absoluteUrl('/')}#website`,
      url: absoluteUrl('/'),
      name: siteName,
      description: 'The official website of Tony Clyburn and At My Job And Loving It™.',
      inLanguage: 'en-US',
      publisher: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><JsonLd data={entityGraph} />{children}<Analytics /></body></html>;
}
