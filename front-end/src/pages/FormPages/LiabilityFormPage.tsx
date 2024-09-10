import {
  LiabilityFormData,
  LiabilityFormSchema,
} from "../components/FormComponent/LiabilityForm/LiabilityFormSchema";
import DynamicForm from "../components/FormComponent/shared/DynamicForm";
import { LiabiltyFormFields } from "../components/FormComponent/LiabilityForm/LiabiltyFormFields";

const LiabilityFormPage = () => {
  const handleLiabilitySubmit = (data: LiabilityFormData) => {
    console.log("Liability data submitted:", data);
  };

  return (
    <>
      <h1>Liability Form</h1>
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
