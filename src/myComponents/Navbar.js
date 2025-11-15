import { useState } from "react";
import { Search, Heart, ShoppingCart, Shuffle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../logo/logoImg.png";

export default function Navbar() {
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    { title: "Data cables", key: "data-cables", items: ["BC_01", "BC_02", "BC_03", "BC_04", "BC_05"] },
    { title: "Adapters", key: "adapters", items: ["BL_01", "BL_02", "BL_03", "BL_04", "BL_05"] },
    { title: "Chargers", key: "chargers", items: ["CH_01", "CH_02", "CH_03", "CH_04"] },
    { title: "Earphones", key: "earphones", items: ["KB_01", "KB_03", "KB_04"] },
    { title: "Car charger", key: "car-charger", items: ["CL_01", "CL_02"] },
    { title: "Glass protection", key: "glass-protection", items: ["Print", "Clear"] },
    { title: "More", key: "more", items: ["Screen Protectors", "Camera Lenses", "Phone Grips", "Cleaning Kits", "Adapters", "Docks & Hubs", "Audio Accessories", "Gift Cards"] }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <header className="w-full shadow-sm bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="BlackWave Logo" className="w-8 h-8 object-contain" />
          <Link to="/" className="text-xl font-bold">BlackWave</Link>
        </div>

        <nav className="hidden lg:flex space-x-6 relative">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="py-3 px-2 -mx-2 rounded-lg transition-colors group-hover:bg-gray-50">
                <Link to={`/category/${item.key}`} className="text-sm font-medium hover:text-blue-600 whitespace-nowrap">
                  {item.title}
                </Link>
              </div>

              <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                <div className="bg-white shadow-lg border rounded-lg min-w-[200px] animate-fadeIn">
                  <ul className="py-2">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={`/product/${subItem}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 whitespace-nowrap transition-colors"
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4 sm:space-x-5 text-gray-700">
          <Link to="/login" className="hidden sm:flex text-sm font-medium hover:text-blue-600">Login / Register</Link>

          <Search className="w-5 h-5 cursor-pointer hover:text-blue-600 hidden sm:block" />

          <div className="relative hidden sm:block">
            <Shuffle className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </div>

          <div className="relative hidden sm:block">
            <Heart className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{wishlistCount}</span>
          </div>

          <div className="relative flex items-center space-x-2">
            <div className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>
            </div>
            <span className="text-sm font-medium hidden sm:block">0.00 DT</span>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white animate-slideDown">
          <div className="px-4 py-3 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <nav className="px-4 py-2">
            {navigationItems.map((item, index) => (
              <div key={index} className="border-b last:border-b-0">
                <button
                  className="w-full flex justify-between items-center py-3 text-left font-medium hover:text-blue-600"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.title}
                  <span className={`transform transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}>▼</span>
                </button>

                {activeDropdown === index && (
                  <div className="pl-4 pb-2 animate-fadeIn">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/product/${subItem}`}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="px-4 py-4 border-t bg-gray-50">
            <div className="flex space-x-4 mb-4">
              <Link to="/login" className="flex-1 text-center hover:text-blue-600">Login</Link>
              <Link to="/register" className="flex-1 text-center hover:text-blue-600">Register</Link>
            </div>

            <div className="flex justify-around text-gray-600">
              <button className="flex flex-col items-center p-2 hover:text-blue-600">
                <Search className="w-5 h-5" />
                <span className="text-xs mt-1">Search</span>
              </button>
              <button className="flex flex-col items-center p-2 hover:text-blue-600">
                <Shuffle className="w-5 h-5" />
                <span className="text-xs mt-1">Compare</span>
              </button>
              <button className="flex flex-col items-center p-2 hover:text-blue-600">
                <Heart className="w-5 h-5" />
                <span className="text-xs mt-1">Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
