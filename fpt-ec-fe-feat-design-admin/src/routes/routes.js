import { Navigate, useRoutes } from "react-router-dom";
//
import AdminLayout from "../layouts/dashboard";
import Signin from "../pages/Signin";
// Client
import Home from "../pages/students/Home.jsx";
// Admin
import Dashboard from "../pages/admins/Dashboard";
import News from "../pages/admins/News";
import Employee from "../pages/admins/Employee";
import Student from "../pages/admins/Student";
import Task from "../pages/admins/Task";
import ProjectList from "../pages/admins/project/ProjectList";
import CreateProject from "../pages/admins/project/CreateProject";
import DetailProject from "../pages/admins/project/DetailProject";
import Manager from "../pages/admins/project/Manager";
import CreateCourse from "../pages/admins/course/CreateCourse";
import CreateSyllabus from "../pages/admins/syllabus/CreateSyllabus";
import DetailCourse from "../pages/admins/course/DetailCourse";
import DetailSyllabus from "../pages/admins/syllabus/DetailSyllabus";
import CreateSlot from "../pages/admins/syllabus/CreateSlot";
import DetailSlot from "../pages/admins/syllabus/DetailSlot";

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
                { path: "project", element: <Manager /> },
                { path: "news", element: <News /> },
                { path: "employee", element: <Employee /> },
                { path: "student", element: <Student /> },
                { path: "task", element: <Task /> },
                { path: "create-project", element: <CreateProject /> },
                { path: "create-course", element: <CreateCourse /> },
                { path: "create-syllabus", element: <CreateSyllabus /> },
                { path: "detail-project/:id", element: <DetailProject /> },
                { path: "detail-course/:id", element: <DetailCourse /> },
                { path: "detail-syllabus/:id", element: <DetailSyllabus /> },
                { path: "detail-slot/:id", element: <DetailSlot /> },
                { path: "create-slot", element: <CreateSlot /> },
                
            ],
        },
    ]);
    return routes;
}
