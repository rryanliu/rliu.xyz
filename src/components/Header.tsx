// app/components/Header.tsx
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {

    const pathname = usePathname();
    const showHeader = pathname !== "/";

    return showHeader ? (
        <header
            className={cn(
                "bg-transparent py-8 px-8 w-full fixed top-0 z-50 transition-colors duration-300 fade-in",
                className,
            )}
        >
            <nav className="container mx-auto flex justify-between items-center w-[70%]">
                <Link
                    href="/home"
                    className="header-item text-xl font-bold text-red-600 hover:bg-white px-8 transition"
                >
                    Ryan
                </Link>
            </nav>
        </header>
    ) : null;
};

export default Header;
