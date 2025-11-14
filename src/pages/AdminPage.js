import React, { useState } from 'react';
import { Lock, Image, List, Package, Handshake, Menu, X, LogOut } from 'lucide-react';

// --- Login Component ---
const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Temporary mock: login if both fields are filled
    if (username && password) {
      onLogin(true);
    } else {
      alert('Enter username and password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-2xl border border-blue-700/50">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <Lock className="w-6 h-6 mr-3 text-blue-500" />
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center justify-center"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Form Card Wrapper ---
const FormCard = ({ title, icon: Icon, children, onSubmit }) => (
  <div className="p-6 bg-gray-900 rounded-xl shadow-2xl border border-blue-700/50">
    <h2 className="text-3xl font-extrabold text-white mb-6 pb-2 border-b border-blue-600 flex items-center">
      <Icon className="w-6 h-6 mr-3 text-blue-500" />
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
    <div className="mt-8">
      <button
        onClick={onSubmit}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center"
      >
       
        Submit
      </button>
    </div>
  </div>
);

// --- Slider Form ---
const AddSlider = () => {
  const [data, setData] = useState({
    image: '',
    title: '',
    description: '',
    button1: '',
    button2: '',
  });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    console.log('Slider Added', data);
    alert('Slider Added');
    setData({ image: '', title: '', description: '', button1: '', button2: '' });
  };

  return (
    <FormCard title="Manage Sliders" icon={Image} onSubmit={handleSubmit}>
      <input name="image" placeholder="Image URL" value={data.image} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <input name="title" placeholder="Title" value={data.title} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <textarea name="description" placeholder="Description" value={data.description} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <input name="button1" placeholder="Button 1 Text" value={data.button1} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <input name="button2" placeholder="Button 2 Text" value={data.button2} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
    </FormCard>
  );
};

// --- Category Form ---
const AddCategory = () => {
  const [data, setData] = useState({ name: '', count: '', image: '' });
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    console.log('Category Added', data);
    alert('Category Added');
    setData({ name: '', count: '', image: '' });
  };
  return (
    <FormCard title="Define Product Categories" icon={List} onSubmit={handleSubmit}>
      <input name="name" placeholder="Category Name" value={data.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <input name="count" type="number" placeholder="Item Count" value={data.count} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <input name="image" placeholder="Image URL" value={data.image} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
    </FormCard>
  );
};

// --- Product Form ---
const AddProduct = () => {
  const [data, setData] = useState({
    name: '',
    price: '',
    image: '',
    type: '',
    compatibleDevices: '',
    rating: '',
    isHot: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === 'checkbox' ? checked : value });
  };
  const handleSubmit = () => {
    const product = {
      ...data,
      price: parseFloat(data.price),
      rating: parseInt(data.rating),
      compatibleDevices: data.compatibleDevices.split(',').map(d => d.trim())
    };
    console.log('Product Added', product);
    alert('Product Added');
    setData({ name: '', price: '', image: '', type: '', compatibleDevices: '', rating: '', isHot: false });
  };
  return (
    <FormCard title="Add New Inventory Item" icon={Package} onSubmit={handleSubmit}>
      <input name="name" placeholder="Product Name" value={data.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <div className="flex space-x-4">
        <input name="price" type="number" placeholder="Price" value={data.price} onChange={handleChange} className="w-1/2 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
        <input name="type" placeholder="Category" value={data.type} onChange={handleChange} className="w-1/2 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      </div>
      <input name="compatibleDevices" placeholder="Compatible Devices (comma separated)" value={data.compatibleDevices} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <input name="image" placeholder="Image URL" value={data.image} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <div className="flex items-center space-x-2">
        <input type="checkbox" name="isHot" checked={data.isHot} onChange={handleChange}/>
        <span className="text-gray-400">Hot Product?</span>
      </div>
      <input name="rating" type="number" placeholder="Rating (1-5)" value={data.rating} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
    </FormCard>
  );
};

// --- Sponsor Form ---
const AddSponsor = () => {
  const [data, setData] = useState({ name: '', description: '', lat: '', lng: '' });
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    const sponsor = { ...data, lat: parseFloat(data.lat), lng: parseFloat(data.lng) };
    console.log('Sponsor Added', sponsor);
    alert('Sponsor Added');
    setData({ name: '', description: '', lat: '', lng: '' });
  };
  return (
    <FormCard title="Manage Brand Sponsors" icon={Handshake} onSubmit={handleSubmit}>
      <input name="name" placeholder="Sponsor Name" value={data.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <textarea name="description" placeholder="Description" value={data.description} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      <div className="flex space-x-4">
        <input name="lat" type="number" step="0.0001" placeholder="Latitude" value={data.lat} onChange={handleChange} className="w-1/2 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
        <input name="lng" type="number" step="0.0001" placeholder="Longitude" value={data.lng} onChange={handleChange} className="w-1/2 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700"/>
      </div>
    </FormCard>
  );
};

// --- Main AdminPage ---
const AdminDashboard = () => {
  const [isLogged, setIsLogged] = useState(false); // default to false
  const [activeForm, setActiveForm] = useState('slider');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isLogged) return <AdminLogin onLogin={setIsLogged} />;

  const navItems = [
    { key: 'slider', label: 'Sliders', icon: Image },
    { key: 'category', label: 'Product Categories', icon: List },
    { key: 'product', label: 'New Inventory', icon: Package },
    { key: 'sponsor', label: 'Brand Sponsors', icon: Handshake },
  ];

  const renderActiveForm = () => {
    switch(activeForm){
      case 'slider': return <AddSlider />;
      case 'category': return <AddCategory />;
      case 'product': return <AddProduct />;
      case 'sponsor': return <AddSponsor />;
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
        {navItems.map(item=>(
          <button
            key={item.key}
            className={`flex items-center w-full text-left p-4 rounded-xl transition duration-300 ${
              activeForm===item.key ? 'bg-blue-700 text-white shadow-lg shadow-blue-800/30':'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
            }`}
            onClick={()=>{ setActiveForm(item.key); setIsSidebarOpen(false); }}
          >
            <item.icon className="w-5 h-5 mr-3"/>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      <button onClick={()=>setIsLogged(false)} className="mt-8 flex items-center w-full text-left p-4 rounded-xl text-red-400 bg-gray-800 hover:bg-red-900/40 transition duration-300">
        <LogOut className="w-5 h-5 mr-3"/>
        <span className="font-medium">Logout</span>
      </button>
    </>
  );

  return (
    <div className="min-h-screen flex bg-gray-950 text-gray-100 font-sans">
      {/* Mobile Menu Button */}
      <button className="fixed top-4 left-4 z-40 p-2 rounded-lg bg-gray-800 lg:hidden text-white shadow-xl border border-blue-700/50"
        onClick={()=>setIsSidebarOpen(true)}>
        <Menu className="w-6 h-6"/>
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-gray-900 shadow-2xl shadow-black/50 p-6 space-y-4 fixed h-full border-r border-blue-700/50">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 lg:hidden ${isSidebarOpen?'translate-x-0':'-translate-x-full'}`}>
        <div className="w-64 bg-gray-900 shadow-2xl h-full p-6">
          <SidebarContent />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 -z-10" onClick={()=>setIsSidebarOpen(false)}></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4 lg:p-10 pt-20 lg:pt-10">
        
        {renderActiveForm()}
      </div>
    </div>
  );
};

export default AdminDashboard;
