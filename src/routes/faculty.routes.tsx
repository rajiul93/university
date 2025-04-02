import FacultyDashboard from "../page/faculty/FacultyDashboard";
import OfferedCourse from "../page/faculty/OfferedCourse";

export const facultyPath = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard />

    },
    {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />

    }
]