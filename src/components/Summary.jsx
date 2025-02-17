import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { submitBill, reset } from "../store/billSlice";
import React from "react";

export default function Summary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { client, project, date, description, briefs, measurements, items } = useSelector(
    (state) => state.bill
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Bill Summary</h2>

        <div className="mb-4 text-gray-600">
          <p><strong>Client:</strong> {client || "Not provided"}</p>
          <p><strong>Project:</strong> {project || "Not provided"}</p>
          <p><strong>Date:</strong> {date || "Not provided"}</p>
        </div>

        <div className="mb-4 text-gray-600">
          <p><strong>Description:</strong> {description || "No description added"}</p>
          <p><strong>Briefs:</strong> {briefs || "No briefs added"}</p>
        </div>

        <div className="mb-4 text-gray-600">
          <p><strong>Measurements:</strong></p>
          <ul className="list-disc list-inside text-gray-600">
            {measurements.length > 0 ? measurements.map((m, index) => (
              <li key={index} className="p-2 bg-gray-100 rounded-lg mb-2">{m}</li>
            )) : (
              <p className="text-gray-500">No measurements selected.</p>
            )}
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-gray-700 mb-2">Items:</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {items.length > 0 ? items.map((item, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-lg mb-2">{item}</li>
          )) : (
            <p className="text-gray-500">No items added yet.</p>
          )}
        </ul>

        <button
          onClick={() => navigate("/bill-process/select-item")}
          className="w-full bg-yellow-500 text-white py-3 rounded-lg mb-4 hover:bg-yellow-600 transition-all duration-300"
        >
          Add More Items
        </button>

        <button
          onClick={() => {
            dispatch(submitBill());
            dispatch(reset());
            navigate("/bill-process/submitted-bills");
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Save & Submit
        </button>
      </div>
    </div>
  );
}
