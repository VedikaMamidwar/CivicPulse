import { Search, Bell, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Explore", path: "/explore" },
        { name: "Report Problem", path: "/report" },
        { name: "My Reports", path: "/my-reports" },
        { name: "My Area", path: "/my-area" },
        { name: "AI Insights", path: "/ai-insights" },
    ];

    return (
        <nav className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">

            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                    <MapPin size={20} />
                </div>

                <span className="text-xl font-bold text-slate-800">
                    CivicPulse
                </span>
            </NavLink>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-7 text-sm font-medium">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600"
                                : "text-slate-600 hover:text-blue-600"
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
                <button className="text-slate-500 hover:text-blue-600">
                    <Search size={20} />
                </button>

                <button className="text-slate-500 hover:text-blue-600">
                    <Bell size={20} />
                </button>

                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
                    V
                </div>
            </div>
        </nav>
    );
}

export default Navbar;