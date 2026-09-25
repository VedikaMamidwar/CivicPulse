import {
    MapPin,
    Clock,
    CheckCircle,
    AlertCircle,
    ArrowRight,
} from "lucide-react";

const reports = [
    {
        title: "Pothole near Main Road",
        category: "Road Damage",
        location: "Main Road",
        date: "12 Sep 2026",
        status: "Resolved",
    },
    {
        title: "Street light not working",
        category: "Street Lights",
        location: "Park Avenue",
        date: "15 Sep 2026",
        status: "In Progress",
    },
    {
        title: "Garbage collection issue",
        category: "Cleanliness",
        location: "Market Area",
        date: "18 Sep 2026",
        status: "Verified",
    },
];

function MyReports() {
    return (
        <main className="px-8 py-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-sm font-semibold text-blue-600">
                        YOUR ACTIVITY
                    </p>

                    <h1 className="text-3xl font-bold text-slate-900 mt-1">
                        My Reports
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Track the problems you have reported in your community.
                    </p>
                </div>

                {/* Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                    <div className="bg-white border border-slate-200 rounded-xl p-5">
                        <p className="text-sm text-slate-500">
                            Total Reports
                        </p>

                        <p className="text-3xl font-bold text-slate-900 mt-2">
                            12
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5">
                        <p className="text-sm text-slate-500">
                            In Progress
                        </p>

                        <p className="text-3xl font-bold text-orange-500 mt-2">
                            3
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5">
                        <p className="text-sm text-slate-500">
                            Resolved
                        </p>

                        <p className="text-3xl font-bold text-green-600 mt-2">
                            8
                        </p>
                    </div>

                </div>

                {/* Reports */}
                <div className="space-y-4">
                    {reports.map((report) => (
                        <div
                            key={report.title}
                            className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

                                <div className="flex gap-4">

                                    <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin size={21} className="text-blue-600" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-slate-900">
                                            {report.title}
                                        </h3>

                                        <p className="text-sm text-slate-500 mt-1">
                                            {report.category}
                                        </p>

                                        <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <MapPin size={13} />
                                                {report.location}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <Clock size={13} />
                                                {report.date}
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4">

                                    <span
                                        className={`flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-full ${report.status === "Resolved"
                                                ? "bg-green-50 text-green-600"
                                                : report.status === "In Progress"
                                                    ? "bg-orange-50 text-orange-600"
                                                    : "bg-blue-50 text-blue-600"
                                            }`}
                                    >
                                        {report.status === "Resolved" ? (
                                            <CheckCircle size={14} />
                                        ) : (
                                            <AlertCircle size={14} />
                                        )}

                                        {report.status}
                                    </span>

                                    <button className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-600">
                                        <ArrowRight size={17} />
                                    </button>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}

export default MyReports;