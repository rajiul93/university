import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { monthOption } from "../../../component/constant/global";
import { nameOptions } from "../../../component/constant/semester";
import PHForm from "../../../component/form/PHForm";
import PHSelect from "../../../component/form/PHSelect";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { academicSemesterSchema } from "../../../schema/academicManagement.schema";
import { TResponse } from "../../../type/global";

const CreateAcademicSemester = () => {

    const [addAcademicSemester] = useAddAcademicSemesterMutation()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const tostId = toast.loading("Creating ...")
        const name = nameOptions[Number(data?.name) - 1]?.label
        const semesterData = {
            name: name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth,
        }
        try {
            const res = await addAcademicSemester(semesterData) as TResponse
            if (res.error.data.message) {
                toast.error("Semester is already exist", { id: tostId })
            } else {
                toast.success("Semester create successfully", { id: tostId })
            }
        } catch (error) {
            toast.error("something went wrong", { id: tostId })
        }
    }

    const currentYear = new Date().getFullYear()
    const yearOption = [0, 2, 3, 4, 5].map(number => (
        {
            value: String(currentYear + number),
            label: String(currentYear + number)
        }
    ))



    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)} >
                    <PHSelect label="Semester" name="name" options={nameOptions} />
                    <PHSelect label="Year" name="year" options={yearOption} />
                    <PHSelect label="Start Month" name="startMonth" options={monthOption} />
                    <PHSelect label="End Month" name="endMonth" options={monthOption} />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;