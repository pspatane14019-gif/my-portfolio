"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Section from "./ui/Section";

export default function Hero() {
    return (
        <Section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-6 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.5)] backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        System Online: Available for Hire
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] font-orbitron">
                        Turning Raw Data into <span className="glitch bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600" data-text="Business Impact">Business Impact</span>
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                        Processing... I optimize decision protocols through rigorous data analysis, holographic visualization, and high-performance ML pipelines.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-medium shadow-[0_0_15px_rgba(8,145,178,0.5)] hover:shadow-[0_0_25px_rgba(8,145,178,0.8)] hover:-translate-y-0.5 transition-all overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <span className="relative flex items-center gap-2">
                                Initialize Analysis
                                <FiArrowRight />
                            </span>
                        </a>

                        <a
                            href="/resume.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 glass text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition-all"
                        >
                            <FiDownload />
                            Download Resume_v2.0
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-slate-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Tech stack logo placeholders or simple text */}
                        <span className="text-sm font-semibold uppercase tracking-widest font-orbitron text-xs">Stack Protocols</span>
                        <div className="h-px bg-slate-200 dark:bg-slate-800 w-12" />
                        <div className="flex gap-4 text-2xl font-orbitron">
                            {/* Add simple icons or text here for Python, SQL, Tableau */}
                            <span className="hover:text-[#3776AB] transition-colors cursor-help" title="Python">PY</span>
                            <span className="hover:text-[#F80000] transition-colors cursor-help" title="SQL">SQL</span>
                            <span className="hover:text-[#E97627] transition-colors cursor-help" title="Tableau">TB</span>
                            <span className="hover:text-[#F2C811] transition-colors cursor-help" title="Power BI">PBI</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Abstract Data Viz Decoration */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-3xl rounded-full opacity-60" />

                    <div className="relative glass rounded-2xl p-6 md:p-8 border-t border-l border-white/10">
                        {/* Mock Chart UI */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-2 animate-pulse" />
                                <div className="text-sm font-orbitron text-slate-900 dark:text-white">PROJECTED GROWTH</div>
                            </div>
                            <div className="h-8 w-8 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center border border-cyan-500/30">
                                %
                            </div>
                        </div>

                        <div className="flex items-end justify-between gap-2 h-48 mb-6">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                    className="w-full bg-gradient-to-t from-cyan-500 to-blue-600 rounded-sm opacity-80 hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                                />
                            ))}
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-orbitron">
                                <span className="text-slate-500">OPTIMIZATION</span>
                                <span className="text-emerald-400 font-medium">+24.5%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-900/50 rounded-full overflow-hidden border border-slate-700">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "75%" }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Floating 'Insight' Cards */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 glass p-4 rounded-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 border border-yellow-500/30">
                                ★
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-500 uppercase font-bold font-orbitron tracking-wider">ACCURACY</div>
                                <div className="text-lg font-bold text-slate-900 dark:text-white font-orbitron">98.2%</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
        </Section>
    );
}
