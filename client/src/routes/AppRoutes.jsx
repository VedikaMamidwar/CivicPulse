import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import ReportProblem from "../pages/ReportProblem";
import MyReports from "../pages/MyReports";
import MyArea from "../pages/MyArea";
import AIInsights from "../pages/AIInsights";
import ProblemDetails from "../pages/ProblemDetails";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/report" element={<ReportProblem />} />
            <Route path="/my-reports" element={<MyReports />} />
            <Route path="/my-area" element={<MyArea />} />
            <Route path="/ai-insights" element={<AIInsights />} />
            <Route path="/problem/:id" element={<ProblemDetails />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;