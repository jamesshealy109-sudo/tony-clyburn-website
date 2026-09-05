import type { Metadata } from 'next';
import './globals.css';
import JsonLd from './components/JsonLd';
import Analytics from './components/Analytics';
import { absoluteUrl, basePath, siteName, siteUrl } from './lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'At My Job And Loving It™ | Stories About Work',
    template: '%s | At My Job And Loving It™',
  },
  description: 'What do you do—and why do you love it? Share your story with At My Job And Loving It™, hosted by broadcaster Tony Clyburn.',
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
      '@type': 'Brand',
      '@id': `${absoluteUrl('/')}#amjali-brand`,
      name: 'At My Job And Loving It',
      alternateName: 'AMJALI',
      url: absoluteUrl('/'),
      slogan: 'What do you do—and why do you love it?',
      founder: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
    },
    {
      '@type': 'Person',
      '@id': `${absoluteUrl('/')}#tony-clyburn`,
      name: 'Tony Clyburn',
      url: absoluteUrl('/'),
      image: absoluteUrl('/images/story/tony-hero-columbia.webp'),
      jobTitle: 'Broadcaster, Voiceover Professional, Emcee and Host, Speaker',
      description: 'Tony Clyburn is the 93.1 The Lake afternoon host and a voiceover professional, emcee and host, speaker, moderator and storyteller.',
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
      knowsAbout: ['Broadcasting', 'Voiceover', 'Event hosting', 'Speaking', 'Moderated conversation', 'Storytelling', 'Communication'],
      sameAs: ['https://facebook.com/TonyClyburnSC', 'https://twitter.com/myjobandlovinit'],
    },
    {
      '@type': 'WebSite',
      '@id': `${absoluteUrl('/')}#website`,
      url: absoluteUrl('/'),
      name: siteName,
      description: 'Stories and conversations about the work people do and why they love it, hosted by Tony Clyburn.',
      inLanguage: 'en-US',
      about: { '@id': `${absoluteUrl('/')}#amjali-brand` },
      creator: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
      publisher: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><JsonLd data={entityGraph} />{children}<Analytics /></body></html>;
}
