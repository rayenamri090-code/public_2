import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../myComponents/ProductCard";

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Load all products from localStorage backup
  const allProducts = useMemo(() => {
    const data = JSON.parse(localStorage.getItem("all_products_backup") || "[]");
    return data.map(p => ({
      ...p,
      categorySlug: p.type ? p.type.toLowerCase().replace(" ", "-") : "unknown",
      connector: p.connector || "Universal", // ensure connector exists
      compatibleDevices: Array.isArray(p.compatibleDevices) ? p.compatibleDevices : ["Universal"],
      image: p.image || p.images?.[0] || "https://placehold.co/300x400/f3f4f6/9ca3af?text=Product",
    }));
  }, []);

  // Filter products by category
  const categoryProducts = allProducts.filter(p => p.categorySlug === slug);

  // Earphones-specific connectors
  const connectors = useMemo(() => {
    if (slug === "earphones") {
      const unique = Array.from(new Set(categoryProducts.map(p => p.connector)));
      return unique;
    }
    return [];
  }, [categoryProducts, slug]);

  // Multi-select state
  const [selectedConnectors, setSelectedConnectors] = useState([]);

  // Toggle connector in selectedConnectors
  const toggleConnector = (conn) => {
    setSelectedConnectors(prev =>
      prev.includes(conn)
        ? prev.filter(c => c !== conn)
        : [...prev, conn]
    );
  };

  // Filter products by selected connectors
  const filteredProducts = categoryProducts.filter(
    p => selectedConnectors.length === 0 || selectedConnectors.includes(p.connector)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-[70vh] flex flex-col lg:flex-row gap-8">

      {/* Sidebar Filters (only for Earphones) */}
      {slug === "earphones" && connectors.length > 0 && (
        <aside className="w-full lg:w-64 border rounded-lg p-4 bg-gray-50">
          <h2 className="text-lg font-bold mb-4">Filter by Connector</h2>
          <ul className="flex flex-col gap-2">
            {connectors.map(conn => (
              <li key={conn}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedConnectors.includes(conn)}
                    onChange={() => toggleConnector(conn)}
                    className="w-4 h-4"
                  />
                  <span>{conn}</span>
                </label>
              </li>
            ))}
          </ul>
          {selectedConnectors.length > 0 && (
            <button
              onClick={() => setSelectedConnectors([])}
              className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>
          )}
        </aside>
      )}

      {/* Products Grid */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold mb-6 capitalize">{slug.replace("-", " ")}</h1>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-600">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                type={product.type}
                compatibleDevices={product.compatibleDevices}
                isHot={product.isHot}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
