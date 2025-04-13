import { TQueryParams, TResponseRedux } from "../../../type";
import { TAcademicDepartmentResponse } from "../../../type/academicDepartment.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
    getAllAcademicDepartment: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (
        response: TResponseRedux<TAcademicDepartmentResponse>
      ) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useAddDepartmentMutation, useGetAllAcademicDepartmentQuery } = academicManagementApi;
