"use client";

import Section from "./ui/Section";
import { FiDatabase, FiTrendingUp, FiCheckCircle } from "react-icons/fi";

export default function About() {
    const steps = [
        {
            icon: <FiDatabase className="text-2xl" />,
            title: "Data Collection",
            desc: "Gathering and cleaning raw data from SQL databases, APIs, and unstructured sources.",
        },
        {
            icon: <FiTrendingUp className="text-2xl" />,
            title: "Analysis & Modeling",
            desc: "Applying statistical methods and ML algorithms to uncover patterns and trends.",
        },
        {
            icon: <FiCheckCircle className="text-2xl" />,
            title: "Actionable Insights",
            desc: "Translating complex findings into clear dashboards and strategic recommendations.",
        },
    ];

    return (
        <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    More Than Just Numbers
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    I bridge the gap between technical complexity and business strategy. My process ensures that every model or dashboard serves a clear purpose: driving growth and efficiency.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                            {step.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Current Education & Goals
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        I am currently pursuing a <strong>BSc in Data Science</strong> at ISM Germany. My academic focus combines rigorous statistical theory with practical application in business contexts.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                        <strong>Goal:</strong> To join a forward-thinking team as an ML Engineer or Data Analyst, contributing to products that impact millions of users.
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="bg-slate-100 dark:bg-slate-700/50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        <div className="space-y-2 font-mono text-xs text-slate-600 dark:text-slate-400">
                            <p>$ current_location = "Germany"</p>
                            <p>$ education = "BSc Data Science"</p>
                            <p>$ interests = ["NLP", "Time Series", "BI"]</p>
                            <p className="text-cyan-600 dark:text-cyan-400 animate-pulse">$ status = "Open to Work"</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
