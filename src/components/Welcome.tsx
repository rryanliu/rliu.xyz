"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NameAnimation from "./NameAnimation";

export default function Welcome() {
    const router = useRouter();
    const [isAnimating, setIsAnimating] = useState(false);
    const [fadeIn, setFadeIn] = useState(false); // State to handle fade-in effect

    useEffect(() => {
        // Trigger fade-in after 2 seconds
        const timer = setTimeout(() => setFadeIn(true), 1000);
        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                setIsAnimating(true);
                router.push("/home");
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [router]);

    return (
        <section className={`flex-grow flex flex-col items-center justify-center py-12 px-8 md:py-24 ${isAnimating ? "fade-out-move-up" : ""}`}>
            <NameAnimation />
            {/* Fade-in controlled by `fadeIn` state */}
            <div className={`transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
                <div className="relative text-center z-20 text-2xl font-bold animate-bounce mb-8">
                    Press Enter to continue {'>>'}
                </div>
            </div>
        </section>
    );
}

