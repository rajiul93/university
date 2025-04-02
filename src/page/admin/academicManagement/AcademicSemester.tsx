import { useGetAllAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
    const { data } = useGetAllAcademicSemesterQuery(undefined)
    console.log(data);
    return (
        <div>
            AcademicSemester
            AcademicSemester
        </div>
    );
};

export default AcademicSemester;