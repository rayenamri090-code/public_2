import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "../myComponents/ProductCard";
import { useNavigate } from "react-router-dom";

// --- Define your base products here ---
const baseProducts = [
    { id: 1, name: "Glass Protection Clear", price: 29, type: "Glass Protection", image: "https://png.pngtree.com/png-clipart/20230131/ourmid/pngtree-anti-crack-tempered-glass-logo-png-image_6577027.png" },
    { id: 2, name: "Car Charger CL_01", price: 15, type: "Car Charger", image: "https://t4.ftcdn.net/jpg/03/90/00/52/360_F_390005247_4U4Vv1RL1zKqR6F4LCmgj3t5ITvlYj7y.jpg" },
    { id: 3, name: "Data Cable BC_01", price: 10, type: "Data Cables", image: "https://static.thenounproject.com/png/884572-200.png" },
    { id: 4, name: "Adapter BL_01", price: 12, type: "Adapters", image: "https://thumbs.dreamstime.com/b/minimalist-usb-c-to-adapter-icon-black-white-background-414055477.jpg" },
    { id: 5, name: "Charger CG_01", price: 20, type: "Chargers", image: "https://t.pimg.jp/092/860/826/1/92860826.jpg" },
];

const ProductsGrid = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState("Adapters");

    /** -------------------------------------------
     * Generate products with consistent categorySlug
     * -------------------------------------------- */
    const products = useMemo(() => {
        const generated = Array.from({ length: 20 }, (_, i) => {
            const categories = ["Adapters", "Chargers", "Earphones", "Data Cables", "Car Charger", "Glass Protection"];
            const type = categories[i % categories.length];
            return {
                id: 1000 + i,
                name: `${type} Sample #${i + 1}`,
                price: 10 + (i % 5) * 5,
                image: "https://placehold.co/300x400/f3f4f6/9ca3af?text=Product",
                type,
                categorySlug: type.toLowerCase().replace(/\s+/g, "-"),
                compatibleDevices: ["Universal"],
            };
        });

        // Make sure base products also have categorySlug
        const baseWithSlug = baseProducts.map(p => ({
            ...p,
            categorySlug: p.type.toLowerCase().replace(/\s+/g, "-"),
        }));

        return [...baseWithSlug, ...generated];
    }, []);

    /** Keep backup in localStorage (optional) */
    useEffect(() => {
        localStorage.setItem("all_products_backup", JSON.stringify(products));
    }, [products]);

    /** Filters */
    const filters = [
        "Data Cables",
        "Adapters",
        "Chargers",
        "Earphones",
        "Car Charger",
        "Glass Protection"
    ];

    /** Filter products */
    const filteredProducts = useMemo(() => {
        return products.filter(p => p.type.toLowerCase() === activeFilter.toLowerCase());
    }, [products, activeFilter]);

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-8 py-3 text-lg font-bold uppercase tracking-widest transition-all duration-300 border-b-4 rounded-t-lg
                                ${activeFilter === filter
                                    ? "border-blue-700 text-gray-900 shadow-lg shadow-blue-200/50"
                                    : "border-transparent text-gray-500 hover:text-blue-700 hover:border-blue-300"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
                    {filteredProducts.length ? (
                        filteredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                type={product.type}
                                compatibleDevices={product.compatibleDevices}
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
