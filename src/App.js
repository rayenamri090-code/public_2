import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./myComponents/Navbar";
import Footer from "./myComponents/Footer";

import ImageCarousel from "./pages/ImageCarousel";
import CategoryList from "./myComponents/CategoryCard";
import ProductsGrid from "./pages/ProductsGrid";
import QualityGoods from "./myComponents/QualityGoods";
import PopularProductsCarousel from "./myComponents/PopularProductsCarousel";


import AdminPage from "./pages/AdminPage";
import SponsorsMapGoogle from "./myComponents/SponsorsMapGoogle";

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App flex flex-col min-h-screen">

      {/* Show Navbar only for public pages */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public */}
        <Route
          path="/"
          element={
            <>
              <ImageCarousel />
              <CategoryList />
              <ProductsGrid />
              <QualityGoods />
              <PopularProductsCarousel />
   
              <SponsorsMapGoogle/>
            </>
          }
        />

        {/* Admin Page (NO Navbar, NO Footer) */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      {/* Show Footer only for public pages */}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
