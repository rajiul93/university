import { z } from "zod";

export const academicFacultyManagement = z.object({
  name: z.string({ required_error: "this name field is require" }),
});
