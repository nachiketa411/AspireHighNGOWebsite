import { z } from "zod";

export const NonAttendenceFormSchema = z.object({
  date: z.string().min(1, "Date is required").trim(),
  category: z.string().min(1, "PLease selelct a category").trim(),
  students: z.string().min(1, "Please select a  student").trim(),
});

export type NonAttendenceFormData = z.infer<typeof NonAttendenceFormSchema>;