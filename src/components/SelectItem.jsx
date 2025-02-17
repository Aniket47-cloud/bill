import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/billSlice";
import React from "react";

export default function SelectItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Select an Item</h2>

        <select
          onChange={(e) => dispatch(addItem(e.target.value))}
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="">Select an Item</option>
          <option value="Item1">Item1</option>
          <option value="Item2">Item2</option>
          <option value="Item3">Item3</option>
          <option value="Item4">Item4</option>
        </select>

        <button
          onClick={() => navigate("/bill-process/add-details")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
