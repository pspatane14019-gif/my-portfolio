"use client";

import Section from "./ui/Section";
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <Section id="contact" className="py-16">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden relative">

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to dive into the data?
                        </h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                            I am currently available for internships and junior roles. If you're looking for someone who can turn data into direction, let's talk.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a
                                href="mailto:piyushpatane2006@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all hover:scale-105"
                            >
                                <FiMail size={20} />
                                Send an Email
                            </a>

                            <a
                                href="/resume.pdf"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white font-medium rounded-xl transition-all"
                            >
                                <FiDownload size={20} />
                                Get Resume
                            </a>
                        </div>

                        <div className="mt-12 flex justify-center gap-6">
                            <a href="https://github.com/pspatane14019-gif" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <FiGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/piyush-patane-b7b70a375/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <FiLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                    </div>
                </div>

                <div className="mt-16 text-center text-slate-500 dark:text-slate-600 text-sm">
                    <p>© {year} Piyush Patane. Built with Next.js, Tailwind CSS & Framer Motion.</p>
                </div>
            </Section>
        </footer>
    );
}
