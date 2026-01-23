"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-accent-ice">Technical Toolkit</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(portfolioData.skills).map(([category, items], i) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-ice p-6 rounded-2xl"
                    >
                        <h3 className="text-lg font-bold mb-6 text-white capitalize border-b border-accent-ice/10 pb-4">
                            {category.replace('_', ' ')}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-bg-primary border border-accent-ice/10 text-accent-frost hover:border-accent-ice/40 hover:text-white transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
