function AdminDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-900">
                    Admin Dashboard
                </h1>

                <p className="mt-2 text-slate-500">
                    Welcome to the CivicPulse administration panel.
                </p>

                <div className="mt-8 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                        Admin Access
                    </h2>

                    <p className="mt-2 text-slate-600">
                        You are authenticated as an administrator.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;