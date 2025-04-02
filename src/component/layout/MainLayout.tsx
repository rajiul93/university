import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { logOut } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/features/hooks';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;


const MainLayout = () => {
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logOut())
    }
    return (
        <Layout style={{ height: "100vh" }}>
            <Sidebar />
            <Layout>
                <Header style={{ padding: 0, display: "flex", justifyContent: "end", alignItems: "center" }} >
                    <div style={{ marginRight: "10px" }}>
                        <Button onClick={handleLogout}>Logout</Button>
                    </div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,

                        }}
                    >
                        <Outlet />
                    </div>
                </Content>

            </Layout>
        </Layout>
    );
};

export default MainLayout;