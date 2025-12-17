import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
};

const postPath = (slug: string) => path.join(POSTS_DIR, `${slug}.mdx`);

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPostsMeta(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(postPath(slug), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        description: data.description ? String(data.description) : undefined,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const raw = fs.readFileSync(postPath(slug), "utf8");
  const { content, data } = matter(raw);

  const compiled = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    description: data.description ? String(data.description) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  };

  return { meta, content: compiled.content };
}

