import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductModal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease] flex flex-col md:flex-row relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <MdClose size={26} />
        </button>

        {/* Left : Image + Thumbnails */}
        <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center gap-4">

          <Zoom>
            <img
              src={activeImage}
              alt="Product"
              className="max-h-[360px] object-contain"
            />
          </Zoom>

          <div className="flex gap-3 overflow-x-auto scrollbar-none py-1">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-16 rounded-lg object-cover cursor-pointer border transition ${
                  activeImage === img
                    ? "border-black"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Right : Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {product.title}
            </h2>

            <p className="text-gray-500 text-sm mb-4">
              {product.description}
            </p>

            <div className="text-2xl font-semibold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </div>

            <div className="text-sm font-medium text-green-600 mb-6">
              In stock: {product.stock}
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductModal;
