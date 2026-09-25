import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    MapPin,
    CalendarDays,
    AlertTriangle,
    ArrowRight,
    FileText,
} from "lucide-react";

import { getMyReports } from "../services/myReportsService";

function MyReports() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const data = await getMyReports();
                setReports(data.problems || []);
            } catch (err) {
                console.error(err);
                setError(
                    err.response?.data?.message ||
                    "Failed to load your reports"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-8">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                        YOUR ACTIVITY
                    </p>

                    <h1 className="text-3xl font-bold text-[#08264A] mt-2">
                        My Reports
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Track the civic problems you have reported.
                    </p>
                </div>

                {loading && (
                    <div className="bg-white border border-blue-100 rounded-2xl p-10 text-center shadow-[0_8px_25px_rgba(8,38,74,0.08)]">
                        <p className="text-slate-500">
                            Loading your reports...
                        </p>
                    </div>
                )}

                {!loading && error && (
                    <div className="bg-white border border-red-200 rounded-2xl p-6 text-red-600">
                        {error}
                    </div>
                )}

                {!loading && !error && reports.length === 0 && (
                    <div className="bg-white border border-blue-100 rounded-2xl p-12 text-center shadow-[0_8px_25px_rgba(8,38,74,0.08)]">
                        <FileText
                            size={42}
                            className="mx-auto text-blue-600"
                        />

                        <h2 className="text-xl font-bold text-[#08264A] mt-4">
                            No reports yet
                        </h2>

                        <p className="text-slate-500 mt-2">
                            Report a local problem to start making an impact.
                        </p>

                        <Link
                            to="/report"
                            className="inline-flex items-center gap-2 mt-6 bg-[#08264A] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#123E6B] transition"
                        >
                            Report a Problem
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                )}

                {!loading && !error && reports.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reports.map((report) => (
                            <div
                                key={report._id}
                                className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_8px_25px_rgba(8,38,74,0.08)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                                <div className="flex items-start justify-between gap-3">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <AlertTriangle size={21} />
                                    </div>

                                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700">
                                        {report.status}
                                    </span>
                                </div>

                                <h2 className="text-lg font-bold text-[#08264A] mt-5">
                                    {report.title}
                                </h2>

                                <p className="text-sm text-slate-500 mt-2 line-clamp-3">
                                    {report.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-slate-500 mt-5">
                                    <MapPin size={16} />
                                    <span className="truncate">
                                        {report.location?.address}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-400 mt-3">
                                    <CalendarDays size={16} />
                                    {new Date(
                                        report.createdAt
                                    ).toLocaleDateString()}
                                </div>

                                <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                                        {report.category}
                                    </span>

                                    <Link
                                        to={`/problem/${report._id}`}
                                        className="text-blue-600 hover:text-[#08264A] transition"
                                    >
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyReports;