import { Brain, ArrowUpRight, Sparkles } from "lucide-react";

function AIInsights() {
    return (
        <section className="px-8 pb-12">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

                        {/* Left */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                <Brain className="text-blue-600" size={24} />
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-semibold text-blue-600">
                                        AI AREA INSIGHT
                                    </p>

                                    <Sparkles size={15} className="text-blue-500" />
                                </div>

                                <h2 className="text-xl font-bold text-slate-900 mt-1">
                                    Garbage issues are increasing near the local market.
                                </h2>

                                <p className="text-slate-500 mt-2 max-w-2xl">
                                    CivicPulse AI analyzed recent reports and found a
                                    concentration of cleanliness-related complaints in
                                    this area.
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-2xl font-bold text-slate-900">
                                    +24%
                                </p>

                                <p className="text-xs text-slate-500">
                                    reported this month
                                </p>
                            </div>

                            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                                <ArrowUpRight size={20} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default AIInsights;