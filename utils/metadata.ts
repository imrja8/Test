import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://docs.tegota.com',
      images: '/banner.png',
      siteName: 'Tegota Docs',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@Official_R_deep',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/banner.png',
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? new URL('http://localhost:3000')
    : new URL(`https://docs.tegota.com`);
