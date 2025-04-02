import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Contact from "../page/Contact";
import Login from "../page/Login";
import Registration from "../page/Registration";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPath } from "./admin.routes";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.toutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/admin",
        element: <App />,
        children: routeGenerator(adminPath)
    },
    {
        path: "/faculty",
        element: <App />,
        children: routeGenerator(facultyPath)
    },
    {
        path: "/student",
        element: <App />,
        children: routeGenerator(studentPath)
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registration",
        element: <Registration />
    }
])

export default router