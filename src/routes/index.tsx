import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import LayoutDefault from "../config/Layout";
import Home from "../pages/Home";
import CompanyProfile from "../pages/CompProfile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<LayoutDefault component={<Products />} />}
        />
        <Route
          path="/company-profile"
          element={<LayoutDefault component={<CompanyProfile />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
