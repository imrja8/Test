import { source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

const indexesDocsList = source.getPages().map((page) => ({ title: page.data.title, description: page.data.description, url: page.url, id: page.url, structuredData: page.data.structuredData, }))

const listIndexes = [...indexesDocsList]

export const { GET } = createSearchAPI('advanced', {
  indexes: listIndexes
});
