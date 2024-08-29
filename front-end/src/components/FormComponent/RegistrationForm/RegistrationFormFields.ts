import { FormField } from "../Utilities/FormField";
import {
  createTextField,
  createDateField,
  createRadioField,
  createCheckboxField,
} from "../Utilities/formUtilities";
import { RegistrationFormData } from "./RegistrationFormSchema";

export const registrationFormFields: FormField<RegistrationFormData>[] = [
  createTextField("firstName", "First Name"),
  createTextField("lastName", "Last Name"),
  createDateField("dob", "Date of Birth"),
  createRadioField("gender", "Gender", [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
    { label: "Prefer not to say", value: "Prefer not to say" },
  ]),
  createTextField("raceEthnicity", "Race/Ethnicity"),
  createTextField("primaryLanguage", "Primary Language"),
  createTextField("schoolName", "School Name"),
  createTextField("teacherName", "Teacher's Name"),
  createCheckboxField("educationPrograms", "Current Education Programs", [
    { label: "Gifted and Talented", value: "Gifted and Talented" },
    { label: "Special Education", value: "Special Education" },
    { label: "ESL/ELL", value: "ESL/ELL" },
    { label: "Title I", value: "Title I" },
    { label: "504 Plan", value: "504 Plan" },
    { label: "Other", value: "Other" },
  ]),
  createRadioField(
    "transportationMode",
    "Mode of Transportation to After School Program",
    [
      { label: "School Bus", value: "School Bus" },
      { label: "Public Transportation", value: "Public Transportation" },
      { label: "Parent/Guardian Pickup", value: "Parent/Guardian Pickup" },
      { label: "Walking", value: "Walking" },
      { label: "Other", value: "Other" },
    ]
  ),
];
