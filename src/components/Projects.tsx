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
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold-500/15 bg-ink-50/70 p-7 shadow-sm transition-all hover:-translate-y-2 hover:border-gold-400/50 hover:shadow-[0_20px_45px_-18px_rgba(201,152,46,0.45)] dark:bg-ink-900/70"
            >
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

              <div className="mt-6 flex items-center gap-4 border-t border-gold-500/10 pt-4">
                <a
                  href={p.github ?? "#"}
                  className="font-body text-sm font-medium text-ink-800 transition-colors hover:text-gold-500 dark:text-ink-100/80"
                >
                  GitHub ↗
                </a>
                <a
                  href={p.demo ?? "#"}
                  className="font-body text-sm font-medium text-gold-600 transition-colors hover:text-gold-400 dark:text-gold-300"
                >
                  Ver proyecto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
