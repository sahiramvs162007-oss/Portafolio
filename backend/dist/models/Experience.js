"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const experienceSchema = new mongoose_1.default.Schema({
    fecha: { type: String, required: true },
    titulo: { type: String, required: true },
    descripcion: { type: String },
    orden: { type: Number, default: 0 },
    tipo: { type: String, enum: ["educacion", "curso", "logro", "trabajo"], default: "educacion" },
}, { timestamps: true });
exports.Experience = mongoose_1.default.model("Experience", experienceSchema);
