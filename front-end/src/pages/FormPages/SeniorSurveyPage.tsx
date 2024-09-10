import { SeniorFormData,SeniorSurveySchema } from "../../components/FormComponent/SeniorExitSurvey/SeniorSurveySchema";
import DynamicForm from "../../components/FormComponent/shared/DynamicForm";
import { SeniorSurveyFormFields } from "../../components/FormComponent/SeniorExitSurvey/SeniorSurveyFormfields";
const SeniorSurveyPage = () => {
const handleSubmit = (data: SeniorFormData) => {
    console.log("data submitted:", data);
    };
  
return (
    <>
     <h1>Senior Survey Page</h1>
    <DynamicForm<SeniorFormData>
          schema={SeniorSurveySchema }
          fields={SeniorSurveyFormFields }
          onSubmit={handleSubmit}
          buttonLabel="Submit"
     />
    </>
    );
  };
  
  export default SeniorSurveyPage ;
  