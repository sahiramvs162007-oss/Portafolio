"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("../controllers/profile.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const upload_1 = require("../middlewares/upload");
const router = (0, express_1.Router)();
router.get("/", profile_controller_1.getProfile);
// Para simplificar, aceptaremos la imagen en el campo "image".
router.put("/", verifyToken_1.verifyToken, upload_1.upload.single("image"), profile_controller_1.updateProfile);
exports.default = router;
