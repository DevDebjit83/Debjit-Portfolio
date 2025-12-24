"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Calendar, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen w-full relative bg-charcoal flex items-center justify-center overflow-hidden pt-20 pb-12 px-4">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
                <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-emerald-green/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">
                {/* Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 md:mb-8 relative"
                >
                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-electric-blue overflow-hidden bg-zinc-900 relative">
                        <Image
                            src="/profile.png"
                            alt="Debjit Deb Barman"
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-electric-blue/20 blur-xl -z-10" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-foreground mb-3 md:mb-4 font-sans leading-tight"
                >
                    {">"} DEBJIT DEB BARMAN_
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-electric-blue font-mono flex flex-col sm:flex-row gap-1 sm:gap-2"
                >
                    <span>[Frontend Developer]</span>
                    <span className="hidden sm:inline">|</span>
                    <span>[AIML Engineer]</span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="/resume.pdf"
                        download
                        className="px-6 py-3 bg-gradient-to-r from-electric-blue to-blue-500 rounded-full font-mono text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        <Download className="w-5 h-5" />
                        Download Resume
                    </a>
                    <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-2 border-electric-blue rounded-full font-mono text-electric-blue flex items-center justify-center gap-2 hover:bg-electric-blue/10 transition-colors"
                    >
                        <Calendar className="w-5 h-5" />
                        Schedule Meeting
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 flex items-center gap-4"
                >
                    <a
                        href="https://github.com/DevDebjit83"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/debjit-deb-barman-788820178/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:debjitdebbarman345@gmail.com"
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-8 flex items-center gap-2 text-gray-400 font-mono text-xs md:text-sm bg-zinc-900/50 px-4 py-2 rounded-full border border-white/10"
                >
                    <Heart className="w-4 h-4 text-red-500" />
                    Building AI solutions & empowering startups since 2023
                </motion.div>
            </div>
        </section>
    );
}
