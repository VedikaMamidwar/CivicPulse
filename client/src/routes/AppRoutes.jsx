import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import ReportProblem from "../pages/ReportProblem";
import MyReports from "../pages/MyReports";
import MyArea from "../pages/MyArea";
import AIInsights from "../pages/AIInsights";
import ProblemDetails from "../pages/ProblemDetails";

import ProtectedRoute from "../components/common/ProtectedRoute";
import AdminRoute from "../components/common/AdminRoute";

import AdminDashboard from "../pages/admin/AdminDashboard";

function AppRoutes() {
    return (
        <Routes>

            {/* Landing Page */}
            <Route path="/" element={<Home />} />

            {/* Authentication */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Citizen Routes */}
            <Route element={<ProtectedRoute />}>

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/explore"
                    element={<Explore />}
                />

                <Route
                    path="/report"
                    element={<ReportProblem />}
                />

                <Route
                    path="/my-reports"
                    element={<MyReports />}
                />

                <Route
                    path="/my-area"
                    element={<MyArea />}
                />

                <Route
                    path="/ai-insights"
                    element={<AIInsights />}
                />

                <Route
                    path="/problem/:id"
                    element={<ProblemDetails />}
                />

            </Route>

            {/* Protected Admin Routes */}
            <Route element={<AdminRoute />}>

                <Route
                    path="/admin"
                    element={<AdminDashboard />}
                />

            </Route>

        </Routes>
    );
}

export default AppRoutes;