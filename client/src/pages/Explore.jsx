import { useEffect, useState } from "react";
import {
    Search,
    MapPin,
    AlertTriangle,
    Clock3,
    CheckCircle2,
} from "lucide-react";

import { getAllProblems } from "../services/exploreService";

function Explore() {
    const [problems, setProblems] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const data = await getAllProblems();
                setProblems(data.problems || []);
            } catch (err) {
                console.error(err);

                setError(
                    err.response?.data?.message ||
                    "Failed to load community problems"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProblems();
    }, []);

    const filteredProblems = problems.filter((problem) => {
        const searchText = search.toLowerCase();

        return (
            problem.title?.toLowerCase().includes(searchText) ||
            problem.description?.toLowerCase().includes(searchText) ||
            problem.category?.toLowerCase().includes(searchText) ||
            problem.location?.address?.toLowerCase().includes(searchText)
        );
    });

    const getStatusIcon = (status) => {
        if (status === "Resolved" || status === "Closed") {
            return <CheckCircle2 size={17} />;
        }

        if (status === "In Progress" || status === "Assigned") {
            return <Clock3 size={17} />;
        }

        return <AlertTriangle size={17} />;
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-8">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                        COMMUNITY PROBLEMS
                    </p>

                    <h1 className="text-3xl font-bold text-[#08264A] mt-2">
                        Explore Local Issues
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Discover problems reported by citizens in your
                        community.
                    </p>
                </div>

                <div className="bg-white border border-blue-100 rounded-2xl p-4 shadow-[0_8px_25px_rgba(8,38,74,0.08)] mb-8">
                    <div className="relative">
                        <Search
                            size={19}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search problems, categories or locations..."
                            className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-700"
                        />
                    </div>
                </div>

                {loading && (
                    <div className="bg-white border border-blue-100 rounded-2xl p-10 text-center">
                        <p className="text-slate-500">
                            Loading community problems...
                        </p>
                    </div>
                )}

                {!loading && error && (
                    <div className="bg-white border border-red-200 rounded-2xl p-6 text-red-600">
                        {error}
                    </div>
                )}

                {!loading &&
                    !error &&
                    filteredProblems.length === 0 && (
                        <div className="bg-white border border-blue-100 rounded-2xl p-12 text-center shadow-[0_8px_25px_rgba(8,38,74,0.08)]">
                            <AlertTriangle
                                size={40}
                                className="mx-auto text-blue-600"
                            />

                            <h2 className="text-xl font-bold text-[#08264A] mt-4">
                                No problems found
                            </h2>

                            <p className="text-slate-500 mt-2">
                                Try a different search term.
                            </p>
                        </div>
                    )}

                {!loading &&
                    !error &&
                    filteredProblems.length > 0 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProblems.map((problem) => (
                                <div
                                    key={problem._id}
                                    className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_8px_25px_rgba(8,38,74,0.08)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                                    <div className="flex items-start justify-between gap-3">
                                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                                            {problem.category}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                                            {getStatusIcon(problem.status)}
                                            {problem.status}
                                        </span>
                                    </div>

                                    <h2 className="text-lg font-bold text-[#08264A] mt-5">
                                        {problem.title}
                                    </h2>

                                    <p className="text-sm text-slate-500 mt-2 line-clamp-3">
                                        {problem.description}
                                    </p>

                                    <div className="flex items-start gap-2 text-sm text-slate-500 mt-5">
                                        <MapPin
                                            size={17}
                                            className="text-blue-600 mt-0.5 shrink-0"
                                        />

                                        <span>
                                            {problem.location?.address}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                                        <span className="text-xs text-slate-400">
                                            Reported by{" "}
                                            {problem.reportedBy?.name ||
                                                "Citizen"}
                                        </span>

                                        <span className="text-xs font-semibold text-blue-600">
                                            {problem.priority} Priority
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Explore;