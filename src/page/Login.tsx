/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "antd";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import PHForm from "../component/form/PHForm";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUserToken } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/features/hooks";
import { verifyToken } from "../utils/verifyToken";
type Inputs = {
    id: string
    password: string
}


const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [login] = useLoginMutation()

    const {
        register,
        handleSubmit
    } = useForm<Inputs>({
        defaultValues: {
            id: "A-0001",
            password: "admin1234"
        }
    })

    const onSubmit: SubmitHandler<Inputs> = async (data: FieldValues) => {
        const tostID = toast.loading("Logging in")
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
        <PHForm onSubmit={onSubmit}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id"  {...register("id")} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password"{...register("password")} />
            </div>
            <Button htmlType="submit">Login</Button>
        </PHForm>
    );
};

export default Login;