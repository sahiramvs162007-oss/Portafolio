"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const profileSchema = new mongoose_1.default.Schema({
    hero: {
        saludo: { type: String, default: "¡Hola! Soy" },
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        rol: { type: String, required: true },
        descripcion: { type: String },
        fotoUrl: { type: String },
        cvUrl: { type: String },
        redes: [
            {
                tipo: { type: String },
                url: { type: String },
            },
        ],
    },
    sobreMi: {
        titulo: { type: String },
        descripcion: { type: String },
        tags: [{ type: String }],
        carrusel: [
            {
                texto: { type: String },
                detalle: { type: String },
            },
        ],
    },
    stats: [
        {
            icono: { type: String },
            valor: { type: mongoose_1.default.Schema.Types.Mixed }, // Puede ser número o string como "100%"
            etiqueta: { type: String },
        },
    ],
    contacto: {
        titulo: { type: String },
        email: { type: String },
        mensaje: { type: String },
    },
}, { timestamps: true });
exports.Profile = mongoose_1.default.model("Profile", profileSchema);
