import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationFormPage from "./pages/RegistrationFormPage";
import SignUpFormPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<InteractiveList />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationFormPage />} />
      <Route path="/signup" element={<SignUpFormPage />} />
    </Routes>
  );
};

export default AppRoutes;
