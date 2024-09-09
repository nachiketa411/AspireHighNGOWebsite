import DynamicForm from "../components/FormComponent/shared/DynamicForm";
import { ExitStudentFormData } from "../components/FormComponent/ExitStudentForm/ExitStudentFormSchema";
import { ExitStudentFormSchema } from "../components/FormComponent/ExitStudentForm/ExitStudentFormSchema";
import { ExitStudentFormFields } from "../components/FormComponent/ExitStudentForm/ExitStudentFormFields";
import { FetchStudentsAndPrograms } from "../services/FetchStudentsAndPrograms";

const ExitStudentFormPage = () => {
  const { students, loading, error } = FetchStudentsAndPrograms();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const formFields = ExitStudentFormFields(students);

  const handleSubmit = (data: ExitStudentFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <h1>Exit Students Form</h1>
      <DynamicForm<ExitStudentFormData>
        schema={ExitStudentFormSchema}
        fields={formFields}
        onSubmit={handleSubmit}
        buttonLabel="Submit"
      />
    </>
  );
};

export default ExitStudentFormPage;
