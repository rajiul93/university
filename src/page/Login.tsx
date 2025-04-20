/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../component/form/PHForm";
import PHInput from "../component/form/PHInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUserToken } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/features/hooks";
import { verifyToken } from "../utils/verifyToken";
type Inputs = {
    id: string
    password: string
}
const style = {
    height: "100vh",
    backgroundImage: "url('https://png.pngtree.com/background/20250109/original/pngtree-modern-university-campus-seen-from-above-with-beautiful-green-spaces-contemporary-picture-image_16091603.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [login] = useLoginMutation()

    const defaultValues = {
        id: "A-0001",
        password: "admin1234"
    }
    const onSubmit: SubmitHandler<Inputs> = async (data: FieldValues) => {
        const tostID = toast.loading("Logging in")
        console.log(data);
        try {
            const result = await login(data).unwrap()
            const user = verifyToken(result.data.accessToken) as TUserToken
            dispatch(setUser({ user: user, token: result.data.accessToken }))
            navigate(`/${user.role}/dashboard`)
            toast.success("Log in successful", { id: tostID, duration: 2000 })
        } catch (error) {
            toast.error("something went wrong", { id: tostID, duration: 2000 })
        }
    }

    return (
        <Row justify="center" align="middle" style={style}>
            <h1 style={{font:"30px"}}>Rajul</h1>
            <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <PHInput name="id" type="text" label="ID" />
                <PHInput name="password" type="text" label="Password" />
                <Button htmlType="submit">Login</Button>
            </PHForm>
        </Row>
    );
};

export default Login;