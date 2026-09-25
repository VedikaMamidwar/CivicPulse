import { Search, MapPin, Filter } from "lucide-react";

const issues = [
    {
        title: "Large pothole near Main Road",
        category: "Road Damage",
        location: "Main Road",
        status: "Verified",
        supporters: 18,
    },
    {
        title: "Street light not working",
        category: "Street Lights",
        location: "Park Avenue",
        status: "In Progress",
        supporters: 11,
    },
    {
        title: "Garbage collection delayed",
        category: "Cleanliness",
        location: "Market Area",
        status: "Reported",
        supporters: 24,
    },
    {
        title: "Water leakage on roadside",
        category: "Water",
        location: "Station Road",
        status: "Verified",
        supporters: 9,
    },
];

function Explore() {
    return (
        <main className="px-8 py-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-sm font-semibold text-blue-600">
                        COMMUNITY MAP
                    </p>

                    <h1 className="text-3xl font-bold text-slate-900 mt-1">
                        Explore Local Issues
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Discover problems reported by people in your area.
                    </p>
                </div>

                {/* Search + Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-3 flex items-center gap-3">
                        <Search size={19} className="text-slate-400" />

                        <input
                            type="text"
                            placeholder="Search local issues..."
                            className="outline-none w-full text-sm"
                        />
                    </div>

                    <button className="bg-white border border-slate-200 rounded-lg px-5 py-3 flex items-center justify-center gap-2 text-sm font-medium text-slate-700">
                        <Filter size={18} />
                        Filters
                    </button>
                </div>

                {/* Map + Issues */}
                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Map */}
                    <div className="h-[520px] bg-slate-100 rounded-2xl border border-slate-200 relative overflow-hidden">

                        {/* Simple map lines */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute top-28 left-0 w-full h-px bg-slate-300 rotate-6" />
                            <div className="absolute top-64 left-0 w-full h-px bg-slate-300 -rotate-12" />
                            <div className="absolute top-0 left-40 h-full w-px bg-slate-300 rotate-12" />
                            <div className="absolute top-0 right-32 h-full w-px bg-slate-300 -rotate-6" />
                        </div>

                        <div className="absolute top-5 left-5 bg-white rounded-lg px-4 py-3 shadow-sm">
                            <p className="font-semibold text-sm text-slate-800">
                                Local Issues
                            </p>

                            <p className="text-xs text-slate-500">
                                24 issues nearby
                            </p>
                        </div>

                        {/* Markers */}
                        <div className="absolute top-32 left-32 bg-red-500 text-white p-2 rounded-full shadow-lg">
                            <MapPin size={18} />
                        </div>

                        <div className="absolute top-48 right-32 bg-orange-500 text-white p-2 rounded-full shadow-lg">
                            <MapPin size={18} />
                        </div>

                        <div className="absolute bottom-32 left-52 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                            <MapPin size={18} />
                        </div>

                        <div className="absolute bottom-20 right-20 bg-red-500 text-white p-2 rounded-full shadow-lg">
                            <MapPin size={18} />
                        </div>
                    </div>

                    {/* Issue list */}
                    <div className="space-y-4">
                        {issues.map((issue) => (
                            <div
                                key={issue.title}
                                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition"
                            >
                                <div className="flex justify-between gap-3">
                                    <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                                        {issue.category}
                                    </span>

                                    <span className="text-xs text-slate-500">
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

                                <div className="mt-4 text-sm text-slate-500">
                                    {issue.supporters} people are facing this issue
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Explore;