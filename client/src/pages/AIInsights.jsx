import {
    Brain,
    TrendingUp,
    AlertTriangle,
    MapPin,
    Sparkles,
} from "lucide-react";

const insights = [
    {
        title: "Garbage issues increasing",
        description:
            "Reports related to garbage and cleanliness have increased around the market area.",
        value: "+24%",
        type: "trend",
        icon: TrendingUp,
    },
    {
        title: "Road damage hotspot",
        description:
            "Multiple road damage reports are concentrated around Main Road.",
        value: "18 reports",
        type: "warning",
        icon: AlertTriangle,
    },
    {
        title: "Street light pattern detected",
        description:
            "Several street light reports are appearing within the same nearby zone.",
        value: "12 reports",
        type: "location",
        icon: MapPin,
    },
];

function AIInsights() {
    return (
        <main className="px-8 py-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-blue-600">
                        <Sparkles size={18} />

                        <p className="text-sm font-semibold">
                            CIVICPULSE AI
                        </p>
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900 mt-2">
                        AI Area Insights
                    </h1>

                    <p className="text-slate-500 mt-2 max-w-2xl">
                        AI analyzes community reports to identify patterns,
                        hotspots, and problems that may need attention.
                    </p>
                </div>

                {/* AI Summary */}
                <div className="bg-blue-600 rounded-2xl p-7 text-white mb-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                            <Brain size={25} />
                        </div>

                        <div>
                            <p className="text-sm text-blue-100">
                                AI COMMUNITY SUMMARY
                            </p>

                            <h2 className="text-2xl font-bold mt-2">
                                Cleanliness and road problems need the most attention.
                            </h2>

                            <p className="text-blue-100 mt-3 max-w-3xl leading-relaxed">
                                Based on recent community reports, these categories
                                have the highest concentration of unresolved issues
                                in the selected area.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Insight cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {insights.map((insight) => {
                        const Icon = insight.icon;

                        return (
                            <div
                                key={insight.title}
                                className="bg-white border border-slate-200 rounded-2xl p-6"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center">
                                        <Icon
                                            size={21}
                                            className="text-blue-600"
                                        />
                                    </div>

                                    <span className="text-sm font-bold text-blue-600">
                                        {insight.value}
                                    </span>
                                </div>

                                <h3 className="font-bold text-slate-900 mt-5">
                                    {insight.title}
                                </h3>

                                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                    {insight.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* How AI works */}
                <div className="bg-white border border-slate-200 rounded-2xl p-7 mt-8">
                    <h2 className="text-xl font-bold text-slate-900">
                        How CivicPulse AI works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">

                        <div>
                            <p className="text-2xl font-bold text-blue-600">
                                01
                            </p>

                            <h3 className="font-semibold mt-2">
                                Collect
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Analyze reports, locations, images, and community
                                confirmations.
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-blue-600">
                                02
                            </p>

                            <h3 className="font-semibold mt-2">
                                Understand
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Identify categories, severity, duplicates, and
                                common patterns.
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-blue-600">
                                03
                            </p>

                            <h3 className="font-semibold mt-2">
                                Detect
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Find hotspots and areas where problems are
                                concentrated.
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-blue-600">
                                04
                            </p>

                            <h3 className="font-semibold mt-2">
                                Inform
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Provide useful insights to communities and
                                administrators.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
}

export default AIInsights;