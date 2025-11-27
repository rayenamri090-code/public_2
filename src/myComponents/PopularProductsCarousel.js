import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductModal from "../myComponents/ProductModal";

const products = [
  {
    id: 1,
    name: "iPhone 12 Pro Moment Case - Blue",
    price: 149.0,
    image:
      "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
    type: "CASES",
  },
  {
    id: 2,
    name: "iPhone Leather Wallet Black",
    price: 199.0,
    image:
      "https://w1.pngwing.com/pngs/8/703/png-transparent-iphone-x-apple-iphone-xs-max-iphone-5s-smartphone-book-scanner-telephone-mobile-phones-mobile-phone-case-mobile-phone-accessories-thumbnail.png",
    type: "WALLET",
  },
  {
    id: 3,
    name: "Everyday Leather Strap – Olive",
    price: 199.0,
    image:
      "https://w1.pngwing.com/pngs/8/703/png-transparent-iphone-x-apple-iphone-xs-max-iphone-5s-smartphone-book-scanner-telephone-mobile-phones-mobile-phone-case-mobile-phone-accessories-thumbnail.png",
    type: "WATCH BAND",
  },
  {
    id: 4,
    name: "Case for AirPods – Blue",
    price: 9.99,
    image: "https://w7.pngwing.com/pngs/853/608/png-transparent-airpods.png",
    type: "CASES",
  },
];

export default function PopularProductsCarousel() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // ★ STATE FOR PRODUCT MODAL
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Dragging
  const dragStart = useRef(null);

  // Responsive items per slide
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(3);
      else setItemsPerSlide(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Infinite loop duplication
  const extended = [
    ...products.slice(-itemsPerSlide),
    ...products,
    ...products.slice(0, itemsPerSlide),
  ];

  const realStart = itemsPerSlide;
  const realEnd = extended.length - itemsPerSlide;

  useEffect(() => {
    setCurrentIndex(realStart);
  }, [itemsPerSlide]);

  const goTo = (index) => {
    setTransitionEnabled(true);
    setCurrentIndex(index);
  };

  const handlePrev = () => goTo(currentIndex - 1);
  const handleNext = () => goTo(currentIndex + 1);

  // Infinite loop reset
  useEffect(() => {
    if (currentIndex === realEnd) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(realStart);
      }, 300);
    } else if (currentIndex === realStart - 1) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(realEnd - 1);
      }, 300);
    }
  }, [currentIndex]);

  // Drag handlers
  const handleDown = (e) => {
    dragStart.current = e.clientX || e.touches[0].clientX;
  };

  const handleUp = (e) => {
    if (!dragStart.current) return;
    const endX = e.clientX || e.changedTouches[0].clientX;
    const diff = endX - dragStart.current;

    if (diff > 60) handlePrev();
    else if (diff < -60) handleNext();

    dragStart.current = null;
  };

  return (
    <section className="py-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-2 border-b-2 border-blue-700/50 inline-block px-4">
          Most Popular Products
        </h2>

        <div
          className="relative mt-10 overflow-hidden select-none"
          onMouseDown={handleDown}
          onMouseUp={handleUp}
          onMouseLeave={handleUp}
          onTouchStart={handleDown}
          onTouchEnd={handleUp}
        >
          <div
            className={`flex ${
              transitionEnabled ? "transition-transform duration-300" : ""
            }`}
            style={{
              width: `${(extended.length / itemsPerSlide) * 100}%`,
              transform: `translateX(-${
                (currentIndex * 100) / extended.length
              }%)`,
            }}
          >
            {extended.map((p, i) => (
              <div
                key={i}
                className="p-3 flex-shrink-0 cursor-pointer"
                style={{ width: `${100 / extended.length}%` }}
                onClick={() => setSelectedProduct(p)} // ★ OPEN MODAL
              >
                <div className="bg-white rounded-xl shadow-lg border p-5 group">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-32 mx-auto object-contain group-hover:scale-105 transition-transform"
                  />

                  <h3 className="mt-4 text-sm font-semibold text-gray-900 line-clamp-1">
                    {p.name}
                  </h3>

                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    {p.type}
                  </p>

                  <div className="flex items-end justify-center mt-2">
                    <span className="text-base font-semibold text-gray-600 mr-0.5">
                      DT
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {p.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow border"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow border"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* ★ PRODUCT MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
