// components/AddProduct.js
import React, { useState } from 'react';
import { Package } from 'lucide-react';
import FormCard from './FormCard';

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
    setData({ 
      name: '', 
      price: '', 
      image: '', 
      type: '', 
      compatibleDevices: '', 
      rating: '', 
      isHot: false 
    });
  };

  return (
    <FormCard title="Add New Inventory Item" icon={Package} onSubmit={handleSubmit}>
      <input 
        name="name" 
        placeholder="Product Name" 
        value={data.name} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
      <div className="flex space-x-4">
        <input 
          name="price" 
          type="number" 
          placeholder="Price" 
          value={data.price} 
          onChange={handleChange} 
          className="w-1/2 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
        />
        <input 
          name="type" 
          placeholder="Category" 
          value={data.type} 
          onChange={handleChange} 
          className="w-1/2 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
        />
      </div>
      <input 
        name="compatibleDevices" 
        placeholder="Compatible Devices (comma separated)" 
        value={data.compatibleDevices} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
      <input 
        name="image" 
        placeholder="Image URL" 
        value={data.image} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
      <div className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="isHot" 
          checked={data.isHot} 
          onChange={handleChange} 
        />
        <span className="text-gray-400">Hot Product?</span>
      </div>
      <input 
        name="rating" 
        type="number" 
        placeholder="Rating (1-5)" 
        value={data.rating} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
    </FormCard>
  );
};

export default AddProduct;