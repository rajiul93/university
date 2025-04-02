import AdminDashboard from "../page/admin/AdminDashboard";
import CreateAdmin from "../page/admin/CreateAdmin";
import CreateFaculty from "../page/admin/CreateFaculty";
import CreateStudent from "../page/admin/CreateStudent";
import AcademicSemester from "../page/admin/academicManagement/AcademicSemester";

 
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
                name: "Academic Semester",
                path: "academic-semester",
                element: <AcademicSemester />
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

// export const adminPath = adminPath2.reduce((acc: TPath[], item) => {
//     if (item.element && item.path) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }
//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element,
//             });
//         });
//     }
//     return acc;
// }, []);
 

// export const adminSidebarItems = adminPath.reduce((acc :TNave[], item) => {
//     if (item.name && item.path) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//         })),
//       });
//     }
//     return acc;
//   }, []);


// export const adminPath = [
//     {
//         index: true,
//         element: <AdminDashboard />
//     },
//     {
//         path: "dashboard",
//         element: <AdminDashboard />
//     },
//     {
//         path: "create-student",
//         element: <CreateStudent />
//     },
//     {
//         path: "create-faulty",
//         element: <CreateFaculty />
//     },
//     {
//         path: "create-admin",
//         element: <CreateAdmin />
//     }
// ]