import { Request, Response } from "express";
import { Project } from "../models/Project";

// GET /api/projects
export const getProjects = async (req: Request, res: Response): Promise<any> => {
  try {
    const projects = await Project.find().sort({ orden: 1 }).populate("tecnologias");
    res.json(projects);
  } catch (error: any) {
    res.status(500).json({ message: "Error al obtener proyectos", error: error.message });
  }
};

// POST /api/projects
export const createProject = async (req: Request, res: Response): Promise<any> => {
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
      } catch (e) {
        // Ignorar si no es JSON válido
      }
    }

    const project = new Project(projectData);
    await project.save();

    res.status(201).json(project);
  } catch (error: any) {
    res.status(500).json({ message: "Error al crear proyecto", error: error.message });
  }
};

// PUT /api/projects/:id
export const updateProject = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const projectData = req.body;

    if (req.file) {
      projectData.imagenUrl = req.file.path;
    }

    if (projectData.tecnologias && typeof projectData.tecnologias === 'string') {
      try {
        projectData.tecnologias = JSON.parse(projectData.tecnologias);
      } catch (e) {}
    }

    const project = await Project.findByIdAndUpdate(id, projectData, { new: true });
    
    if (!project) {
      return res.status(404).json({ message: "Proyecto no encontrado" });
    }

    res.json(project);
  } catch (error: any) {
    res.status(500).json({ message: "Error al actualizar proyecto", error: error.message });
  }
};

// DELETE /api/projects/:id
export const deleteProject = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({ message: "Proyecto no encontrado" });
    }

    res.json({ message: "Proyecto eliminado correctamente" });
  } catch (error: any) {
    res.status(500).json({ message: "Error al eliminar proyecto", error: error.message });
  }
};
