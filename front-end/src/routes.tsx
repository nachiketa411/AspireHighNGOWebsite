import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationFormPage from "./pages/FormPages/RegistrationFormPage";
import SignUpFormPage from "./pages/FormPages/SignUpPage";
import HomePage from "./pages/HomePage";
import ParticipationFormPage from "./pages/ParticipationFornPage";
import LiabilityFormPage from "./pages/LiabilityFormPage";
import AttendanceFormPage from "./pages/AttendenceFormPage";
import ExitStudentFormPage from "./pages/ExitStudentFormPage";
import NonAttendanceFormPage from "./pages/NonAttendenceFromPage";
import QuarterlyReportPage from "./pages/QuarterlyReportFormPage";
import StudentSurveyPage from "./pages/StudentSurveyPage";
import ParentSurveyPage from "./pages/ParentSurveyPage";
import SeniorSurveyPage from "./pages/SeniorSurveyPage";

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
