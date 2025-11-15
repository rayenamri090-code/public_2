import React from 'react';

const CircleCategories = () => {
  const categories = [
    {
      name: "Data cabels",
      count: 51,
      image: "https://static.thenounproject.com/png/884572-200.png"
    },
    {
      name: "Adapters",
      count: 15,
      image: "https://thumbs.dreamstime.com/b/minimalist-usb-c-to-adapter-icon-black-white-background-414055477.jpg"
    },
    {
      name: "Chargers",
      count: 18,
      image: "https://t.pimg.jp/092/860/826/1/92860826.jpg"
    },
    {
      name: "Earphones",
      count: 12,
      image: "https://t4.ftcdn.net/jpg/10/56/66/65/360_F_1056666546_5yA2wRTx33DUB1RaKP0Xd1nGecPlvaHb.jpg"
    },
    {
      name: "Car charger",
      count: 38,
      image: "data:image/png;base64,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"
    },
    {
      name: "Glass protection",
      count: 18,
      image: "https://png.pngtree.com/png-clipart/20230131/ourmid/pngtree-anti-crack-tempered-glass-logo-png-image_6577027.png"
    }
  ];

  return (
    <section className="py-12 bg-gray-950 lg:bg-white transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`/shop/category/${category.name.toLowerCase()}`}
              className="group block text-center transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Circle Image */}
              <div
                className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden 
                           border-4 border-gray-700 lg:border-gray-200 
                           group-hover:border-blue-600 transition-all duration-300 
                           transform group-hover:shadow-xl group-hover:shadow-blue-900/40 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  // Placeholder fallback for image error
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/112x112/1f2937/9ca3af?text=LUX";
                  }}
                />
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-bold text-white lg:text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-500">
                {category.name}
              </h3>

              {/* Product Count */}
              <p className="text-sm text-gray-400 lg:text-gray-600">
                {category.count} items
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleCategories;