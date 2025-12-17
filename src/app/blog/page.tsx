import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Blog</h1>

      <div className="mt-10 space-y-8">
        {posts.map((p) => (
          <article key={p.slug} className="border-b border-white/10 pb-6">
            <Link href={`/blog/${p.slug}`} className="text-xl font-medium hover:underline">
              {p.title}
            </Link>
            <div className="mt-2 text-sm text-white/60">{p.date}</div>
            {p.description && <p className="mt-3 text-white/80">{p.description}</p>}
          </article>
        ))}
      </div>
    </main>
  );
}

