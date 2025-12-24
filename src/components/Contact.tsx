"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Zap, Terminal, ArrowRight } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            alert("Message sent! I'll get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <section id="contact" className="py-16 md:py-24 px-4 md:px-8 w-full max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {">"} init <span className="text-electric-blue">collaboration</span>.<span className="animate-pulse">_</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm md:text-base max-w-2xl mx-auto">
                    $ echo "Ready to build something extraordinary? Let's transform your vision into reality."
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-8">
                {/* Contact Form - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-3 bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden"
                >
                    {/* Terminal Header */}
                    <div className="bg-zinc-800/50 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-gray-400 font-mono text-sm ml-2">~/contact/new-message.sh</span>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                        <div>
                            <label className="block text-gray-400 font-mono text-sm mb-2">
                                <span className="text-emerald-green">$</span> name=
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder='"Your Name"'
                                required
                                className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white font-mono placeholder:text-gray-600 focus:border-electric-blue focus:outline-none transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 font-mono text-sm mb-2">
                                <span className="text-emerald-green">$</span> email=
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder='"your@email.com"'
                                required
                                className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white font-mono placeholder:text-gray-600 focus:border-electric-blue focus:outline-none transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 font-mono text-sm mb-2">
                                <span className="text-emerald-green">$</span> message=
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder='"Tell me about your project..."'
                                rows={4}
                                required
                                className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white font-mono placeholder:text-gray-600 focus:border-electric-blue focus:outline-none transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-8 py-3 bg-electric-blue hover:bg-blue-600 disabled:opacity-50 rounded-lg font-mono text-white flex items-center justify-center gap-2 transition-colors"
                        >
                            {isSubmitting ? (
                                <>Sending...</>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    ./send_message.sh
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>

                {/* Info Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-2 flex flex-col gap-4"
                >
                    {/* Location Card */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex items-center gap-4 hover:bg-zinc-900/80 transition-colors">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                            <MapPin className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-white font-mono font-semibold text-lg">Location</h3>
                            <p className="text-gray-400 font-mono text-sm">Barrackpur, West Bengal, India</p>
                        </div>
                    </div>

                    {/* Status Card */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex items-center gap-4 hover:bg-zinc-900/80 transition-colors">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                            <Zap className="w-6 h-6 text-emerald-green" />
                        </div>
                        <div>
                            <h3 className="text-white font-mono font-semibold text-lg">Status</h3>
                            <p className="text-emerald-green font-mono text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-green animate-pulse" />
                                Available for opportunities
                            </p>
                        </div>
                    </div>

                    {/* Response Time Card */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex items-center gap-4 hover:bg-zinc-900/80 transition-colors">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                            <Terminal className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-white font-mono font-semibold text-lg">Response Time</h3>
                            <p className="text-gray-400 font-mono text-sm">Usually within 24 hours</p>
                        </div>
                    </div>

                    {/* Email CTA */}
                    <a
                        href="mailto:debjitdebbarman345@gmail.com"
                        className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex items-center justify-between gap-4 hover:bg-zinc-900/80 hover:border-electric-blue/50 transition-colors group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                                <ArrowRight className="w-6 h-6 text-electric-blue" />
                            </div>
                            <div>
                                <p className="text-gray-500 font-mono text-xs mb-0.5">Prefer email?</p>
                                <p className="text-white font-mono text-sm">debjitdebbarman345@gmail.com</p>
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-electric-blue group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
