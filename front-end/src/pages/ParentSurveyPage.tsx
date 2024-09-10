import { ParentSurveyFormData,ParentSurveySchema } from "../components/FormComponent/ParentSurvey/ParentSurveySchema";
import DynamicForm from "../components/FormComponent/shared/DynamicForm";

import { ParentSurveyFormFields } from "../components/FormComponent/ParentSurvey/ParentSurveyFormFields";
  
const ParentSurveyPage = () => {
const handleSubmit = (data: ParentSurveyFormData) => {
    console.log("data submitted:", data);
    };
  
return (
    <>
     <h1>Parent Survey Page</h1>
    <DynamicForm< ParentSurveyFormData>
          schema={ParentSurveySchema}
          fields={ParentSurveyFormFields }
          onSubmit={handleSubmit}
          buttonLabel="Submit"
     />
    </>
    );
  };
  
  export default ParentSurveyPage ;
  