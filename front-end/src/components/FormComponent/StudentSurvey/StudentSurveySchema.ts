import { z } from "zod";

export const StudentSurveyFormSchema = z.object({
  firstName: z.string().min(1, "First Name is required").trim(),
  middleName: z.string().trim().optional(),
  lastName: z.string().min(1, "Last Name is required").trim(),
  IsTopicIntrestin: z.string().min(1, "Please select an option").trim(),
  MostFun: z.array(z.string()).nonempty("Select at least one option"),
  SkillsLearned: z.array(z.string()).nonempty("Select at least one skill"),
  WhereWillYouUseTheNewSkill: z.string().min(1, "Please select an option").trim(),
  LifeGoal: z.string().min(1, "Please provide an answer").trim(),
});


export type StudentSurveyFormData = z.infer<typeof StudentSurveyFormSchema>;

