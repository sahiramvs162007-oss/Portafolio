import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin";

// POST /api/auth/login
export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { usuario, password } = req.body;

    const admin = await Admin.findOne({ usuario });
    if (!admin) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Actualizar ultimo login
    admin.lastLogin = new Date();
    await admin.save();

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      admin: {
        usuario: admin.usuario,
        email: admin.email,
      },
    });
  } catch (error: any) {
    res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
  }
};

// GET /api/auth/seed - (Ruta temporal para crear el primer admin)
export const seedAdmin = async (req: Request, res: Response): Promise<any> => {
  try {
    const existingAdmin = await Admin.findOne({ usuario: "admin" });
    if (existingAdmin) {
      return res.status(400).json({ message: "El admin ya existe" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash("admin123", salt);

    const admin = new Admin({
      usuario: "admin",
      email: "admin@portafolio.com",
      passwordHash,
    });

    await admin.save();
    res.json({ message: "Admin creado correctamente. Usuario: admin, Contraseña: admin123" });
  } catch (error: any) {
    res.status(500).json({ message: "Error al crear admin", error: error.message });
  }
};
