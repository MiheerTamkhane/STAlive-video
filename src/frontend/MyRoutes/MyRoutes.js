import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../index";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export { MyRoutes };
