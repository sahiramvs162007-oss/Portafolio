import { Request, Response } from "express";
import { Profile } from "../models/Profile";

// GET /api/profile
export const getProfile = async (req: Request, res: Response): Promise<any> => {
  try {
    let profile = await Profile.findOne();
    
    // Si no existe, creamos uno por defecto
    if (!profile) {
      profile = new Profile({
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
  } catch (error: any) {
    res.status(500).json({ message: "Error al obtener el perfil", error: error.message });
  }
};

// PUT /api/profile
export const updateProfile = async (req: Request, res: Response): Promise<any> => {
  try {
    // Si se subieron archivos (fotoUrl o cvUrl), vienen en req.files gracias a multer (si configuramos multiple)
    // Pero asumiremos que multer lo procesó antes y los datos ya están estructurados, o podemos recibir JSON
    // y dejar que otra ruta maneje la subida de imágenes, o procesar req.file.path.
    
    const updateData = req.body;
    
    // Si req.file existe (asumiendo campo "fotoUrl" individual)
    if (req.file) {
      if (!updateData.hero) updateData.hero = {};
      updateData.hero.fotoUrl = req.file.path;
    }

    const profile = await Profile.findOneAndUpdate(
      {}, // Filtro vacío porque es Singleton
      { $set: updateData },
      { new: true, runValidators: true }
    );

    res.json(profile);
  } catch (error: any) {
    res.status(500).json({ message: "Error al actualizar el perfil", error: error.message });
  }
};
