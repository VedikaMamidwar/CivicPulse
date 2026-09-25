import express from "express";
import {
    registerUser,
    loginUser,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected user route
router.get("/me", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Authentication successful",
        user: req.user,
    });
});

// Protected admin route
router.get(
    "/admin-test",
    authMiddleware,
    adminMiddleware,
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "Admin access granted",
            user: req.user,
        });
    }
);

export default router;