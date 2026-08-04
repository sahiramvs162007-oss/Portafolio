export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  accentIndex: number;
}

export const projects: Project[] = [
  {
    id: "klassy",
    name: "Klassy",
    tagline: "Gestor académico institucional",
    description:
      "Sistema de gestión escolar con paneles diferenciados por rol (administrador, docente, estudiante), control de actividades, calificaciones y una interfaz pensada para uso diario en instituciones educativas.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "JavaScript"],
    accentIndex: 0,
  },
  {
    id: "bibliodigital",
    name: "BiblioNet",
    tagline: "Biblioteca digital con autenticación LDAP",
    description:
      "Plataforma para la gestión de libros físicos y digitales, con autenticación centralizada vía LDAP, clasificación Dewey, búsqueda por ISBN y control de préstamos y usuarios.",
    stack: ["Node.js", "Express", "MySQL", "LDAP", "EJS"],
    accentIndex: 1,
  },
  {
    id: "projectsync",
    name: "ProjectSync",
    tagline: "Sincronización offline-first de datos",
    description:
      "Sistema de registro de personas offline-first: sincroniza datos entre app móvil y servidor cuando vuelve la conexión, con almacenamiento local (SQLite / IndexedDB) y arquitectura por capas de repositorio y servicio.",
    stack: ["React Native", "Expo", "Node.js", "MySQL", "Docker"],
    accentIndex: 2,
  },
];
