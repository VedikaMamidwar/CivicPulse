import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    MapPin,
    CalendarDays,
    AlertTriangle,
    CheckCircle2,
    Clock3,
} from "lucide-react";

import { getProblemById } from "../services/problemDetailsService";

function ProblemDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [problem, setProblem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                const data = await getProblemById(id);
                setProblem(data.problem);
            } catch (err) {
                console.error(err);

                setError(
                    err.response?.data?.message ||
                    "Failed to load problem details"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProblem();
    }, [id]);

    const getStatusIcon = () => {
        if (problem?.status === "Resolved" || problem?.status === "Closed") {
            return <CheckCircle2 size={18} />;
        }

        if (
            problem?.status === "In Progress" ||
            problem?.status === "Assigned"
        ) {
            return <Clock3 size={18} />;
        }

        return <AlertTriangle size={18} />;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
                <p className="text-slate-500">
                    Loading problem details...
                </p>
            </div>
        );
    }

    if (error || !problem) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
                <div className="bg-white border border-red-200 rounded-2xl p-8 text-center max-w-md">
                    <AlertTriangle
                        size={40}
                        className="mx-auto text-red-500"
                    />

                    <h2 className="text-xl font-bold text-[#08264A] mt-4">
                        Problem not found
                    </h2>

                    <p className="text-slate-500 mt-2">
                        {error || "This report could not be found."}
                    </p>

                    <button
                        onClick={() => navigate("/my-reports")}
                        className="mt-6 bg-[#08264A] text-white px-5 py-3 rounded-xl font-semibold"
                    >
                        Back to My Reports
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-10">
            <div className="max-w-5xl mx-auto px-6">

                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-500 hover:text-[#08264A] font-medium transition mb-6"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                <div className="bg-white border border-blue-100 rounded-2xl shadow-[0_8px_30px_rgba(8,38,74,0.10)] overflow-hidden">

                    <div className="bg-[#08264A] text-white p-7">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">

                            <div>
                                <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">
                                    Problem Report
                                </p>

                                <h1 className="text-3xl font-bold mt-2">
                                    {problem.title}
                                </h1>
                            </div>

                            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                                {getStatusIcon()}
                                {problem.status}
                            </span>
                        </div>
                    </div>

                    <div className="p-7">

                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="border border-blue-100 rounded-xl p-5">
                                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                                    Category
                                </p>

                                <p className="text-lg font-bold text-[#08264A] mt-2">
                                    {problem.category}
                                </p>
                            </div>

                            <div className="border border-blue-100 rounded-xl p-5">
                                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                                    Priority
                                </p>

                                <p className="text-lg font-bold text-blue-600 mt-2">
                                    {problem.priority}
                                </p>
                            </div>

                        </div>

                        <div className="mt-6">
                            <h2 className="text-lg font-bold text-[#08264A]">
                                Description
                            </h2>

                            <p className="text-slate-600 leading-7 mt-3">
                                {problem.description}
                            </p>
                        </div>

                        <div className="mt-7 border-t border-slate-100 pt-6">

                            <h2 className="text-lg font-bold text-[#08264A]">
                                Location
                            </h2>

                            <div className="flex items-start gap-3 mt-3 text-slate-600">
                                <MapPin
                                    size={20}
                                    className="text-blue-600 mt-0.5"
                                />

                                <span>
                                    {problem.location?.address}
                                </span>
                            </div>

                            {(problem.location?.latitude !== undefined &&
                                problem.location?.longitude !== undefined) && (
                                    <p className="text-xs text-slate-400 mt-3">
                                        Coordinates:{" "}
                                        {problem.location.latitude},{" "}
                                        {problem.location.longitude}
                                    </p>
                                )}
                        </div>

                        <div className="mt-7 border-t border-slate-100 pt-6">

                            <h2 className="text-lg font-bold text-[#08264A]">
                                Report Information
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-5 mt-4">

                                <div className="flex items-center gap-3">
                                    <CalendarDays
                                        size={19}
                                        className="text-blue-600"
                                    />

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Reported On
                                        </p>

                                        <p className="text-sm font-semibold text-slate-700">
                                            {new Date(
                                                problem.createdAt
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <AlertTriangle
                                        size={19}
                                        className="text-blue-600"
                                    />

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Community Verification
                                        </p>

                                        <p className="text-sm font-semibold text-slate-700">
                                            {problem.verificationCount || 0}{" "}
                                            verifications
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {problem.reportedBy && (
                            <div className="mt-7 border-t border-slate-100 pt-6">
                                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                                    Reported By
                                </p>

                                <p className="text-sm font-semibold text-[#08264A] mt-2">
                                    {problem.reportedBy.name}
                                </p>

                                <p className="text-xs text-slate-400 mt-1">
                                    {problem.reportedBy.userId}
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProblemDetails;