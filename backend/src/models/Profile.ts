import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
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
        valor: { type: mongoose.Schema.Types.Mixed }, // Puede ser número o string como "100%"
        etiqueta: { type: String },
      },
    ],
    contacto: {
      titulo: { type: String },
      email: { type: String },
      mensaje: { type: String },
    },
  },
  { timestamps: true }
);

export const Profile = mongoose.model("Profile", profileSchema);
