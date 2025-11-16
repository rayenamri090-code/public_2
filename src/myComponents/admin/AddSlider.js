// components/AddSlider.js
import React, { useState } from 'react';
import { Image } from 'lucide-react';
import FormCard from './FormCard';

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
      <input 
        name="image" 
        placeholder="Image URL" 
        value={data.image} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
      <input 
        name="title" 
        placeholder="Title" 
        value={data.title} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
      <textarea 
        name="description" 
        placeholder="Description" 
        value={data.description} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
      <input 
        name="button1" 
        placeholder="Button 1 Text" 
        value={data.button1} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
      <input 
        name="button2" 
        placeholder="Button 2 Text" 
        value={data.button2} 
        onChange={handleChange} 
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700" 
      />
    </FormCard>
  );
};

export default AddSlider;