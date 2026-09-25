import express from "express";

import {
    createProblem,
    getMyProblems,
    getProblemById,
    getAllProblems,
} from "../controllers/problemController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createProblem);

router.get("/my-reports", authMiddleware, getMyProblems);

router.get("/", authMiddleware, getAllProblems);

router.get("/:id", authMiddleware, getProblemById);

export default router;