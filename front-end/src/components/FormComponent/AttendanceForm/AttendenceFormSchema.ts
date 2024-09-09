import { z } from "zod";

export const AttendenceFormSchema = z.object({
  program: z.string().min(1, "Program is required").trim(),
  presentStudent:z.string().min(1, "PLease selelct a student").trim(),
  excusedAbsentStudent: z.string().min(1, "PLease selelct a student").trim(),
  unexcusedAbsentStudent: z.string().min(1, "PLease selelct a student").trim(),
});

export type AttendenceFormData = z.infer<typeof AttendenceFormSchema>;
