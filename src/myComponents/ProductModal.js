import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductModal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Modal container */}
      <div className="relative bg-white w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition"
        >
          <MdClose size={28} />
        </button>

        {/* Left Section – Image + Thumbs */}
        <div className="w-full md:w-1/2 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center p-6 md:p-8">
          <div className="w-full flex justify-center mb-4">
            <Zoom>
              <img
                src={activeImage}
                alt={product.title}
                className="w-auto max-h-[420px] object-contain rounded-md"
              />
            </Zoom>
          </div>

          <div className="flex gap-3 overflow-x-auto scrollbar-none py-1">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-16 rounded-md object-cover cursor-pointer border transition ${
                  activeImage === img
                    ? "border-gray-900"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Section – Product Info */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
              {product.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-5 leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="text-3xl font-semibold text-gray-900 mb-4">
              ${product.price.toFixed(2)}
            </div>

            {/* Stock */}
            <div className="text-sm font-medium text-green-600 mb-8">
              In stock: {product.stock}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gray-900 text-white py-3 rounded-md hover:bg-black transition">
              Add to Cart
            </button>
            <button className="flex-1 border border-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ProductModal;
