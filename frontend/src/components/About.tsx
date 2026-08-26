import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const traits = [
  {
    number: "01",
    baseTitle: "Analizo el problema ",
    accentTitle: "antes de programar.",
    description:
      "Me gusta entender a fondo cada necesidad para diseñar soluciones eficientes y escalables.",
    baseTitleEn: "I analyze the problem ",
    accentTitleEn: "before coding.",
    descriptionEn: "I like to fully understand every need to design efficient and scalable solutions.",
    icon: (isActive: boolean) => (
      <svg
        className={`h-6 w-6 transition-colors duration-500 ${isActive ? "text-gold-400" : "text-ink-400"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    color: "rgba(201, 152, 46, 1)",
    shadowColor: "rgba(201, 152, 46, 0.45)",
    textColorClass: "text-gold-400",
    ringClass: "border-gold-500/20 bg-gold-500/5",
    activeRingClass:
      "border-gold-400 shadow-[0_0_20px_rgba(201,152,46,0.45)] bg-gold-500/10",
  },
  {
    number: "02",
    baseTitle: "Disfruto aprender ",
    accentTitle: "nuevas tecnologías.",
    description:
      "La tecnología evoluciona cada día y me motiva seguir aprendiendo siempre.",
    baseTitleEn: "I enjoy learning ",
    accentTitleEn: "new technologies.",
    descriptionEn: "Technology evolves every day and I am motivated to keep learning always.",
    icon: (isActive: boolean) => (
      <svg
        className={`h-6 w-6 transition-colors duration-500 ${isActive ? "text-green-400" : "text-ink-400"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    color: "rgba(74, 222, 128, 1)",
    shadowColor: "rgba(74, 222, 128, 0.45)",
    textColorClass: "text-green-400",
    ringClass: "border-green-500/20 bg-green-500/5",
    activeRingClass:
      "border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.45)] bg-green-500/10",
  },
  {
    number: "03",
    baseTitle: "Busco escribir ",
    accentTitle: "código limpio y organizado.",
    description:
      "Creo que el código debe ser fácil de entender, mantener y reutilizar.",
    baseTitleEn: "I seek to write ",
    accentTitleEn: "clean and organized code.",
    descriptionEn: "I believe code should be easy to understand, maintain, and reuse.",
    icon: (isActive: boolean) => (
      <svg
        className={`h-6 w-6 transition-colors duration-500 ${isActive ? "text-purple-400" : "text-ink-400"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    color: "rgba(192, 132, 252, 1)",
    shadowColor: "rgba(192, 132, 252, 0.45)",
    textColorClass: "text-purple-400",
    ringClass: "border-purple-500/20 bg-purple-500/5",
    activeRingClass:
      "border-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.45)] bg-purple-500/10",
  },
  {
    number: "04",
    baseTitle: "Me gusta documentar ",
    accentTitle: "mis proyectos.",
    description:
      "La documentación es clave para colaborar en equipo y mantener el software a largo plazo.",
    baseTitleEn: "I like documenting ",
    accentTitleEn: "my projects.",
    descriptionEn: "Documentation is key to collaborating with a team and maintaining software long-term.",
    icon: (isActive: boolean) => (
      <svg
        className={`h-6 w-6 transition-colors duration-500 ${isActive ? "text-blue-400" : "text-ink-400"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: "rgba(96, 165, 250, 1)",
    shadowColor: "rgba(96, 165, 250, 0.45)",
    textColorClass: "text-blue-400",
    ringClass: "border-blue-500/20 bg-blue-500/5",
    activeRingClass:
      "border-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.45)] bg-blue-500/10",
  },
  {
    number: "05",
    baseTitle: "Trabajo muy bien ",
    accentTitle: "en equipo.",
    description:
      "Creo en la colaboración, la comunicación clara y el crecimiento colectivo.",
    baseTitleEn: "I work very well ",
    accentTitleEn: "in a team.",
    descriptionEn: "I believe in collaboration, clear communication, and collective growth.",
    icon: (isActive: boolean) => (
      <svg
        className={`h-6 w-6 transition-colors duration-500 ${isActive ? "text-orange-400" : "text-ink-400"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-3c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-3c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "rgba(251, 146, 60, 1)",
    shadowColor: "rgba(251, 146, 60, 0.45)",
    textColorClass: "text-orange-400",
    ringClass: "border-orange-500/20 bg-orange-500/5",
    activeRingClass:
      "border-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.45)] bg-orange-500/10",
  },
  {
    number: "06",
    baseTitle: "Siempre busco ",
    accentTitle: "mejorar mis soluciones.",
    description:
      "Me enfoco en optimizar el rendimiento y ofrecer la mejor experiencia de usuario posible.",
    baseTitleEn: "I always seek to ",
    accentTitleEn: "improve my solutions.",
    descriptionEn: "I focus on optimizing performance and offering the best possible user experience.",
    icon: (isActive: boolean) => (
      <svg
        className={`h-6 w-6 transition-colors duration-500 ${isActive ? "text-teal-400" : "text-ink-400"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "rgba(45, 212, 191, 1)",
    shadowColor: "rgba(45, 212, 191, 0.45)",
    textColorClass: "text-teal-400",
    ringClass: "border-teal-500/20 bg-teal-500/5",
    activeRingClass:
      "border-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.45)] bg-teal-500/10",
  },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const { language } = useLanguage();

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? traits.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === traits.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;
    if (diff < -3) diff += traits.length;
    if (diff > 2) diff -= traits.length;

    if (diff === 0) {
      return "z-20 opacity-100 scale-100 rotate-0 translate-x-0 cursor-default";
    } else if (diff === -1) {
      return "z-10 opacity-30 scale-85 -rotate-6 -translate-x-[4.5rem] sm:-translate-x-[7rem] cursor-pointer hover:opacity-50";
    } else if (diff === 1) {
      return "z-10 opacity-30 scale-85 rotate-6 translate-x-[4.5rem] sm:translate-x-[7rem] cursor-pointer hover:opacity-50";
    } else {
      return "z-0 opacity-0 scale-75 rotate-0 translate-x-0 pointer-events-none";
    }
  };

  const getCardInlineStyle = (index: number) => {
    let diff = index - activeIndex;
    if (diff < -3) diff += traits.length;
    if (diff > 2) diff -= traits.length;

    const trait = traits[index];
    if (diff === 0) {
      return {
        borderColor: trait.color,
        boxShadow: `0 10px 40px -10px ${trait.shadowColor.replace("0.45", "0.4")}`,
      };
    }
    return {};
  };

  return (
    <section id="sobre-mi" className="relative py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionEyebrow label={language === "en" ? "About me" : "Sobre mí"} />

        <div
          ref={ref}
          className="reveal mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-4"
        >
          {/* Left — 3D interactive trait cards slider */}
          <div className="order-2 flex flex-col items-center justify-center md:order-1 overflow-visible">
            <div className="relative flex h-[400px] w-full max-w-[400px] sm:max-w-[460px] items-center justify-center overflow-visible">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-[-1.25rem] sm:left-[-2.25rem] z-30 flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/35 bg-ink-950/80 text-gold-400 transition-all hover:bg-gold-500/10 hover:border-gold-400 shadow-md"
                aria-label="Previous card"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Cards wrapper */}
              <div className="relative h-[340px] w-[230px] sm:w-[260px]">
                {traits.map((t, i) => {
                  const styleClass = getCardStyle(i);
                  const inlineStyle = getCardInlineStyle(i);
                  const isActive = i === activeIndex;
                  
                  const currentBaseTitle = language === "en" ? t.baseTitleEn : t.baseTitle;
                  const currentAccentTitle = language === "en" ? t.accentTitleEn : t.accentTitle;
                  const currentDescription = language === "en" ? t.descriptionEn : t.description;

                  return (
                    <div
                      key={t.number}
                      style={{
                        ...inlineStyle,
                        backgroundColor: theme === "light" ? t.color : undefined
                      }}
                      onClick={() => !isActive && setActiveIndex(i)}
                      className={`absolute inset-0 rounded-2xl border border-gold-500/20 dark:bg-ink-900/95 p-6 transition-all duration-500 ease-out flex flex-col justify-between select-none ${styleClass}`}
                    >
                      <div className="flex flex-col items-center text-center">
                        {/* Circle Badge Icon */}
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 ${isActive ? t.activeRingClass : t.ringClass} ${theme === "light" ? "!bg-ink-950/10 !border-ink-950/20" : ""}`}
                        >
                          <div className={theme === "light" ? "text-ink-950 [&>svg]:text-ink-950" : ""}>
                            {t.icon(isActive)}
                          </div>
                        </div>
                        {/* Thin golden divider */}
                        <div className={`mt-4 h-[1.5px] w-8 ${theme === "light" ? "bg-ink-950/20" : "bg-gold-500/15"}`} />
                        {/* Title */}
                        <h3 className={`mt-4 font-body text-sm sm:text-base font-bold leading-snug ${theme === "light" ? "text-ink-950" : "text-ink-900 dark:text-ink-50"}`}>
                          {isActive ? (
                            <>
                              {currentBaseTitle}
                              <span className={theme === "light" ? "text-ink-950" : t.textColorClass}>
                                {currentAccentTitle}
                              </span>
                            </>
                          ) : (
                            <>
                              {currentBaseTitle}
                              <span className={theme === "light" ? "text-ink-950/70" : "text-ink-600 dark:text-ink-300"}>
                                {currentAccentTitle}
                              </span>
                            </>
                          )}
                        </h3>
                      </div>

                      {/* Description - only shows when active */}
                      <p
                        className={`text-center font-body text-xs sm:text-[13px] leading-relaxed transition-all duration-300 ${theme === "light" ? "text-ink-950/90" : "text-ink-700/85 dark:text-ink-100/70"} ${isActive ? "opacity-100 max-h-[110px] visible" : "opacity-0 max-h-0 overflow-hidden invisible"}`}
                      >
                        {currentDescription}
                      </p>

                      {/* Card Page Number */}
                      <div className={`text-center font-body text-xs font-bold tracking-wider mt-1 ${theme === "light" ? "text-ink-950/60" : "text-gold-500/60"}`}>
                        {t.number} <span className={theme === "light" ? "text-ink-950/30" : "text-gold-500/25"}>/</span>{" "}
                        06
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-[-1.25rem] sm:right-[-2.25rem] z-30 flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/35 bg-ink-950/80 text-gold-400 transition-all hover:bg-gold-500/10 hover:border-gold-400 shadow-md"
                aria-label="Next card"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Slider Dot Indicators */}
            <div className="mt-6 flex justify-center gap-2">
              {traits.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-gold-500" : "w-2 bg-gold-500/25 hover:bg-gold-500/50"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — description text */}
          <div className="order-1 md:order-2 md:pl-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/5 px-3 py-1 font-body text-[11px] font-bold tracking-wider text-gold-400 uppercase">
              <svg
                className="h-3 w-3 text-gold-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {language === "en" ? "Who I am" : "Quién soy"}
            </div>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
              {language === "en" ? (
                <>
                  Technologist in <br />
                  <span className="text-gradient-gold">
                    Software Analysis
                  </span>{" "}
                  <br />
                  and Development
                </>
              ) : (
                <>
                  Tecnóloga en <br />
                  <span className="text-gradient-gold">
                    Análisis y Desarrollo
                  </span>{" "}
                  <br />
                  de Software
                </>
              )}
            </h2>

            {/* Accent divider line */}
            <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-transparent" />

            <p className="mt-6 font-body text-base leading-relaxed text-ink-700/90 dark:text-ink-100/80">
              {language === "en"
                ? "I am a Software Analysis and Development Technologist. I enjoy creating applications that combine logic, design, and usability. I am interested in Full Stack development and intuitive interface design."
                : "Soy Tecnóloga en Análisis y Desarrollo de Software. Disfruto crear aplicaciones que combinan lógica, diseño y usabilidad. Me interesa el desarrollo Full Stack y el diseño de interfaces intuitivas."}
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-ink-700/90 dark:text-ink-100/80">
              {language === "en"
                ? "I am currently continuing to learn and strengthen my knowledge in new technologies, good coding practices, and software architecture."
                : "Actualmente continúo aprendiendo y fortaleciendo mis conocimientos en nuevas tecnologías, buenas prácticas de código y arquitectura de software."}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-2 font-body text-xs font-semibold tracking-wide text-gold-400">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {language === "en" ? "Always learning" : "Siempre aprendiendo"}
            </div>
          </div>
        </div>

        {/* Bottom statistics grid */}
        <div className="mt-20 rounded-2xl border border-gold-500/15 bg-ink-50/40 dark:bg-ink-900/40 p-6 shadow-sm backdrop-blur-md">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4 md:gap-y-0">
            {/* Stat 1: Projects */}
            <div className="flex flex-col items-center text-center p-2 md:border-r md:border-gold-500/15">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2L2 22l10-6 10 6L12 2z"
                  />
                </svg>
              </div>
              <span className="mt-3 font-body text-2xl font-black text-ink-900 dark:text-ink-50">
                + 8
              </span>
              <span className="mt-1 font-body text-xs text-ink-600 dark:text-ink-100/60">
                {language === "en" ? "Projects developed" : "Proyectos desarrollados"}
              </span>
            </div>

            {/* Stat 2: Techs */}
            <div className="flex flex-col items-center text-center p-2 md:border-r md:border-gold-500/15">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="mt-3 font-body text-2xl font-black text-ink-900 dark:text-ink-50">
                + 3
              </span>
              <span className="mt-1 font-body text-xs text-ink-600 dark:text-ink-100/60">
                {language === "en" ? "Mastered technologies" : "Tecnologías dominadas"}
              </span>
            </div>

            {/* Stat 3: Hours */}
            <div className="flex flex-col items-center text-center p-2 md:border-r md:border-gold-500/15">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <span className="mt-3 font-body text-2xl font-black text-ink-900 dark:text-ink-50">
                + 1000
              </span>
              <span className="mt-1 font-body text-xs text-ink-600 dark:text-ink-100/60">
                {language === "en" ? "Hours of code written" : "Horas de código escrito"}
              </span>
            </div>

            {/* Stat 4: Commitment */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <span className="mt-3 font-body text-2xl font-black text-ink-900 dark:text-ink-50">
                100%
              </span>
              <span className="mt-1 font-body text-xs text-ink-600 dark:text-ink-100/60">
                {language === "en" ? "Committed to learning" : "Comprometida con el aprendizaje"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold-500/70 to-gold-400" />
      <span className="font-body text-xs font-bold uppercase tracking-[0.35em] text-gold-500">
        {label}
      </span>
      <span className="h-px w-6 bg-gradient-to-r from-gold-400 to-transparent" />
    </div>
  );
}
