import { useReveal } from "../hooks/useReveal";
import { timeline } from "../data/timeline";
import { SectionEyebrow } from "./About";

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experiencia" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionEyebrow label="Experiencia" />
        <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 dark:text-ink-50 sm:text-4xl">
          Mi <span className="text-gradient-gold">recorrido</span>
        </h2>

        <div ref={ref} className="reveal relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-400/40 to-transparent md:block" />
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-400/40 to-transparent md:hidden" />

          <div className="flex flex-col gap-10">
            {timeline.map((t, i) => {
              const leftSide = i % 2 === 0;
              return (
                <div
                  key={t.year}
                  className={`relative flex flex-col gap-2 pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                    leftSide ? "" : ""
                  }`}
                >
                  <span className="absolute left-[7px] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-400 shadow-[0_0_0_4px] shadow-gold-400/15 md:left-1/2" />

                  <div className={`md:text-right ${leftSide ? "md:col-start-1" : "md:col-start-2 md:order-2"}`}>
                    {leftSide && (
                      <TimelineCard year={t.year} title={t.title} description={t.description} align="right" />
                    )}
                  </div>
                  <div className={`${leftSide ? "md:col-start-2" : "md:col-start-1 md:order-1"}`}>
                    {!leftSide && (
                      <TimelineCard year={t.year} title={t.title} description={t.description} align="left" />
                    )}
                  </div>

                  {/* mobile: always show */}
                  <div className="md:hidden">
                    <TimelineCard year={t.year} title={t.title} description={t.description} align="left" mobileOnly />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  year,
  title,
  description,
  align,
  mobileOnly,
}: {
  year: string;
  title: string;
  description: string;
  align: "left" | "right";
  mobileOnly?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-gold-500/15 bg-ink-50/70 p-5 dark:bg-ink-900/70 ${
        mobileOnly ? "block md:hidden" : "hidden md:block"
      } ${align === "right" ? "md:ml-auto md:mr-8 md:max-w-sm" : "md:mr-auto md:ml-8 md:max-w-sm"}`}
    >
      <span className="font-body text-xs font-semibold uppercase tracking-wider text-gold-500">{year}</span>
      <h3 className="mt-1 font-display text-lg font-semibold text-ink-900 dark:text-ink-50">{title}</h3>
      <p className="mt-1 font-body text-sm leading-relaxed text-ink-700/80 dark:text-ink-100/70">{description}</p>
    </div>
  );
}
