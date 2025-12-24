"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Users, Linkedin, Trophy, Rocket } from "lucide-react";

const experiences = [
    {
        title: "Google Cloud Gen AI Hackathon Finalist",
        company: "Team Data Dragon | Hack2skill",
        period: "2025",
        description: "Selected among the top teams to advance to the prototype refinement phase of the Google Cloud Gen AI Exchange Hackathon 2025. Recognized for innovative AI solutions addressing real-world challenges.",
        icon: <Trophy className="w-5 h-5" />,
        color: "text-yellow-500",
        borderColor: "border-yellow-500"
    },
    {
        title: "Entrepreneurship Team Lead",
        company: "IgniteX Club, RCCIIT",
        period: "2025 - 2026",
        description: "Leading the entrepreneurship initiatives at IgniteX Club, fostering innovation and startup culture among students. Building the next generation of tech entrepreneurs.",
        icon: <Rocket className="w-5 h-5" />,
        color: "text-orange-500",
        borderColor: "border-orange-500"
    },
    {
        title: "AI/ML Lead",
        company: "RCCTechz Club",
        period: "2024 - Present",
        description: "Leading AI/ML initiatives and shaping the future of technology at RCCIIT. Channel passion for AI and ML into actionable projects with an incredible team.",
        icon: <Briefcase className="w-5 h-5" />,
        color: "text-electric-blue",
        borderColor: "border-electric-blue"
    },
    {
        title: "Evangelist",
        company: "Hack4Bengal 3.0",
        period: "2024",
        description: "Promoting innovation and technology through one of Bengal's largest hackathons. Building community and inspiring the next generation of developers.",
        icon: <Award className="w-5 h-5" />,
        color: "text-emerald-green",
        borderColor: "border-emerald-green"
    },
    {
        title: "Internshala Student Partner",
        company: "Internshala",
        period: "2024 - 2025",
        description: "Educating college students about the power of internships and online trainings. Creating a world full of opportunities and connecting students with 80,000+ brands.",
        icon: <Users className="w-5 h-5" />,
        color: "text-cyan-500",
        borderColor: "border-cyan-500"
    },
    {
        title: "B.Tech CSE (AIML)",
        company: "RCC Institute of Information Technology",
        period: "2023 - 2027",
        description: "3rd Year student specializing in Artificial Intelligence and Machine Learning. Building a strong foundation in CS fundamentals and cutting-edge AI technologies.",
        icon: <GraduationCap className="w-5 h-5" />,
        color: "text-purple-500",
        borderColor: "border-purple-500"
    }
];

const stats = [
    { label: "LinkedIn Followers", value: "1.4K+", icon: <Users className="w-6 h-6" /> },
    { label: "Connections", value: "500+", icon: <Linkedin className="w-6 h-6" /> },
    { label: "Projects Built", value: "10+", icon: <Briefcase className="w-6 h-6" /> }
];

export default function Experience() {
    return (
        <section id="experience" className="py-16 md:py-24 px-4 md:px-8 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10 md:mb-16"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                    {">"} Experience.<span className="text-electric-blue animate-pulse">_</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm md:text-base">$ cat ~/journey.log</p>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-3 gap-2 md:gap-4 mb-10 md:mb-16 p-4 md:p-6 bg-zinc-900/50 border border-white/10 rounded-xl md:rounded-2xl"
            >
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="flex justify-center mb-1 md:mb-2 text-electric-blue [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-6 md:[&>svg]:h-6">{stat.icon}</div>
                        <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                        <div className="text-gray-500 text-xs md:text-sm font-mono">{stat.label}</div>
                    </div>
                ))}
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex gap-6 md:gap-8"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-full bg-zinc-900 border-2 ${exp.borderColor} flex items-center justify-center ${exp.color} z-10 shrink-0`}>
                                {exp.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:border-electric-blue/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                    <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
                                </div>
                                <p className={`${exp.color} font-mono text-sm mb-3`}>{exp.company}</p>
                                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* LinkedIn CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-16 text-center"
            >
                <a
                    href="https://www.linkedin.com/in/debjit-deb-barman-788820178/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-electric-blue/10 border border-electric-blue/50 rounded-full text-electric-blue hover:bg-electric-blue/20 transition-colors font-mono"
                >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                </a>
            </motion.div>
        </section>
    );
}
