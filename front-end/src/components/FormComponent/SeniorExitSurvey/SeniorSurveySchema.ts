import { z } from "zod";

const relationshipOptions = ["Parent", "Relative", "Friend", "Other"] as const;
const yesNoOptions = ["Yes", "No"] as const;
const planForFallOptions = [
  "2-year community college",
  "4-year community college",
  "trade school",
  "military academy",
  "Work Full-Time or Part-Time",
  "Other"
] as const;
const reasonOptions = [
  "2-year community collge",
  "4-year community collge",
  "Need break from school",
  "Need to work",
  "My grade/test scores are not high enough",
  "I don't need more education to be successful in my chosen career",
  "I don't need more education to make money",
  "I want to start a family",
  "I need to take care of a family member",
  "it costs too much",
  "I am undocumented",
  "I don't know how to enroll",
  "Most of my friends are not going",
  "I lived too far away from where class is offered",
  "I am not motivated to go",
  "Other"
] as const;

export const SeniorSurveySchema = z.object({
  PersonalEmail: z.string().email("A valid email is required").min(1, "Personal email is required").trim(),
  firstName: z.string().min(1, "First name is required").trim(),
  middleName: z.string().trim().optional(),
  PrimaryPhoneNumber: z.string().min(1, "Primary phone number is required").trim(),
  Facebook: z.string().trim().optional(),
  Instagram: z.string().trim().optional(),
  lastName: z.string().min(1, "Last name is required").trim(),
  PersonToGetInTouch: z.string().min(1, "A contact person is required").trim(),
  relationship: z.enum(relationshipOptions, {
    required_error: "Please select their relationship with you",
  }),
  PhoneNumber: z.string().min(1, "Phone number is required").trim(),
  AnotherPersonToGetInTouch: z.string().min(1, "Another contact person is required").trim(),
  AnotherRelationship: z.enum(relationshipOptions, {
    required_error: "Please select their relationship with you",
  }),
  AnotherPhoneNumber: z.string().min(1, "Phone number is required").trim(),
  NumOfCollegeApplication: z.string().min(1, "Number of college applications is required").trim(),
  FillFASFA: z.enum(yesNoOptions, {
    required_error: "Please indicate if you filled out FAFSA",
  }),
  FillScholarship: z.enum(yesNoOptions, {
    required_error: "Please indicate if you applied for scholarships",
  }),
  PlanForFall: z.enum(planForFallOptions, {
    required_error: "Please select your plan for the next fall",
  }),
  DescribePlan: z.string().min(1, "Please describe your plans for the upcoming Fall").trim(),
  CompleteRecordReleaseForm: z.enum(yesNoOptions, {
    required_error: "Please indicate if you completed a Records Release Form",
  }),
  SubmittedTranscript: z.enum(["Yes", "No", "Not Going to College"], {
    required_error: "Please indicate if your final high school transcript has been submitted",
  }),
  Reason: z.enum(reasonOptions, {
    required_error: "Please select the reason for not planning to attend college after high school graduation",
  }),
});

export type SeniorFormData = z.infer<typeof SeniorSurveySchema>;
