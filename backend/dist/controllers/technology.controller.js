"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTechnology = exports.updateTechnology = exports.createTechnology = exports.getTechnologies = void 0;
const Technology_1 = require("../models/Technology");
const getTechnologies = async (req, res) => {
    try {
        const technologies = await Technology_1.Technology.find().sort({ orden: 1 });
        res.json(technologies);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener tecnologías", error: error.message });
    }
};
exports.getTechnologies = getTechnologies;
const createTechnology = async (req, res) => {
    try {
        const technology = new Technology_1.Technology(req.body);
        await technology.save();
        res.status(201).json(technology);
    }
    catch (error) {
        res.status(500).json({ message: "Error al crear tecnología", error: error.message });
    }
};
exports.createTechnology = createTechnology;
const updateTechnology = async (req, res) => {
    try {
        const { id } = req.params;
        const technology = await Technology_1.Technology.findByIdAndUpdate(id, req.body, { new: true });
        if (!technology) {
            return res.status(404).json({ message: "Tecnología no encontrada" });
        }
        res.json(technology);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar tecnología", error: error.message });
    }
};
exports.updateTechnology = updateTechnology;
const deleteTechnology = async (req, res) => {
    try {
        const { id } = req.params;
        const technology = await Technology_1.Technology.findByIdAndDelete(id);
        if (!technology) {
            return res.status(404).json({ message: "Tecnología no encontrada" });
        }
        res.json({ message: "Tecnología eliminada correctamente" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar tecnología", error: error.message });
    }
};
exports.deleteTechnology = deleteTechnology;
