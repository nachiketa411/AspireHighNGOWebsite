import { z } from "zod";

export const registrationFormSchema = z.object({
  firstName: z.string().min(1, "First Name is required").trim(),
  lastName: z.string().min(1, "Last Name is required").trim(),
  dob: z.string().min(1, "Date of Birth is required"),
  gradeLevel: z.string().min(1, "Grade Level is required").trim(),
  gender: z.enum(["Male", "Female", "Other", "Prefer not to say"], {
    required_error: "Gender is required",
  }),
  raceEthnicity: z.string().min(1, "Race/Ethnicity is required").trim(),
  primaryLanguage: z.string().min(1, "Primary Language is required").trim(),
  schoolName: z.string().min(1, "School Name is required").trim(),
  teacherName: z.string().min(1, "Teacher's Name is required").trim(),
  educationPrograms: z.array(z.string(), {
    required_error: "At least one Education Program must be selected",
  }),
  transportationMode: z.enum(
    [
      "School Bus",
      "Public Transportation",
      "Parent/Guardian Pickup",
      "Walking",
      "Other",
    ],
    {
      required_error: "Transportation Mode is required",
      invalid_type_error: "Transportation Mode must be a valid option",
    }
  ),
});

export type RegistrationFormData = z.infer<typeof registrationFormSchema>;
