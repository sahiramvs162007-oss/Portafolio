"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExperience = exports.updateExperience = exports.createExperience = exports.getExperiences = void 0;
const Experience_1 = require("../models/Experience");
const getExperiences = async (req, res) => {
    try {
        const experiences = await Experience_1.Experience.find().sort({ orden: 1 });
        res.json(experiences);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener experiencias", error: error.message });
    }
};
exports.getExperiences = getExperiences;
const createExperience = async (req, res) => {
    try {
        const experience = new Experience_1.Experience(req.body);
        await experience.save();
        res.status(201).json(experience);
    }
    catch (error) {
        res.status(500).json({ message: "Error al crear experiencia", error: error.message });
    }
};
exports.createExperience = createExperience;
const updateExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const experience = await Experience_1.Experience.findByIdAndUpdate(id, req.body, { new: true });
        if (!experience) {
            return res.status(404).json({ message: "Experiencia no encontrada" });
        }
        res.json(experience);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar experiencia", error: error.message });
    }
};
exports.updateExperience = updateExperience;
const deleteExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const experience = await Experience_1.Experience.findByIdAndDelete(id);
        if (!experience) {
            return res.status(404).json({ message: "Experiencia no encontrada" });
        }
        res.json({ message: "Experiencia eliminada correctamente" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar experiencia", error: error.message });
    }
};
exports.deleteExperience = deleteExperience;
