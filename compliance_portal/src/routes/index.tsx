import { Home, StaffDashboard } from "@/modules";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<StaffDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
