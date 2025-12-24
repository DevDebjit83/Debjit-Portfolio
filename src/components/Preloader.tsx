"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Scroll to top immediately
        window.scrollTo(0, 0);

        // Show preloader for 1.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Ensure we're at top when preloader finishes
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        {/* Logo/Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold text-white font-mono mb-4"
                        >
                            {">"} DDB<span className="text-electric-blue animate-pulse">_</span>
                        </motion.h1>

                        {/* Loading bar */}
                        <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden mx-auto">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.3, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-electric-blue to-purple-500 rounded-full"
                            />
                        </div>

                        {/* Loading text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-500 font-mono text-sm mt-4"
                        >
                            Initializing portfolio...
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
