// app/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Ryan Liu stuff",
    description: "Blog and stuff",
};

const SkillCard = ({ title, skills }: { title: string; skills: string }) => (
    <div className="bg-zinc-900 opacity-75 p-6 rounded-lg text-center">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p>{skills}</p>
    </div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col fade-in">
      <section className="flex-1 flex flex-col items-center justify-center py-20 px-8 md:py-32">
        <div className="w-[60%] bg-black opacity-95 bg-opacity-50 text-center items-center justify-center">
          <p className="text-lg md:text-xl mb-12 text-center w-full pt-12 px-6 leading-relaxed text-white z-10">
            I'm Ryan Liu
          </p>

          <div className="space-x-6 md:space-x-8 w-full z-10 py-12">
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}

