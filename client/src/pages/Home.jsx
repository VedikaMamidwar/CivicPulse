import {
    ArrowRight,
    MapPin,
    ShieldCheck,
    Users,
    Brain,
    CheckCircle2,
    BarChart3,
    AlertTriangle,
    Droplets,
    Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import NearbyIssues from "../components/home/NearbyIssues";

function Home() {
    return (
        <div className="min-h-screen bg-white text-[#08264A]">

            {/* HERO */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        {/* LEFT */}
                        <div>

                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                                <MapPin size={16} />
                                SMART COMMUNITY PLATFORM
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 text-[#08264A]">
                                Solve the problems
                                <span className="block text-blue-600">
                                    around you.
                                </span>
                            </h1>

                            <p className="text-slate-500 text-lg leading-relaxed mt-6 max-w-xl">
                                CivicPulse helps citizens report local
                                problems, verify genuine issues and track
                                their progress until resolution.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">

                                <Link
                                    to="/register"
                                    className="inline-flex items-center gap-2 bg-[#08264A] hover:bg-[#123E6B] text-white font-semibold px-6 py-3.5 rounded-xl transition shadow-lg"
                                >
                                    Report a Problem
                                    <ArrowRight size={18} />
                                </Link>

                                <Link
                                    to="/explore"
                                    className="inline-flex items-center gap-2 border border-[#08264A] text-[#08264A] hover:bg-blue-50 font-semibold px-6 py-3.5 rounded-xl transition"
                                >
                                    Explore Issues
                                </Link>

                            </div>

                            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm text-slate-500">

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-blue-600"
                                    />
                                    Verified Reports
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-blue-600"
                                    />
                                    Community Driven
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-blue-600"
                                    />
                                    Track Progress
                                </div>

                            </div>

                        </div>


                        {/* MAP */}
                        <div>

                            <div className="relative bg-white border border-blue-200 rounded-2xl shadow-[0_12px_40px_rgba(8,38,74,0.12)] overflow-hidden">

                                <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                                <div className="px-5 py-5 border-b border-slate-200 flex items-center justify-between">

                                    <div>
                                        <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                                            Community Map
                                        </p>

                                        <h3 className="text-lg font-bold text-[#08264A] mt-1">
                                            Local Issues
                                        </h3>
                                    </div>

                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>

                                </div>


                                {/* MAP AREA */}
                                <div className="relative h-[350px] bg-[#eef3f1] overflow-hidden">

                                    {/* Roads */}
                                    <div className="absolute top-[20%] left-[-10%] w-[120%] h-7 bg-white rotate-[15deg]" />

                                    <div className="absolute top-[52%] left-[-10%] w-[120%] h-8 bg-white rotate-[-10deg]" />

                                    <div className="absolute top-[-30%] left-[45%] w-7 h-[160%] bg-white rotate-[25deg]" />

                                    <div className="absolute top-[-20%] left-[70%] w-6 h-[150%] bg-white rotate-[-20deg]" />

                                    {/* Green areas */}
                                    <div className="absolute top-8 left-8 w-28 h-20 bg-[#d7e7d8] rounded-full" />

                                    <div className="absolute bottom-8 right-8 w-36 h-24 bg-[#d7e7d8] rounded-full" />

                                    <div className="absolute top-24 right-16 w-20 h-16 bg-[#d7e7d8] rounded-full" />

                                    {/* Water */}
                                    <div className="absolute bottom-0 left-[-30px] w-52 h-36 bg-[#d8e9f5] rounded-full" />


                                    {/* Marker 1 */}
                                    <div className="absolute top-[25%] left-[28%]">
                                        <div className="w-10 h-10 rounded-full bg-[#08264A] text-white border-4 border-white shadow-lg flex items-center justify-center">
                                            <AlertTriangle size={16} />
                                        </div>
                                    </div>


                                    {/* Marker 2 */}
                                    <div className="absolute top-[52%] left-[58%]">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white border-4 border-white shadow-lg flex items-center justify-center">
                                            <Droplets size={16} />
                                        </div>
                                    </div>


                                    {/* Marker 3 */}
                                    <div className="absolute top-[67%] left-[35%]">
                                        <div className="w-10 h-10 rounded-full bg-[#123E6B] text-white border-4 border-white shadow-lg flex items-center justify-center">
                                            <Lightbulb size={16} />
                                        </div>
                                    </div>


                                    {/* Marker 4 */}
                                    <div className="absolute top-[20%] right-[22%]">
                                        <div className="w-10 h-10 rounded-full bg-[#08264A] text-white border-4 border-white shadow-lg flex items-center justify-center">
                                            <AlertTriangle size={16} />
                                        </div>
                                    </div>


                                    {/* Location label */}
                                    <div className="absolute top-4 left-4 bg-white border border-blue-100 rounded-lg px-3 py-2 shadow-md">

                                        <p className="text-[10px] text-slate-400 uppercase">
                                            Your Area
                                        </p>

                                        <p className="text-xs font-semibold text-[#08264A]">
                                            Community Zone
                                        </p>

                                    </div>


                                    {/* Legend */}
                                    <div className="absolute bottom-4 left-4 bg-white border border-blue-100 rounded-lg px-4 py-3 shadow-md">

                                        <div className="flex items-center gap-4 text-xs text-slate-500">

                                            <div className="flex items-center gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#08264A]" />
                                                High Priority
                                            </div>

                                            <div className="flex items-center gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                                                Reported
                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* MAP STATS */}
                                <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50">

                                    <div className="bg-[#08264A] text-white rounded-xl p-3 shadow-md">
                                        <p className="text-xs text-blue-200">
                                            Active
                                        </p>

                                        <p className="text-xl font-bold mt-1">
                                            34
                                        </p>
                                    </div>

                                    <div className="bg-[#08264A] text-white rounded-xl p-3 shadow-md">
                                        <p className="text-xs text-blue-200">
                                            Verified
                                        </p>

                                        <p className="text-xl font-bold mt-1">
                                            21
                                        </p>
                                    </div>

                                    <div className="bg-blue-600 text-white rounded-xl p-3 shadow-md">
                                        <p className="text-xs text-blue-100">
                                            Resolved
                                        </p>

                                        <p className="text-xl font-bold mt-1">
                                            18
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* STATS */}
            <section className="border-y border-blue-100 bg-[#f8fafc]">

                <div className="max-w-7xl mx-auto px-6 py-8">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                        <div className="relative bg-white border border-blue-100 rounded-xl p-5 shadow-[0_6px_20px_rgba(8,38,74,0.07)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                            <p className="text-2xl font-bold text-[#08264A]">
                                128
                            </p>

                            <p className="text-sm text-slate-500 mt-1">
                                Problems Reported
                            </p>

                        </div>


                        <div className="relative bg-white border border-blue-100 rounded-xl p-5 shadow-[0_6px_20px_rgba(8,38,74,0.07)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                            <p className="text-2xl font-bold text-[#08264A]">
                                94
                            </p>

                            <p className="text-sm text-slate-500 mt-1">
                                Problems Resolved
                            </p>

                        </div>


                        <div className="relative bg-white border border-blue-100 rounded-xl p-5 shadow-[0_6px_20px_rgba(8,38,74,0.07)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                            <p className="text-2xl font-bold text-[#08264A]">
                                1,240+
                            </p>

                            <p className="text-sm text-slate-500 mt-1">
                                Community Members
                            </p>

                        </div>


                        <div className="relative bg-white border border-blue-100 rounded-xl p-5 shadow-[0_6px_20px_rgba(8,38,74,0.07)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />

                            <p className="text-2xl font-bold text-blue-600">
                                73%
                            </p>

                            <p className="text-sm text-slate-500 mt-1">
                                Resolution Rate
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* HOW IT WORKS */}
            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-2xl">

                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                            HOW CIVICPULSE WORKS
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-bold text-[#08264A] mt-3">
                            Report. Verify. Resolve.
                        </h2>

                        <p className="text-slate-500 mt-4">
                            A simple and transparent process for solving
                            problems in your local community.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-3 gap-6 mt-10">

                        {/* REPORT */}
                        <div className="relative border border-blue-100 rounded-2xl p-7 bg-white shadow-[0_8px_30px_rgba(8,38,74,0.10)] hover:shadow-[0_12px_35px_rgba(8,38,74,0.16)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <MapPin size={22} />
                            </div>

                            <p className="text-blue-600 text-sm font-semibold mt-6">
                                01
                            </p>

                            <h3 className="text-xl font-bold text-[#08264A] mt-2">
                                Report
                            </h3>

                            <p className="text-slate-500 mt-3 leading-relaxed">
                                Report a problem with its location,
                                description and category.
                            </p>

                        </div>


                        {/* VERIFY */}
                        <div className="relative border border-blue-100 rounded-2xl p-7 bg-white shadow-[0_8px_30px_rgba(8,38,74,0.10)] hover:shadow-[0_12px_35px_rgba(8,38,74,0.16)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Users size={22} />
                            </div>

                            <p className="text-blue-600 text-sm font-semibold mt-6">
                                02
                            </p>

                            <h3 className="text-xl font-bold text-[#08264A] mt-2">
                                Verify
                            </h3>

                            <p className="text-slate-500 mt-3 leading-relaxed">
                                Community members verify genuine issues
                                affecting their area.
                            </p>

                        </div>


                        {/* RESOLVE */}
                        <div className="relative border border-blue-100 rounded-2xl p-7 bg-white shadow-[0_8px_30px_rgba(8,38,74,0.10)] hover:shadow-[0_12px_35px_rgba(8,38,74,0.16)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-[#08264A]" />

                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <BarChart3 size={22} />
                            </div>

                            <p className="text-blue-600 text-sm font-semibold mt-6">
                                03
                            </p>

                            <h3 className="text-xl font-bold text-[#08264A] mt-2">
                                Resolve
                            </h3>

                            <p className="text-slate-500 mt-3 leading-relaxed">
                                Follow the problem from review to final
                                resolution.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* FEATURES */}
            <section className="py-20 bg-[#f8fafc]">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-2xl mx-auto">

                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                            PLATFORM FEATURES
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-bold text-[#08264A] mt-3">
                            Everything your community needs
                        </h2>

                        <p className="text-slate-500 mt-4">
                            Powerful tools designed to make local problem
                            solving transparent and simple.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

                        {/* AI */}
                        <div className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_8px_25px_rgba(8,38,74,0.08)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />

                            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Brain size={21} />
                            </div>

                            <h3 className="font-bold text-[#08264A] mt-5">
                                AI Analysis
                            </h3>

                            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                Analyze reports and identify priority and
                                duplicate issues.
                            </p>

                        </div>


                        {/* VERIFICATION */}
                        <div className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_8px_25px_rgba(8,38,74,0.08)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />

                            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <ShieldCheck size={21} />
                            </div>

                            <h3 className="font-bold text-[#08264A] mt-5">
                                Verification
                            </h3>

                            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                Community members can verify genuine local
                                problems.
                            </p>

                        </div>


                        {/* COMMUNITY */}
                        <div className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_8px_25px_rgba(8,38,74,0.08)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />

                            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Users size={21} />
                            </div>

                            <h3 className="font-bold text-[#08264A] mt-5">
                                Community
                            </h3>

                            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                Connect residents around problems affecting
                                their area.
                            </p>

                        </div>


                        {/* IMPACT */}
                        <div className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_8px_25px_rgba(8,38,74,0.08)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />

                            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <BarChart3 size={21} />
                            </div>

                            <h3 className="font-bold text-[#08264A] mt-5">
                                Impact Tracking
                            </h3>

                            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                See how reported problems progress toward
                                resolution.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* NEARBY ISSUES */}
            <section className="py-16 bg-white">
                <NearbyIssues />
            </section>


            {/* CTA */}
            <section className="py-16 bg-[#08264A]">

                <div className="max-w-5xl mx-auto px-6 text-center text-white">

                    <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider">
                        MAKE A DIFFERENCE
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                        See a problem in your area?
                    </h2>

                    <p className="text-slate-300 mt-4 max-w-xl mx-auto">
                        Report it and help your community move one step closer
                        to a better neighbourhood.
                    </p>

                    <Link
                        to="/register"
                        className="inline-flex items-center gap-2 mt-7 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition shadow-lg"
                    >
                        Join CivicPulse
                        <ArrowRight size={19} />
                    </Link>

                </div>

            </section>


            {/* FOOTER */}
            <footer className="bg-white border-t border-blue-100">

                <div className="max-w-7xl mx-auto px-6 py-10">

                    <div className="flex flex-col md:flex-row justify-between gap-8">

                        <div>

                            <div className="flex items-center gap-3">

                                <div className="w-9 h-9 rounded-lg bg-[#08264A] text-white flex items-center justify-center">
                                    <MapPin size={19} />
                                </div>

                                <span className="text-xl font-bold text-[#08264A]">
                                    CivicPulse
                                </span>

                            </div>

                            <p className="text-sm text-slate-500 mt-3 max-w-md">
                                Report. Verify. Resolve. A smarter way to
                                improve local communities.
                            </p>

                        </div>


                        <div className="flex gap-6 text-sm text-slate-500">

                            <Link
                                to="/explore"
                                className="hover:text-blue-600 transition"
                            >
                                Explore
                            </Link>

                            <Link
                                to="/login"
                                className="hover:text-blue-600 transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="hover:text-blue-600 transition"
                            >
                                Register
                            </Link>

                        </div>

                    </div>


                    <div className="border-t border-slate-200 mt-8 pt-5 text-xs text-slate-400">
                        © 2026 CivicPulse. Report • Verify • Resolve.
                    </div>

                </div>

            </footer>

        </div>
    );
}

export default Home;