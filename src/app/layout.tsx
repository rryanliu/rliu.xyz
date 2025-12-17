import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

// Put fonts in: src/app/fonts/...
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fixedSys = localFont({
  src: "./fonts/fsex300-webfont.woff",
  variable: "--font-fixedSys",
});

const firaCode = localFont({
  src: [
    { path: "./fonts/FiraCode/FiraCode-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/FiraCode/FiraCode-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/FiraCode/FiraCode-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/FiraCode/FiraCode-SemiBold.woff", weight: "600", style: "normal" },
    { path: "./fonts/FiraCode/FiraCode-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "R",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${fixedSys.variable}`}>
      <body className="antialiased font-fira-code text-red-600">
        {children}
      </body>
    </html>
  );
}

