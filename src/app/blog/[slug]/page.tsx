import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = await getPostBySlug(slug);
    return { title: meta.title, description: meta.description };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">{meta.title}</h1>
      <div className="mt-2 text-sm text-white/60">{meta.date}</div>
      <article className="prose prose-invert mt-8 max-w-none">{content}</article>
    </main>
  );
}

