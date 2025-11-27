import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const ProductModal = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "blue");
  const [quantity, setQuantity] = useState(1);

  const colors = product.colors || ["black", "blue", "green", "yellow"];

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
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              {product.description ||
                "Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration."}
            </p>

            {/* Color Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-800 mb-2">Color :</p>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-md border-2 transition-all duration-200 ${
                      selectedColor === color
                        ? "border-blue-600"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

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

            {/* Add to Cart */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
              ADD TO CART
            </button>

            {/* Buy Now */}
            <button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
