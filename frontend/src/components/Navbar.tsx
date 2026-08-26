import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const linksEs = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

const linksEn = [
  { href: "#inicio", label: "Home" },
  { href: "#sobre-mi", label: "About me" },
  { href: "#tecnologias", label: "Tech" },
  { href: "#proyectos", label: "Projects" },
  { href: "#experiencia", label: "Experience" },
  { href: "#contacto", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentLinks = language === "en" ? linksEn : linksEs;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-50/90 dark:bg-ink-950/85 backdrop-blur-md border-b border-gold-500/15 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="font-display text-2xl tracking-wide text-ink-900 dark:text-ink-50">
          <span className="text-gold-500">S</span>ahira
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {currentLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-body text-sm tracking-wide text-ink-700 transition-colors hover:text-gold-500 dark:text-ink-100/80 dark:hover:text-gold-300"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="relative flex h-9 w-16 items-center rounded-full border border-gold-500/40 bg-ink-100 px-1 transition-colors dark:bg-ink-800"
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-xs shadow-md transition-transform duration-300 ${
                theme === "dark" ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
          </button>

          <button
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            className="relative flex h-9 w-16 items-center rounded-full border border-gold-500/40 bg-ink-100 px-1 transition-colors dark:bg-ink-800 font-body text-[10px] font-bold text-ink-700 dark:text-ink-200"
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-ink-950 shadow-md transition-transform duration-300 ${
                language === "en" ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {language === "en" ? "EN" : "ES"}
            </span>
          </button>

          <Link
            to="/admin"
            title="Panel de Administración"
            aria-label="Panel de Administración"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 bg-ink-100 text-ink-750 hover:bg-gold-500/10 hover:text-gold-500 transition-colors dark:bg-ink-800 dark:text-ink-100/90"
          >
            <User className="h-4.5 w-4.5" />
          </Link>

          <button
            className="text-ink-900 dark:text-ink-50 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-4 flex max-w-7xl flex-col gap-1 px-4 sm:px-6 lg:px-8 pb-4 md:hidden">
          {currentLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 font-body text-sm text-ink-800 hover:bg-gold-500/10 hover:text-gold-500 dark:text-ink-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
