"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Terminal", href: "#terminal" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-black/50 backdrop-blur-sm"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="text-electric-blue font-mono text-lg md:text-xl tracking-wider hover:text-emerald-green transition-colors">
                        {">"} DDB_
                    </a>

                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="font-mono text-gray-400 hover:text-electric-blue transition-colors text-sm tracking-wider uppercase"
                                >
                                    [{item.name}]
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-electric-blue p-2"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-20 md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-6 p-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-mono text-2xl text-gray-300 hover:text-electric-blue transition-colors tracking-wider"
                                >
                                    [{item.name}]
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
