"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
    const [dark, setDark] = useState(true); // Default to dark for "premium" feel
    const [active, setActive] = useState("");

    useEffect(() => {
        // Theme logic - default to dark if not set
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

        if (saved === "light") {
            setDark(false);
            document.documentElement.classList.remove("dark");
        } else {
            setDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const next = !dark;
        setDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const navLinks = ["projects", "skills", "about", "resume", "contact"];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-neutral-200 dark:border-slate-800"
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        PP
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 transition-colors">
                            Piyush Patane
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Data Analyst
                        </span>
                    </div>
                </a>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((id) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={() => setActive(id)}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${active === id
                                    ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                                    }`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        ))}
                    </div>

                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-slate-500 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </button>
                </div>
            </nav>
        </motion.header>
    );
}
