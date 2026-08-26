import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-gold-500/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 font-body text-xs text-ink-600 dark:text-ink-100/50 sm:flex-row">
        <span className="font-script text-base italic text-gold-500">Sahira</span>
        <span>{language === "en" ? "© 2026 All rights reserved." : "© 2026 Todos los derechos reservados."}</span>
        <span className="italic">{language === "en" ? '"Code with purpose, design with passion."' : '"Código con propósito, diseño con pasión."'}</span>
      </div>
    </footer>
  );
}
