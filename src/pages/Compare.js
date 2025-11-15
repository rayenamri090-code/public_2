import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, ArrowLeft } from "lucide-react";

const Compare = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    // Read full product objects
    const storedCompare = JSON.parse(localStorage.getItem("compare") || "[]");
    setCompareList(storedCompare);
  }, [location.state]);

  const removeFromCompare = (productId) => {
    const updatedList = compareList.filter((product) => product.id !== productId);

    localStorage.setItem("compare", JSON.stringify(updatedList));
    setCompareList(updatedList);

    window.dispatchEvent(new Event("compareUpdated"));
  };

  const clearAll = () => {
    localStorage.setItem("compare", JSON.stringify([]));
    setCompareList([]);

    window.dispatchEvent(new Event("compareUpdated"));
  };

  if (!compareList.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No Products to Compare
        </h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const keys = Array.from(
    new Set(compareList.flatMap((product) => Object.keys(product)))
  ).filter((key) => key !== "id");

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-200 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h2 className="text-3xl font-bold">
            Compare Products ({compareList.length})
          </h2>

          <button
            onClick={clearAll}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Clear All
          </button>
        </div>

        {/* Compare Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="sticky left-0 bg-gray-100 px-6 py-4 border-r text-left">
                    Feature
                  </th>

                  {compareList.map((product, index) => (
                    <th key={index} className="px-6 py-4 min-w-[250px]">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-sm text-gray-500">${product.price}</p>
                        </div>

                        <button
                          onClick={() => removeFromCompare(product.id)}
                          className="p-1 hover:bg-red-100 rounded-full"
                        >
                          <X className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {keys.map((key, index) => (
                  <tr key={key} className={index % 2 ? "bg-gray-50" : "bg-white"}>
                    <td className="sticky left-0 px-6 py-4 bg-inherit border-r font-medium capitalize">
                      {key.replace(/_/g, " ")}
                    </td>

                    {compareList.map((product, pIndex) => (
                      <td key={`${pIndex}-${key}`} className="px-6 py-4">
                        {typeof product[key] === "object" ? (
                          <pre className="text-xs">
                            {JSON.stringify(product[key], null, 2)}
                          </pre>
                        ) : (
                          product[key]?.toString() || "-"
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
