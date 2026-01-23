"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useState } from "react";
import { generateResumePDF } from "@/lib/resume-generator";

export default function Hero() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 p-1 rounded-full bg-gradient-ice relative group"
            >
                <div className="absolute inset-0 rounded-full blur-xl bg-accent-ice/30 group-hover:bg-accent-ice/50 transition-all" />
                <img
                    src="/assets/img/profile-img-1x1.png"
                    alt={portfolioData.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover relative z-10 border-2 border-bg-primary"
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-7xl font-bold mb-4 tracking-tight"
            >
                {portfolioData.name}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gradient-ice font-medium mb-8"
            >
                {portfolioData.title}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
            >
                {[
                    { icon: Github, href: portfolioData.github },
                    { icon: Linkedin, href: portfolioData.linkedin },
                    { icon: Instagram, href: portfolioData.instagram },
                    { icon: Mail, href: `mailto:${portfolioData.email}` },
                ].map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-ice rounded-xl hover:bg-accent-ice/20 transition-all hover:-translate-y-1"
                    >
                        <social.icon className="w-6 h-6 text-accent-ice" />
                    </a>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12"
            >
                <button
                    onClick={() => generateResumePDF(setIsLoading)}
                    disabled={isLoading}
                    className="px-8 py-3 bg-white text-bg-primary font-bold rounded-full hover:bg-accent-ice transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Generating PDF..." : "Download CV"}
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-accent-ice rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-accent-ice rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
