import { DefaultPage, Home, Initiatives, StaffDashboard } from "@/modules";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "../utils/authUtils";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated() ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<StaffDashboard />} />
            <Route path="/initiatives" element={<Initiatives />} />

            <Route path="/*" element={<DefaultPage />} />
          </>
        ) : (
          <Route path="/*" element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
