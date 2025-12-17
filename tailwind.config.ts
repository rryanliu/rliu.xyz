import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                red: {
                    DEFAULT: "rgb(240, 18, 28)",
                    ...require("tailwindcss/colors").red,
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            animation: {
                "fade-out-move-up": "fadeOutMoveUp 0.8s ease-in-out forwards",
                "fade-in-move-up": "fadeInMoveUp 0.8s ease-in-out forwards",
                "fade-in": "fadeIn 0.8s ease-in-out forwards",
                "fade-out": "fadeOut 0.8s ease-in-out forwards",
            },
            keyframes: {
                fadeOutMoveUp: {
                    "0%": { opacity: "1", transform: "translateY(0)" },
                    "100%": { opacity: "0", transform: "translateY(-20px)" },
                },
                fadeInMoveUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeOut: {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
            },
            textShadow: {
                glow: "0 0 5px red, 0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 80px red, 0 0 160px red",
                glowSoft:
                    "0 0 1px red, 0 0 2px red, 0 0 4px red, 0 0 8px red, 0 0 16px red, 0 0 32px red",
            },
            fontFamily: {
                "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
                "geist-mono": ["var(--font-geist-mono)", "monospace"],
                "fira-code": ["var(--font-fira-code)", "monospace"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-textshadow"), // Adds text shadow utilities
        require("@tailwindcss/forms"), // Adds styles for forms
        require("@tailwindcss/typography"), // Adds prose classes for rich text
        require("@tailwindcss/aspect-ratio"), // Adds aspect ratio utilities
        plugin(function ({ addUtilities }) {
            // Example custom plugin for text gradient
            addUtilities({
                ".headerLink": {
                    color: "rgb(209, 213, 219)",
                    backgroundColor: "transparent",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        backgroundColor: "#ffffff",
                        color: "#000000",
                    },
                },
                ".text-gradient": {
                    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                },
            });
        }),
    ],
};

export default config;
