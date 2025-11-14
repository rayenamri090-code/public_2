import React, { useState, useMemo } from "react";
import ProductCard from "../myComponents/ProductCard"; // <- verify this path in your project

/**
 * Defensive ProductsGrid
 * - Shows up to 10 products per selected category
 * - Won't crash if some fields are missing
 * - Logs useful debug information to the console
 */
const ProductsGrid = () => {
    const [activeFilter, setActiveFilter] = useState("CASES");

    // -- product dataset (guarantee fields exist) --
    const products = useMemo(() => {
        const base = [
            {
                id: 1,
                name: "iPhone 12 Pro Moment Case - Blue",
                price: 149.0,
                image:
                    "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
                type: "CASES",
                compatibleDevices: ["iPhone 12 Pro"],
                rating: 4,
                isHot: false,
            },
            {
                id: 2,
                name: "Full Aquarelle iPhone XR",
                price: 169.0,
                image:
                    "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
                type: "CASES",
                compatibleDevices: ["iPhone XR"],
                rating: 5,
            },
            {
                id: 3,
                name: "Premium Leather Strap - Brown",
                price: 89.0,
                image:
                    "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
                type: "STRAPS",
                compatibleDevices: ["Universal"],
                rating: 5,
            },
            {
                id: 4,
                name: "Magnetic MagSafe Charger",
                price: 79.0,
                image:
                    "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
                type: "MAGSAFE",
                compatibleDevices: ["iPhone 12+", "iPhone 13"],
                rating: 4,
                isHot: true,
            },
            {
                id: 5,
                name: "Silicone Sport Strap - Black",
                price: 49.0,
                image:
                    "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
                type: "STRAPS",
                compatibleDevices: ["Universal"],
                rating: 4,
            },
            // add more real items if you have them...
        ];

        // create extra sample items to ensure categories can reach 10 items
        const generated = Array.from({ length: 30 }, (_, i) => {
            const kind = ["CASES", "STRAPS", "MAGSAFE"][i % 3];
            return {
                id: 1000 + i,
                name: `Sample ${kind} #${i + 1}`,
                price: 49 + (i % 5) * 10,
                image:
                    "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
                type: kind,
                compatibleDevices: ["Universal"],
                rating: (i % 5) + 1,
            };
        });

        return [...base, ...generated];
    }, []);

    const filters = [
        { key: "CASES", label: "CASES" },
        { key: "STRAPS", label: "STRAPS" },
        { key: "MAGSAFE", label: "MAGSAFE" },
    ];

    // Defensive filtered products (case-insensitive) and limit to 10
    const filteredProducts = useMemo(() => {
        if (!Array.isArray(products)) {
            console.error("Products is not an array:", products);
            return [];
        }
        const _filtered = products.filter((p) => {
            if (!p || typeof p.type !== "string") return false;
            return p.type.toLowerCase() === String(activeFilter).toLowerCase();
        });

        // debug: log how many matched
        console.debug(`Products matched for "${activeFilter}":`, _filtered.length);

        // ensure every item has compatibleDevices and images/ image fallback
        return _filtered
            .map((p) => ({
                ...p,
                compatibleDevices: Array.isArray(p.compatibleDevices)
                    ? p.compatibleDevices
                    : ["Universal"],
                images: Array.isArray(p.images) ? p.images : [p.image || ""],
            }))
            .slice(0, 10);
    }, [products, activeFilter]);

    // action handlers (replace with your real logic)
    const handleAddToCart = (product) => {
        console.log("Add to cart:", product);
    };
    const handleAddToWishlist = (product) => {
        console.log("Add to wishlist:", product);
    };

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Title */}
               

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`px-8 py-3 text-lg font-bold uppercase tracking-widest transition-all duration-300 border-b-4 rounded-t-lg
                                ${activeFilter === filter.key
                                    ? "border-blue-700 text-gray-900 shadow-lg shadow-blue-200/50" // Active: Strong blue line, dark text, subtle shadow
                                    : "border-transparent text-gray-500 hover:text-blue-700 hover:border-blue-300" // Inactive: Dark text, hover to light blue line
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
                    {filteredProducts.length ? (
                        filteredProducts.map((product) => {
                            // Defensive: ensure id exists for key
                            const key = product.id ?? `${product.name}-${Math.random()}`;
                            return (
                                <ProductCard
                                    key={key}
                                    image={product.image || product.images?.[0] || ""}
                                    name={product.name || "Untitled product"}
                                    price={typeof product.price === "number" ? product.price : 0}
                                    type={product.type || ""}
                                    compatibleDevices={product.compatibleDevices}
                                    rating={product.rating || 0}
                                    isHot={!!product.isHot}
                                    onAddToCart={() => handleAddToCart(product)}
                                    onAddToWishlist={() => handleAddToWishlist(product)}
                                />
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-gray-500 text-xl font-medium">
                                No luxurious products found in the **{activeFilter}** category.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductsGrid;