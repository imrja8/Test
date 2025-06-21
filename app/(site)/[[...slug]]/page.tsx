import { source } from '@/lib/source';
import { baseUrl, createMetadata } from "@/utils/metadata";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { redirect } from 'next/navigation'; // ✅ Use redirect instead of notFound
import defaultMdxComponents from 'fumadocs-ui/mdx';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) redirect('/'); // ✅ Redirect to home if not found

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody className="-mt-8">
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) redirect('/'); // ✅ Redirect instead of 404

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
