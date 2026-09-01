import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tonyclyburn.com';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Tony Clyburn | At My Job and Loving It™',
  description: 'At My Job and Loving It™. Crisp. Clear. Midwestern resonance from Tony Clyburn—a voice that cares as much as you.',
  icons: { icon: `${basePath}/images/tony-client-portrait.jpg` },
  openGraph: {
    title: 'Tony Clyburn | At My Job and Loving It™',
    description: 'Crisp. Clear. Midwestern resonance. A voice that cares as much as you.',
    url: siteUrl,
    siteName: 'Tony Clyburn',
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'Crisp. Clear. Midwestern Resonance. A voice that cares as much as you.' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tony Clyburn | At My Job and Loving It™',
    description: 'Crisp. Clear. Midwestern resonance. A voice that cares as much as you.',
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
