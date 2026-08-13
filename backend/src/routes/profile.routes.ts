import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profile.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { upload } from "../middlewares/upload";

const router = Router();

router.get("/", getProfile);
// Para simplificar, aceptaremos la imagen en el campo "image".
router.put("/", verifyToken, upload.single("image"), updateProfile);

export default router;
