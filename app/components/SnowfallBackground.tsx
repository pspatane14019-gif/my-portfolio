"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SnowfallBackground() {
    const [snowflakes, setSnowflakes] = useState<{ id: number; x: number; delay: number; duration: number; size: number }[]>([]);

    useEffect(() => {
        // Generate snowflakes on client side only
        const count = 50;
        const newFlakes = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // random start position %
            delay: Math.random() * 5, // random delay
            duration: 5 + Math.random() * 10, // random duration between 5-15s
            size: 2 + Math.random() * 4, // random size 2-6px
        }));
        setSnowflakes(newFlakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Icy Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white dark:from-[#0f172a] dark:via-[#162a3b] dark:to-[#0f172a] opacity-80" />

            {/* Floating Ice/Data Particles */}
            {snowflakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    initial={{ y: -20, x: `${flake.x}vw`, opacity: 0 }}
                    animate={{
                        y: "110vh",
                        x: [`${flake.x}vw`, `${flake.x + (Math.random() * 10 - 5)}vw`], // Sway effect
                        opacity: [0, 0.8, 0],
                        rotate: 360,
                    }}
                    transition={{
                        duration: flake.duration,
                        delay: flake.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        width: flake.size,
                        height: flake.size,
                    }}
                    className="absolute bg-cyan-200 dark:bg-cyan-500 rounded-full blur-[1px] shadow-[0_0_5px_rgba(34,211,238,0.5)]"
                />
            ))}

            {/* Creative "Frost" Overlay at corners */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white/40 to-transparent blur-3xl rounded-full mix-blend-overlay" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-100/20 to-transparent blur-3xl rounded-full pointer-events-none" />
        </div>
    );
}
