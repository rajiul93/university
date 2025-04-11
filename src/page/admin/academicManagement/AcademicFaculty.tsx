import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/facultyManagement.api";
import { TQueryParams } from "../../../type";
import { AcademicFacultyResponse } from "../../../type/facultyManagement.type";
 

type TTableData =  Pick<AcademicFacultyResponse , "name"  >

const AcademicFaculty = () => {

       const [params, setParams] = useState<TQueryParams[]| undefined>(undefined)
 

    const { data: facultyData, isLoading, isFetching } = useGetAllAcademicFacultyQuery(params)
    const tableData = facultyData?.data?.map(({ _id, name }) => ({
        key: _id,
        name,
      
    }))
    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: "name",
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: [
                {
                    text: 'Business',
                    value: 'Business',
                },
                {
                    text: 'Programming',
                    value: 'Programming',
                },
                {
                    text: 'Engineering',
                    value: 'Engineering',
                },
            ],
        },
        {
            title:"Action",
            key:"x",
            render:()=>{
                return <Button>Details</Button>
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
        <Table<TTableData>
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
    />
    );
};

export default AcademicFaculty;