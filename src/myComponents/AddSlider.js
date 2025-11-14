import React, { useState } from "react";

const AddSlider = () => {
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    button1: "",
    button2: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Slider Added:", form);
    alert("Slider item added!");
    setForm({ image: "", title: "", description: "", button1: "", button2: "" });
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">Add Slider Image</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        
        <input name="image" placeholder="Image URL" className="w-full p-2 border rounded"
          value={form.image} onChange={handleChange} />

        <input name="title" placeholder="Title" className="w-full p-2 border rounded"
          value={form.title} onChange={handleChange} />

        <textarea name="description" placeholder="Description" className="w-full p-2 border rounded"
          value={form.description} onChange={handleChange}></textarea>

        <input name="button1" placeholder="Button 1 Text" className="w-full p-2 border rounded"
          value={form.button1} onChange={handleChange} />

        <input name="button2" placeholder="Button 2 Text" className="w-full p-2 border rounded"
          value={form.button2} onChange={handleChange} />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddSlider;
