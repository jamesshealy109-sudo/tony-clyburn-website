import type { MetadataRoute } from 'next';
import { absoluteUrl, publicRoutes } from './lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === '/' ? 'monthly' : 'yearly',
    priority: route === '/' ? 1 : route === '/speaking/' ? 0.9 : 0.7,
  }));
}
