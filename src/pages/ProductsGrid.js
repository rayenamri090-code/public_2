import React, { useState, useMemo } from "react";
import ProductCard from "../myComponents/ProductCard";
import ProductModal from "../myComponents/ProductModal"; // make sure this path is correct

const ProductsGrid = () => {
  /** Categories you want */
  const filters = ["Adapters", "Chargers", "Earphones"];

  /** Convert filters to slugs */
  const filterSlugs = filters.map((f) => f.toLowerCase().replace(/\s+/g, "-"));

  /** Default category */
  const [activeFilter, setActiveFilter] = useState(filterSlugs[0]);

  /** Currently selected product for modal */
  const [selectedProduct, setSelectedProduct] = useState(null);

  /** Generate 10 products per category */
  const products = useMemo(() => {
    let all = [];

    filters.forEach((type) => {
      for (let i = 1; i <= 10; i++) {
        all.push({
          id: `${type}-${i}`,
          name: `${type} Product #${i}`,
          price: 10 + (i % 5) * 5,
          type: type,
          image:
            "https://placehold.co/300x400/f3f4f6/9ca3af?text=Product",
          categorySlug: type.toLowerCase().replace(/\s+/g, "-"),
          compatibleDevices: ["Universal"],
        });
      }
    });

    return all;
  }, []);

  /** Filter by category */
  const filteredProducts = useMemo(() => {
    return products.filter((p) => p.categorySlug === activeFilter);
  }, [products, activeFilter]);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => {
            const slug = filterSlugs[index];
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(slug)}
                className={`px-8 py-3 text-lg font-bold uppercase tracking-widest transition-all duration-300 border-b-4 rounded-t-lg ${
                  activeFilter === slug
                    ? "border-blue-700 text-gray-900 shadow-lg shadow-blue-200/50"
                    : "border-transparent text-gray-500 hover:text-blue-700 hover:border-blue-300"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                type={product.type}
                compatibleDevices={product.compatibleDevices}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsGrid;
