import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
import { docs, meta } from '@/.source';

export const source = loader({
  baseUrl: '/',
  source: createMDXSource(docs, meta)
});

export type DocsPage = InferPageType<typeof source>;
export type DocsMeta = InferMetaType<typeof source>;