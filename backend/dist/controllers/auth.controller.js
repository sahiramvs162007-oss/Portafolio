"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Admin_1 = require("../models/Admin");
// POST /api/auth/login
const login = async (req, res) => {
    try {
        const { usuario, password } = req.body;
        const admin = await Admin_1.Admin.findOne({ usuario });
        if (!admin) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }
        const isMatch = await bcrypt_1.default.compare(password, admin.passwordHash);
        if (!isMatch) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }
        // Actualizar ultimo login
        admin.lastLogin = new Date();
        await admin.save();
        const token = jsonwebtoken_1.default.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({
            token,
            admin: {
                usuario: admin.usuario,
                email: admin.email,
            },
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
    }
};
exports.login = login;
// GET /api/auth/seed - (Ruta temporal para crear el primer admin)
const seedAdmin = async (req, res) => {
    try {
        const existingAdmin = await Admin_1.Admin.findOne({ usuario: "admin" });
        if (existingAdmin) {
            return res.status(400).json({ message: "El admin ya existe" });
        }
        const salt = await bcrypt_1.default.genSalt(10);
        const passwordHash = await bcrypt_1.default.hash("admin123", salt);
        const admin = new Admin_1.Admin({
            usuario: "admin",
            email: "admin@portafolio.com",
            passwordHash,
        });
        await admin.save();
        res.json({ message: "Admin creado correctamente. Usuario: admin, Contraseña: admin123" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al crear admin", error: error.message });
    }
};
exports.seedAdmin = seedAdmin;
