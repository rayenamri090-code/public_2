import React, { useState } from 'react';
import { FaFacebookF, FaPinterestP, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full relative flex flex-col md:flex-row p-6 gap-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <MdClose size={24} />
        </button>

        {/* Left - Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
          <img src={product.image} alt={product.title} className="max-h-80 object-contain" />
        </div>

        {/* Right - Info */}
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <div className="mb-4">
            <img src={product.brandIcon} alt="Brand" className="w-6 h-6" />
          </div>

          <div className="text-blue-600 text-xl font-bold mb-4">${product.price.toFixed(2)}</div>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="mb-4 font-semibold">
            <span className="text-green-600">✓ {product.stock} in stock</span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={decrement}
              className="border border-gray-400 px-3 py-1 rounded text-lg font-bold hover:bg-gray-200"
            >
              -
            </button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="w-12 text-center border border-gray-300 rounded"
            />
            <button
              onClick={increment}
              className="border border-gray-400 px-3 py-1 rounded text-lg font-bold hover:bg-gray-200"
            >
              +
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>

          <div className="mb-4 text-sm">
            <strong>Categories:</strong>{' '}
            {product.categories.map((cat, idx) => (
              <span key={idx} className="text-gray-700">
                {cat}
                {idx < product.categories.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>

          <div className="flex gap-4 text-gray-600">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <TiSocialTwitter className="cursor-pointer hover:text-blue-400" />
            <FaPinterestP className="cursor-pointer hover:text-red-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            <FaTelegramPlane className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
