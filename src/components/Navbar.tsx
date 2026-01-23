"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center p-4",
                scrolled ? "top-2" : "top-0"
            )}
        >
            <nav className={cn(
                "glass-ice rounded-full px-6 py-3 flex items-center gap-8 text-sm font-medium transition-all duration-300",
                scrolled ? "bg-opacity-20 shadow-lg" : "bg-transparent border-transparent"
            )}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-text-secondary hover:text-white transition-colors relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-ice transition-all group-hover:w-full" />
                    </Link>
                ))}
            </nav>
        </motion.header>
    );
}
