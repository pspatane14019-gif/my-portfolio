"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiBarChart2 } from "react-icons/fi";
import { useState } from "react";

type Project = {
    title: string;
    desc: string;
    tags: string[];
    url: string;
    repo?: string;
    category: "ML" | "Analysis" | "App";
};

// Using the original data but enhancing it
const projects: Project[] = [
    {
        title: "PAWS — Animal Distress Detection",
        desc: "A full-stack solution integrating Computer Vision with a reporting dashboard. Built a rescue workflow system that allows users to geolocate distressed animals.",
        tags: ["Python", "Flask", "Geo-Location", "OpenCV"],
        url: "#",
        category: "App",
    },
    {
        title: "Sales Forecasting Dashboard",
        desc: "End-to-end time series analysis. Cleaned 2 years of retail data, engineered seasonality features, and deployed a Prophet model to forecast inventory needs with 85% accuracy.",
        tags: ["Prophet", "Time Series", "Streamlit", "Plotly"],
        url: "#",
        category: "Analysis",
    },
    {
        title: "Loan Default Risk Classifier",
        desc: "Developed an XGBoost model to predict loan defaults. Focused on feature importance to explain risk factors to non-technical stakeholders (Explainable AI).",
        tags: ["XGBoost", "Scikit-learn", "MLOps", "SHAP"],
        url: "#",
        category: "ML",
    },
    {
        title: "Alya Kujou — Persona Chatbot",
        desc: "Interactive RAG-based chatbot with distinct personality traits. Demonstrated capability in prompt engineering and managing context windows.",
        tags: ["NLP", "LLM", "Streamlit", "Vector DB"],
        url: "#",
        category: "ML",
    },
];

export default function Projects() {
    const [filter, setFilter] = useState<string | null>(null);

    const filtered = filter
        ? projects.filter((p) => p.category === filter || p.tags.includes(filter))
        : projects;

    return (
        <Section id="projects" className="bg-slate-50 dark:bg-[#0b1121]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Selected Projects
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                        A showcase of my work in data science, demonstrating my ability to solve real-world problems with code and statistics.
                    </p>
                </div>

                <div className="flex gap-2 text-sm overflow-x-auto pb-2 md:pb-0">
                    <button
                        onClick={() => setFilter(null)}
                        className={`px-4 py-2 rounded-full border transition-all whitespace-nowrap ${filter === null
                                ? "bg-cyan-600 text-white border-cyan-600"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-cyan-500"
                            }`}
                    >
                        All Projects
                    </button>
                    {["Analysis", "ML", "App"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full border transition-all whitespace-nowrap ${filter === cat
                                    ? "bg-cyan-600 text-white border-cyan-600"
                                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-cyan-500"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {filtered.map((project, idx) => (
                    <motion.article
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        key={project.title}
                        className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                                    <FiBarChart2 /> {project.category}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.url}
                                        className="p-2 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                        aria-label="View Project"
                                    >
                                        <FiExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}
