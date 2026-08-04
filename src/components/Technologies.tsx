import { useReveal } from "../hooks/useReveal";
import { techCategories } from "../data/tech";
import { SectionEyebrow } from "./About";

export default function Technologies() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="tecnologias" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow label="Tecnologías" />
        <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 dark:text-ink-50 sm:text-4xl">
          Herramientas que <span className="text-gradient-gold">uso en el camino</span>
        </h2>
        <p className="mt-3 max-w-xl font-body text-ink-700/80 dark:text-ink-100/70">
          Cada proyecto es un recorrido: así se van encadenando las tecnologías que implemento en él.
        </p>

        <div ref={ref} className="reveal mt-14 flex flex-col gap-16">
          {techCategories.map((cat, ci) => (
            <div key={cat.id}>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold-500/80">
                {cat.label}
              </span>
              <div className="relative mt-8 flex flex-wrap items-center gap-x-2 gap-y-10 sm:gap-x-4">
                {cat.items.map((item, i) => {
                  const Icon = item.icon;
                  const lift = i % 2 === 0 ? "translate-y-0" : "translate-y-6";
                  return (
                    <div key={item.name} className="flex items-center">
                      <div className={`flex flex-col items-center ${lift}`}>
                        <div
                          className="hex-node flex h-20 w-20 items-center justify-center bg-ink-50 text-gold-600 shadow-[0_10px_25px_-10px_rgba(201,152,46,0.5)] transition-transform duration-300 hover:scale-110 hover:text-gold-400 dark:bg-ink-900 dark:text-gold-300 sm:h-24 sm:w-24"
                          style={{ animationDelay: `${(ci * cat.items.length + i) * 90}ms` }}
                        >
                          <Icon size={30} />
                        </div>
                        <span className="mt-2 font-body text-[11px] font-medium text-ink-700 dark:text-ink-100/70">
                          {item.name}
                        </span>
                      </div>
                      {i < cat.items.length - 1 && (
                        <svg width="34" height="10" viewBox="0 0 34 10" className="mx-1 hidden shrink-0 sm:block">
                          <path
                            d="M0 5 Q17 -3 34 5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeDasharray="3 4"
                            className="text-gold-400/60"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
