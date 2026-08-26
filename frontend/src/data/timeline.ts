export interface TimelineItem {
  year: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Bachiller con énfasis en Informática",
    titleEn: "High School Diploma with Computer Science focus",
    description:
      "Institución Educativa Sagrados Corazones | Graduada con reconocimiento a la excelencia académica por desempeño sobresaliente y sólida base tecnológica.",
    descriptionEn: "Sagrados Corazones Educational Institution | Graduated with academic excellence recognition for outstanding performance and solid technological foundation.",
  },
  {
    year: "2024",
    title: "Cursos de Inglés - Formación Continua en Idiomas",
    titleEn: "English Courses - Continuous Language Training",
    description:
      "Fortalecimiento del perfil internacional mediante el desarrollo de competencias comunicativas y dominio profesional del inglés.",
    descriptionEn: "Strengthening of international profile through the development of communicative competencies and professional mastery of English.",
  },
  {
    year: "2025 - 2026",
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    titleEn: "Software Analysis and Development Technologist",
    description:
      "Formación práctica en diseño, desarrollo y despliegue de soluciones de software. Experiencia aplicando buenas prácticas de programación, arquitecturas modernas y nuevas tecnologías en proyectos reales (culminación: nov. 2026).",
    descriptionEn: "Practical training in the design, development, and deployment of software solutions. Experience applying good programming practices, modern architectures, and new technologies in real projects (completion: Nov. 2026).",
  },
  {
    year: "2026+",
    title: "Nuevos Retos",
    titleEn: "New Challenges",
    description:
      "En búsqueda activa de oportunidades para aplicar mis habilidades en desarrollo de software, aportar en proyectos de alto impacto y continuar mi crecimiento profesional.",
    descriptionEn: "Actively seeking opportunities to apply my software development skills, contribute to high-impact projects, and continue my professional growth.",
  },
];
