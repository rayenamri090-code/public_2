import { useState, useEffect } from "react";
import { Search, Heart, Shuffle, Menu, X } from "lucide-react";
import logo from "../logo/logoImg.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [wishlistCount, setWishlistCount] = useState(0);
  const [compareCount, setCompareCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    { title: "Data Cables", slug: "data-cables", items: ["BC_01","BC_02","BC_03","BC_04","BC_05"] },
    { title: "Adapters", slug: "adapters", items: ["BL_01","BL_02","BL_03","BL_04","BL_05"] },
    { title: "Chargers", slug: "chargers", items: ["CG_01","CG_02","CG_03","CG_04","CG_05"] },
    { title: "Earphones", slug: "earphones", items: ["KB_01","KB_03","KB_04"] },
    { title: "Car Charger", slug: "car-charger", items: ["CL_01","CL_02"] },
    { title: "Glass Protection", slug: "glass-protection", items: ["Print","Clear"] },
  ];

  useEffect(() => {
    const updateCounts = () => {
      const wl = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const cmp = JSON.parse(localStorage.getItem("compare") || "[]");
      setWishlistCount(wl.length);
      setCompareCount(cmp.length);
    };
    updateCounts();
    window.addEventListener("storage", updateCounts);
    window.addEventListener("compareUpdated", updateCounts);
    window.addEventListener("wishlistUpdated", updateCounts);
    return () => {
      window.removeEventListener("storage", updateCounts);
      window.removeEventListener("compareUpdated", updateCounts);
      window.removeEventListener("wishlistUpdated", updateCounts);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);
  const handleCompareClick = () => navigate("/compare");
  const handleWishlistClick = () => navigate("/wishlist");

  return (
    <header className="w-full shadow-sm bg-white border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain"/>
          <span className="text-xl font-bold">BlackWave<span className="text-black"></span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 relative">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative group">
              <div
                className="py-3 px-2 -mx-2 rounded-lg transition-colors group-hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/shop/category/${item.slug}`)}
              >
                <span className="text-sm font-medium hover:text-blue-600 whitespace-nowrap">
                  {item.title}
                </span>
              </div>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                <div className="bg-white shadow-lg border rounded-lg min-w-[200px]">
                  <ul className="py-2">
                    {item.items.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 cursor-pointer whitespace-nowrap transition-colors"
                        onClick={() => navigate(`/product/${subItem}`)}
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4 sm:space-x-5 text-gray-700">
          <Search className="w-5 h-5 cursor-pointer hover:text-blue-600 hidden sm:block"/>
          <div className="relative hidden sm:block cursor-pointer" onClick={handleCompareClick}>
            <Shuffle className="w-5 h-5 hover:text-blue-600"/>
            {compareCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{compareCount}</span>
            )}
          </div>
          <div className="relative hidden sm:block cursor-pointer" onClick={handleWishlistClick}>
            <Heart className="w-5 h-5 hover:text-blue-600"/>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{wishlistCount}</span>
            )}
          </div>
          <button className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-4 py-3 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
              <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
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
                  <div className="pl-4 pb-2">
                    {item.items.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600 w-full text-left"
                        onClick={() => navigate(`/product/${subItem}`)}
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
