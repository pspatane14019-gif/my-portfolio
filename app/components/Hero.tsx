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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Available for Internships
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                        Turning Raw Data into <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Business Impact</span>
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                        I help organizations make better decisions through rigorous data analysis, clear visualization, and scalable machine learning pipelines.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
                        >
                            View Analysis
                            <FiArrowRight />
                        </a>

                        <a
                            href="/resume.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                        >
                            <FiDownload />
                            Download Resume
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-slate-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Tech stack logo placeholders or simple text */}
                        <span className="text-sm font-semibold uppercase tracking-widest">Tech Stack</span>
                        <div className="h-px bg-slate-200 dark:bg-slate-800 w-12" />
                        <div className="flex gap-4 text-2xl">
                            {/* Add simple icons or text here for Python, SQL, Tableau */}
                            <span className="hover:text-[#3776AB] transition-colors" title="Python">Py</span>
                            <span className="hover:text-[#F80000] transition-colors" title="SQL">SQL</span>
                            <span className="hover:text-[#E97627] transition-colors" title="Tableau">Tb</span>
                            <span className="hover:text-[#F2C811] transition-colors" title="Power BI">PBI</span>
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full opacity-50" />

                    <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 dark:border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8">
                        {/* Mock Chart UI */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
                                <div className="h-4 w-16 bg-slate-900 dark:bg-white rounded" />
                            </div>
                            <div className="h-8 w-8 bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 rounded-lg flex items-center justify-center">
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
                                    className="w-full bg-gradient-to-t from-cyan-600 to-blue-500 rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
                                />
                            ))}
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Growth</span>
                                <span className="text-emerald-500 font-medium">+24.5%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "75%" }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    className="h-full bg-emerald-500 rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Floating 'Insight' Cards */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                                ★
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase font-bold">Model Accuracy</div>
                                <div className="text-lg font-bold text-slate-900 dark:text-white">98.2%</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        </Section>
    );
}
