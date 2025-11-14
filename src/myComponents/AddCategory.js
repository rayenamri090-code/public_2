import React, { useState } from "react";

const AddCategory = () => {
  const [form, setForm] = useState({ name: "", count: "", image: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category Added:", form);
    alert("Category added!");
    setForm({ name: "", count: "", image: "" });
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>

        <input name="name" placeholder="Category Name" className="w-full p-2 border rounded"
          value={form.name} onChange={handleChange} />

        <input name="count" type="number" placeholder="Items Count" className="w-full p-2 border rounded"
          value={form.count} onChange={handleChange} />

        <input name="image" placeholder="Image URL" className="w-full p-2 border rounded"
          value={form.image} onChange={handleChange} />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddCategory;
