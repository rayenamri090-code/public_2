import React, { useState } from "react";

const AddSponsor = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    lat: "",
    lng: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sponsor = {
      ...form,
      lat: parseFloat(form.lat),
      lng: parseFloat(form.lng),
    };

    console.log("Sponsor Added:", sponsor);
    alert("Sponsor added!");

    setForm({ name: "", description: "", lat: "", lng: "" });
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">Add Sponsor</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>

        <input name="name" placeholder="Sponsor Name" className="w-full p-2 border rounded"
          value={form.name} onChange={handleChange} />

        <textarea name="description" placeholder="Description" className="w-full p-2 border rounded"
          value={form.description} onChange={handleChange}></textarea>

        <input name="lat" type="number" step="0.0001" placeholder="Latitude" className="w-full p-2 border rounded"
          value={form.lat} onChange={handleChange} />

        <input name="lng" type="number" step="0.0001" placeholder="Longitude" className="w-full p-2 border rounded"
          value={form.lng} onChange={handleChange} />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddSponsor;
