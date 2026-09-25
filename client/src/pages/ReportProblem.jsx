import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    MapPin,
    FileText,
    Tag,
    Navigation,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { createProblem } from "../services/problemService";

function ReportProblem() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        address: "",
        latitude: "",
        longitude: "",
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
            const data = await createProblem({
                ...formData,
                latitude: formData.latitude
                    ? Number(formData.latitude)
                    : undefined,
                longitude: formData.longitude
                    ? Number(formData.longitude)
                    : undefined,
            });

            setMessage(data.message);

            setFormData({
                title: "",
                description: "",
                category: "",
                address: "",
                latitude: "",
                longitude: "",
            });

            setTimeout(() => {
                navigate("/my-reports");
            }, 1500);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Failed to report problem. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fafc]">

            {/* Header */}
            <section className="bg-white border-b border-slate-200">

                <div className="max-w-7xl mx-auto px-6 py-10">

                    <div className="flex items-center gap-3 text-blue-600 text-sm font-semibold">
                        <MapPin size={18} />
                        CIVICPULSE
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-[#08264A] mt-3">
                        Report a Local Problem
                    </h1>

                    <p className="text-slate-500 mt-2 max-w-2xl">
                        Tell us about a problem in your community. Your report
                        can help bring attention to issues that need action.
                    </p>

                </div>

            </section>


            {/* Main */}
            <main className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid lg:grid-cols-[1fr_340px] gap-8">

                    {/* Form */}
                    <div className="bg-white border border-blue-100 rounded-2xl shadow-[0_8px_30px_rgba(8,38,74,0.08)] overflow-hidden">

                        {/* Form top */}
                        <div className="bg-[#08264A] px-7 py-6 text-white">

                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                                    <FileText size={21} />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold">
                                        Problem Details
                                    </h2>

                                    <p className="text-blue-200 text-sm mt-1">
                                        Provide accurate information about the
                                        issue.
                                    </p>
                                </div>

                            </div>

                        </div>


                        <form
                            onSubmit={handleSubmit}
                            className="p-7 space-y-6"
                        >

                            {/* Success */}
                            {message && (
                                <div className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-200 text-green-700 p-4 text-sm">
                                    <CheckCircle2
                                        size={19}
                                        className="mt-0.5"
                                    />
                                    <span>{message}</span>
                                </div>
                            )}


                            {/* Error */}
                            {error && (
                                <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 p-4 text-sm">
                                    {error}
                                </div>
                            )}


                            {/* Title */}
                            <div>

                                <label className="flex items-center gap-2 text-sm font-semibold text-[#08264A] mb-2">
                                    <FileText size={16} />
                                    Problem Title
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. Large pothole near main road"
                                    required
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                                />

                            </div>


                            {/* Category */}
                            <div>

                                <label className="flex items-center gap-2 text-sm font-semibold text-[#08264A] mb-2">
                                    <Tag size={16} />
                                    Category
                                </label>

                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                                >
                                    <option value="">
                                        Select problem category
                                    </option>

                                    <option value="Roads">
                                        Roads
                                    </option>

                                    <option value="Water">
                                        Water
                                    </option>

                                    <option value="Electricity">
                                        Electricity
                                    </option>

                                    <option value="Garbage">
                                        Garbage
                                    </option>

                                    <option value="Streetlights">
                                        Streetlights
                                    </option>

                                    <option value="Drainage">
                                        Drainage
                                    </option>

                                    <option value="Public Safety">
                                        Public Safety
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>
                                </select>

                            </div>


                            {/* Description */}
                            <div>

                                <label className="block text-sm font-semibold text-[#08264A] mb-2">
                                    Problem Description
                                </label>

                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe what is happening, where it is happening and how it affects the community..."
                                    required
                                    rows={6}
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                                />

                            </div>


                            {/* Location */}
                            <div className="border-t border-slate-100 pt-6">

                                <div className="flex items-center gap-2 mb-5">

                                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <Navigation size={18} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-[#08264A]">
                                            Problem Location
                                        </h3>

                                        <p className="text-xs text-slate-400 mt-0.5">
                                            Help us identify the exact area.
                                        </p>
                                    </div>

                                </div>


                                {/* Address */}
                                <div>

                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Address / Location
                                    </label>

                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="e.g. Main Road, Kothrud, Pune"
                                        required
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                                    />

                                </div>


                                {/* Coordinates */}
                                <div className="grid sm:grid-cols-2 gap-5 mt-5">

                                    <div>

                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Latitude
                                        </label>

                                        <input
                                            type="number"
                                            step="any"
                                            name="latitude"
                                            value={formData.latitude}
                                            onChange={handleChange}
                                            placeholder="e.g. 18.5204"
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                                        />

                                    </div>


                                    <div>

                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Longitude
                                        </label>

                                        <input
                                            type="number"
                                            step="any"
                                            name="longitude"
                                            value={formData.longitude}
                                            onChange={handleChange}
                                            placeholder="e.g. 73.8567"
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* Submit */}
                            <div className="pt-2">

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#08264A] hover:bg-[#123E6B] disabled:bg-slate-400 text-white font-semibold px-7 py-3.5 rounded-xl transition shadow-lg shadow-blue-900/10"
                                >
                                    {loading
                                        ? "Submitting Report..."
                                        : "Submit Problem Report"}

                                    {!loading && (
                                        <ArrowRight size={18} />
                                    )}
                                </button>

                            </div>

                        </form>

                    </div>


                    {/* Right information panel */}
                    <aside className="space-y-5">

                        {/* Important */}
                        <div className="bg-[#08264A] rounded-2xl p-6 text-white shadow-lg">

                            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                                <MapPin size={21} />
                            </div>

                            <h3 className="text-lg font-bold mt-5">
                                Make your report useful
                            </h3>

                            <p className="text-blue-100 text-sm leading-relaxed mt-2">
                                Clear information helps the community and
                                administrators understand the problem faster.
                            </p>

                        </div>


                        {/* Tips */}
                        <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_8px_25px_rgba(8,38,74,0.07)]">

                            <h3 className="font-bold text-[#08264A]">
                                Reporting Tips
                            </h3>

                            <div className="space-y-4 mt-5">

                                <div className="flex gap-3">

                                    <div className="w-7 h-7 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                                        1
                                    </div>

                                    <p className="text-sm text-slate-500">
                                        Give the problem a clear and specific
                                        title.
                                    </p>

                                </div>


                                <div className="flex gap-3">

                                    <div className="w-7 h-7 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                                        2
                                    </div>

                                    <p className="text-sm text-slate-500">
                                        Describe exactly what is happening.
                                    </p>

                                </div>


                                <div className="flex gap-3">

                                    <div className="w-7 h-7 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                                        3
                                    </div>

                                    <p className="text-sm text-slate-500">
                                        Provide an accurate location.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Workflow */}
                        <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_8px_25px_rgba(8,38,74,0.07)]">

                            <h3 className="font-bold text-[#08264A]">
                                What happens next?
                            </h3>

                            <div className="mt-5 space-y-4">

                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#08264A] text-white flex items-center justify-center text-xs font-bold">
                                        01
                                    </span>

                                    <span className="text-sm text-slate-600">
                                        Report submitted
                                    </span>
                                </div>

                                <div className="h-4 border-l border-slate-200 ml-4" />

                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#08264A] text-white flex items-center justify-center text-xs font-bold">
                                        02
                                    </span>

                                    <span className="text-sm text-slate-600">
                                        Community verification
                                    </span>
                                </div>

                                <div className="h-4 border-l border-slate-200 ml-4" />

                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                                        03
                                    </span>

                                    <span className="text-sm text-slate-600">
                                        Review & resolution
                                    </span>
                                </div>

                            </div>

                        </div>

                    </aside>

                </div>

            </main>

        </div>
    );
}

export default ReportProblem;