import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // This will allow images from any hostname
        hostname: '**',  // Wildcard to match any domain
      },
    ],
  },
};

export default withMDX(config);  // Correct way to export the config with MDX support
