"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 via-zinc-900 to-electric-blue/10 border border-white/5"
            >
                {/* Background Glow Effects */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-electric-blue/10 to-transparent pointer-events-none" />

                <div className="relative grid lg:grid-cols-2 items-center gap-8 p-8 md:p-12 lg:p-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                            I transform complex
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-500">
                                AI concepts into
                            </span>
                            elegant solutions
                        </h2>
                        <p className="text-gray-400 font-mono text-sm md:text-base max-w-md">
                            Bridging the gap between cutting-edge machine learning and real-world applications
                            with clean code and innovative thinking.
                        </p>

                        {/* Stats */}
                        <div className="mt-8 flex flex-wrap gap-6">
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-electric-blue">10+</p>
                                <p className="text-gray-500 font-mono text-sm">Projects</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-purple-500">3+</p>
                                <p className="text-gray-500 font-mono text-sm">Leadership Roles</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-emerald-green">1.4K+</p>
                                <p className="text-gray-500 font-mono text-sm">Followers</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            <Image
                                src="/showcase.png"
                                alt="AI Innovation"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                            {/* Glow behind image */}
                            <div className="absolute inset-0 bg-electric-blue/20 rounded-full blur-3xl -z-10 scale-75" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
