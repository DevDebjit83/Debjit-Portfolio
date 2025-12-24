"use client";

import { useState, useRef, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Command {
    cmd: string;
    output: string | React.ReactNode;
    id: number;
}

export default function Terminal() {
    const [history, setHistory] = useState<Command[]>([
        {
            id: 0,
            cmd: "welcome",
            output: "Welcome v1.0.0. Type 'help' to see available commands."
        }
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: string | React.ReactNode = "";

        switch (trimmedCmd) {
            case "help":
                output = (
                    <div className="space-y-1">
                        <div>Available commands:</div>
                        <div className="pl-4">
                            <span className="text-electric-blue">about</span> - Brief bio
                        </div>
                        <div className="pl-4">
                            <span className="text-electric-blue">skills</span> - Tech stack
                        </div>
                        <div className="pl-4">
                            <span className="text-electric-blue">contact</span> - Get in touch
                        </div>
                        <div className="pl-4">
                            <span className="text-electric-blue">clear</span> - Clear terminal
                        </div>
                    </div>
                );
                break;
            case "about":
                output = "I am a creative developer passionate about building immersive web experiences and exploring the frontiers of AI.";
                break;
            case "skills":
                output = "React, Next.js, TypeScript, Tailwind, Three.js, Python, TensorFlow, PyTorch.";
                break;
            case "contact":
                output = (
                    <div>
                        <div>Email: <a href="mailto:hello@debjit.dev" className="underline hover:text-electric-blue">hello@debjit.dev</a></div>
                        <div>GitHub: <a href="https://github.com/debjit" target="_blank" className="underline hover:text-electric-blue">github.com/debjit</a></div>
                    </div>
                );
                break;
            case "clear":
                setHistory([]);
                return;
            default:
                output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
        }

        setHistory(prev => [...prev, { id: Date.now(), cmd, output }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
        setInput("");
    };

    return (
        <section id="terminal" className="py-24 px-4 md:px-8 w-full max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
                Terminal <span className="text-gray-500">Access</span>
            </motion.h2>

            <div
                className="w-full bg-black/90 rounded-xl border border-white/20 shadow-2xl overflow-hidden font-mono text-sm md:text-base min-h-[400px] flex flex-col"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Terminal Header */}
                <div className="h-8 bg-zinc-900 flex items-center px-4 gap-2 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-green" />
                    <div className="ml-4 text-gray-500 text-xs">user@debjit-portfolio:~</div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 flex-1 overflow-y-auto">
                    {history.map((entry) => (
                        <div key={entry.id} className="mb-4">
                            <div className="flex gap-2 text-gray-400 mb-1">
                                <span className="text-emerald-green">➜</span>
                                <span className="text-electric-blue">~</span>
                                <span>{entry.cmd}</span>
                            </div>
                            <div className="text-gray-200 whitespace-pre-wrap ml-6">
                                {entry.output}
                            </div>
                        </div>
                    ))}

                    <form onSubmit={handleSubmit} className="flex gap-2 items-center mt-4">
                        <span className="text-emerald-green">➜</span>
                        <span className="text-electric-blue">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent border-none outline-none text-white w-full caret-emerald-500"
                            autoFocus
                        />
                    </form>
                    <div ref={bottomRef} />
                </div>
            </div>
        </section>
    );
}
