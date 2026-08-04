import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const infoRef = useReveal<HTMLDivElement>();
  const photoRef = useReveal<HTMLDivElement>();

  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* ambient gold glow */}
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-gold-400/20 blur-[120px] dark:bg-gold-500/10" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-[-8%] h-72 w-72 rounded-full bg-gold-300/10 blur-[100px]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left — description */}
        <div ref={infoRef} className="reveal order-2 text-center md:order-1 md:text-left">
          <p className="font-script text-3xl italic text-ink-300 dark:text-ink-400 mb-1">¡Hola! Soy</p>
          <h1 className="font-body text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50 sm:text-6xl md:text-7xl">
            Sahira <span className="text-gradient-gold font-extrabold">Vargas</span>
          </h1>
          <p className="mt-2 font-script text-3xl italic text-gradient-gold md:text-4xl">
            Desarrolladora de software
          </p>

          <p className="mx-auto mt-6 max-w-md text-balance font-body text-base leading-relaxed text-ink-700/90 dark:text-ink-100/80 md:mx-0">
            Desarrollo aplicaciones web modernas, funcionales y centradas en la experiencia de usuario.
            Me apasiona resolver problemas y crear soluciones que generen impacto.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 font-body text-sm font-semibold text-ink-950 shadow-[0_4px_20px_rgba(201,152,46,0.3)] transition-all hover:bg-gold-400 hover:shadow-[0_4px_25px_rgba(201,152,46,0.5)] hover:-translate-y-0.5"
            >
              Ver mis proyectos
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="/CV_Sahira_Vargas.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-gold-500/50 bg-transparent px-6 py-3 font-body text-sm font-semibold text-ink-900 transition-all hover:bg-gold-500/10 hover:border-gold-500 dark:text-ink-50"
            >
              Descargar CV
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg border border-gold-500/50 bg-transparent px-6 py-3 font-body text-sm font-semibold text-ink-900 transition-all hover:bg-gold-500/10 hover:border-gold-500 dark:text-ink-50"
            >
              Contactarme
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-ink-500 dark:text-ink-100/50">
              Encuéntrame en:
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/35 bg-ink-50/50 text-ink-700 transition-all hover:bg-gold-500/10 hover:border-gold-400 hover:text-gold-500 dark:bg-ink-900/50 dark:text-ink-100/70"
                title="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/35 bg-ink-50/50 text-ink-700 transition-all hover:bg-gold-500/10 hover:border-gold-400 hover:text-gold-500 dark:bg-ink-900/50 dark:text-ink-100/70"
                title="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:sahira@example.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/35 bg-ink-50/50 text-ink-700 transition-all hover:bg-gold-500/10 hover:border-gold-400 hover:text-gold-500 dark:bg-ink-900/50 dark:text-ink-100/70"
                title="Correo"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="#tecnologias"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/35 bg-ink-50/50 text-ink-700 transition-all hover:bg-gold-500/10 hover:border-gold-400 hover:text-gold-500 dark:bg-ink-900/50 dark:text-ink-100/70"
                title="Tecnologías"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right — pulsing circular photo with orbits and tech badges */}
        <div ref={photoRef} className="reveal order-1 flex items-center justify-center md:order-2">
          <div className="relative p-8 sm:p-12 md:p-16">
            {/* Orbit rings */}
            <div className="absolute inset-4 rounded-full border border-gold-500/25 z-0 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border border-gold-400/15 z-0 rotate-12 animate-[spin_55s_linear_infinite_reverse]" />
            <div className="absolute -inset-4 rounded-full border border-gold-300/10 z-0 -rotate-12 animate-[spin_70s_linear_infinite]" />

            {/* Floating Tech Badges */}
            {/* Badge 1: Code */}
            <div className="absolute top-[8%] left-[8%] z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-gold-400/80 bg-[#0d0c08] shadow-[0_0_15px_rgba(201,152,46,0.4)] animate-float">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>

            {/* Badge 2: React */}
            <div className="absolute top-[20%] right-[-2%] z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-gold-400/80 bg-[#0d0c08] shadow-[0_0_15px_rgba(201,152,46,0.4)] animate-float [animation-delay:1.5s]">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400 animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100" fill="none">
                <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" />
                <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(120 50 50)" />
                <circle cx="50" cy="50" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* Badge 3: JS */}
            <div className="absolute bottom-[22%] left-[-2%] z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-gold-400/80 bg-[#0d0c08] shadow-[0_0_15px_rgba(201,152,46,0.4)] animate-float [animation-delay:3s]">
              <span className="font-body text-xs sm:text-sm font-black text-gold-400 tracking-tighter">JS</span>
            </div>

            {/* Badge 4: Node */}
            <div className="absolute bottom-[10%] right-[6%] z-20 flex h-11 w-11 sm:h-13 sm:w-13 flex-col items-center justify-center rounded-full border border-gold-400/80 bg-[#0d0c08] shadow-[0_0_15px_rgba(201,152,46,0.4)] animate-float [animation-delay:4.5s]">
              <span className="font-body text-[9px] sm:text-[10px] font-bold text-gold-400 leading-none">node</span>
              <span className="text-[6px] text-gold-500 font-bold mt-0.5 leading-none">js</span>
            </div>

            {/* Image */}
            <img
              src="/sahira.png"
              alt="Sahira Vargas"
              className="h-76 w-76 rounded-full object-cover sm:h-96 sm:w-96 md:h-[26rem] md:w-[26rem] border-4 border-gold-500/80 shadow-[0_0_35px_rgba(201,152,46,0.5)] animate-image-pulse z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
