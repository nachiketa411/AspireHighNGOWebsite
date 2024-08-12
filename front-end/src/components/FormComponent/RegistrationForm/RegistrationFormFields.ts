import { RegistrationFormData } from "./RegistrationFormSchema";
import { FormField } from "./RegistrationFormSchema";

export const registrationFormFields: FormField<RegistrationFormData>[] = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "dob", label: "Date of Birth", type: "date" },
  { name: "gradeLevel", label: "Grade Level", type: "text" },
  {
    name: "gender",
    label: "Gender",
    type: "radio",
    options: [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      { label: "Other", value: "Other" },
      { label: "Prefer not to say", value: "Prefer not to say" },
    ],
  },
  { name: "raceEthnicity", label: "Race/Ethnicity", type: "text" },
  { name: "primaryLanguage", label: "Primary Language", type: "text" },
  { name: "schoolName", label: "School Name", type: "text" },
  { name: "teacherName", label: "Teacher’s Name", type: "text" },
  {
    name: "educationPrograms",
    label: "Current Education Programs",
    type: "checkbox",
    options: [
      { label: "Gifted and Talented", value: "Gifted and Talented" },
      { label: "Special Education", value: "Special Education" },
      { label: "ESL/ELL", value: "ESL/ELL" },
      { label: "Title I", value: "Title I" },
      { label: "504 Plan", value: "504 Plan" },
      { label: "Other", value: "Other" },
    ],
  },
  {
    name: "transportationMode",
    label: "Mode of Transportation to After School Program",
    type: "radio",
    options: [
      { label: "School Bus", value: "School Bus" },
      { label: "Public Transportation", value: "Public Transportation" },
      { label: "Parent/Guardian Pickup", value: "Parent/Guardian Pickup" },
      { label: "Walking", value: "Walking" },
      { label: "Other", value: "Other" },
    ],
  },
];
