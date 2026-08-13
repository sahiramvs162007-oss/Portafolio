import { useReveal } from "../hooks/useReveal";
import { projects } from "../data/projects";
import { SectionEyebrow } from "./About";

const accents = [
  "from-gold-400/30 to-transparent",
  "from-gold-300/25 to-transparent",
  "from-gold-500/25 to-transparent",
];

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="proyectos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow label="Proyectos" />
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 dark:text-ink-50 sm:text-4xl">
              Proyectos <span className="text-gradient-gold">destacados</span>
            </h2>
          </div>
        </div>

        <div ref={ref} className="reveal mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.id}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold-500/15 bg-ink-50/70 shadow-sm transition-all hover:-translate-y-2 hover:border-gold-400/50 hover:shadow-[0_20px_45px_-18px_rgba(201,152,46,0.45)] dark:bg-ink-900/70"
            >
              {/* Project image */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-gold-500/15 bg-ink-100 dark:bg-ink-800">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${accents[p.accentIndex % accents.length]}`}
                  >
                    <span className="font-display text-4xl font-semibold text-gold-500/70">
                      {p.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-7">
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accents[p.accentIndex % accents.length]} blur-2xl`}
                />

                <span className="w-fit rounded-full border border-gold-500/30 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-300">
                  {p.tagline}
                </span>

                <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">
                  {p.name}
                </h3>

                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink-700/85 dark:text-ink-100/75">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-gold-500/10 px-2.5 py-1 font-body text-[11px] text-gold-700 dark:text-gold-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-gold-500/10 pt-5">
                  <a
                    href={p.github ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gold-500/40 px-4 py-2.5 font-body text-sm font-semibold text-ink-800 transition-all hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-500 dark:text-ink-100/85 dark:hover:text-gold-300"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={p.demo ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold-500 px-4 py-2.5 font-body text-sm font-semibold text-ink-950 shadow-[0_4px_16px_rgba(201,152,46,0.3)] transition-all hover:bg-gold-400 hover:shadow-[0_4px_20px_rgba(201,152,46,0.5)]"
                  >
                    Ver proyecto
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
