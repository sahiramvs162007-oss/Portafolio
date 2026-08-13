import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface TechCategory {
  id: string;
  label: string;
  items: { name: string; icon: IconType }[];
}

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    id: "data",
    label: "Bases de datos",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    id: "tools",
    label: "Herramientas",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite },
      { name: "Docker", icon: SiDocker },
    ],
  },
];
