import {
    ArrowRight,
    MapPin,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    AlertTriangle,
    CheckCircle2,
    Clock3,
} from "lucide-react";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">

            {/* Background decoration */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-slate-100 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

                <div className="grid lg:grid-cols-[1fr_1.05fr] gap-14 items-center">

                    {/* ================= LEFT ================= */}
                    <div>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Sparkles size={15} />
                            AI-powered local community platform
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight leading-[1.08] text-slate-900">
                            Make your
                            <br />
                            <span className="text-blue-600">
                                locality better.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
                            Report local problems, bring your community together,
                            and track real progress from report to resolution —
                            powered by intelligent insights.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mt-8">

                            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5">
                                Report a Problem
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>

                            <button className="border border-slate-300 bg-white hover:border-blue-400 hover:text-blue-600 text-slate-700 px-6 py-3.5 rounded-xl font-semibold transition-all">
                                Explore Issues
                            </button>

                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-slate-500">

                            <div className="flex items-center gap-2">
                                <ShieldCheck
                                    size={18}
                                    className="text-green-600"
                                />
                                Community verified
                            </div>

                            <div className="flex items-center gap-2">
                                <Sparkles
                                    size={17}
                                    className="text-blue-600"
                                />
                                AI assisted
                            </div>

                            <div className="flex items-center gap-2">
                                <MapPin
                                    size={17}
                                    className="text-blue-600"
                                />
                                Local focus
                            </div>

                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 max-w-lg mt-12 border-t border-slate-200 pt-7">

                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    184
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Reports
                                </p>
                            </div>

                            <div className="border-l border-slate-200 pl-6">
                                <p className="text-2xl font-bold text-slate-900">
                                    129
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Resolved
                                </p>
                            </div>

                            <div className="border-l border-slate-200 pl-6">
                                <p className="text-2xl font-bold text-slate-900">
                                    70%
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Resolution rate
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* ================= RIGHT ================= */}
                    <div className="relative">

                        {/* Main dashboard/map card */}
                        <div className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200/70 overflow-hidden">

                            {/* Top bar */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">

                                <div>
                                    <p className="text-sm font-bold text-slate-800">
                                        Local Issue Map
                                    </p>

                                    <div className="flex items-center gap-1.5 mt-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <p className="text-xs text-slate-500">
                                            Live community activity
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                                    <MapPin
                                        size={14}
                                        className="text-blue-600"
                                    />
                                    <span className="text-xs font-medium text-slate-600">
                                        My Area
                                    </span>
                                </div>

                            </div>

                            {/* Map */}
                            <div className="relative h-[390px] bg-slate-100 overflow-hidden">

                                {/* Map grid */}
                                <div className="absolute inset-0 opacity-60">

                                    {/* horizontal roads */}
                                    <div className="absolute top-[18%] left-[-10%] w-[120%] h-2 bg-white rotate-6" />
                                    <div className="absolute top-[38%] left-[-10%] w-[120%] h-3 bg-white -rotate-6" />
                                    <div className="absolute top-[63%] left-[-10%] w-[120%] h-2 bg-white rotate-3" />
                                    <div className="absolute top-[80%] left-[-10%] w-[120%] h-3 bg-white -rotate-5" />

                                    {/* vertical roads */}
                                    <div className="absolute left-[18%] top-[-10%] h-[120%] w-2 bg-white rotate-12" />
                                    <div className="absolute left-[42%] top-[-10%] h-[120%] w-3 bg-white -rotate-6" />
                                    <div className="absolute left-[67%] top-[-10%] h-[120%] w-2 bg-white rotate-8" />
                                    <div className="absolute left-[86%] top-[-10%] h-[120%] w-2 bg-white -rotate-12" />

                                </div>

                                {/* Map labels */}
                                <span className="absolute top-14 left-16 text-[10px] text-slate-400 font-medium">
                                    CENTRAL MARKET
                                </span>

                                <span className="absolute top-28 right-20 text-[10px] text-slate-400 font-medium">
                                    MAIN ROAD
                                </span>

                                <span className="absolute bottom-24 left-24 text-[10px] text-slate-400 font-medium">
                                    PARK AVENUE
                                </span>

                                <span className="absolute bottom-12 right-28 text-[10px] text-slate-400 font-medium">
                                    CITY CENTER
                                </span>

                                {/* Marker 1 */}
                                <div className="absolute top-[25%] left-[27%]">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20" />

                                        <div className="relative w-10 h-10 rounded-full bg-red-500 border-4 border-white shadow-xl flex items-center justify-center">
                                            <AlertTriangle
                                                size={17}
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Marker 2 */}
                                <div className="absolute top-[40%] right-[25%]">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-xl flex items-center justify-center">
                                        <MapPin
                                            size={17}
                                            className="text-white"
                                        />
                                    </div>
                                </div>

                                {/* Marker 3 */}
                                <div className="absolute bottom-[24%] left-[48%]">
                                    <div className="w-10 h-10 rounded-full bg-orange-500 border-4 border-white shadow-xl flex items-center justify-center">
                                        <AlertTriangle
                                            size={17}
                                            className="text-white"
                                        />
                                    </div>
                                </div>

                                {/* Marker 4 */}
                                <div className="absolute bottom-[18%] right-[18%]">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-xl flex items-center justify-center">
                                        <MapPin
                                            size={17}
                                            className="text-white"
                                        />
                                    </div>
                                </div>

                                {/* Selected issue popup */}
                                <div className="absolute top-[13%] left-[37%] bg-white rounded-xl shadow-xl border border-slate-100 p-3 w-44">

                                    <div className="flex items-start gap-2">

                                        <div className="bg-red-50 text-red-600 p-1.5 rounded-lg">
                                            <AlertTriangle size={14} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold text-slate-800">
                                                Large pothole
                                            </p>

                                            <p className="text-[10px] text-slate-400 mt-1">
                                                Main Road
                                            </p>

                                            <span className="inline-block mt-2 text-[9px] font-medium bg-green-50 text-green-600 px-2 py-1 rounded-full">
                                                Verified
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                {/* Bottom map controls */}
                                <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3">

                                    <p className="text-[10px] font-semibold text-slate-700 mb-2">
                                        ISSUE STATUS
                                    </p>

                                    <div className="flex gap-3 text-[10px] text-slate-500">

                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-red-500" />
                                            Urgent
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-orange-500" />
                                            Pending
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-blue-600" />
                                            Verified
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ================= FLOATING AI CARD ================= */}
                        <div className="absolute -bottom-7 -left-7 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-4">

                            <div className="flex items-center gap-2">

                                <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                                    <Sparkles size={18} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold text-blue-600 uppercase">
                                        AI Area Insight
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Updated recently
                                    </p>
                                </div>

                            </div>

                            <p className="text-sm font-medium text-slate-700 mt-3 leading-5">
                                Garbage-related reports are increasing around the local market.
                            </p>

                            <div className="flex items-center gap-1 mt-3 text-xs text-red-500 font-medium">
                                <TrendingUp size={13} />
                                24% increase this month
                            </div>

                        </div>

                        {/* ================= FLOATING RESOLUTION CARD ================= */}
                        <div className="absolute -top-5 -right-5 bg-white border border-slate-200 rounded-2xl shadow-xl px-4 py-3">

                            <div className="flex items-center gap-3">

                                <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle2
                                        size={19}
                                        className="text-green-600"
                                    />
                                </div>

                                <div>
                                    <p className="text-lg font-bold text-slate-800">
                                        129
                                    </p>

                                    <p className="text-[11px] text-slate-500">
                                        Issues resolved
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* ================= FLOATING REPORT CARD ================= */}
                        <div className="absolute top-[46%] -right-8 bg-white border border-slate-200 rounded-xl shadow-lg px-3 py-2.5 hidden xl:block">

                            <div className="flex items-center gap-2">

                                <Clock3
                                    size={15}
                                    className="text-orange-500"
                                />

                                <div>
                                    <p className="text-[10px] text-slate-400">
                                        Recent report
                                    </p>

                                    <p className="text-xs font-semibold text-slate-700">
                                        Street light issue
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;