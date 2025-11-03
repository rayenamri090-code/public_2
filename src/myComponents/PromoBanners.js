import React from "react";

const PromoBannerSection = () => {
  return (
    <section className="container mx-auto px-4 py-12 space-y-10">
      {/* ---------- ROW 1 ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Small Banner */}
        <div className="md:col-span-5 relative overflow-hidden rounded-2xl group cursor-pointer">
          <img
            src="https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/08/accessories-banner-1.jpg"
            alt="Cases for Phone"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-10 text-white">
            <p className="text-blue-400 font-semibold mb-2">Something completely new</p>
            <h3 className="text-3xl font-bold mb-4">Cases for Phone</h3>
            <a
              href="https://woodmart.xtemos.com/accessories/product-category/cases/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              to shop
            </a>
          </div>
        </div>

        {/* Right Large Banner */}
        <div className="md:col-span-7 relative overflow-hidden rounded-2xl group cursor-pointer">
          <img
            src="https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/04/accessories-banner-2.jpg"
            alt="Straps of Any Color"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-10 text-white">
            <p className="text-blue-400 font-semibold mb-2">Accessories for watch</p>
            <h3 className="text-3xl font-bold mb-4">Straps of Any Color</h3>
            <a
              href="https://woodmart.xtemos.com/accessories/product-category/straps/"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              to shop
            </a>
          </div>
        </div>
      </div>

      {/* ---------- ROW 2 ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Large Banner */}
        <div className="md:col-span-7 relative overflow-hidden rounded-2xl group cursor-pointer">
          <img
            src="https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/04/accessories-banner-3.jpg"
            alt="Buy One and Get 50% Off the Second"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-10 text-white">
            <p className="text-blue-400 font-semibold mb-2">Special offer</p>
            <h3 className="text-3xl font-bold mb-4">
              Buy One and Get 50% Off the Second
            </h3>
            <a
              href="https://woodmart.xtemos.com/accessories/product-category/power-banks/"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              read more
            </a>
          </div>
        </div>

        {/* Right Small Banner */}
        <div className="md:col-span-5 relative overflow-hidden rounded-2xl group cursor-pointer">
          <img
            src="https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/09/wood-accessories-category-4-opt.jpg"
            alt="Charger Discount"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-10 text-white">
            <p className="text-blue-400 font-semibold mb-2">
              Try something completely
            </p>
            <h3 className="text-3xl font-bold mb-4">Charger Discount</h3>
            <a
              href="https://woodmart.xtemos.com/accessories/product-category/charger/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              buy now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBannerSection;
