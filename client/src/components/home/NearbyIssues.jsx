import {
    MapPin,
    AlertTriangle,
    Droplets,
    Lightbulb,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function NearbyIssues() {
    const issues = [
        {
            title: "Road Pothole",
            location: "Main Road",
            category: "Roads",
            priority: "High",
            icon: AlertTriangle,
        },
        {
            title: "Water Leakage",
            location: "Market Area",
            category: "Water",
            priority: "Medium",
            icon: Droplets,
        },
        {
            title: "Street Light Not Working",
            location: "Station Road",
            category: "Streetlights",
            priority: "High",
            icon: Lightbulb,
        },
    ];

    return (
        <section>
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

                    <div>
                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                            COMMUNITY ACTIVITY
                        </p>

                        <h2 className="text-3xl font-bold text-[#08264A] mt-2">
                            Nearby Issues
                        </h2>

                        <p className="text-slate-500 mt-2">
                            See problems recently reported in local
                            communities.
                        </p>
                    </div>

                    <Link
                        to="/explore"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-[#08264A] transition"
                    >
                        View All Issues
                        <ArrowRight size={17} />
                    </Link>

                </div>


                {/* Issue Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    {issues.map((issue, index) => {
                        const Icon = issue.icon;

                        return (
                            <div
                                key={index}
                                className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_8px_25px_rgba(8,38,74,0.08)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >

                                {/* Top highlight */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                                {/* Icon + Priority */}
                                <div className="flex items-start justify-between">

                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <Icon size={22} />
                                    </div>

                                    <span
                                        className={`text-xs font-semibold px-3 py-1 rounded-full ${issue.priority === "High"
                                                ? "bg-blue-50 text-blue-700"
                                                : "bg-slate-100 text-slate-600"
                                            }`}
                                    >
                                        {issue.priority}
                                    </span>

                                </div>


                                {/* Content */}
                                <div className="mt-6">

                                    <h3 className="text-lg font-bold text-[#08264A]">
                                        {issue.title}
                                    </h3>

                                    <div className="flex items-center gap-1.5 mt-3 text-sm text-slate-500">
                                        <MapPin size={15} />
                                        {issue.location}
                                    </div>

                                </div>


                                {/* Bottom */}
                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">

                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                                        {issue.category}
                                    </span>

                                    <span className="text-xs text-slate-400">
                                        Recently reported
                                    </span>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default NearbyIssues;