"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-accent-ice">Work Experience</h2>

            <div className="space-y-8">
                {portfolioData.experience.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative pl-8 border-l border-accent-ice/30"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-ice border-4 border-bg-primary shadow-[0_0_10px_#b8d4f0]" />

                        <div className="glass-ice p-6 rounded-2xl hover:border-accent-ice/30 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-accent-frost font-medium">{exp.company}</p>
                                </div>
                                <span className="text-sm text-text-muted mt-2 md:mt-0 px-3 py-1 glass rounded-full h-fit">
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="list-disc list-inside text-text-secondary space-y-2">
                                {exp.description.map((item, j) => (
                                    <li key={j} className="text-sm md:text-base leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
