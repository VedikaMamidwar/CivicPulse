import express from "express";

import { verifyProblem } from "../controllers/verificationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:problemId", authMiddleware, verifyProblem);

export default router;