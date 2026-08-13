import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    fecha: { type: String, required: true },
    titulo: { type: String, required: true },
    descripcion: { type: String },
    orden: { type: Number, default: 0 },
    tipo: { type: String, enum: ["educacion", "curso", "logro", "trabajo"], default: "educacion" },
  },
  { timestamps: true }
);

export const Experience = mongoose.model("Experience", experienceSchema);
