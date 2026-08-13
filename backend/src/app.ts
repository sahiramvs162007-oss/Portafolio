import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

// Inicializar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import authRoutes from "./routes/auth.routes";
import profileRoutes from "./routes/profile.routes";
import projectRoutes from "./routes/project.routes";
import technologyRoutes from "./routes/technology.routes";
import experienceRoutes from "./routes/experience.routes";

// Rutas de la API
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/technologies", technologyRoutes);
app.use("/api/experience", experienceRoutes);

// Ruta por defecto
app.get("/", (req, res) => {
  res.send("API del Portafolio funcionando correctamente");
});

export default app;
