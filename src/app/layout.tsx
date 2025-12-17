import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
// import Header from "@/components/Header";

// Load GeistSans Font
const geistSans = localFont({
    src: "/fonts/GeistVF.woff", // Path to the font in the public directory
    variable: "--font-geist-sans", // Define CSS variable for the font
    weight: "100 900", // Weight range
});

// Load GeistMono Font
const geistMono = localFont({
    src: "/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// Load FixedSys Font
const fixedSys = localFont({
    src: "/fonts/fsex300-webfont.woff",
    variable: "--font-fixedSys",
    weight: "normal", // Adjust this to "normal" if FixedSys doesn't support multiple weights
});

// Load FiraCode Font
const firaCode = localFont({
    src: [
        {
            path: "/fonts/FiraCode/FiraCode-Light.woff",
            weight: "300",
            style: "normal",
        },
        {
            path: "/fonts/FiraCode/FiraCode-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "/fonts/FiraCode/FiraCode-Medium.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "/fonts/FiraCode/FiraCode-SemiBold.woff",
            weight: "600",
            style: "normal",
        },
        {
            path: "/fonts/FiraCode/FiraCode-Bold.woff",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-fira-code", // Define CSS variable for FiraCode
});

// Metadata for the page
export const metadata: Metadata = {
    title: "R",
};

// RootLayout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${fixedSys.variable} antialiased font-fira-code font-red-600`}
            >
            {/*<Header />*/}
                {children}
            </body>
        </html>
    );
}
