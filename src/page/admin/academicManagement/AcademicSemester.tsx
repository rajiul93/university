import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement.api";

import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../type";
import { TAcademicSemester } from "../../../type/academicManagement.type";

type TTableData = Pick<TAcademicSemester, | "name" | "endMonth" | "startMonth" | "year">

const AcademicSemester = () => {
    const [params, setParams] = useState<TQueryParams[]| undefined>(undefined)
    const { data: semesterData, isLoading, isFetching } = useGetAllAcademicSemesterQuery(params)
    const tableData = semesterData?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
        key: _id,
        name,
        startMonth,
        endMonth,
        year
    }))

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: "name",
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: [
                {
                    text: 'Autumn',
                    value: 'Autumn',
                },
                {
                    text: 'Fall',
                    value: 'Fall',
                },
                {
                    text: 'Summer',
                    value: 'Summer',
                },
            ],
        },
        {
            title: 'Year',
            key: "year",
            dataIndex: 'year',
            filters: [
                {
                    text: '2025',
                    value: '2025',
                },
                {
                    text: '2026',
                    value: '2026',
                },
                {
                    text: '2028',
                    value: '2028',
                },
                {
                    text: '2029',
                    value: '2029',
                },
            ],
        },
        {
            title: 'Start Month',
            key: "startMonth",
            dataIndex: 'startMonth',
        },
        {
            title: 'End Month',
            key: "endMonth",
            dataIndex: 'endMonth',
        },
        {
            title:"Action",
            key:"x",
            render:()=>{
                return <Button>Update</Button>
            }
        }
    ];

    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        if (extra.action === "filter") {
            const queryPrams :TQueryParams[] = []
            filters.name?.forEach((item) => queryPrams.push({ name: "name", value: item })) 
            filters.year?.forEach((item) => queryPrams.push({ name: "year", value: item }))
            setParams(queryPrams)
        }
    };

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <Table<TTableData>
                columns={columns}
                loading={isFetching}
                dataSource={tableData}
                onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </div>
    );
};

export default AcademicSemester;