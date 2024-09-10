import { StudentSurveyFormData,StudentSurveyFormSchema } from "../../components/FormComponent/StudentSurvey/StudentSurveySchema";
import DynamicForm from "../../components/FormComponent/shared/DynamicForm";

import { StudentSurveyFormFields } from "../../components/FormComponent/StudentSurvey/StudentSurveyFormFields";
  
const StudentSurveyPage = () => {
const handleSubmit = (data: StudentSurveyFormData) => {
    console.log("data submitted:", data);
    };
  
return (
    <>
     <h1>Student Survey Page</h1>
    <DynamicForm<StudentSurveyFormData>
          schema={StudentSurveyFormSchema}
          fields={StudentSurveyFormFields }
          onSubmit={handleSubmit}
          buttonLabel="Submit"
     />
    </>
    );
  };
  
  export default StudentSurveyPage ;
  