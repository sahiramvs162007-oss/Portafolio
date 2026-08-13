import { Router } from "express";
import { getProjects, createProject, updateProject, deleteProject } from "../controllers/project.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { upload } from "../middlewares/upload";

const router = Router();

router.get("/", getProjects);
router.post("/", verifyToken, upload.single("image"), createProject);
router.put("/:id", verifyToken, upload.single("image"), updateProject);
router.delete("/:id", verifyToken, deleteProject);

export default router;
