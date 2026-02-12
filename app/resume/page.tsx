"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SnowfallBackground from "../components/SnowfallBackground";
import Section from "../components/ui/Section";
import { FiDownload, FiBriefcase, FiBookOpen, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ResumePage() {
    return (
        <main className="relative min-h-screen bg-white dark:bg-[#0f172a] selection:bg-cyan-500/30">
            <SnowfallBackground />
            <div className="relative z-10">
                <Navbar />

                <Section className="pt-32 pb-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                            <div>
                                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                    Resume / CV
                                </h1>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Professional Experience & Academic History
                                </p>
                            </div>
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
                            >
                                <FiDownload /> Download PDF
                            </a>
                        </div>

                        <div className="grid gap-8">
                            {/* Education Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
                            >
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                    <FiBookOpen className="text-cyan-500" /> Education
                                </h2>

                                <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8 pb-2 space-y-8">
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-cyan-100 dark:border-slate-800 bg-cyan-500" />
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                                                B.Sc. Data Science & Business Analytics
                                            </h3>
                                            <span className="text-sm font-mono text-cyan-600 dark:text-cyan-400">2023 — Present</span>
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 font-medium mb-2">ISM Germany</div>
                                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                                            <li>Focus on Statistical Methods, Machine Learning, and Business Intelligence.</li>
                                            <li>Relevant Coursework: Advanced SQL, Time Series Analysis, Big Data Technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Experience Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
                            >
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                    <FiBriefcase className="text-cyan-500" /> Experience
                                </h2>

                                <div className="text-center py-8 text-slate-500 dark:text-slate-400 italic">
                                    Asking for Internship opportunities... <br />
                                    <span className="text-sm not-italic mt-2 block">
                                        (This area is ready for your first professional role!)
                                    </span>
                                </div>
                                {/* Example Entry (Commented out)
                <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8 pb-2 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-cyan-100 dark:border-slate-800 bg-cyan-500" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                        Data Analyst Intern
                      </h3>
                      <span className="text-sm font-mono text-cyan-600 dark:text-cyan-400">Summer 2025</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 font-medium mb-2">Tech Corp Inc.</div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Upcoming role focusing on predictive maintenance models.
                    </p>
                  </div>
                </div>
                */}
                            </motion.div>

                            {/* Certifications Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
                            >
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                    <FiAward className="text-cyan-500" /> Certifications
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
                                        <h3 className="font-bold text-slate-800 dark:text-slate-200">Google Data Analytics</h3>
                                        <p className="text-xs text-slate-500 mt-1">Coursera — 2024</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
                                        <h3 className="font-bold text-slate-800 dark:text-slate-200">Machine Learning Specialization</h3>
                                        <p className="text-xs text-slate-500 mt-1">DeepLearning.AI — In Progress</p>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </Section>

                <Footer />
            </div>
        </main>
    );
}
