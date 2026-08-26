"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = exports.getProfile = void 0;
const Profile_1 = require("../models/Profile");
// GET /api/profile
const getProfile = async (req, res) => {
    try {
        let profile = await Profile_1.Profile.findOne();
        // Si no existe, creamos uno por defecto
        if (!profile) {
            profile = new Profile_1.Profile({
                hero: {
                    saludo: "¡Hola! Soy",
                    nombre: "Sahira",
                    apellido: "Vargas",
                    rol: "Desarrolladora",
                },
            });
            await profile.save();
        }
        res.json(profile);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener el perfil", error: error.message });
    }
};
exports.getProfile = getProfile;
// PUT /api/profile
const updateProfile = async (req, res) => {
    try {
        let profile = await Profile_1.Profile.findOne();
        if (!profile) {
            profile = new Profile_1.Profile();
        }
        // Parsear campos planos del req.body estructurados con corchetes (ej. hero[saludo])
        for (const key of Object.keys(req.body)) {
            const match = key.match(/^(\w+)\[(\w+)\]$/);
            if (match) {
                const [_, section, field] = match;
                if (section === "hero") {
                    if (!profile.hero)
                        profile.hero = {};
                    profile.hero[field] = req.body[key];
                }
                else if (section === "sobreMi") {
                    if (!profile.sobreMi)
                        profile.sobreMi = {};
                    profile.sobreMi[field] = req.body[key];
                }
            }
            else {
                profile[key] = req.body[key];
            }
        }
        // Si req.file existe (imagen de perfil)
        if (req.file) {
            if (!profile.hero) {
                profile.hero = {};
            }
            profile.hero.fotoUrl = req.file.path;
        }
        await profile.save();
        res.json(profile);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar el perfil", error: error.message });
    }
};
exports.updateProfile = updateProfile;
