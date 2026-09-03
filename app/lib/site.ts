import type { Metadata } from 'next';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.tonyclyburn.com';

export const siteUrl = configuredSiteUrl.replace(/\/$/, '');
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const siteName = 'Tony Clyburn';
export const socialImagePath = '/tony-clyburn-social-preview.webp';

export function sitePath(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function absoluteUrl(path = '/') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const isFile = /\.[a-z0-9]+$/i.test(clean);
  const normalized = path === '/' ? '/' : `/${clean}${isFile ? '' : '/'}`;
  return `${siteUrl}${normalized}`;
}

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({ title, description, path = '/' }: PageMetadata): Metadata {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(socialImagePath);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: 'en_US',
      type: 'website',
      images: [{
        url: image,
        width: 1200,
        height: 630,
        alt: 'Tony Clyburn — At My Job And Loving It, broadcaster, storyteller and speaker',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export const publicRoutes = ['/', '/services/', '/speaking/', '/story/', '/amjali/', '/contact/'] as const;
