import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string({
      required_error: "First Name is required",
      invalid_type_error: "Name must be a string",
    })
    .trim(),
  lastName: z
    .string({
      required_error: "Last Name is required",
      invalid_type_error: "Name must be a string",
    })
    .trim(),
  dob: z.string({
    required_error: "Date of Birth is required",
    invalid_type_error: "Date of Birth must be a string",
  }),
  gradeLevel: z
    .string({
      required_error: "Grade Level is required",
      invalid_type_error: "Grade Level must be a string",
    })
    .trim(),
  gender: z.enum(["Male", "Female", "Other", "Prefer not to say"]),
  raceEthnicity: z
    .string({
      required_error: "Race/Ethnicity is required",
      invalid_type_error: "Race/Ethnicity must be a string",
    })
    .trim(),
  raceEthnicityOther: z.string().optional(),
  primaryLanguage: z
    .string({
      required_error: "Primary Language is required",
      invalid_type_error: "Primary Language must be a string",
    })
    .trim(),
  schoolName: z
    .string({
      required_error: "School Name is required",
      invalid_type_error: "School Name must be a string",
    })
    .trim(),
  teacherName: z
    .string({
      required_error: "Teacher's Name is required",
      invalid_type_error: "Teacher's Name must be a string",
    })
    .trim(),
  educationPrograms: z.array(z.string()),
  educationProgramsOther: z.string().optional(),
  transportationMode: z.enum([
    "School Bus",
    "Public Transportation",
    "Parent/Guardian Pickup",
    "Walking",
    "Other",
  ]),
  transportationModeOther: z.string().optional(),
  parent1Name: z
    .string({
      required_error: "Parent/Guardian 1 Name is required",
      invalid_type_error: "Parent/Guardian 1 Name must be a string",
    })
    .trim(),
  parent1Relationship: z
    .string({
      required_error: "Relationship to Participant is required",
      invalid_type_error: "Relationship to Participant must be a string",
    })
    .trim(),
  parent1Phone: z.string({
    required_error: "Phone Number is required",
    invalid_type_error: "Phone Number must be a string",
  }),
  parent1Email: z.string().email({ message: "Invalid email address" }),
  parent1Address: z
    .string({
      required_error: "Address is required",
      invalid_type_error: "Address must be a string",
    })
    .trim(),
  parent2Name: z.string().optional(),
  parent2Relationship: z.string().optional(),
  parent2Phone: z.string().optional(),
  parent2Email: z.string().email("Invalid email address").optional(),
  parent2Address: z.string().optional(),
  emergencyContact1Name: z
    .string({
      required_error: "Emergency Contact 1 Name is required",
      invalid_type_error: "Emergency Contact 1 Name must be a string",
    })
    .trim(),
  emergencyContact1Relationship: z.string({
    required_error: "Relationship to Participant is required",
    invalid_type_error: "Relationship to Participant must be a string",
  }),
  emergencyContact1Phone: z.string({
    required_error: "Phone Number is required",
    invalid_type_error: "Phone Number must be a string",
  }),
  emergencyContact1Email: z
    .string()
    .email({ message: "Invalid email address" }),
  emergencyContact2Name: z.string().optional(),
  emergencyContact2Relationship: z.string().optional(),
  emergencyContact2Phone: z.string().optional(),
  emergencyContact2Email: z
    .string()
    .email({ message: "Invalid email address" })
    .optional(),
  authorizedPickup1Name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  authorizedPickup1Relationship: z.string({
    required_error: "Relationship to Participant is required",
    invalid_type_error: "Relationship to Participant must be a string",
  }),
  authorizedPickup1Phone: z.string({
    required_error: "Phone Number is required",
    invalid_type_error: "Phone Number must be a string",
  }),
  authorizedPickup2Name: z.string().optional(),
  authorizedPickup2Relationship: z.string().optional(),
  authorizedPickup2Phone: z.string().optional(),
  physicianName: z
    .string({
      required_error: "Primary Physician’s Name is required",
      invalid_type_error: "Primary Physician’s Name must be a string",
    })
    .trim(),
  physicianPhone: z.string({
    required_error: "Phone Number is required",
    invalid_type_error: "Phone Number must be a string",
  }),
  insuranceProvider: z
    .string({
      required_error: "Insurance Provider is required",
      invalid_type_error: "Insurance Provider must be a string",
    })
    .trim(),
  policyNumber: z
    .string({
      required_error: "Policy Number is required",
      invalid_type_error: "Policy Number must be a string",
    })
    .trim(),
  allergies: z.string().optional(),
  medications: z.enum(["Yes", "No"]),
  medicationsDetails: z.string().optional(),
  specialNeeds: z.enum(["Yes", "No"]),
  specialNeedsDetails: z.string().optional(),
  dietaryRestrictions: z.enum(["Yes", "No"]),
  dietaryRestrictionsDetails: z.string().optional(),
  mediaRelease: z.enum(["grant", "doNotGrant"]),
  fieldTripPermission: z.enum(["grant", "doNotGrant"]),
  medicalRelease: z.enum(["grant", "doNotGrant"]),
  signature: z.string({
    required_error: "Signature is required",
    invalid_type_error: "Signature must be a string",
  }),
  signatureDate: z.string({
    required_error: "Date is required",
    invalid_type_error: "Date must be a string",
  }),
});

export type RegistrationFormData = z.infer<typeof formSchema>;

export interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormData) => void;
}
