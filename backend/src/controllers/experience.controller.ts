import { Request, Response } from "express";
import { Experience } from "../models/Experience";

export const getExperiences = async (req: Request, res: Response): Promise<any> => {
  try {
    const experiences = await Experience.find().sort({ orden: 1 });
    res.json(experiences);
  } catch (error: any) {
    res.status(500).json({ message: "Error al obtener experiencias", error: error.message });
  }
};

export const createExperience = async (req: Request, res: Response): Promise<any> => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (error: any) {
    res.status(500).json({ message: "Error al crear experiencia", error: error.message });
  }
};

export const updateExperience = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const experience = await Experience.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!experience) {
      return res.status(404).json({ message: "Experiencia no encontrada" });
    }

    res.json(experience);
  } catch (error: any) {
    res.status(500).json({ message: "Error al actualizar experiencia", error: error.message });
  }
};

export const deleteExperience = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const experience = await Experience.findByIdAndDelete(id);

    if (!experience) {
      return res.status(404).json({ message: "Experiencia no encontrada" });
    }

    res.json({ message: "Experiencia eliminada correctamente" });
  } catch (error: any) {
    res.status(500).json({ message: "Error al eliminar experiencia", error: error.message });
  }
};
