"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
            <div className="glass-ice rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-ice opacity-5 blur-[100px]" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-white text-gradient-ice">Get in Touch</h2>
                        <p className="text-text-secondary mb-10 leading-relaxed text-lg">
                            Have a project in mind? Let's collaborate and build something extraordinary.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: "Email", value: portfolioData.email, href: `mailto:${portfolioData.email}` },
                                { icon: Phone, label: "Phone", value: portfolioData.phone, href: `tel:${portfolioData.phone}` },
                                { icon: MapPin, label: "Location", value: portfolioData.location },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="p-3 glass rounded-2xl text-accent-ice group-hover:bg-accent-ice/10 transition-all">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-text-muted uppercase tracking-widest">{item.label}</div>
                                        {item.href ? (
                                            <a href={item.href} className="text-white hover:text-accent-ice transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div className="text-white">{item.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-8 relative z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-accent-ice inline-block"></span>
                                Connect Elsewhere
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Github, label: "GitHub", href: portfolioData.github, value: "Check Code" },
                                    { icon: Linkedin, label: "LinkedIn", href: portfolioData.linkedin, value: "Let's Connect" },
                                    { icon: Instagram, label: "Instagram", href: portfolioData.instagram, value: "Follow Me" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-6 glass rounded-2xl border border-white/5 hover:border-accent-ice/30 transition-all hover:bg-accent-ice/5 flex flex-col gap-4 relative overflow-hidden"
                                    >
                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 translate-x-4">
                                            <ArrowUpRight className="w-5 h-5 text-accent-ice" />
                                        </div>

                                        <div className="p-3 bg-white/5 w-fit rounded-xl text-white group-hover:text-accent-ice transition-colors">
                                            <social.icon className="w-6 h-6" />
                                        </div>

                                        <div>
                                            <div className="text-text-muted text-xs uppercase tracking-wider mb-1">{social.label}</div>
                                            <div className="text-white font-semibold group-hover:text-accent-ice transition-colors">{social.value}</div>
                                        </div>
                                    </a>
                                ))}

                                <div className="group p-6 glass rounded-2xl border border-white/5 hover:border-accent-ice/30 transition-all hover:bg-accent-ice/5 flex flex-col gap-4 relative overflow-hidden">
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 translate-x-4">
                                        <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                                    </div>

                                    <div className="p-3 bg-green-500/10 w-fit rounded-xl">
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)] animate-pulse" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-text-muted text-xs uppercase tracking-wider mb-1">Status</div>
                                        <div className="text-white font-semibold group-hover:text-green-400 transition-colors">Available for Freelance</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
