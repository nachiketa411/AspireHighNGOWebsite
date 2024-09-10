import { QuarterlyReportFormFields } from "../components/FormComponent/QuarterlyReport/QuarterlyReportFormFields";
import { QuarterlyReportFormData,QuarterlyReportFormSchema  } from "../components/FormComponent/QuarterlyReport/QuarterlyReportSchema";

import DynamicForm from "../components/FormComponent/shared/DynamicForm";
import { FetchStudentsAndPrograms } from "../services/FetchStudentsAndPrograms";

const QuarterlyReportPage = () => {
  const { students, loading, error } = FetchStudentsAndPrograms();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const formFields = QuarterlyReportFormFields(students);

  const handleSubmit = (data: QuarterlyReportFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <h1>Quarterly Report</h1>
      <DynamicForm<QuarterlyReportFormData>
        schema={QuarterlyReportFormSchema}
        fields={formFields}
        onSubmit={handleSubmit}
        buttonLabel="Submit Attendance"
      />
    </>
  );
};

export default QuarterlyReportPage;
