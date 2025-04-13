import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../component/form/PHForm";
import PHInput from "../../../component/form/PHInput";
import PHSelect from "../../../component/form/PHSelect";
import { useAddDepartmentMutation } from "../../../redux/features/admin/academicDepartment.api";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/facultyManagement.api";
import { academicDepartmentManagement } from "../../../schema/academicDepartmentManagement.scheme";
import { TResponse } from "../../../type";
import { TAcademicDepartmentResponse } from "../../../type/academicDepartment.type";

const academicFacultyRequireData = {
    name: "fields",
    value: "name,_id"
}


const CreateAcademicDepartment = () => {
    const { data: academicFaculty, isLoading } = useGetAllAcademicFacultyQuery([academicFacultyRequireData])
    const [addAcademicDepartment] = useAddDepartmentMutation()
    if (isLoading) {
        return "Loading..."
    }
    const academicFacultyData = academicFaculty?.data?.map(item => (
        {
            label: item.name,
            value: item._id,
        })
    );

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const tostId = toast.loading("Creating ...")
        try {
            const res = await addAcademicDepartment(data) as TResponse<TAcademicDepartmentResponse>
            if (res?.error?.data?.message) {
                toast.error("Department is already exist", { id: tostId })
            } else {
                toast.success("Department create successfully", { id: tostId })
            }
        } catch (error) {
            toast.error("Something Wrong", { id: tostId })
        }
    }
 
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicDepartmentManagement)} >
                    <PHInput type="text" name="name" label="Create academic department" />
                    <PHSelect label="Academic Faculty" name="academicFaculty" options={academicFacultyData || []} />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicDepartment;