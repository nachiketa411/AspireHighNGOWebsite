import { signUpFormFields } from "../../components/FormComponent/SignUpForm/SignUpFormFields";
import {
  signUpFormData,
  signUpFormSchema,
} from "../../components/FormComponent/SignUpForm/SignUpFormSchema";
import DynamicForm from "../../components/FormComponent/shared/DynamicForm";

const SignUpFormPage = () => {
  const handleSignUpSubmit = (data: signUpFormData) => {
    console.log("Login data submitted:", data);
  };

  return (
    <>
      <h1>Sign Up Page</h1>
      <DynamicForm<signUpFormData>
        schema={signUpFormSchema}
        fields={signUpFormFields}
        onSubmit={handleSignUpSubmit}
        buttonLabel="Sign Up"
      />
    </>
  );
};

export default SignUpFormPage;
