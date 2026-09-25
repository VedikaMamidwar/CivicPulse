import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

const generateUserId = async () => {
    const lastUser = await User.findOne().sort({ createdAt: -1 });

    let nextNumber = 1;

    if (lastUser && lastUser.userId) {
        const lastNumber = parseInt(
            lastUser.userId.replace("CP-", ""),
            10
        );

        if (!isNaN(lastNumber)) {
            nextNumber = lastNumber + 1;
        }
    }

    return `CP-${String(nextNumber).padStart(6, "0")}`;
};

export const registerUser = async (req, res) => {
    try {
        const { name, email, phone, password, area } = req.body;

        // Required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are required",
            });
        }

        // Check existing email
        const existingUser = await User.findOne({
            email: email.toLowerCase(),
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate CivicPulse User ID
        const userId = await generateUserId();

        // Create user
        const user = await User.create({
            userId,
            name,
            email: email.toLowerCase(),
            phone,
            password: hashedPassword,
            area,
            role: "citizen",
        });

        res.status(201).json({
            success: true,
            message: "Registration successful",
            user: {
                userId: user.userId,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Registration error:", error);

        res.status(500).json({
            success: false,
            message: "Server error during registration",
        });
    }
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        // Find user
        const user = await User.findOne({
            email: email.toLowerCase().trim(),
        });

        // Don't reveal whether email exists
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Generate JWT
        const token = generateToken(user.userId);

        // Never send password to frontend
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                userId: user.userId,
                name: user.name,
                email: user.email,
                phone: user.phone,
                area: user.area,
                role: user.role,
                profileImage: user.profileImage,
            },
        });
    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error during login",
        });
    }
};