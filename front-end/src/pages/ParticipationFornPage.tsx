import { useNavigate } from "react-router-dom";
import {
  ParticipationFormData,
  ParticipationFormSchema,
} from "../components/FormComponent/ParticipationForm/ParticipationFormSchema";
import DynamicForm from "../components/FormComponent/shared/DynamicForm";
import { participationFormFields } from "../components/FormComponent/ParticipationForm/ParticipationFormFields";

const ParticipationFormPage = () => {
  const linkTo = useNavigate();
  const handleParticipationSubmit = (data: ParticipationFormData) => {
    console.log(" data sucessfully submitted:", data);
    linkTo("/liability");
  };

  return (
    <>
      <h1>Aspire High Program Participation Application - SGS</h1>
      <DynamicForm<ParticipationFormData>
        schema={ParticipationFormSchema}
        fields={participationFormFields}
        onSubmit={handleParticipationSubmit}
        buttonLabel="Submit"
      />
    </>
  );
};

export default ParticipationFormPage;
