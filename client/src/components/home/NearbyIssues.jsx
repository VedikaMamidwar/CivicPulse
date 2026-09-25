import { MapPin, Clock, Users } from "lucide-react";

const issues = [
    {
        title: "Large pothole near Main Road",
        category: "Road Damage",
        location: "Main Road",
        status: "Verified",
        time: "2 hours ago",
        supporters: 18,
    },
    {
        title: "Street light not working",
        category: "Street Lights",
        location: "Park Avenue",
        status: "In Progress",
        time: "5 hours ago",
        supporters: 11,
    },
    {
        title: "Garbage collection delayed",
        category: "Cleanliness",
        location: "Market Area",
        status: "Reported",
        time: "1 day ago",
        supporters: 24,
    },
];

function NearbyIssues() {
    return (
        <section className="px-8 pb-12">
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-sm font-semibold text-blue-600">
                            NEARBY
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-1">
                            Issues Around You
                        </h2>
                    </div>

                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                        View all
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {issues.map((issue) => (
                        <div
                            key={issue.title}
                            className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <span className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                                    {issue.category}
                                </span>

                                <span
                                    className={`text-xs font-medium px-3 py-1 rounded-full ${issue.status === "Verified"
                                            ? "bg-green-50 text-green-600"
                                            : issue.status === "In Progress"
                                                ? "bg-orange-50 text-orange-600"
                                                : "bg-slate-100 text-slate-600"
                                        }`}
                                >
                                    {issue.status}
                                </span>
                            </div>

                            <h3 className="font-semibold text-slate-900 mt-4">
                                {issue.title}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-slate-500 mt-3">
                                <MapPin size={15} />
                                {issue.location}
                            </div>

                            <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Clock size={14} />
                                    {issue.time}
                                </div>

                                <div className="flex items-center gap-1 text-xs text-slate-500">
                                    <Users size={14} />
                                    {issue.supporters}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default NearbyIssues;