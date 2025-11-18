import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "../myComponents/ProductCard";
import { useNavigate } from "react-router-dom";
import {base} from "../data/products";

const ProductsGrid = () => {
    const [activeFilter, setActiveFilter] = useState("Adapters");
    const navigate = useNavigate();

    /** -------------------------------------------
     * Product Dataset: REAL + Generated
     * -------------------------------------------- */
const products = useMemo(() => {
    const categories = ["Adapters", "Chargers", "Earphones"];

    const generated = Array.from({ length: 30 }, (_, i) => {
        const type = categories[i % 3];
        return {
            id: 1000 + i,
            name: `${type} Sample #${i + 1}`,
            price: 29 + (i % 5) * 10,
            image:
                "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
            type,
            compatibleDevices: ["Universal"],
            rating: (i % 5) + 1,
        };
    });

    return [...base, ...generated];
}, []);


    /** Keep backup in localStorage (optional) */
    useEffect(() => {
        localStorage.setItem("all_products_backup", JSON.stringify(products));
    }, [products]);

    /** -------------------------------------------
     * Filters
     * -------------------------------------------- */
    const filters = [
        { key: "Adapters", label: "Adapters" },
        { key: "Chargers", label: "Chargers" },
        { key: "Earphones", label: "Earphones" },
    ];

    /** -------------------------------------------
     * Filtering (case-insensitive) + Limit 10 items
     * -------------------------------------------- */
    const filteredProducts = useMemo(() => {
        const _filtered = products.filter((p) =>
            p?.type?.toLowerCase() === activeFilter.toLowerCase()
        );

        return _filtered
            .map((p) => ({
                ...p,
                compatibleDevices: Array.isArray(p.compatibleDevices)
                    ? p.compatibleDevices
                    : ["Universal"],
                image: p.image || p.images?.[0] || "",
            }))
            .slice(0, 10);
    }, [products, activeFilter]);

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`px-8 py-3 text-lg font-bold uppercase tracking-widest transition-all duration-300 border-b-4 rounded-t-lg
                                ${
                                    activeFilter === filter.key
                                        ? "border-blue-700 text-gray-900 shadow-lg shadow-blue-200/50"
                                        : "border-transparent text-gray-500 hover:text-blue-700 hover:border-blue-300"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
                    {filteredProducts.length ? (
                        filteredProducts.map((product) => (
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
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-gray-500 text-xl font-medium">
                                No products found in the **{activeFilter}** category.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProductsGrid;
