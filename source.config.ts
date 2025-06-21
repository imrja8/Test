import { defineDocs, defineConfig, defineCollections } from 'fumadocs-mdx/config';
import { frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig();
