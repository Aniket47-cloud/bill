import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDescription, setBriefs, toggleMeasurement } from "../store/billSlice";
import React from "react";

export default function AddDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedMeasurements = useSelector((state) => state.bill.measurements);

  const measurementOptions = ["100g", "200g", "500g", "1kg", "5kg", "10kg"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Add Details</h2>

        <textarea
          placeholder="Add Description"
          onChange={(e) => dispatch(setDescription(e.target.value))}
          className="border border-gray-300 rounded-lg p-3 w-full mt-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <textarea
          placeholder="Add Briefs"
          onChange={(e) => dispatch(setBriefs(e.target.value))}
          className="border border-gray-300 rounded-lg p-3 w-full mt-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-700 mb-2">Select Measurement</p>
          <div className="grid grid-cols-3 gap-2">
            {measurementOptions.map((measurement) => (
              <label key={measurement} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedMeasurements.includes(measurement)}
                  onChange={() => dispatch(toggleMeasurement(measurement))}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-600">{measurement}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate("/bill-process/summary")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
