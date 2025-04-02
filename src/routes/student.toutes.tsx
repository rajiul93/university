import OfferedCourse from "../page/student/OfferedCourse";
import StudentDashboard from "../page/student/StudentDashboard";

export const studentPath = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard />

    },
    {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />

    }
]