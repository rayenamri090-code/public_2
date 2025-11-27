import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Heart, GitCompare, ShoppingCart } from "lucide-react";
import { getProducts } from "../utils/productStorage";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [liked, setLiked] = useState(false);
  const [compared, setCompared] = useState(false);

  // Load all products from storage
  const allProducts = useMemo(() => {
    return getProducts();
  }, []);

  // Retrieve product & restore like/compare states
  useEffect(() => {
    const found = allProducts.find((p) => p.id === id);
    setProduct(found || null);

    const wl = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setLiked(wl.some(item => item.id === id));

    const cmp = JSON.parse(localStorage.getItem("compare") || "[]");
    setCompared(cmp.some(item => item.id === id));
  }, [allProducts, id]);

  // Toggle wishlist item
  const toggleLike = () => {
    let wl = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const exists = wl.some(item => item.id === id);

    if (exists) {
      wl = wl.filter((item) => item.id !== id);
      setLiked(false);
    } else {
      wl.push(product);
      setLiked(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wl));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // Toggle compare item
  const toggleCompare = () => {
    let cmp = JSON.parse(localStorage.getItem("compare") || "[]");

    const exists = cmp.some(item => item.id === id);

    if (exists) {
      cmp = cmp.filter((item) => item.id !== id);
      setCompared(false);
    } else {
      cmp.push(product);
      setCompared(true);
    }

    localStorage.setItem("compare", JSON.stringify(cmp));
    window.dispatchEvent(new Event("compareUpdated"));
  };

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT — Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-3xl shadow-xl"
          />
        </div>

        {/* RIGHT — Product Info */}
        <div>
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-2xl font-semibold text-blue-700 mb-4">
            {product.price} TD
          </p>

          {/* Rating */}
          <div className="flex items-center mb-6 text-yellow-500 text-lg">
            {"★".repeat(product.rating)}
            <span className="text-gray-300 ml-1">
              {"★".repeat(5 - product.rating)}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-10">
            {/* Add to cart */}
            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition">
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            {/* Like */}
            <button
              onClick={toggleLike}
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <Heart
                size={22}
                className={liked ? "text-red-500 fill-red-500" : "text-gray-700"}
              />
            </button>

            {/* Compare */}
            <button
              onClick={toggleCompare}
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <GitCompare
                size={22}
                className={compared ? "text-blue-600" : "text-gray-700"}
              />
            </button>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Product Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This is a placeholder description.
              Later you can add a real description from your backend or CMS.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
