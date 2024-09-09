import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationFormPage from "./pages/RegistrationFormPage";
import SignUpFormPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ParticipationFormPage from "./pages/ParticipationFornPage";
import LiabilityFormPage from "./pages/LiabilityFormPage";
import AttendanceFormPage from "./pages/AttendenceFormPage";
import ExitStudentFormPage from "./pages/ExitStudentFormPage";
import NonAttendanceFormPage from "./pages/NonAttendenceFromPage";

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
    </Routes>
  );
};

export default AppRoutes;
