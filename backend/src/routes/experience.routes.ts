import { Router } from "express";
import { getExperiences, createExperience, updateExperience, deleteExperience } from "../controllers/experience.controller";
import { verifyToken } from "../middlewares/verifyToken";

const router = Router();

router.get("/", getExperiences);
router.post("/", verifyToken, createExperience);
router.put("/:id", verifyToken, updateExperience);
router.delete("/:id", verifyToken, deleteExperience);

export default router;
