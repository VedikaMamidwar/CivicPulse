import asyncHandler from "express-async-handler";
import Problem from "../models/Problem.js";

export const createProblem = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        category,
        address,
        latitude,
        longitude,
    } = req.body;

    if (!title || !description || !category || !address) {
        return res.status(400).json({
            success: false,
            message: "Title, description, category and address are required",
        });
    }

    const problem = await Problem.create({
        title,
        description,
        category,

        location: {
            address,
            latitude,
            longitude,
        },

        reportedBy: req.user._id,
    });

    res.status(201).json({
        success: true,
        message: "Problem reported successfully",
        problem,
    });
});


export const getMyProblems = asyncHandler(async (req, res) => {
    const problems = await Problem.find({
        reportedBy: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: problems.length,
        problems,
    });
});


export const getProblemById = asyncHandler(async (req, res) => {
    const problem = await Problem.findById(req.params.id)
        .populate("reportedBy", "userId name email");

    if (!problem) {
        return res.status(404).json({
            success: false,
            message: "Problem not found",
        });
    }

    res.status(200).json({
        success: true,
        problem,
    });
});

export const getAllProblems = asyncHandler(async (req, res) => {
    const problems = await Problem.find()
        .populate("reportedBy", "userId name")
        .sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: problems.length,
        problems,
    });
});