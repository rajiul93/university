import AdminDashboard from "../page/admin/AdminDashboard";
import CreateAdmin from "../page/admin/CreateAdmin";
import CreateFaculty from "../page/admin/CreateFaculty";
import CreateStudent from "../page/admin/CreateStudent";
import AcademicDepartment from "../page/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../page/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../page/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../page/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../page/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../page/admin/academicManagement/CreateAcademicSemester";

 
export const adminPath = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard />
    },
    {
        name: "Academic Management",
        children :[
            {
                name: "Create A. Semester",
                path: "create-academic-semester",
                element: <CreateAcademicSemester />
            },
            {
                name: "Academic Semester",
                path: "academic-semester",
                element: <AcademicSemester />
            },
            {
                name: "Create A. Faculty",
                path: "create-academic-faculty",
                element: <CreateAcademicFaculty />
            },
            {
                name: "Academic Faculty",
                path: "academic-faculty",
                element: <AcademicFaculty />
            },
            {
                name: "Create A. Department",
                path: "create-academic-department",
                element: <CreateAcademicDepartment />
            },
            {
                name: "Academic Department",
                path: "academic-department",
                element: <AcademicDepartment />
            },
         
        ]

    }, 
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin />
            },
            {
                name: "Create Faculty",
                path: "create-faulty",
                element: <CreateFaculty />
            },
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />
            }
        ]
    },
]

