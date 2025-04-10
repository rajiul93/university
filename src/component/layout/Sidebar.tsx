import { Layout, Menu } from "antd";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/features/hooks";
import { adminPath } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.toutes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";

const { Sider } = Layout;


const Sidebar = () => {
    const userRole = {
        ADMIN: "admin",
        FACULTY: "faculty",
        STUDENT: "student"
    };
    const currentUser = useAppSelector(selectCurrentUser)

    let sidebarItems;

    switch (currentUser!.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPath, userRole.ADMIN);
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPath, userRole.FACULTY);
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPath, userRole.STUDENT);
            break;

    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            // onBreakpoint={(broken) => {
            //     console.log(broken);
            // }}
            // onCollapse={(collapsed, type) => {
            //     console.log(collapsed, type);
            // }}
        >
            <div className="demo-logo-vertical">
                <h1
                    style={{
                        color: "white",
                        textAlign: "center",
                        height: "4rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    PH University
                </h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;