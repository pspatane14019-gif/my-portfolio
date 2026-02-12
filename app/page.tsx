import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SnowfallBackground from "./components/SnowfallBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#0f172a] selection:bg-cyan-500/30">
      <SnowfallBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
