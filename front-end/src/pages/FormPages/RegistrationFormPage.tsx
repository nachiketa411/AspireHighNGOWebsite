import { RegistrationFormData,registrationFormSchema } from "../../components/FormComponent/RegistrationForm/RegistrationFormSchema";
import { registrationFormFields } from "../../components/FormComponent/RegistrationForm/RegistrationFormFields";
import DynamicForm from "../../components/FormComponent/shared/DynamicForm";

const RegistrationFormPage = () => {
  const handleRegistrationSubmit = (data: RegistrationFormData) => {
    console.log("Registration data submitted:", data);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <DynamicForm<RegistrationFormData>
        schema={registrationFormSchema}
        fields={registrationFormFields}
        onSubmit={handleRegistrationSubmit}
        buttonLabel="Register"
      />
    </>
  );
};

export default RegistrationFormPage;
