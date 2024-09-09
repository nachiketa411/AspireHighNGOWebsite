import { FormField } from "../Utilities/FormField";
import {
  createDateField,
  createTextField,
  createSelectField

} from "../Utilities/formUtilities";
import { NonAttendenceFormData } from "./NonAttendenceFormSchema";

export const NonAttendenceFormFields=(
  students: { value: string; label: string }[]
): FormField<NonAttendenceFormData>[] => [
 createDateField("date","Date"),
 createTextField("category","Category"),
 createSelectField("students","Students \n\nIf a parent of a student is present at the event, select the student name",students),
];