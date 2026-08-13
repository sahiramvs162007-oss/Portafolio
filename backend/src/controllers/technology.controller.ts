import { Request, Response } from "express";
import { Technology } from "../models/Technology";

export const getTechnologies = async (req: Request, res: Response): Promise<any> => {
  try {
    const technologies = await Technology.find().sort({ orden: 1 });
    res.json(technologies);
  } catch (error: any) {
    res.status(500).json({ message: "Error al obtener tecnologías", error: error.message });
  }
};

export const createTechnology = async (req: Request, res: Response): Promise<any> => {
  try {
    const technology = new Technology(req.body);
    await technology.save();
    res.status(201).json(technology);
  } catch (error: any) {
    res.status(500).json({ message: "Error al crear tecnología", error: error.message });
  }
};

export const updateTechnology = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const technology = await Technology.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!technology) {
      return res.status(404).json({ message: "Tecnología no encontrada" });
    }

    res.json(technology);
  } catch (error: any) {
    res.status(500).json({ message: "Error al actualizar tecnología", error: error.message });
  }
};

export const deleteTechnology = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const technology = await Technology.findByIdAndDelete(id);

    if (!technology) {
      return res.status(404).json({ message: "Tecnología no encontrada" });
    }

    res.json({ message: "Tecnología eliminada correctamente" });
  } catch (error: any) {
    res.status(500).json({ message: "Error al eliminar tecnología", error: error.message });
  }
};
