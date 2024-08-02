import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddEmployeePage from "./pages/AddEmployeePage";
import MyInfoPage from "./pages/MyInfoPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import EmployeeInfoPage from "./pages/EmployeeInfoPage";
import RegisterPage from "./pages/RegisterPage";

function ProjectRoutes() {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/employee/:employeeid" element={<EmployeeInfoPage />} />
                    <Route path="/add-employee" element={<AddEmployeePage />} />
                    <Route path="/my-info" element={<MyInfoPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}

export default ProjectRoutes;
