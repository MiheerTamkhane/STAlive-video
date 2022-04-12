import React from "react";
import { Route, Routes } from "react-router-dom";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export { MyRoutes };
