import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    MapPin,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    LockKeyhole,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const data = await login(formData);

            if (data.user.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Login failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f7fa] flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">

                {/* Left panel */}
                <div className="hidden lg:flex relative bg-[#08264A] text-white p-12 flex-col justify-between overflow-hidden">

                    <div className="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />

                    <div className="relative z-10">

                        <div className="flex items-center gap-3 mb-14">
                            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                                <MapPin size={24} />
                            </div>

                            <span className="text-2xl font-bold">
                                CivicPulse
                            </span>
                        </div>

                        <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider">
                            Your community. Your voice.
                        </p>

                        <h2 className="text-4xl font-bold leading-tight mt-4">
                            Welcome back to
                            <span className="block text-blue-400">
                                CivicPulse.
                            </span>
                        </h2>

                        <p className="text-slate-300 mt-6 leading-relaxed max-w-md">
                            Stay connected with problems in your local area,
                            follow their progress and help your community move
                            forward.
                        </p>

                    </div>

                    <div className="relative z-10 space-y-4">

                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center">
                                <CheckCircle2
                                    size={18}
                                    className="text-blue-400"
                                />
                            </div>

                            <span className="text-slate-200">
                                Track reported problems
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center">
                                <CheckCircle2
                                    size={18}
                                    className="text-blue-400"
                                />
                            </div>

                            <span className="text-slate-200">
                                Verify issues around you
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center">
                                <CheckCircle2
                                    size={18}
                                    className="text-blue-400"
                                />
                            </div>

                            <span className="text-slate-200">
                                Follow resolution progress
                            </span>
                        </div>

                    </div>
                </div>

                {/* Login form */}
                <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">

                    <div className="lg:hidden flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-xl bg-[#08264A] text-white flex items-center justify-center">
                            <MapPin size={21} />
                        </div>

                        <span className="text-xl font-bold text-[#08264A]">
                            CivicPulse
                        </span>
                    </div>

                    <div className="mb-9">

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                            <LockKeyhole size={14} />
                            SECURE LOGIN
                        </div>

                        <h1 className="text-3xl font-bold text-[#08264A] mt-4">
                            Welcome Back
                        </h1>

                        <p className="text-slate-500 mt-2">
                            Login to continue managing and tracking your
                            community activity.
                        </p>

                    </div>

                    {error && (
                        <div className="mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 p-4 text-sm">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-semibold text-slate-700">
                                    Password
                                </label>

                                <span className="text-xs text-slate-400">
                                    Keep it secure
                                </span>
                            </div>

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#08264A] hover:bg-[#123E6B] disabled:bg-slate-400 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-blue-900/10"
                        >
                            {loading ? "Signing In..." : "Sign In"}

                            {!loading && (
                                <ArrowRight size={19} />
                            )}
                        </button>

                    </form>

                    <div className="mt-8 pt-7 border-t border-slate-100">

                        <p className="text-center text-sm text-slate-500">
                            Don't have a CivicPulse account?{" "}
                            <Link
                                to="/register"
                                className="text-blue-600 font-semibold hover:text-blue-700"
                            >
                                Create Account
                            </Link>
                        </p>

                    </div>

                    <div className="mt-6 rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-center gap-3">

                        <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                            <ShieldCheck size={19} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-slate-700">
                                Secure access
                            </p>

                            <p className="text-xs text-slate-400 mt-0.5">
                                Your account is protected with secure
                                authentication.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;