// components/AddCategory.js
import React, { useState } from 'react';
import { List } from 'lucide-react';
import FormCard from './FormCard';

const AddCategory = () => {
  const [data, setData] = useState({ 
    name: '', 
    count: '', 
    image: '' 
  });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  
  const handleSubmit = () => {
    console.log('Category Added', data);
    alert('Category Added');
    setData({ name: '', count: '', image: '' });
  };

  return (
    <FormCard title="Define Product Categories" icon={List} onSubmit={handleSubmit}>
      <input 
        name="name" 
        placeholder="Category Name" 
        value={data.name} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
      <input 
        name="count" 
        type="number" 
        placeholder="Item Count" 
        value={data.count} 
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
    </FormCard>
  );
};

export default AddCategory;