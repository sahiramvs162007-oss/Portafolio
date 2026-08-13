"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Technology = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const technologySchema = new mongoose_1.default.Schema({
    nombre: { type: String, required: true },
    icono: { type: String, required: true }, // nombre del ícono o URL del SVG (ej. de Cloudinary)
    categoria: { type: String, enum: ["frontend", "backend", "db", "tools", "other"], default: "other" },
    orden: { type: Number, default: 0 },
}, { timestamps: true });
exports.Technology = mongoose_1.default.model("Technology", technologySchema);
