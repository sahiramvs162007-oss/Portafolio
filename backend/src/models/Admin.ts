import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    usuario: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", adminSchema);
