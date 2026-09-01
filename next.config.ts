import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const githubBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      basePath: githubBasePath,
      assetPrefix: githubBasePath,
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
