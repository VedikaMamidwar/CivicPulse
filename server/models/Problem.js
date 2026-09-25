import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            enum: [
                "Roads",
                "Water",
                "Electricity",
                "Garbage",
                "Streetlights",
                "Drainage",
                "Public Safety",
                "Other",
            ],
            required: true,
        },

        location: {
            address: {
                type: String,
                required: true,
                trim: true,
            },

            latitude: {
                type: Number,
            },

            longitude: {
                type: Number,
            },
        },

        images: [
            {
                type: String,
            },
        ],

        reportedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        status: {
            type: String,
            enum: [
                "Reported",
                "Under Review",
                "Verified",
                "Assigned",
                "In Progress",
                "Resolved",
                "Closed",
            ],
            default: "Reported",
        },

        priority: {
            type: String,
            enum: ["Low", "Medium", "High", "Critical"],
            default: "Medium",
        },

        verificationCount: {
            type: Number,
            default: 0,
        },

        impactCount: {
            type: Number,
            default: 0,
        },

        isDuplicate: {
            type: Boolean,
            default: false,
        },

        duplicateOf: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Problem",
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;