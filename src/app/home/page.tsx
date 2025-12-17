// app/home/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ryan Liu stuff",
  description: "Blog and stuff",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col fade-in">
      <section className="flex-1 flex flex-col items-center justify-center py-20 px-8 md:py-32">
        <div className="w-[60%] bg-black/50 opacity-95 text-center flex flex-col items-center justify-center rounded-xl border border-white/10">
          <p className="text-lg md:text-xl mb-8 text-center w-full pt-12 px-6 leading-relaxed text-white">
            I'm Ryan Liu
          </p>

          <div className="w-full flex items-center justify-center gap-4 pb-12">
            <Link
              href="/blog"
              className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-500 transition"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

