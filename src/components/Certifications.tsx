"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import Image from "next/image";

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    score?: string;
    badge: string;
    image: string;
    color: string;
}

const certifications: Certificate[] = [
    {
        id: "1",
        title: "Programming In Java",
        issuer: "NPTEL - IIT Kharagpur",
        date: "Jul - Oct 2025",
        score: "Elite (73%)",
        badge: "ELITE",
        image: "/certificates/nptel-java.png",
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: "2",
        title: "DBMS Workshop",
        issuer: "RCCIIT - CSE (AI & ML)",
        date: "June 2025",
        score: "92%",
        badge: "92%",
        image: "/certificates/rcciit-dbms.png",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "3",
        title: "Internal Smart India Hackathon 2024",
        issuer: "RCCIIT Innovation Council",
        date: "September 2024",
        badge: "SIH 2024",
        image: "/certificates/sih-2024.png",
        color: "from-emerald-500 to-green-500"
    }
];

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <section id="certifications" className="py-16 md:py-24 px-4 md:px-8 w-full max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {">"} Awards & <span className="text-yellow-500">Certifications</span>.<span className="animate-pulse">_</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm md:text-base">$ ls ~/achievements/</p>
            </motion.div>

            {/* Certificates Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedCert(cert)}
                        className="group relative bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-yellow-500/50 transition-all duration-300"
                    >
                        {/* Certificate Preview */}
                        <div className="aspect-[4/3] relative overflow-hidden">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                            {/* Badge */}
                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-bold`}>
                                {cert.badge}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-5">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0">
                                    <Award className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-white truncate">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm truncate">{cert.issuer}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
                                        {cert.score && (
                                            <span className="text-xs text-yellow-500 font-mono">• {cert.score}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-mono text-sm flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                View Certificate
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <Image
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                width={1200}
                                height={800}
                                className="w-full rounded-xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
