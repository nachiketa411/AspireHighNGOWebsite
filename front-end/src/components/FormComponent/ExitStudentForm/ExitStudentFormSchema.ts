import { z } from "zod";

export const ExitStudentFormSchema = z.object({
  date: z.string().min(1, "Date is required").trim(),
  students: z.string().min(1, "Please select a student").trim(),
  exitType: z.enum(["withdrew", "dropped"]),
  reason: z.array(z.string()).min(1, "At least one reason must be selected"),
  reporter: z.string().min(1, "Reporter Full Name is required").trim(),
});

export type ExitStudentFormData = z.infer<typeof ExitStudentFormSchema>;
