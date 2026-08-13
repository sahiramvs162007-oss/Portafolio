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
        // Si se subieron archivos (fotoUrl o cvUrl), vienen en req.files gracias a multer (si configuramos multiple)
        // Pero asumiremos que multer lo procesó antes y los datos ya están estructurados, o podemos recibir JSON
        // y dejar que otra ruta maneje la subida de imágenes, o procesar req.file.path.
        const updateData = req.body;
        // Si req.file existe (asumiendo campo "fotoUrl" individual)
        if (req.file) {
            if (!updateData.hero)
                updateData.hero = {};
            updateData.hero.fotoUrl = req.file.path;
        }
        const profile = await Profile_1.Profile.findOneAndUpdate({}, // Filtro vacío porque es Singleton
        { $set: updateData }, { new: true, runValidators: true });
        res.json(profile);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar el perfil", error: error.message });
    }
};
exports.updateProfile = updateProfile;
