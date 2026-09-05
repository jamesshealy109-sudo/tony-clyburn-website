import type { MetadataRoute } from 'next';
import { absoluteUrl, publicRoutes } from './lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === '/' ? 'monthly' : 'yearly',
    priority: route === '/' ? 1 : route === '/podcast/' ? 0.9 : route === '/amjali/' ? 0.8 : 0.7,
  }));
}
