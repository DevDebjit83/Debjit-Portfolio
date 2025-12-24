"use client";

import { motion } from "framer-motion";
import {
    Code2,
    BrainCircuit,
    Database,
    Cpu,
    Globe,
    Layers
} from "lucide-react";

const skills = [
    {
        name: "Frontend Architecture",
        icon: <Code2 className="w-8 h-8 text-electric-blue" />,
        tech: ["React", "Next.js", "TypeScript", "Tailwind"],
        description: "Building scalable, performant web applications with modern stacks.",
        colSpan: "col-span-12 md:col-span-8",
        bg: "bg-zinc-900/50"
    },
    {
        name: "AI & Machine Learning",
        icon: <BrainCircuit className="w-8 h-8 text-emerald-green" />,
        tech: ["TensorFlow", "PyTorch", "Python", "LangChain"],
        description: "Integrating intelligent agents and neural networks into web interfaces.",
        colSpan: "col-span-12 md:col-span-4",
        bg: "bg-zinc-900/80"
    },
    {
        name: "Backend & Systems",
        icon: <Database className="w-8 h-8 text-purple-500" />,
        tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
        description: "Robust backend services and microservices architecture.",
        colSpan: "col-span-12",
        bg: "bg-zinc-900/80"
    }
];

export default function SkillsBento() {
    return (
        <section id="skills" className="py-16 md:py-24 px-4 md:px-8 w-full max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 text-center"
            >
                Technical <span className="text-electric-blue">Arsenal</span>
            </motion.h2>

            <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className={`${skill.colSpan} ${skill.bg} border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-electric-blue/50 transition-colors duration-300 backdrop-blur-sm`}
                    >
                        <div>
                            <div className="mb-4">{skill.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-gray-400 mb-6">{skill.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {skill.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm font-mono text-gray-300 border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
