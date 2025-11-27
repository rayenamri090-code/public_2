import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../myComponents/ProductCard";
import ProductModal from "../myComponents/ProductModal";

const ProductsGrid = () => {
  const [searchParams] = useSearchParams();
  const showSubFilters = searchParams.get("showSubFilters") === "true";

  // MAIN FILTERS
  const mainFilters = ["Adapters", "Chargers", "Earphones"];
  const filterSlugs = mainFilters.map((f) => f.toLowerCase().replace(/\s+/g, "-"));

  const [activeFilter, setActiveFilter] = useState(filterSlugs[0]);
  const [earphoneSubFilter, setEarphoneSubFilter] = useState(showSubFilters ? "all" : null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Generate products
  const products = useMemo(() => {
    let all = [];

    // Adapters & Chargers
    ["Adapters", "Chargers"].forEach((type) => {
      for (let i = 1; i <= 10; i++) {
        all.push({
          id: `${type}-${i}`,
          name: `${type} Product #${i}`,
          price: 10 + (i % 5) * 5,
          type: type,
          image: "https://placehold.co/300x400/f3f4f6/9ca3af?text=Product",
          categorySlug: type.toLowerCase(),
        });
      }
    });

    // Earphones with types
    const earTypes = ["Type-C", "Jack", "Lightning"];
    for (let i = 1; i <= 10; i++) {
      const t = earTypes[i % 3];
      all.push({
        id: `earphones-${i}`,
        name: `Earphones Product #${i}`,
        price: 15 + (i % 5) * 5,
        type: t,
        image: "https://placehold.co/300x400/f3f4f6/9ca3af?text=Earphones",
        categorySlug: "earphones",
        connectionType: t,
      });
    }

    return all;
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (activeFilter === "earphones") {
      if (earphoneSubFilter && earphoneSubFilter !== "all") {
        return products.filter(
          (p) =>
            p.categorySlug === "earphones" &&
            p.connectionType.toLowerCase() === earphoneSubFilter.toLowerCase()
        );
      }
      return products.filter((p) => p.categorySlug === "earphones");
    }

    return products.filter((p) => p.categorySlug === activeFilter);
  }, [products, activeFilter, earphoneSubFilter]);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {mainFilters.map((filter, idx) => {
            const slug = filterSlugs[idx];
            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(slug);
                  setEarphoneSubFilter(slug === "earphones" ? "all" : null);
                }}
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

        {/* EARPHONES SUB-FILTERS */}
        {activeFilter === "earphones" && (
          <div className="flex justify-center gap-4 mb-10">
            {["all", "Type-C", "Jack", "Lightning"].map((t) => (
              <button
                key={t}
                onClick={() => setEarphoneSubFilter(t)}
                className={`px-6 py-2 rounded-full border text-sm ${
                  earphoneSubFilter === t
                    ? "bg-blue-600 text-white border-blue-700"
                    : "border-gray-400 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                type={product.connectionType || product.type}
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
