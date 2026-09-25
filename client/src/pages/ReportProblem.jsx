import {
    MapPin,
    Upload,
    Sparkles,
} from "lucide-react";

function ReportProblem() {
    return (
        <main className="px-8 py-10">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-sm font-semibold text-blue-600">
                        REPORT AN ISSUE
                    </p>

                    <h1 className="text-3xl font-bold text-slate-900 mt-1">
                        What's happening in your area?
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Tell us about the problem and CivicPulse AI will help
                        analyze and categorize your report.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">

                    {/* Problem title */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Problem title
                        </label>

                        <input
                            type="text"
                            placeholder="Example: Street light not working"
                            className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Describe the problem
                        </label>

                        <textarea
                            rows="5"
                            placeholder="Describe what is happening, where it is happening, and how long you have noticed it..."
                            className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-500"
                        />
                    </div>

                    {/* Category */}
                    <div className="mt-6">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Category
                        </label>

                        <select className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none bg-white focus:border-blue-500">
                            <option value="">Select category</option>
                            <option>Road Damage</option>
                            <option>Garbage & Cleanliness</option>
                            <option>Street Lights</option>
                            <option>Water Issues</option>
                            <option>Traffic</option>
                            <option>Public Transport</option>
                            <option>Electricity</option>
                            <option>Environment</option>
                            <option>Public Infrastructure</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div className="mt-6">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Location
                        </label>

                        <div className="flex gap-3">
                            <div className="flex-1 border border-slate-200 rounded-lg px-4 py-3 flex items-center gap-3">
                                <MapPin size={19} className="text-blue-600" />

                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="outline-none w-full"
                                />
                            </div>

                            <button
                                type="button"
                                className="border border-slate-200 rounded-lg px-4 text-sm font-medium text-slate-700 hover:border-blue-500"
                            >
                                Use my location
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="mt-6">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Add a photo
                        </label>

                        <label className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition">
                            <Upload size={28} className="text-slate-400" />

                            <p className="text-sm font-medium text-slate-700 mt-3">
                                Upload an image of the problem
                            </p>

                            <p className="text-xs text-slate-400 mt-1">
                                JPG, PNG up to 5MB
                            </p>

                            <input type="file" className="hidden" accept="image/*" />
                        </label>
                    </div>

                    {/* AI information */}
                    <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5 flex gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
                            <Sparkles size={20} className="text-blue-600" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800">
                                CivicPulse AI
                            </h3>

                            <p className="text-sm text-slate-600 mt-1">
                                AI will analyze your report, detect possible duplicate
                                issues, and suggest a priority level.
                            </p>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end mt-8">
                        <button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold"
                        >
                            Submit Report
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default ReportProblem;