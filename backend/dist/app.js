"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
// Inicializar variables de entorno
dotenv_1.default.config();
// Conectar a la base de datos
(0, db_1.default)();
const app = (0, express_1.default)();
// Middlewares globales
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const profile_routes_1 = __importDefault(require("./routes/profile.routes"));
const project_routes_1 = __importDefault(require("./routes/project.routes"));
const technology_routes_1 = __importDefault(require("./routes/technology.routes"));
const experience_routes_1 = __importDefault(require("./routes/experience.routes"));
// Rutas de la API
app.use("/api/auth", auth_routes_1.default);
app.use("/api/profile", profile_routes_1.default);
app.use("/api/projects", project_routes_1.default);
app.use("/api/technologies", technology_routes_1.default);
app.use("/api/experience", experience_routes_1.default);
// Ruta por defecto
app.get("/", (req, res) => {
    res.send("API del Portafolio funcionando correctamente");
});
exports.default = app;
