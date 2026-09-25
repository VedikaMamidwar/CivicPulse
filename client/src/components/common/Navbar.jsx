import { Search, Bell, MapPin } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
    const navigate = useNavigate();

    const { user, isAuthenticated, logout } = useAuth();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Explore", path: "/explore" },
        { name: "Report Problem", path: "/report" },
        { name: "My Reports", path: "/my-reports" },
        { name: "My Area", path: "/my-area" },
        { name: "AI Insights", path: "/ai-insights" },
    ];

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

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

            {/* Right Side */}
            <div className="flex items-center gap-4">

                <button className="text-slate-500 hover:text-blue-600">
                    <Search size={20} />
                </button>

                <button className="text-slate-500 hover:text-blue-600">
                    <Bell size={20} />
                </button>

                {/* User */}
                {isAuthenticated ? (
                    <>
                        <div
                            className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold"
                            title={user?.name}
                        >
                            {user?.name?.charAt(0).toUpperCase() || "U"}
                        </div>

                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-medium transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <NavLink
                        to="/login"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition"
                    >
                        Login
                    </NavLink>
                )}

            </div>
        </nav>
    );
}

export default Navbar;