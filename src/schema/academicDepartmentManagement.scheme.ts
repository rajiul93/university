import { z } from "zod";

export const academicDepartmentManagement = z.object({
  name: z.string({ required_error: "this name field is require" }),
  academicFaculty: z.string({ required_error: "this academicFaculty field is require" }),
});
