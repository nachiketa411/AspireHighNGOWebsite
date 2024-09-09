import { FormField } from "../Utilities/FormField";
import {
  createDateField,
  createTextField,
  createSelectField,
  createRadioField,
  createCheckboxField

} from "../Utilities/formUtilities";
import { ExitStudentFormData } from "./ExitStudentFormSchema";

export const ExitStudentFormFields=(
  students: { value: string; label: string }[],
): FormField<ExitStudentFormData>[]=> [
 createDateField("date","Exit Date"),
 createSelectField("students","Student Name",students),
 createRadioField("exitType", "Exit Type", [
  { label: "Withdrew", value: "withdrew" },
  { label: "Dropped", value: "dropped" },
]),
  createCheckboxField("reason", "Reason", [
  { label: "Attendance", value: "Attendance" },
  { label: "Schedule Conflict", value: "Schedule Conflict" },
  { label: "Moved out of District", value: "Moved out of District" },
]),
   createTextField("reporter","Reporter Full Name")
];