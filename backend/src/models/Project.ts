import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String },
    imagenUrl: { type: String }, // Guardaremos la URL de Cloudinary aquí
    tecnologias: [{ type: mongoose.Schema.Types.ObjectId, ref: "Technology" }],
    githubUrl: { type: String },
    demoUrl: { type: String },
    orden: { type: Number, default: 0 },
    destacado: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
