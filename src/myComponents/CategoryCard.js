
import { useNavigate } from "react-router-dom";
const CircleCategories = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "Data Cables", count: 51, image: "https://static.thenounproject.com/png/884572-200.png", slug:"data-cables" },
    { name: "Adapters", count: 15, image: "https://thumbs.dreamstime.com/b/minimalist-usb-c-to-adapter-icon-black-white-background-414055477.jpg", slug:"adapters" },
    { name: "Chargers", count: 18, image: "https://t.pimg.jp/092/860/826/1/92860826.jpg", slug:"chargers" },
    { name: "Earphones", count: 12, image: "https://t4.ftcdn.net/jpg/10/56/66/65/360_F_1056666546_5yA2wRTx33DUB1RaKP0Xd1nGecPlvaHb.jpg", slug:"earphones" },
    { name: "Car Charger", count: 38, image: "data:image/png;base64,...", slug:"car-charger" },
    { name: "Glass Protection", count: 18, image: "https://png.pngtree.com/png-clipart/20230131/ourmid/pngtree-anti-crack-tempered-glass-logo-png-image_6577027.png", slug:"glass-protection" }
  ];
  return (
    <section className="py-12 bg-gray-950 lg:bg-white transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => navigate(`/shop/category/${cat.slug}`)}
              className="group block text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-700 lg:border-gray-200 group-hover:border-blue-600 transition-all duration-300 transform group-hover:shadow-xl group-hover:shadow-blue-900/40">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/112x112/1f2937/9ca3af?text=LUX"; }}
                />
              </div>
              <h3 className="text-xl font-bold text-white lg:text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-500">{cat.name}</h3>
              <p className="text-sm text-gray-400 lg:text-gray-600">{cat.count} items</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleCategories;
