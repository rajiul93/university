import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "this name field is require" }),
  year: z.string({ required_error: "this year field is require" }),
  startMonth: z.string({ required_error: "this start month field is require" }),
  endMonth: z.string({ required_error: "this name end month is require" }),
});
