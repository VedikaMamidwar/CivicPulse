import mongoose from "mongoose";

const verificationSchema = new mongoose.Schema(
    {
        problem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Problem",
            required: true,
        },

        verifiedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        vote: {
            type: String,
            enum: ["confirm", "dispute"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

verificationSchema.index(
    { problem: 1, verifiedBy: 1 },
    { unique: true }
);

const Verification = mongoose.model(
    "Verification",
    verificationSchema
);

export default Verification;