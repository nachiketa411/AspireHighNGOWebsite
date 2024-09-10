import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationFormPage from "./pages/FormPages/RegistrationFormPage";
import SignUpFormPage from "./pages/FormPages/SignUpPage";
import HomePage from "./pages/HomePage";
import ParticipationFormPage from "./pages/FormPages/ParticipationFornPage";
import LiabilityFormPage from "./pages/FormPages/LiabilityFormPage";
import AttendanceFormPage from "./pages/FormPages/AttendenceFormPage";
import ExitStudentFormPage from "./pages/FormPages/ExitStudentFormPage";
import NonAttendanceFormPage from "./pages/FormPages/NonAttendenceFromPage";
import QuarterlyReportPage from "./pages/FormPages/QuarterlyReportFormPage";
import StudentSurveyPage from "./pages/FormPages/StudentSurveyPage";
import ParentSurveyPage from "./pages/FormPages/ParentSurveyPage";
import SeniorSurveyPage from "./pages/FormPages/SeniorSurveyPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<InteractiveList />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationFormPage />} />
      <Route path="/signup" element={<SignUpFormPage />} />
      <Route path="/p" element={<ParticipationFormPage />} />
      <Route path="/liability" element={<LiabilityFormPage />} />
      <Route path="/attendence" element={<AttendanceFormPage />} />
      <Route path="/exitstudent" element={<ExitStudentFormPage />} />
      <Route path="/n" element={<NonAttendanceFormPage />} />
      <Route path="/quarterly-report" element={<QuarterlyReportPage/>} />
      <Route path="/studentsurvey" element={<StudentSurveyPage/>} />
      <Route path="/parentsurvey" element={<ParentSurveyPage/>} />
      <Route path="/seniorsurvey" element={<SeniorSurveyPage/>} />
    </Routes>
  );
};

export default AppRoutes;
