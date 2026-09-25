import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    MapPin,
    ShieldCheck,
    Users,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { registerUser } from "../../services/authService";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        area: "",
    });

    const [message, setMessage] = useState("");
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

        setMessage("");
        setError("");
        setLoading(true);

        try {
            const data = await registerUser(formData);

            setMessage(
                `${data.message}. Your User ID is ${data.user.userId}`
            );

            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                area: "",
            });

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Registration failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f7fa] flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">

                {/* Left branding panel */}
                <div className="hidden lg:flex relative bg-[#08264A] text-white p-12 flex-col justify-between overflow-hidden">

                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

                    <div className="relative z-10">

                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                                <MapPin size={24} />
                            </div>

                            <span className="text-2xl font-bold">
                                CivicPulse
                            </span>
                        </div>

                        <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
                            Report • Verify • Resolve
                        </p>

                        <h2 className="text-4xl font-bold leading-tight mt-4">
                            Make your community
                            <span className="text-blue-400">
                                {" "}better.
                            </span>
                        </h2>

                        <p className="text-slate-300 mt-6 leading-relaxed max-w-md">
                            Join your local community, report real problems,
                            verify issues and help track them until they are
                            resolved.
                        </p>

                    </div>

                    <div className="relative z-10 space-y-4">

                        <div className="flex items-center gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-blue-400"
                            />
                            <span className="text-slate-200">
                                Report local problems
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-blue-400"
                            />
                            <span className="text-slate-200">
                                Verify community issues
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-blue-400"
                            />
                            <span className="text-slate-200">
                                Track resolution progress
                            </span>
                        </div>

                    </div>
                </div>

                {/* Registration form */}
                <div className="p-7 sm:p-10 lg:p-12">

                    <div className="lg:hidden flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-[#08264A] text-white flex items-center justify-center">
                            <MapPin size={21} />
                        </div>

                        <span className="text-xl font-bold text-[#08264A]">
                            CivicPulse
                        </span>
                    </div>

                    <div className="mb-8">
                        <p className="text-blue-600 font-semibold text-sm">
                            CREATE YOUR ACCOUNT
                        </p>

                        <h1 className="text-3xl font-bold text-[#08264A] mt-2">
                            Join CivicPulse
                        </h1>

                        <p className="text-slate-500 mt-2">
                            Create your account and start making a difference
                            in your local area.
                        </p>
                    </div>

                    {message && (
                        <div className="mb-5 flex gap-3 items-start rounded-xl bg-green-50 border border-green-200 text-green-700 p-4 text-sm">
                            <CheckCircle2 size={19} className="mt-0.5" />
                            <span>{message}</span>
                        </div>
                    )}

                    {error && (
                        <div className="mb-5 rounded-xl bg-red-50 border border-red-200 text-red-700 p-4 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Email
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
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                                />
                            </div>

                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                required
                                minLength={6}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                            />

                            <p className="text-xs text-slate-400 mt-2">
                                Minimum 6 characters
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Local Area
                            </label>

                            <div className="relative">
                                <MapPin
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    placeholder="e.g. Kothrud, Pune"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#08264A] hover:bg-[#123E6B] disabled:bg-slate-400 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-blue-900/10"
                        >
                            {loading
                                ? "Creating Account..."
                                : "Create CivicPulse Account"}

                            {!loading && <ArrowRight size={19} />}
                        </button>

                    </form>

                    <div className="mt-7 pt-6 border-t border-slate-100">

                        <p className="text-center text-sm text-slate-500">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-blue-600 font-semibold hover:text-blue-700"
                            >
                                Login here
                            </Link>
                        </p>

                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">

                        <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center gap-2">
                            <ShieldCheck
                                size={18}
                                className="text-blue-600"
                            />
                            <span className="text-xs text-slate-500">
                                Secure account
                            </span>
                        </div>

                        <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center gap-2">
                            <Users
                                size={18}
                                className="text-blue-600"
                            />
                            <span className="text-xs text-slate-500">
                                Community powered
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;