import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../component/form/PHForm";
import PHInput from "../../../component/form/PHInput";
import PHSelect from "../../../component/form/PHSelect";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/facultyManagement.api";
import { academicDepartmentManagement } from "../../../schema/academicDepartmentManagement.scheme";

const CreateAcademicDepartment = () => {
    const { data: academicFaculty, isLoading } = useGetAllAcademicFacultyQuery([
        {
            name: "fields",
            value: "name,_id"
        }
    ])
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
        console.log(data);
    }

    console.log(academicFaculty);
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