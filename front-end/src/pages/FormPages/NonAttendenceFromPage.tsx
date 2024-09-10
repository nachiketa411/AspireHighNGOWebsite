import { NonAttendenceFormData,NonAttendenceFormSchema } from "../../components/FormComponent/NonAttendanceForm/NonAttendenceFormSchema";
import { NonAttendenceFormFields } from "../../components/FormComponent/NonAttendanceForm/NonAttendenceFormFields";
import DynamicForm from "../../components/FormComponent/shared/DynamicForm";
import { FetchStudentsAndPrograms } from "../../services/FetchStudentsAndPrograms";

const NonAttendanceFormPage = () => {
  const { students, loading, error } = FetchStudentsAndPrograms();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const formFields = NonAttendenceFormFields(students);

  const handleSubmit = (data: NonAttendenceFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <h1>Exit Students Form</h1>
      <DynamicForm<NonAttendenceFormData>
        schema={NonAttendenceFormSchema}
        fields={formFields}
        onSubmit={handleSubmit}
        buttonLabel="Submit"
      />
    </>
  );
};

export default NonAttendanceFormPage;
