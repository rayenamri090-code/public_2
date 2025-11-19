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

import ProductPage from "./pages/ProductDisplay";
import Compare from "./pages/Compare";
import LikedProduct from "./pages/LikedProduct";
import NotFound from "./pages/NotFound";

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App flex flex-col min-h-screen">

      {/* Navbar */}
      {!isAdminRoute && <Navbar />}

      {/* MAIN CONTENT — this is the missing part */}
      <div className="flex-1">
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

          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/wishlist" element={<LikedProduct />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
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
