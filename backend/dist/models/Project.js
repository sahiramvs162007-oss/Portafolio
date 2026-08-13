"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String },
    imagenUrl: { type: String }, // Guardaremos la URL de Cloudinary aquí
    tecnologias: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Technology" }],
    githubUrl: { type: String },
    demoUrl: { type: String },
    orden: { type: Number, default: 0 },
    destacado: { type: Boolean, default: false },
}, { timestamps: true });
exports.Project = mongoose_1.default.model("Project", projectSchema);
