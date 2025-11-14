import React, { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    type: "",
    compatibleDevices: "",
    rating: "",
    isHot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      ...form,
      compatibleDevices: form.compatibleDevices.split(",").map(d => d.trim()),
      price: parseFloat(form.price),
      rating: parseInt(form.rating)
    };

    console.log("Product Added:", product);
    alert("Product added!");
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>

        <input name="name" placeholder="Product Name" className="w-full p-2 border rounded"
          value={form.name} onChange={handleChange} />

        <input name="price" type="number" placeholder="Price" className="w-full p-2 border rounded"
          value={form.price} onChange={handleChange} />

        <input name="image" placeholder="Image URL" className="w-full p-2 border rounded"
          value={form.image} onChange={handleChange} />

        <input name="type" placeholder="Type (e.g. CASES)" className="w-full p-2 border rounded"
          value={form.type} onChange={handleChange} />

        <input name="compatibleDevices" placeholder="Compatible Devices (comma separated)" className="w-full p-2 border rounded"
          value={form.compatibleDevices} onChange={handleChange} />

        <input name="rating" type="number" placeholder="Rating (1–5)" className="w-full p-2 border rounded"
          value={form.rating} onChange={handleChange} />

        <label className="flex items-center gap-2">
          <input type="checkbox" name="isHot" checked={form.isHot} onChange={handleChange} />
          Hot Product?
        </label>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
