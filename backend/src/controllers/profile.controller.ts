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
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
    }
    
    // Parsear campos planos del req.body estructurados con corchetes (ej. hero[saludo])
    for (const key of Object.keys(req.body)) {
      const match = key.match(/^(\w+)\[(\w+)\]$/);
      if (match) {
        const [_, section, field] = match;
        if (section === "hero") {
          if (!profile.hero) profile.hero = {} as any;
          (profile.hero as any)[field] = req.body[key];
        } else if (section === "sobreMi") {
          if (!profile.sobreMi) profile.sobreMi = {} as any;
          (profile.sobreMi as any)[field] = req.body[key];
        }
      } else {
        (profile as any)[key] = req.body[key];
      }
    }
    
    // Si req.file existe (imagen de perfil)
    if (req.file) {
      if (!profile.hero) {
        profile.hero = {} as any;
      }
      (profile.hero as any).fotoUrl = req.file.path;
    }

    await profile.save();
    res.json(profile);
  } catch (error: any) {
    res.status(500).json({ message: "Error al actualizar el perfil", error: error.message });
  }
};
