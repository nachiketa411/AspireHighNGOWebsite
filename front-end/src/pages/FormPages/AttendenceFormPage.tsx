import { AttendenceFormFields } from "../components/FormComponent/AttendanceForm/AttendenceFormFields";
import {
  AttendenceFormData,
  AttendenceFormSchema,
} from "../components/FormComponent/AttendanceForm/AttendenceFormSchema";
import DynamicForm from "../components/FormComponent/shared/DynamicForm";
import { FetchStudentsAndPrograms } from "../services/FetchStudentsAndPrograms";

const AttendanceFormPage = () => {
  const { students, programs, loading, error } = FetchStudentsAndPrograms();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const formFields = AttendenceFormFields(students, programs);

  const handleSubmit = (data: AttendenceFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <h1>Aspire High Attendance Form</h1>
      <DynamicForm<AttendenceFormData>
        schema={AttendenceFormSchema}
        fields={formFields}
        onSubmit={handleSubmit}
        buttonLabel="Submit Attendance"
      />
    </>
  );
};

export default AttendanceFormPage;
