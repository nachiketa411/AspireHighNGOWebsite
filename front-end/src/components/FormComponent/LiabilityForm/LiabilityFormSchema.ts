import { z } from "zod";

export const LiabilityFormSchema = z.object({
  emergencyConsent: z.string().min(1, "Initial is required").trim(),
  waiver: z.string().min(1, "Initial is required").trim(),
  indemnify: z.string().min(1, "Initial is required").trim(),
  photography: z.string().min(1, "Initial is required").trim(),
  acknowledgement: z.string().min(1, "Initial is required").trim(),
  adultName: z.string().min(1, "Initial is required").trim(),
  studentName: z.string().min(1, "Initial is required").trim(),
  signature: z.string().min(1, "Initial is required").trim(),
  date: z.string().min(1, "Initial is required").trim(),

});

export type LiabilityFormData = z.infer<typeof LiabilityFormSchema>;
