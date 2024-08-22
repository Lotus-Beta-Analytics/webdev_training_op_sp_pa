import { DefaultPage, Home, Initiatives, StaffDashboard } from "@/modules";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<StaffDashboard />} />
        <Route path="/initiatives" element={<Initiatives />} />

        <Route path="/*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
