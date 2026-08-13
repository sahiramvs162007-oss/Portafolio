import { Router } from "express";
import { getTechnologies, createTechnology, updateTechnology, deleteTechnology } from "../controllers/technology.controller";
import { verifyToken } from "../middlewares/verifyToken";

const router = Router();

router.get("/", getTechnologies);
router.post("/", verifyToken, createTechnology);
router.put("/:id", verifyToken, updateTechnology);
router.delete("/:id", verifyToken, deleteTechnology);

export default router;
