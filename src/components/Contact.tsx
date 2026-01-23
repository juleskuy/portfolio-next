"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { DiscordIcon } from "./Icons";

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-ice rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden relative"
            >
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-ice opacity-[0.03] blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-ice opacity-[0.02] blur-[80px]" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Get in Touch</h2>
                            <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                                Have a project in mind? Let's collaborate and build something extraordinary together.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: "Email", value: portfolioData.email, href: `mailto:${portfolioData.email}` },
                                { icon: Phone, label: "Phone", value: portfolioData.phone, href: `tel:${portfolioData.phone}` },
                                { icon: MapPin, label: "Location", value: portfolioData.location },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="p-4 glass rounded-2xl text-white group-hover:text-accent-ice group-hover:border-accent-ice/30 transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1">{item.label}</div>
                                        {item.href ? (
                                            <a href={item.href} className="text-lg font-medium text-white hover:text-accent-ice transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div className="text-lg font-medium text-white">{item.value}</div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Social Grid */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-8 h-[2px] bg-white/20"></span>
                            <span className="text-lg font-medium text-white">Connect Elsewhere</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: Github, label: "GitHub", href: portfolioData.github, value: "Check Code" },
                                { icon: Linkedin, label: "LinkedIn", href: portfolioData.linkedin, value: "Let's Connect" },
                                { icon: Instagram, label: "Instagram", href: portfolioData.instagram, value: "Follow Me" },
                                { icon: DiscordIcon, label: "Discord", href: portfolioData.discord, value: "Chat" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-6 glass rounded-2xl border border-white/5 hover:border-accent-ice/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between h-40"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="p-3 bg-white/5 rounded-xl text-white group-hover:text-accent-ice group-hover:scale-110 transition-all duration-300">
                                            <social.icon className="w-5 h-5" />
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-accent-ice group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                                    </div>

                                    <div>
                                        <div className="text-text-muted text-[10px] font-bold uppercase tracking-widest mb-1">{social.label}</div>
                                        <div className="text-lg font-bold text-white group-hover:text-accent-ice transition-colors">{social.value}</div>
                                    </div>
                                </a>
                            ))}

                            {/* Status Card */}
                            <div className="col-span-1 sm:col-span-2 p-6 glass rounded-2xl border border-white/5 flex items-center gap-6">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-text-muted text-[10px] font-bold uppercase tracking-widest mb-1">Status</div>
                                    <div className="text-lg font-bold text-white">Available for Freelance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
