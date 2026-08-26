import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import GoldBackground from "../components/GoldBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen text-ink-900 dark:text-ink-50">
          <GoldBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Technologies />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
