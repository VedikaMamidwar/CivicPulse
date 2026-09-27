import asyncHandler from "express-async-handler";
import Verification from "../models/Verification.js";
import Problem from "../models/Problem.js";

export const verifyProblem = asyncHandler(async (req, res) => {
    const { vote } = req.body;
    const { problemId } = req.params;

    if (!["confirm", "dispute"].includes(vote)) {
        return res.status(400).json({
            success: false,
            message: "Vote must be confirm or dispute",
        });
    }

    const problem = await Problem.findById(problemId);

    if (!problem) {
        return res.status(404).json({
            success: false,
            message: "Problem not found",
        });
    }

    const existingVerification = await Verification.findOne({
        problem: problemId,
        verifiedBy: req.user._id,
    });

    if (existingVerification) {
        return res.status(400).json({
            success: false,
            message: "You have already verified this problem",
        });
    }

    await Verification.create({
        problem: problemId,
        verifiedBy: req.user._id,
        vote,
    });

    if (vote === "confirm") {
        problem.verificationCount += 1;
    }

    await problem.save();

    res.status(201).json({
        success: true,
        message:
            vote === "confirm"
                ? "Problem verified successfully"
                : "Problem disputed successfully",
        verificationCount: problem.verificationCount,
    });
});

export const getVerificationSummary = asyncHandler(async (req, res) => {
    const { problemId } = req.params;

    const problem = await Problem.findById(problemId);

    if (!problem) {
        return res.status(404).json({
            success: false,
            message: "Problem not found",
        });
    }

    const confirmations = await Verification.countDocuments({
        problem: problemId,
        vote: "confirm",
    });

    const disputes = await Verification.countDocuments({
        problem: problemId,
        vote: "dispute",
    });

    res.status(200).json({
        success: true,
        confirmations,
        disputes,
        total: confirmations + disputes,
    });
});