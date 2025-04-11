import { TResponseRedux } from "../../../type";
import { AcademicFacultyResponse } from "../../../type/facultyManagement.type";
import { baseApi } from "../../api/baseApi";
import { TQueryParams } from "./../../../type/global";

const facultyManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    getAllAcademicFaculty: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-faculties",
          method: "GET",

          params: params,
        };
      },
      transformResponse: (
        response: TResponseRedux<AcademicFacultyResponse[]>
      ) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useAddFacultyMutation, useGetAllAcademicFacultyQuery } =
  facultyManagementApi;
