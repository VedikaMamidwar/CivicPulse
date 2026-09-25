import {
    MapPin,
    CheckCircle,
    Clock,
    AlertCircle,
    TrendingUp,
} from "lucide-react";

const categories = [
    { name: "Garbage & Cleanliness", count: 42 },
    { name: "Road Damage", count: 36 },
    { name: "Street Lights", count: 28 },
    { name: "Water Issues", count: 19 },
    { name: "Traffic", count: 15 },
];

function MyArea() {
    return (
        <main className="px-8 py-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <p className="text-sm font-semibold text-blue-600">
                            YOUR LOCALITY
                        </p>

                        <h1 className="text-3xl font-bold text-slate-900 mt-1">
                            My Area
                        </h1>

                        <div className="flex items-center gap-2 text-slate-500 mt-2">
                            <MapPin size={16} />
                            <span className="text-sm">Your Local Area</span>
                        </div>
                    </div>

                    <button className="border border-slate-200 bg-white px-4 py-2.5 rounded-lg text-sm font-medium hover:border-blue-500">
                        Change Area
                    </button>
                </div>

                {/* Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

                    <div className="bg-white border border-slate-200 rounded-xl p-5">
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-500">
                                Total Issues
                            </p>

                            <MapPin size={20} className="text-blue-600" />
                        </div>

                        <p className="text-3xl font-bold text-slate-900 mt-3">
                            184
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5">
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-500">
                                Resolved
                            </p>

                            <CheckCircle size={20} className="text-green-600" />
                        </div>

                        <p className="text-3xl font-bold text-slate-900 mt-3">
                            129
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5">
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-500">
                                In Progress
                            </p>

                            <Clock size={20} className="text-orange-500" />
                        </div>

                        <p className="text-3xl font-bold text-slate-900 mt-3">
                            32
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5">
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-500">
                                Resolution Rate
                            </p>

                            <TrendingUp size={20} className="text-blue-600" />
                        </div>

                        <p className="text-3xl font-bold text-slate-900 mt-3">
                            70%
                        </p>
                    </div>

                </div>

                {/* Main content */}
                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Top Problems */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-slate-900">
                            Top Problems
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            Most reported issues in your locality.
                        </p>

                        <div className="mt-6 space-y-5">
                            {categories.map((category, index) => (
                                <div key={category.name}>

                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-slate-700">
                                            {category.name}
                                        </span>

                                        <span className="text-slate-500">
                                            {category.count}
                                        </span>
                                    </div>

                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-600 rounded-full"
                                            style={{
                                                width: `${Math.max(
                                                    20,
                                                    100 - index * 16
                                                )}%`,
                                            }}
                                        />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Area Status */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-slate-900">
                            Area Status
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            Current community issue status.
                        </p>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-green-600" size={21} />

                                    <div>
                                        <p className="font-medium text-slate-800">
                                            Resolved
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            Successfully completed
                                        </p>
                                    </div>
                                </div>

                                <span className="font-bold text-green-600">
                                    129
                                </span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <Clock className="text-orange-500" size={21} />

                                    <div>
                                        <p className="font-medium text-slate-800">
                                            In Progress
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            Currently being addressed
                                        </p>
                                    </div>
                                </div>

                                <span className="font-bold text-orange-500">
                                    32
                                </span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <AlertCircle className="text-red-500" size={21} />

                                    <div>
                                        <p className="font-medium text-slate-800">
                                            Pending
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            Awaiting action
                                        </p>
                                    </div>
                                </div>

                                <span className="font-bold text-red-500">
                                    23
                                </span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}

export default MyArea;