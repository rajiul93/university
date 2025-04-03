import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    type: string,
    name: string,
    label?: string
}

const PHInput = ({ type, name, label }: TInputProps) => {
    return <div style={{ marginBottom: "10px" }}>
        <h4 style={{ color: "white" }}>
            {label ? label : null}
        </h4>
        <Controller
            name={name}
            render={({ field }) => <Input {...field} type={type} id={name} />}
        />
    </div>
};

export default PHInput;