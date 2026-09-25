import { Mail, MapPin } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-slate-900 text-white mt-8">
            <div className="max-w-7xl mx-auto px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <MapPin size={20} />
                            </div>

                            <span className="text-xl font-bold">
                                CivicPulse
                            </span>
                        </div>

                        <p className="text-slate-400 mt-4 max-w-md leading-relaxed">
                            An AI-powered platform that helps local communities
                            report, verify, track, and resolve problems in their area.
                        </p>

                        <p className="text-slate-500 text-sm mt-5">
                            Report. Verify. Resolve.
                        </p>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Platform
                        </h3>

                        <div className="space-y-3 text-sm text-slate-400">
                            <p className="hover:text-white cursor-pointer">
                                Explore Issues
                            </p>

                            <p className="hover:text-white cursor-pointer">
                                Report Problem
                            </p>

                            <p className="hover:text-white cursor-pointer">
                                My Area
                            </p>

                            <p className="hover:text-white cursor-pointer">
                                AI Insights
                            </p>
                        </div>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Community
                        </h3>

                        <div className="space-y-3 text-sm text-slate-400">
                            <p className="hover:text-white cursor-pointer">
                                Community Guidelines
                            </p>

                            <p className="hover:text-white cursor-pointer">
                                Privacy
                            </p>

                            <p className="hover:text-white cursor-pointer">
                                Terms
                            </p>

                            <div className="flex gap-4 pt-2">
                                <Mail
                                    size={19}
                                    className="hover:text-white cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-500">
                    <p>
                        © 2026 CivicPulse. All rights reserved.
                    </p>

                    <p>
                        Built for better local communities.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;