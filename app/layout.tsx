import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tonyclyburn.com';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Tony Clyburn | At My Job and Loving It™',
  description: 'Meet Tony Clyburn—the broadcaster, storyteller, and speaker behind At My Job And Loving It™.',
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: 'any' },
      { url: `${basePath}/favicon.png`, type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Tony Clyburn | At My Job and Loving It™',
    description: 'Broadcaster. Storyteller. Speaker. A career built on service, trust, curiosity, and showing up.',
    url: siteUrl,
    siteName: 'Tony Clyburn',
    images: [{ url: `${siteUrl}/og-v2.png`, width: 1792, height: 924, alt: 'At My Job And Loving It — Tony Clyburn, broadcaster, storyteller, speaker.' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tony Clyburn | At My Job and Loving It™',
    description: 'Broadcaster. Storyteller. Speaker. A career built on service, trust, curiosity, and showing up.',
    images: [`${siteUrl}/og-v2.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
