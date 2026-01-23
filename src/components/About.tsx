"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-24 px-4 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-ice p-6 md:p-12 rounded-3xl"
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent-ice">About Me</h2>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                    {portfolioData.about}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {Object.entries(portfolioData.stats).map(([key, value], i) => (
                        <div key={i} className="text-center">
                            <div className="text-xl md:text-3xl font-bold text-white mb-1">{value}+</div>
                            <div className="text-xs md:text-sm text-text-muted uppercase tracking-widest">{key}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
