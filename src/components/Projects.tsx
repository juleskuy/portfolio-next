"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-accent-ice">Featured Projects</h2>
            <p className="text-text-muted text-center mb-16">Selected works that define my coding journey</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="glass-ice overflow-hidden rounded-3xl group"
                    >
                        <div className="aspect-video relative overflow-hidden bg-bg-primary/50">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-accent-ice text-bg-primary rounded-full">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-8">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-ice transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex gap-6">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-semibold text-accent-ice hover:text-white transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                                {(project as any).github && (
                                    <a
                                        href={(project as any).github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-white transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        Source
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
