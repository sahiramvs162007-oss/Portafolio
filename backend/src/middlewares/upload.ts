import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "sahira-portfolio",
      allowed_formats: ["jpg", "png", "jpeg", "webp", "pdf"],
    };
  },
});

export const upload = multer({ storage: storage });
