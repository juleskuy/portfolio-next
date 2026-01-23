"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-accent-ice/5 text-center mt-20">
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-2xl font-bold mb-4 tracking-tighter text-gradient-ice">
                    {portfolioData.name}
                </h3>
                <p className="text-text-secondary text-sm mb-8 leading-relaxed max-w-lg mx-auto">
                    Built with Next.js, Tailwind CSS and Framer Motion.
                    Inspired by the ice-cold aesthetics of pepehook.xyz.
                </p>
                <div className="text-text-muted text-[10px] uppercase tracking-[0.3em]">
                    &copy; {new Date().getFullYear()} — All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
