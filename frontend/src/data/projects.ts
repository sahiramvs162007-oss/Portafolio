export interface Project {
  id: string;
  name: string;
  tagline: string;
  taglineEn?: string;
  description: string;
  descriptionEn?: string;
  stack: string[];
  image?: string;
  github?: string;
  demo?: string;
  accentIndex: number;
}

export const projects: Project[] = [
  {
    id: "klassy",
    name: "Klassy",
    tagline: "Gestor académico institucional",
    taglineEn: "Institutional academic manager",
    description:
      "Sistema de gestión escolar con paneles diferenciados por rol (administrador, docente, estudiante), control de actividades, calificaciones y una interfaz pensada para uso diario en instituciones educativas.",
    descriptionEn: "School management system with role-based dashboards (admin, teacher, student), activity tracking, grades, and an interface designed for daily use in educational institutions.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "JavaScript"],
    image: "/klassy.png",
    github: "https://github.com/sahiramvs162007-oss/Klassy-3.0.git",
    demo: "https://klassy.teamfusion.site",
    accentIndex: 0,
  },
  {
    id: "bibliodigital",
    name: "BiblioNet",
    tagline: "Biblioteca digital con autenticación LDAP",
    taglineEn: "Digital library with LDAP authentication",
    description:
      "Plataforma para la gestión de libros físicos y digitales, con autenticación centralizada vía LDAP, clasificación Dewey, búsqueda por ISBN y control de préstamos y usuarios.",
    descriptionEn: "Platform for managing physical and digital books, with centralized LDAP authentication, Dewey classification, ISBN search, and user/loan control.",
    stack: ["Node.js", "Express", "MySQL", "LDAP", "EJS"],
    image: "/BiblioNet.png",
    github: "https://github.com/sahiravargas062007-blip/Biblioteca_Digital.git",
    demo: "https://biblionet.teamfusion.site",
    accentIndex: 1,
  },
  {
    id: "projectsync",
    name: "SyncApp",
    tagline: "Sincronización offline-first de datos",
    taglineEn: "Offline-first data synchronization",
    description:
      "Sistema de registro de personas offline-first: sincroniza datos entre app móvil y servidor cuando vuelve la conexión, con almacenamiento local (SQLite / IndexedDB) y arquitectura por capas de repositorio y servicio.",
    descriptionEn: "Offline-first people registration system: synchronizes data between mobile app and server when connection returns, with local storage (SQLite / IndexedDB) and a repository/service layered architecture.",
    stack: ["React Native", "Expo", "Node.js", "MySQL", "Docker"],
    github: "https://github.com/sahiramvs162007-oss/proyecto-sync.git",
    demo: "https://projectsync.teamfusion.site/",
    accentIndex: 2,
  },
];
