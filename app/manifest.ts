import type { MetadataRoute } from 'next';
import { sitePath } from './lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tony Clyburn — At My Job And Loving It™',
    short_name: 'Tony Clyburn',
    description: 'Tony Clyburn is a broadcaster, storyteller and speaker based in West Columbia, South Carolina.',
    start_url: sitePath('/'),
    display: 'standalone',
    background_color: '#f6f0e4',
    theme_color: '#112233',
    icons: [
      { src: sitePath('/favicon.png'), sizes: '512x512', type: 'image/png' },
      { src: sitePath('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
    ],
  };
}
