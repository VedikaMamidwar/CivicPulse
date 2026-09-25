import {
    Bell,
    Search,
    MapPin,
    LayoutDashboard,
    FileText,
    BarChart3,
    Users,
    Settings,
    LogOut,
    Plus,
    AlertTriangle,
    Lightbulb,
    Trash2,
    MoreVertical,
    ChevronDown,
} from "lucide-react";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

function Dashboard() {
    const issueData = [
        { name: "Pending", value: 23 },
        { name: "In Progress", value: 32 },
        { name: "Resolved", value: 129 },
    ];

    const reportData = [
        { month: "Jan", reports: 45 },
        { month: "Feb", reports: 70 },
        { month: "Mar", reports: 58 },
        { month: "Apr", reports: 82 },
        { month: "May", reports: 92 },
        { month: "Jun", reports: 38 },
        { month: "Jul", reports: 66 },
        { month: "Aug", reports: 76 },
    ];

    const pieColors = ["#94a3b8", "#172554", "#2563eb"];

    return (
        <div className="min-h-screen bg-slate-100">

            {/* ================= TOP NAVBAR ================= */}
            <header className="h-16 bg-[#08234a] text-white flex items-center px-5">

                {/* Logo */}
                <div className="flex items-center gap-2 w-52">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <MapPin size={18} />
                    </div>

                    <span className="font-bold text-lg">
                        CivicPulse
                    </span>
                </div>

                {/* Search */}
                <div className="flex-1 flex justify-center">

                    <div className="w-full max-w-md bg-white rounded-md flex items-center px-3 py-2">
                        <Search
                            size={15}
                            className="text-slate-400"
                        />

                        <input
                            type="text"
                            placeholder="Search"
                            className="ml-2 w-full text-xs text-slate-700 outline-none"
                        />
                    </div>

                </div>

                {/* Right */}
                <div className="w-52 flex justify-end items-center gap-5">

                    <div className="relative">
                        <Bell size={18} />

                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-700">
                        V
                    </div>

                </div>

            </header>

            <div className="flex">

                {/* ================= SIDEBAR ================= */}
                <aside className="hidden md:flex w-52 min-h-[calc(100vh-64px)] bg-white border-r border-slate-200 flex-col">

                    <div className="p-3 space-y-1">

                        <SidebarItem
                            icon={<LayoutDashboard size={17} />}
                            label="Overview"
                            active
                        />

                        <SidebarItem
                            icon={<FileText size={17} />}
                            label="Reports"
                        />

                        <SidebarItem
                            icon={<BarChart3 size={17} />}
                            label="Analytics"
                        />

                        <SidebarItem
                            icon={<Users size={17} />}
                            label="Team"
                        />

                        <SidebarItem
                            icon={<Settings size={17} />}
                            label="Settings"
                        />

                    </div>

                    <div className="mt-auto p-4 border-t border-slate-100">

                        <button className="flex items-center gap-3 text-slate-400 text-sm hover:text-slate-700">
                            <LogOut size={17} />
                            Logout
                        </button>

                    </div>

                </aside>

                {/* ================= MAIN ================= */}
                <main className="flex-1 p-5 lg:p-6">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">

                        <div>
                            <h1 className="text-xl font-bold text-slate-800">
                                My dashboard
                            </h1>

                            <p className="text-xs text-slate-500 mt-1">
                                Monitor local issues and community activity
                            </p>
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-xs font-medium flex items-center gap-2">
                            <Plus size={15} />
                            New report
                        </button>

                    </div>

                    {/* ================= TOP SECTION ================= */}
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-4">

                        {/* MAP */}
                        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">

                            <div className="h-[390px] relative bg-[#dfe8ed] overflow-hidden">

                                {/* Map roads */}
                                <div className="absolute inset-0 opacity-70">

                                    {/* horizontal */}
                                    <div className="absolute top-[15%] -left-10 w-[120%] h-3 bg-white rotate-3" />
                                    <div className="absolute top-[31%] -left-10 w-[120%] h-2 bg-white -rotate-6" />
                                    <div className="absolute top-[49%] -left-10 w-[120%] h-4 bg-white rotate-2" />
                                    <div className="absolute top-[70%] -left-10 w-[120%] h-2 bg-white -rotate-5" />
                                    <div className="absolute top-[86%] -left-10 w-[120%] h-3 bg-white rotate-4" />

                                    {/* vertical */}
                                    <div className="absolute left-[12%] -top-10 h-[120%] w-3 bg-white rotate-12" />
                                    <div className="absolute left-[30%] -top-10 h-[120%] w-2 bg-white -rotate-6" />
                                    <div className="absolute left-[48%] -top-10 h-[120%] w-4 bg-white rotate-8" />
                                    <div className="absolute left-[67%] -top-10 h-[120%] w-2 bg-white -rotate-12" />
                                    <div className="absolute left-[84%] -top-10 h-[120%] w-3 bg-white rotate-6" />

                                </div>

                                {/* Green areas */}
                                <div className="absolute top-6 right-10 w-24 h-20 rounded-[40%] bg-green-100 opacity-70" />

                                <div className="absolute bottom-10 left-16 w-28 h-20 rounded-[50%] bg-green-100 opacity-60" />

                                {/* Map controls */}
                                <div className="absolute top-3 left-3 flex flex-col bg-white rounded shadow overflow-hidden">

                                    <button className="w-7 h-7 text-slate-500 border-b border-slate-200">
                                        +
                                    </button>

                                    <button className="w-7 h-7 text-slate-500">
                                        −
                                    </button>

                                </div>

                                {/* Marker 1 */}
                                <MapMarker
                                    top="18%"
                                    left="32%"
                                    color="bg-[#08234a]"
                                />

                                {/* Marker 2 */}
                                <MapMarker
                                    top="30%"
                                    left="55%"
                                    color="bg-blue-600"
                                />

                                {/* Marker 3 */}
                                <MapMarker
                                    top="42%"
                                    left="44%"
                                    color="bg-[#08234a]"
                                />

                                {/* Marker 4 */}
                                <MapMarker
                                    top="54%"
                                    left="72%"
                                    color="bg-blue-600"
                                />

                                {/* Marker 5 */}
                                <MapMarker
                                    top="64%"
                                    left="28%"
                                    color="bg-[#08234a]"
                                />

                                {/* Marker 6 */}
                                <MapMarker
                                    top="73%"
                                    left="58%"
                                    color="bg-[#08234a]"
                                />

                                {/* Cluster */}
                                <div className="absolute top-[27%] right-[15%] w-12 h-12 rounded-full bg-blue-900 text-white border-4 border-white shadow flex items-center justify-center text-xs font-bold">
                                    35
                                </div>

                                {/* Map labels */}
                                <MapLabel
                                    top="25%"
                                    left="18%"
                                    title="Potholes"
                                    subtitle="Broken street lights"
                                />

                                <MapLabel
                                    top="55%"
                                    left="34%"
                                    title="Potholes"
                                    subtitle="Traffic removal"
                                />

                                <MapLabel
                                    top="58%"
                                    right="12%"
                                    title="Illegal dumping"
                                    subtitle="Garbage"
                                />

                                {/* Map corner button */}
                                <div className="absolute top-3 right-3 bg-white rounded shadow p-1.5">
                                    <MapPin size={15} className="text-slate-500" />
                                </div>

                            </div>

                        </div>

                        {/* ================= SERVICE REQUESTS ================= */}
                        <div className="bg-white border border-slate-200 rounded-lg">

                            <div className="px-4 py-4 border-b border-slate-100 flex items-center justify-between">

                                <h2 className="font-semibold text-sm text-slate-800">
                                    Service requests
                                </h2>

                                <MoreVertical
                                    size={16}
                                    className="text-slate-400"
                                />

                            </div>

                            <div className="p-3 space-y-3">

                                <Request
                                    icon={<Lightbulb size={16} />}
                                    iconClass="bg-red-50 text-red-500"
                                    title="Broken streetlight"
                                    category="Current status"
                                    status="Current"
                                />

                                <Request
                                    icon={<AlertTriangle size={16} />}
                                    iconClass="bg-orange-50 text-orange-500"
                                    title="Pothole fixing"
                                    category="Current status"
                                    status="Current"
                                />

                                <Request
                                    icon={<Trash2 size={16} />}
                                    iconClass="bg-yellow-50 text-yellow-600"
                                    title="Graffiti removal"
                                    category="Current status"
                                    status="Current"
                                />

                                <Request
                                    icon={<Trash2 size={16} />}
                                    iconClass="bg-orange-50 text-orange-500"
                                    title="Illegal dumping"
                                    category="Current status"
                                    status="Current"
                                />

                            </div>

                        </div>

                    </div>

                    {/* ================= ANALYTICS ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_1fr_230px] gap-4 mt-4">

                        {/* PIE */}
                        <div className="bg-white border border-slate-200 rounded-lg p-4">

                            <div className="flex justify-between items-center mb-2">

                                <h2 className="text-sm font-semibold text-slate-800">
                                    Issues Breakdown
                                </h2>

                            </div>

                            <div className="flex items-center h-48">

                                <div className="w-[58%] h-full">

                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>

                                            <Pie
                                                data={issueData}
                                                dataKey="value"
                                                innerRadius={48}
                                                outerRadius={72}
                                                paddingAngle={2}
                                            >
                                                {issueData.map((item, index) => (
                                                    <Cell
                                                        key={item.name}
                                                        fill={pieColors[index]}
                                                    />
                                                ))}
                                            </Pie>

                                            <Tooltip />

                                        </PieChart>
                                    </ResponsiveContainer>

                                </div>

                                <div className="space-y-3">

                                    {issueData.map((item, index) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center gap-2"
                                        >

                                            <span
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{
                                                    backgroundColor: pieColors[index],
                                                }}
                                            />

                                            <span className="text-xs text-slate-600">
                                                {item.name}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                        {/* BAR */}
                        <div className="bg-white border border-slate-200 rounded-lg p-4">

                            <div className="flex items-center justify-between mb-2">

                                <h2 className="text-sm font-semibold text-slate-800">
                                    Report Volume
                                </h2>

                                <button className="text-xs text-slate-500 flex items-center gap-1">
                                    Past month
                                    <ChevronDown size={12} />
                                </button>

                            </div>

                            <div className="h-48">

                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={reportData}>

                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            vertical={false}
                                            stroke="#e2e8f0"
                                        />

                                        <XAxis
                                            dataKey="month"
                                            tick={{
                                                fontSize: 9,
                                                fill: "#94a3b8",
                                            }}
                                            axisLine={false}
                                            tickLine={false}
                                        />

                                        <YAxis
                                            tick={{
                                                fontSize: 9,
                                                fill: "#94a3b8",
                                            }}
                                            axisLine={false}
                                            tickLine={false}
                                        />

                                        <Tooltip />

                                        <Bar
                                            dataKey="reports"
                                            fill="#08234a"
                                            radius={[2, 2, 0, 0]}
                                        />

                                    </BarChart>
                                </ResponsiveContainer>

                            </div>

                        </div>

                        {/* ================= KPI ================= */}
                        <div className="space-y-4">

                            <div className="bg-[#08234a] rounded-lg p-5 text-white">

                                <p className="text-xs text-blue-200">
                                    Total Issues Reported
                                </p>

                                <h2 className="text-3xl font-bold mt-1">
                                    2,150
                                </h2>

                                <p className="text-[10px] text-blue-200 mt-1">
                                    Total issues reported
                                </p>

                            </div>

                            <div className="bg-white border border-slate-200 rounded-lg p-5">

                                <p className="text-xs text-slate-500">
                                    Issues Resolved Today
                                </p>

                                <h2 className="text-3xl font-bold text-slate-800 mt-1">
                                    170
                                </h2>

                                <p className="text-[10px] text-green-600 mt-1">
                                    Issues resolved today
                                </p>

                            </div>

                        </div>

                    </div>

                </main>
            </div>
        </div>
    );
}


/* ================= COMPONENTS ================= */

function SidebarItem({ icon, label, active }) {
    return (
        <div
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm cursor-pointer ${active
                ? "bg-blue-50 text-blue-700 font-medium"
                : "text-slate-500 hover:bg-slate-50"
                }`}
        >
            {icon}
            <span>{label}</span>
        </div>
    );
}


function MapMarker({ top, left, right, color }) {
    return (
        <div
            className="absolute"
            style={{
                top,
                left,
                right,
            }}
        >
            <div
                className={`w-7 h-7 rounded-full ${color} border-4 border-white shadow-lg flex items-center justify-center`}
            >
                <MapPin
                    size={13}
                    className="text-white"
                />
            </div>
        </div>
    );
}


function MapLabel({ top, left, right, title, subtitle }) {
    return (
        <div
            className="absolute bg-white rounded shadow-md px-2.5 py-2"
            style={{
                top,
                left,
                right,
            }}
        >
            <p className="text-[9px] font-semibold text-slate-700">
                {title}
            </p>

            <p className="text-[8px] text-slate-500 mt-0.5">
                {subtitle}
            </p>
        </div>
    );
}


function Request({
    icon,
    iconClass,
    title,
    category,
    status,
}) {
    return (
        <div className="border border-slate-200 rounded-md p-3">

            <div className="flex gap-3">

                <div
                    className={`w-8 h-8 rounded-md flex items-center justify-center ${iconClass}`}
                >
                    {icon}
                </div>

                <div className="flex-1 min-w-0">

                    <div className="flex items-center justify-between">

                        <p className="text-xs font-semibold text-slate-700 truncate">
                            {title}
                        </p>

                        <MoreVertical
                            size={13}
                            className="text-slate-400"
                        />

                    </div>

                    <p className="text-[10px] text-slate-400 mt-1">
                        {category}
                    </p>

                    <span className="inline-block mt-2 text-[9px] bg-blue-50 text-blue-600 px-2 py-1 rounded">
                        {status}
                    </span>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;