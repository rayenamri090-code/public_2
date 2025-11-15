import React, { useEffect, useState } from "react";
import ProductCard from "../myComponents/ProductCard";
import { useNavigate } from "react-router-dom";

const LikedProduct = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");

    // Ensure wishlist is always array of objects
    if (Array.isArray(stored)) {
      setWishlist(stored);
    } else {
      setWishlist([]);
    }
  }, []);

  if (!wishlist.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image || product.images?.[0] || ""}
              name={product.name || "Untitled product"}
              price={typeof product.price === "number" ? product.price : 0}
              type={product.type || ""}
              compatibleDevices={product.compatibleDevices || []}
              isHot={!!product.isHot}
              onClick={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedProduct;
