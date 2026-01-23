"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center p-4",
                scrolled ? "top-2" : "top-0"
            )}
        >
            {/* Desktop Navigation */}
            <nav className={cn(
                "hidden md:flex glass-ice rounded-full px-6 py-3 items-center gap-8 text-sm font-medium transition-all duration-300",
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

            {/* Mobile Navigation */}
            <div className={cn(
                "md:hidden flex justify-between items-center w-full max-w-sm glass-ice rounded-full px-6 py-3 transition-all duration-300",
                scrolled ? "bg-opacity-20 shadow-lg" : "bg-transparent border-transparent"
            )}>
                <Link href="#home" onClick={closeMobileMenu}>
                    <Logo className="w-8 h-8 text-accent-ice" />
                </Link>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-white p-1 hover:text-accent-ice transition-colors"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-4 right-4 md:hidden z-50"
                    >
                        <div className="glass-ice rounded-3xl p-6 flex flex-col gap-4 shadow-2xl bg-bg-primary/95 backdrop-blur-xl border border-white/10">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className="text-lg font-medium text-text-secondary hover:text-white hover:pl-2 transition-all border-b border-white/5 pb-2 last:border-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
