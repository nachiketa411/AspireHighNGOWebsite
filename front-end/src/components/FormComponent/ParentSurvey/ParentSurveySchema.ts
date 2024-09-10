import { z } from "zod";

// Define the options as a constant tuple for enum validation
const agreeOptions = ["Highly agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Highly disagree"] as const;

export const ParentSurveySchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  middleName: z.string().trim().optional(), 
  lastName: z.string().min(1, "Last name is required").trim(),
  SatisfiedWithWorkshop: z.enum(agreeOptions, {
    required_error: "Please select your satisfaction level with the workshop",
  }),
  FavoritePart: z.array(z.enum(["Ice Breaker", "Presentations", "Discussions", "Q&A", "Other"])).min(1, {
    message: "Please select at least one favorite part of the workshop",
  }),
  TheWorkshopFunAndEngaging: z.enum(agreeOptions, {
    required_error: "Please rate how fun and engaging the workshop was",
  }),
  TheWorkshopInformative: z.enum(agreeOptions, {
    required_error: "Please rate how informative the workshop was",
  }),
  FacilitatorDidGoodJob: z.enum(agreeOptions, {
    required_error: "Please rate the facilitator's performance",
  }),
  EnjoyedTheActivities: z.enum(agreeOptions, {
    required_error: "Please rate your enjoyment of the activities",
  }),
  PresentationsWereInformative: z.enum(agreeOptions, {
    required_error: "Please rate how informative the presentations were",
  }),
  feedback: z.string().trim().optional(), 
});


export type ParentSurveyFormData = z.infer<typeof ParentSurveySchema>;
