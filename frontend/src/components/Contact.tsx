import { useReveal } from "../hooks/useReveal";
import { SectionEyebrow } from "./About";

const skills = [
  "Resolución de problemas",
  "Pensamiento lógico",
  "Trabajo en equipo",
  "Aprendizaje continuo",
  "Comunicación efectiva",
  "Adaptabilidad",
];

const process = ["Idea", "Análisis", "Diseño", "Desarrollo", "Pruebas", "Despliegue"];

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionEyebrow label="Contacto" />
        <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 dark:text-ink-50 sm:text-4xl">
          Hablemos de tu <span className="text-gradient-gold">próximo proyecto</span>
        </h2>

        <div ref={ref} className="reveal mt-14 grid grid-cols-1 gap-6 md:grid-cols-4">
          <Card title="Formación">
            <p className="font-body text-sm font-semibold text-ink-900 dark:text-ink-50">
              Tecnología en Análisis y Desarrollo de Software
            </p>
            <p className="mt-1 font-body text-xs text-ink-700/70 dark:text-ink-100/60">SENA · 2022 – 2026</p>
            <ul className="mt-3 space-y-1 font-body text-xs text-ink-700/80 dark:text-ink-100/70">
              <li>· Inglés Nivel 1–5 (SENA)</li>
              <li>· Desarrollo Web Full Stack</li>
              <li>· Bases de Datos SQL y NoSQL</li>
            </ul>
          </Card>

          <Card title="Habilidades">
            <ul className="grid grid-cols-1 gap-1.5 font-body text-xs text-ink-700/85 dark:text-ink-100/75">
              {skills.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold-400" />
                  {s}
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Proceso de trabajo">
            <div className="flex flex-wrap gap-2">
              {process.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-gold-500/25 px-2.5 py-1 font-body text-[11px] text-gold-600 dark:text-gold-300"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-3 font-body text-[11px] italic text-ink-600/70 dark:text-ink-100/50">
              Mejora continua en cada iteración.
            </p>
          </Card>

          <Card title="Contacto directo">
            <ul className="space-y-2 font-body text-sm text-ink-800 dark:text-ink-100/85">
              <li>
                <a href="mailto:sahiramvs162007@gmail.com" className="hover:text-gold-500">
                  ✉ sahiramvs162007@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+573112562636" className="hover:text-gold-500">
                  ✆ +57 311 256 2636
                </a>
              </li>
              <li className="text-ink-700/70 dark:text-ink-100/60">📍 Florencia, Caquetá — Colombia</li>
            </ul>
            <a
              href="mailto:sahiramvs162007@gmail.com"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-2.5 font-body text-sm font-semibold text-ink-950 shadow-md transition-transform hover:-translate-y-0.5"
            >
              ¡Hablemos! ↻
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gold-500/15 bg-ink-50/70 p-6 dark:bg-ink-900/70">
      <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">{title}</span>
      <div className="mt-4">{children}</div>
    </div>
  );
}
