import "./globals.css";
import type { Metadata } from "next";

import { Outfit, Orbitron } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Piyush Patane | Data Science & ML",
  description: "Portfolio of Piyush Patane – Data Science & ML projects in Python, Power BI, Streamlit and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
