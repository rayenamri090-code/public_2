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

// NEW IMPORTS
import ProductPage from "./pages/ProductDisplay";

import Compare from "./pages/Compare";
import LikedProduct from "./pages/LikedProduct";

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App flex flex-col min-h-screen">
      {/* Navbar for public pages */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <ImageCarousel />
              <CategoryList />
              <ProductsGrid />
              <QualityGoods />
              <PopularProductsCarousel />
              <SponsorsMapGoogle />
            </>
          }
        />

        {/* Product Display Page */}
        <Route path="/product/:id" element={<ProductPage />} />

        {/* Wishlist Page */}
        <Route path="/wishlist" element={<LikedProduct />} />

        {/* Compare Page */}
        <Route path="/compare" element={<Compare />} />

        {/* Admin Page (No Navbar/Footer) */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      {/* Footer for public pages */}
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
