# Portafolio — Sahira Mirleth Vargas Sánchez

Portafolio personal como Desarrolladora de Software, construido con React + Vite + TypeScript + Tailwind CSS.

## 🎨 Stack

- ⚛️ React 19
- ⚡ Vite
- 🎨 Tailwind CSS v4
- 💻 TypeScript
- 🌐 Git / GitHub

## 🚀 Cómo correrlo

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre el link que aparece en la terminal (normalmente `http://localhost:5173`).

## 📦 Compilar para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para subir a Vercel, Netlify, GitHub Pages, etc.

## ✏️ Personalizar contenido

Todo el contenido editable está separado en `src/data/`:

- `src/data/projects.ts` — tus proyectos (Klassy, BiblioNet, ProjectSync). Agrega aquí el link de GitHub (`github`) y demo (`demo`) de cada uno cuando los tengas listos.
- `src/data/tech.ts` — tecnologías agrupadas por categoría (Frontend, Backend, Bases de datos, Herramientas).
- `src/data/timeline.ts` — tu línea de tiempo de experiencia/formación.

Los textos de "Sobre mí" y las tarjetas de características están directamente en:
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`

## 🖼️ Foto e íconos

- Tu foto está en `src/assets/sahira-photo.jpg`. Para cambiarla, reemplaza el archivo (mismo nombre) o actualiza el `import` en `Hero.tsx`.
- Tu CV está en `public/CV_Sahira_Vargas.pdf` (el botón "Descargar CV" del inicio lo descarga directamente). Reemplázalo cuando actualices tu hoja de vida.

## 🌗 Modo oscuro / claro

El toggle en la barra de navegación cambia entre tema oscuro y claro, y recuerda tu preferencia (localStorage). La lógica está en `src/context/ThemeContext.tsx`.

## 🔗 Redes sociales y contacto

Actualiza tus enlaces reales de GitHub y LinkedIn en:
- `src/components/Hero.tsx` (íconos "Encuéntrame en")
- `src/components/Contact.tsx` (correo y teléfono ya están puestos con tus datos reales)
