import type { Metadata } from 'next/types';

export function createMetadata(meta: Metadata): Metadata {
  const title = meta.title ?? 'Tegota Docs';
  const description = meta.description ?? 'Official documentation for Tegota';

  return {
    ...meta,
    openGraph: {
      title,
      description,
      url: 'https://docs.tegota.com',
      images: '/banner.png',
      siteName: 'Tegota Docs',
      ...meta.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@Official_R_deep',
      title,
      description,
      images: '/banner.png',
      ...meta.twitter,
    },
  };
}
