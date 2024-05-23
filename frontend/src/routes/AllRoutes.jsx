/** @format */

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import DashBoard from "../pages/Dashboard";
import ProtectedRoutes from "../components/utils/ProtectedRoutes";

const AllRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={<LogIn setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashBoard />}></Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
