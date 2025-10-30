import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    id: 5,
    name: "iPhone 13 Case – Smokey Black",
    price: 169.0,
    image: "https://w7.pngwing.com/pngs/853/608/png-transparent-airpods.png",
    type: "CASES",
  },
  {
    id: 6,
    name: "Lightning Cable USB-A",
    price: 25.0,
    image: "https://w7.pngwing.com/pngs/853/608/png-transparent-airpods.png",
    type: "ACCESSORIES",
  },
  {
    id: 7,
    name: "Wireless Charger Stand",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "ACCESSORIES",
  },
  {
    id: 8,
    name: "Apple Watch Sport Band",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "WATCH BAND",
  },
  {
    id: 9,
    name: "USB-C to Lightning Cable",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "ACCESSORIES",
  },
];

export default function PopularProductsCarousel() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const transitionRef = useRef(null);

  // Drag states and refs
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);

  // 1. Set responsive itemsPerSlide
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(5);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 2. Clone slides for infinite looping
  const extendedProducts = [
    ...products.slice(-itemsPerSlide),
    ...products,
    ...products.slice(0, itemsPerSlide),
  ];

  const realIndexStart = itemsPerSlide;
  const realIndexEnd = extendedProducts.length - itemsPerSlide;

  // 3. Initialize currentIndex in middle (real start)
  useEffect(() => {
    setCurrentIndex(itemsPerSlide);
  }, [itemsPerSlide]);

  // 4. Loop seamlessly by resetting index after transition
  useEffect(() => {
    if (isTransitioning) {
      transitionRef.current = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex >= realIndexEnd) {
          setCurrentIndex(itemsPerSlide); // reset to real start
        } else if (currentIndex < realIndexStart) {
          setCurrentIndex(realIndexEnd - 1); // reset to real end
        }
      }, 300); // transition duration must match CSS
    }
    return () => clearTimeout(transitionRef.current);
  }, [currentIndex, isTransitioning, realIndexStart, realIndexEnd, itemsPerSlide]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    dragDeltaX.current = e.clientX - dragStartX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50; // minimum pixels to trigger slide change
    if (dragDeltaX.current > threshold) {
      handlePrev();
    } else if (dragDeltaX.current < -threshold) {
      handleNext();
    }
    dragDeltaX.current = 0;
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Most Popular Products
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Proponents of content strategy may shun dummy copy designers
        </p>

        <div
          className="relative mt-10 overflow-hidden select-none"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-300 ease-in-out" : ""
            }`}
            style={{
              width: `${(extendedProducts.length * 100) / itemsPerSlide}%`,
              transform: `translateX(-${
                (currentIndex * 100) / extendedProducts.length
              }%)`,
            }}
          >
            {extendedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="p-4 flex-shrink-0"
                style={{ width: `${100 / extendedProducts.length}%` }}
              >
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 mx-auto object-contain"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <h3 className="mt-4 text-sm font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500">{product.type}</p>
                  <p className="mt-2 text-blue-600 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-800 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-800 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
