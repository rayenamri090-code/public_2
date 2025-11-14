import React from 'react';

const CircleCategories = () => {
  const categories = [
    {
      name: "Cases",
      count: 51,
      image: "https://images.unsplash.com/photo-1605236453806-6ff36864818f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "MagSafe",
      count: 15,
      image: "https://images.unsplash.com/photo-1609592810793-abeb6c66bc83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Cables",
      count: 18,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Charger",
      count: 12,
      image: "https://images.unsplash.com/photo-1609592810793-abeb6c66bc83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Straps",
      count: 38,
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Power Banks",
      count: 18,
      image: "https://images.unsplash.com/photo-1609592810793-abeb6c66bc83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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