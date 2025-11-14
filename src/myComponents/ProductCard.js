import React, { useState } from 'react';
import { Sliders, Eye, Heart, ShoppingCart } from 'lucide-react';

// Mock implementation for ProductModal for runnable single file
const ProductModal = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 p-4" onClick={onClose}>
            <div className="bg-white p-6 rounded-xl max-w-lg w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{product.title}</h3>
                <p className="text-xl font-semibold text-blue-700 mb-4">${product.price.toFixed(2)}</p>
                <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-auto object-cover rounded-lg mb-4" 
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src="https://placehold.co/600x600/f3f4f6/9ca3af?text=Product"; 
                    }}
                />
                <p className="text-gray-700 text-sm mb-2">{product.description}</p>
                <p className="text-sm text-gray-500">In Stock: {product.stock}</p>
                <button 
                    onClick={onClose} 
                    className="mt-6 w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-colors"
                >
                    Close Quick View
                </button>
            </div>
        </div>
    );
};


const ProductCard = ({
    image,
    name,
    price,
    type,
    compatibleDevices,
    isHot,
    onAddToCart,
    onAddToWishlist
}) => {
    const [showModal, setShowModal] = useState(false);

    // Defensive structure for modal content
    const modalProduct = {
        images: [image || "https://placehold.co/600x600/f3f4f6/9ca3af?text=Product"],
        title: name || "Untitled Product",
        price: price || 0,
        description: `Compatible with ${compatibleDevices?.join(", ") || "Various Devices"}. Category: ${type || "N/A"}.`,
        stock: Math.floor(Math.random() * 50) + 10,
        categories: [type, ...(compatibleDevices || [])],
    };


    const handleQuickView = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="group relative w-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
                {/* Product Image Container */}
                <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src="https://placehold.co/300x400/f3f4f6/9ca3af?text=Product"; 
                        }}
                    />

                    {/* Hot Badge */}
                    {isHot && (
                        <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider z-10 shadow-md">
                            HOT
                        </div>
                    )}

                    {/* Action Buttons (Whislist, Quick View, Compare) */}
                    <div className="absolute top-3 left-3 flex flex-col items-center gap-2">
                        {[
                            { icon: Heart, label: 'Wishlist', onClick: onAddToWishlist },
                            { icon: Eye, label: 'Quick View', onClick: handleQuickView },
                            { icon: Sliders, label: 'Compare', onClick: () => console.log('Compare clicked') },
                        ].map(({ icon: Icon, label, onClick }, idx) => (
                            <button
                                key={label}
                                onClick={(e) => { e.stopPropagation(); onClick(); }}
                                className={`bg-white/95 backdrop-blur-sm text-gray-500 hover:text-blue-700 p-2 rounded-full shadow-md transition-all duration-300 
                                            // Conditional visibility: Wishlist is always visible on small screens
                                            ${idx === 0 ? 'block' : 'hidden sm:block'} 
                                            // Desktop hover effect
                                            sm:transform sm:translate-x-[-150%] sm:group-hover:translate-x-0 sm:delay-${idx * 75}`}
                                aria-label={label}
                            >
                                <Icon size={16} />
                            </button>
                        ))}
                    </div>

                    {/* Add to Cart Button (Bottom Slide Up) */}
                    <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                        <button
                            onClick={(e) => { e.stopPropagation(); onAddToCart(); }}
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-sm font-semibold uppercase tracking-widest flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-500/40"
                        >
                            <ShoppingCart size={16} className="mr-2" />
                            ADD TO CART
                        </button>
                    </div>
                </div>

                {/* Product Details */}
                <div className="p-3 sm:p-4 text-center">
                    {/* Name */}
                    {/* Updated: Switched to font-semibold and wider tracking for chic aesthetic */}
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base tracking-widest line-clamp-2 leading-snug min-h-[2.8rem] transition-colors duration-300 group-hover:text-blue-700">
                        {name}
                    </h3>

                    {/* Compatible Devices */}
                    <div className="mt-1 flex justify-center">
                        <span className="text-xs text-gray-500 uppercase tracking-wide line-clamp-1">
                            {compatibleDevices?.join(' · ') || type}
                        </span>
                    </div>

                    {/* Price - Refined for Chic Look */}
                    <div className="flex items-end justify-center mt-2 sm:mt-3">
                        <span className="text-base font-semibold text-gray-600 mr-1">$</span>
                        <span className="text-xl font-bold text-gray-900">
                            {price?.toFixed(2) || "0.00"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <ProductModal 
                    product={modalProduct} 
                    onClose={handleCloseModal} 
                />
            )}
        </>
    );
};

export default ProductCard;