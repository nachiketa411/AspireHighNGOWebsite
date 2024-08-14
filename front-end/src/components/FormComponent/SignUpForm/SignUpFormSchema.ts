import { z } from "zod";

export const signUpFormSchema = z
  .object({
    firstName: z.string().min(1, "First Name is required").trim(),
    lastName: z.string().min(1, "Last Name is required").trim(),
    email: z
      .string()
      .email("Email is invalid")
      .min(1, "Email is required")
      .trim(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@$!%*?&)"
      ),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters")
      .regex(
        /[A-Z]/,
        "Confirm Password must contain at least one uppercase letter"
      )
      .regex(
        /[a-z]/,
        "Confirm Password must contain at least one lowercase letter"
      )
      .regex(/[0-9]/, "Confirm Password must contain at least one number")
      .regex(
        /[@$!%*?&]/,
        "Confirm Password must contain at least one special character (@$!%*?&)"
      ),
    rememberMe: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type signUpFormData = z.infer<typeof signUpFormSchema>;
