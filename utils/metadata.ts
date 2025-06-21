import type { Metadata } from 'next/types';

export function createMetadata(meta: Metadata): Metadata {
  let titleString: string | undefined;

  if (typeof meta.title === 'string') {
    titleString = meta.title;
  } else if (
    meta.title !== null &&
    typeof meta.title === 'object' &&
    'default' in meta.title
  ) {
    titleString = meta.title.default;
  }

  const description = meta.description ?? 'Tegota Docs';

  return {
    ...meta,
    openGraph: {
      title: titleString,
      description,
      url: meta.metadataBase?.toString() ?? 'https://docs.tegota.com',
      images: [
        {
          url: '/banner.png',
          alt: 'Tegota Docs Banner',
          width: 1200,
          height: 630,
        },
      ],
      siteName: 'Tegota Docs',
      ...meta.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@Official_R_deep',
      title: titleString,
      description,
      images: ['/banner.png'],
      ...meta.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? new URL('https://docs.tegota.com')
    : new URL('http://localhost:3000');
