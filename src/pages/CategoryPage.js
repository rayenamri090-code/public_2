import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { slug } = useParams();

  // Load all products
  const allProducts = useMemo(() => {
    return JSON.parse(localStorage.getItem("all_products_backup") || "[]");
  }, []);

  // Filter products by categorySlug
  const products = allProducts.filter(p => p.categorySlug === slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-8 capitalize">{slug.replace("-", " ")}</h1>

      {products.length === 0 ? (
        <p className="text-gray-600">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-blue-700 font-bold">{product.price} TD</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
