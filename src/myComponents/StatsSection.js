import React from "react";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="text-xl font-semibold">Total Products</h3>
        <p className="text-3xl font-bold text-blue-600">24</p>
      </div>

      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="text-xl font-semibold">Categories</h3>
        <p className="text-3xl font-bold text-green-600">6</p>
      </div>

      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="text-xl font-semibold">Pending Changes</h3>
        <p className="text-3xl font-bold text-yellow-600">3</p>
      </div>
    </div>
  );
};

export default StatsSection;
