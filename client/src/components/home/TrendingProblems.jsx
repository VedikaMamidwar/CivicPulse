import {
    Trash2,
    Construction,
    Lightbulb,
    Droplets,
    Car,
} from "lucide-react";

const problems = [
    {
        name: "Garbage & Cleanliness",
        count: 42,
        icon: Trash2,
    },
    {
        name: "Road Damage",
        count: 36,
        icon: Construction,
    },
    {
        name: "Street Lights",
        count: 28,
        icon: Lightbulb,
    },
    {
        name: "Water Issues",
        count: 19,
        icon: Droplets,
    },
    {
        name: "Traffic Problems",
        count: 15,
        icon: Car,
    },
];

function TrendingProblems() {
    return (
        <section className="px-8 pb-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                    <p className="text-sm font-semibold text-blue-600">
                        LOCAL TRENDS
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-1">
                        Trending Problems
                    </h2>

                    <p className="text-slate-500 mt-1">
                        Problems reported most frequently in your area.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {problems.map((problem) => {
                        const Icon = problem.icon;

                        return (
                            <div
                                key={problem.name}
                                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition"
                            >
                                <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <Icon size={22} className="text-blue-600" />
                                </div>

                                <h3 className="font-semibold text-slate-800 mt-4">
                                    {problem.name}
                                </h3>

                                <p className="text-2xl font-bold text-slate-900 mt-2">
                                    {problem.count}
                                </p>

                                <p className="text-xs text-slate-500 mt-1">
                                    reports
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TrendingProblems;