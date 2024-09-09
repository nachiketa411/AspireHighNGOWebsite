// forms/AttendenceFormFields.ts
import { FormField } from "../Utilities/FormField";
import { createSelectField } from "../Utilities/formUtilities";
import { AttendenceFormData } from "./AttendenceFormSchema";

// This function receives the student and program data and returns form fields
export const AttendenceFormFields = (
  students: { value: string; label: string }[],
  programs: { value: string; label: string }[]
): FormField<AttendenceFormData>[] => {
  return [
    createSelectField("program", "Program", programs),
    createSelectField(
      "presentStudent",
      "Present Students (Select the student whose parent is present)",
      students
    ),
    createSelectField(
      "excusedAbsentStudent",
      "Excused Absent Students",
      students
    ),
    createSelectField(
      "unexcusedAbsentStudent",
      "Unexcused Absent Students",
      students
    ),
  ];
};
