import { FileText, CheckCircle, Clock, TrendingUp } from "lucide-react";

const stats = [
    {
        title: "Total Reports",
        value: "184",
        change: "+12%",
        icon: FileText,
    },
    {
        title: "Verified Issues",
        value: "156",
        change: "+8%",
        icon: CheckCircle,
    },
    {
        title: "Resolved",
        value: "129",
        change: "+15%",
        icon: Clock,
    },
    {
        title: "Community Impact",
        value: "84%",
        change: "+6%",
        icon: TrendingUp,
    },
];

function Statistics() {
    return (
        <section className="px-8 pb-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.title}
                            className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-slate-500">
                                        {stat.title}
                                    </p>

                                    <h3 className="text-3xl font-bold text-slate-900 mt-2">
                                        {stat.value}
                                    </h3>
                                </div>

                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <Icon size={22} className="text-blue-600" />
                                </div>
                            </div>

                            <p className="text-sm text-green-600 font-medium mt-4">
                                {stat.change} this month
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Statistics;