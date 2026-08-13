"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjects = void 0;
const Project_1 = require("../models/Project");
// GET /api/projects
const getProjects = async (req, res) => {
    try {
        const projects = await Project_1.Project.find().sort({ orden: 1 }).populate("tecnologias");
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener proyectos", error: error.message });
    }
};
exports.getProjects = getProjects;
// POST /api/projects
const createProject = async (req, res) => {
    try {
        const projectData = req.body;
        // Si viene imagen
        if (req.file) {
            projectData.imagenUrl = req.file.path;
        }
        // Parsear array de strings de tecnologias si viene en form-data como JSON stringificado
        if (projectData.tecnologias && typeof projectData.tecnologias === 'string') {
            try {
                projectData.tecnologias = JSON.parse(projectData.tecnologias);
            }
            catch (e) {
                // Ignorar si no es JSON válido
            }
        }
        const project = new Project_1.Project(projectData);
        await project.save();
        res.status(201).json(project);
    }
    catch (error) {
        res.status(500).json({ message: "Error al crear proyecto", error: error.message });
    }
};
exports.createProject = createProject;
// PUT /api/projects/:id
const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const projectData = req.body;
        if (req.file) {
            projectData.imagenUrl = req.file.path;
        }
        if (projectData.tecnologias && typeof projectData.tecnologias === 'string') {
            try {
                projectData.tecnologias = JSON.parse(projectData.tecnologias);
            }
            catch (e) { }
        }
        const project = await Project_1.Project.findByIdAndUpdate(id, projectData, { new: true });
        if (!project) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        res.json(project);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar proyecto", error: error.message });
    }
};
exports.updateProject = updateProject;
// DELETE /api/projects/:id
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project_1.Project.findByIdAndDelete(id);
        if (!project) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        res.json({ message: "Proyecto eliminado correctamente" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar proyecto", error: error.message });
    }
};
exports.deleteProject = deleteProject;
