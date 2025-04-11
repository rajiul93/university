import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../component/form/PHForm";
import PHInput from "../../../component/form/PHInput";
import { useAddFacultyMutation } from "../../../redux/features/admin/facultyManagement.api";
import { academicFacultyManagement } from "../../../schema/academicFacultyManagement.schema";
import { TResponse } from "../../../type";
import { AcademicFacultyResponse } from "../../../type/facultyManagement.type";

const CreateAcademicFaculty = () => {
    const [addFaculty] = useAddFacultyMutation();
    

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const tostId = toast.loading("Creating ...")
        try {
            const res = await addFaculty(data) as TResponse<AcademicFacultyResponse>
            if (res?.error?.data?.message) {
                toast.error("Faculty is already exist", { id: tostId })
            } else {
                toast.success("Faculty create successfully", { id: tostId })
            }
        } catch (error) {

            toast.error("Something went wrong", { id: tostId });

        }
    }
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicFacultyManagement)} >
                    <PHInput type="text" name="name" label="Create academic faculty" />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicFaculty;