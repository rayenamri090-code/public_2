import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProductModal = ({ product, onClose }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleCategoryClick = () => {
    if (product.categorySlug) {
      navigate(`/shop/category/${product.categorySlug}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl relative flex flex-col md:flex-row animate-[fadeIn_.25s_ease]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <MdClose size={26} />
        </button>

        {/* LEFT: Product Image */}
        <div className="md:w-1/2 flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-gray-200">
          <img
            src={product.image || product.images?.[0]}
            alt={product.title}
            className="w-full max-w-[350px] object-contain"
          />
        </div>

        {/* RIGHT: Product Details */}
        <div className="md:w-1/2 p-10 flex flex-col justify-between">
          <div>
            {/* Brand */}
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              {product.brand || "ECOFLOW"}
            </p>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {product.title}
            </h2>

            {/* Price */}
            <div className="text-2xl font-bold text-blue-600 mb-5">
              ${product.price.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {product.description ||
                "No description available."}
            </p>

            {/* Category Link */}
            {product.category && product.categorySlug && (
              <p
                onClick={handleCategoryClick}
                className="text-blue-600 font-semibold cursor-pointer hover:underline mb-6"
              >
                Category: {product.category}
              </p>
            )}

            {/* Stock */}
            <div className="text-sm text-gray-700 mb-6">
              <span className="text-green-600 font-semibold">✓</span>{" "}
              {product.stock || 98} in stock
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* Quantity */}
            <div className="flex items-center border rounded-md">
              <button
                className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4 py-2 text-gray-800 font-medium">{quantity}</span>
              <button
                className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            {/* Contact Us */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
              CONTACT US
            </button>

            {/* Request Info */}
            <button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition">
              REQUEST INFO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
