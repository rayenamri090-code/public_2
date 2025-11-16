import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut, Image, List, Package, Handshake, UserPlus } from 'lucide-react';
import AddAdmin from '../myComponents/admin/AddAdmin';
import LoginPage from '../myComponents/AdminLogin';
import AddSlider from '../myComponents/admin/AddSlider';
import AddCategory from '../myComponents/admin/AddCategory';
import AddProduct from '../myComponents/admin/AddProduct';
import AddSponsor from '../myComponents/admin/AddSponsor';


const AdminDashboard = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [activeForm, setActiveForm] = useState('slider');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Check token on load
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsLogged(true);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLogged(false);
  };

  if (!isLogged) return <LoginPage onLogin={setIsLogged} />;

  const navItems = [
    { key: 'slider', label: 'Sliders', icon: Image },
    { key: 'category', label: 'Product Categories', icon: List },
    { key: 'product', label: 'New Inventory', icon: Package },
    { key: 'sponsor', label: 'Brand Sponsors', icon: Handshake },
    { key: 'admin', label: 'Add Admin', icon: UserPlus },

  ];

  const renderActiveForm = () => {
    switch (activeForm) {
      case 'slider': return <AddSlider />;
      case 'category': return <AddCategory />;
      case 'product': return <AddProduct />;
      case 'sponsor': return <AddSponsor />;
      case 'admin': return <AddAdmin />;

      default: return <div>Select a management area</div>;
    }
  };

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black text-blue-400 mb-8 border-b border-gray-700/50 pb-2">
          <span className="text-white font-light">Admin </span>Dashboard
        </h2>
        <button className="lg:hidden text-gray-400 hover:text-white mb-8" onClick={() => setIsSidebarOpen(false)}><X className="w-6 h-6" /></button>
      </div>

      <div className="space-y-2">
        {navItems.map(item => (
          <button
            key={item.key}
            className={`flex items-center w-full text-left p-4 rounded-xl transition duration-300 ${
              activeForm === item.key ? 'bg-blue-700 text-white shadow-lg shadow-blue-800/30' : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
            }`}
            onClick={() => { setActiveForm(item.key); setIsSidebarOpen(false); }}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <button onClick={handleLogout} className="mt-8 flex items-center w-full text-left p-4 rounded-xl text-red-400 bg-gray-800 hover:bg-red-900/40 transition duration-300">
        <LogOut className="w-5 h-5 mr-3" />
        <span className="font-medium">Logout</span>
      </button>
    </>
  );

  return (
    <div className="min-h-screen flex bg-gray-950 text-gray-100 font-sans">
      {/* Mobile Menu */}
      <button className="fixed top-4 left-4 z-40 p-2 rounded-lg bg-gray-800 lg:hidden text-white shadow-xl border border-blue-700/50"
        onClick={() => setIsSidebarOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-gray-900 shadow-2xl shadow-black/50 p-6 space-y-4 fixed h-full border-r border-blue-700/50">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-64 bg-gray-900 shadow-2xl h-full p-6">
          <SidebarContent />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 -z-10" onClick={() => setIsSidebarOpen(false)}></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4 lg:p-10 pt-20 lg:pt-10">
        {renderActiveForm()}
      </div>
    </div>
  );
};

export default AdminDashboard;
