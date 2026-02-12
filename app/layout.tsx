import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
