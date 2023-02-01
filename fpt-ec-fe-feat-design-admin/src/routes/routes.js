import { Navigate, useRoutes } from "react-router-dom";
//
import AdminLayout from "../layouts/dashboard";
import Signin from "../pages/Signin";
// Client
import Home from "../pages/students/Home.jsx";
// Admin
import Dashboard from "../pages/admins/Dashboard";
import Project from "../pages/admins/Project.jsx";
import News from "../pages/admins/News";
import Employee from "../pages/admins/Employee";
import Student from "../pages/admins/Student";
import Task from "../pages/admins/Task";

export default function Router() {
    const routes = useRoutes([
        {
            path: "signin",
            element: <Signin />,
        },
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/admin",
            element: <AdminLayout />,
            children: [
                { element: <Navigate to="/admin/dashboard" /> },
                { path: "dashboard", element: <Dashboard /> },
                { path: "project", element: <Project /> },
                { path: "news", element: <News /> },
                { path: "employee", element: <Employee /> },
                { path: "student", element: <Student /> },
                { path: "task", element: <Task /> },
            ],
        },
    ]);
    return routes;
}
