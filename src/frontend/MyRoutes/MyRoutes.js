import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LandingPage, SigninPage, useAuth } from "../index";
const MyRoutes = () => {
  const {
    auth: { status },
  } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {!status && <Route path="/signin" element={<SigninPage />} />}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export { MyRoutes };
