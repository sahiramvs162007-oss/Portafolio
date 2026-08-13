import mongoose from "mongoose";

const technologySchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    icono: { type: String, required: true }, // nombre del ícono o URL del SVG (ej. de Cloudinary)
    categoria: { type: String, enum: ["frontend", "backend", "db", "tools", "other"], default: "other" },
    orden: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Technology = mongoose.model("Technology", technologySchema);
