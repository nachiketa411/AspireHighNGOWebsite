import { FormField } from "../shared/FormField";
import { signUpFormData } from "./SignUpFormSchema";

export const signUpFormFields: FormField<signUpFormData>[] = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
  { name: "confirmPassword", label: "Confirm Password", type: "password" },
  { name: "rememberMe", label: "Remember Me", type: "checkbox" },
];
