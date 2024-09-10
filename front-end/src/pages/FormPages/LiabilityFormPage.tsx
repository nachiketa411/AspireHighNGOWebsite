import {
  LiabilityFormData,
  LiabilityFormSchema,
} from "../components/FormComponent/LiabilityForm/LiabilityFormSchema";
import DynamicForm from "../components/FormComponent/shared/DynamicForm";
import { LiabiltyFormFields } from "../components/FormComponent/LiabilityForm/LiabiltyFormFields";

const LiabilityFormPage = () => {
  const handleLiabilitySubmit = (data: LiabilityFormData) => {
    console.log("Registration data submitted:", data);
  };

  return (
    <>
      <h1>Aspire High Program Participation Application - SGS</h1>
      <DynamicForm<LiabilityFormData>
        schema={LiabilityFormSchema}
        fields={LiabiltyFormFields}
        onSubmit={handleLiabilitySubmit}
        buttonLabel="Submit"
      />
    </>
  );
};

export default LiabilityFormPage;
