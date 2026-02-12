"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";

export default function Skills() {
    const categories = [
        {
            title: "Data Analysis & Science",
            skills: ["Python (Pandas, NumPy)", "SQL (PostgreSQL, MySQL)", "Exploratory Data Analysis", "Statistical Modeling", "A/B Testing"],
        },
        {
            title: "Machine Learning",
            skills: ["Scikit-learn", "XGBoost / LightGBM", "Time Series (Prophet)", "NLP (Spacy, HuggingFace)", "Model Evaluation"],
        },
        {
            title: "Visualization & BI",
            skills: ["Power BI", "Tableau", "Matplotlib / Seaborn", "Streamlit", "Plotly"],
        },
        {
            title: "Tools & Deployment",
            skills: ["Git / GitHub", "Docker", "Jupyter Notebooks", "VS Code", "Cloud Basics (AWS/Azure)"],
        },
    ];

    return (
        <Section id="skills" className="bg-white dark:bg-slate-900">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Technical Arsenal
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                    My toolkit is built for end-to-end data work: from querying and cleaning messy datasets to building predictive models and interactive dashboards.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-cyan-500/30 transition-colors"
                    >
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-500" />
                            {cat.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm border border-slate-200 dark:border-slate-600"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
