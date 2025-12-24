"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import projectsData from "@/data/projects.json";

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    type: string;
    links: {
        github: string;
        demo?: string;
        caseStudy?: string;
    };
    image: string;
}

export default function ProjectsGallery() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <section id="projects" className="py-16 md:py-24 px-4 md:px-8 w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                >
                    Featured <span className="text-emerald-green">Work</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-sm md:text-base max-w-sm md:text-right"
                >
                    A selection of projects exploring the intersection of design, code, and artificial intelligence.
                </motion.p>
            </div>

            <div className="flex flex-col space-y-16 md:space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
                    >
                        {/* Project Visual */}
                        <div
                            className="w-full md:w-3/5 aspect-video relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="absolute inset-0 bg-zinc-900 z-0">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-zinc-700">
                                        <span className="text-lg font-mono">{project.title}</span>
                                    </div>
                                )}
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                <button className="px-6 py-3 bg-white text-black rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View Case Study <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="w-full md:w-2/5 flex flex-col items-start text-left">
                            <span className="text-emerald-green font-mono mb-4 text-sm tracking-wider uppercase">{project.type}</span>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-emerald-green transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 border border-white/10 rounded-full text-sm text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6">
                                <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link">
                                    <Github className="w-5 h-5" />
                                    <span className="group-hover/link:underline">Source</span>
                                </a>
                                {project.links.demo && (
                                    <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link">
                                        <ExternalLink className="w-5 h-5" />
                                        <span className="group-hover/link:underline">Live Demo</span>
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
