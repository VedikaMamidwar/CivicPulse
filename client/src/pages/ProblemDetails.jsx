import {
    MapPin,
    CheckCircle,
    Users,
    MessageCircle,
    Clock,
    ShieldCheck,
} from "lucide-react";

function ProblemDetails() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-10">

            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <span>Explore</span>
                    <span>/</span>
                    <span>Problem Details</span>
                </div>

                <h1 className="text-3xl font-bold text-slate-800">
                    Large pothole near Main Road
                </h1>

                <p className="text-slate-500 mt-2">
                    Reported by a community member • 2 hours ago
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Image Placeholder */}
                    <div className="h-80 bg-slate-200 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-slate-500">
                            <MapPin size={40} className="mx-auto mb-3" />
                            <p>Problem image will appear here</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-slate-800 mb-4">
                            Problem Description
                        </h2>

                        <p className="text-slate-600 leading-7">
                            A large pothole has developed near the main road and is
                            creating difficulty for vehicles and pedestrians. The issue
                            becomes more difficult to notice during the evening.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-6">
                            <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm">
                                Road Damage
                            </span>

                            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm flex items-center gap-1">
                                <MapPin size={14} />
                                Main Road
                            </span>

                            <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm flex items-center gap-1">
                                <CheckCircle size={14} />
                                Verified
                            </span>
                        </div>
                    </div>

                    {/* Community Verification */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6">

                        <h2 className="text-xl font-semibold text-slate-800">
                            Community Verification
                        </h2>

                        <p className="text-slate-500 mt-2">
                            Are you experiencing the same problem?
                        </p>

                        <div className="flex items-center gap-4 mt-5">
                            <button className="px-5 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700">
                                I'm facing this too
                            </button>

                            <div className="flex items-center gap-2 text-slate-600">
                                <Users size={20} />
                                <span>18 people confirmed</span>
                            </div>
                        </div>
                    </div>

                    {/* Comments */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6">

                        <div className="flex items-center gap-2 mb-5">
                            <MessageCircle size={20} className="text-blue-600" />

                            <h2 className="text-xl font-semibold text-slate-800">
                                Community Discussion
                            </h2>
                        </div>

                        <div className="border-b border-slate-100 pb-5">
                            <p className="font-medium text-slate-700">
                                Community Member
                            </p>

                            <p className="text-slate-500 text-sm mt-1">
                                This pothole has been here for several days.
                            </p>

                            <span className="text-xs text-slate-400 mt-2 block">
                                1 hour ago
                            </span>
                        </div>

                        <div className="pt-5">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">

                    {/* Status */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6">

                        <h2 className="font-semibold text-slate-800 mb-5">
                            Issue Status
                        </h2>

                        <div className="space-y-5">

                            <div className="flex gap-3">
                                <CheckCircle className="text-green-500" size={21} />

                                <div>
                                    <p className="font-medium text-slate-700">
                                        Reported
                                    </p>

                                    <p className="text-sm text-slate-400">
                                        Issue submitted
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <ShieldCheck className="text-blue-500" size={21} />

                                <div>
                                    <p className="font-medium text-slate-700">
                                        Verified
                                    </p>

                                    <p className="text-sm text-slate-400">
                                        Community confirmed
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Clock className="text-slate-400" size={21} />

                                <div>
                                    <p className="font-medium text-slate-400">
                                        Assigned
                                    </p>

                                    <p className="text-sm text-slate-400">
                                        Waiting for assignment
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle className="text-slate-300" size={21} />

                                <div>
                                    <p className="font-medium text-slate-400">
                                        Resolved
                                    </p>

                                    <p className="text-sm text-slate-400">
                                        Not resolved yet
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* AI Analysis */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">

                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                            AI Analysis
                        </p>

                        <h3 className="text-lg font-semibold text-slate-800 mt-2">
                            High priority issue
                        </h3>

                        <p className="text-sm text-slate-600 mt-2 leading-6">
                            AI detected that this issue may affect road safety because
                            of its location and reported severity.
                        </p>

                        <div className="mt-4 text-sm text-blue-700 font-medium">
                            Priority: High
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}

export default ProblemDetails;