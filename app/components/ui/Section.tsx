import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
