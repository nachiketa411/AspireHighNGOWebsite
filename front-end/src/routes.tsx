import React from "react";
import { Route, Routes } from "react-router-dom";
import InteractiveList from "./components/CompositeComponents/InteractiveList";
import RegistrationFormPage from "./pages/RegistrationFormPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<InteractiveList />} />
      <Route path="/register" element={<RegistrationFormPage />} />
    </Routes>
  );
};

export default AppRoutes;
