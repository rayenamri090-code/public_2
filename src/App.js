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

// NEW: CategoryPage import
import CategoryPage from "./pages/CategoryPage";

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App flex flex-col min-h-screen">

      {/* Navbar */}
      {!isAdminRoute && <Navbar />}

      {/* MAIN CONTENT */}
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

          {/* Product Page */}
          <Route path="/product/:id" element={<ProductPage />} />

          {/* Wishlist & Compare */}
          <Route path="/wishlist" element={<LikedProduct />} />
          <Route path="/compare" element={<Compare />} />

          {/* Category Page */}
          <Route path="/shop/category/:slug" element={<CategoryPage />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminPage />} />

          {/* Fallback */}
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
