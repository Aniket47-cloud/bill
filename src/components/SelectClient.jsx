import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setClient, setProject, setDate } from "../store/billSlice";
import React from "react";

export default function SelectClient() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Select Client & Project</h2>

        <input
          type="text"
          placeholder="Client Name"
          onChange={(e) => dispatch(setClient(e.target.value))}
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <input
          type="text"
          placeholder="Project Name"
          onChange={(e) => dispatch(setProject(e.target.value))}
          className="border border-gray-300 rounded-lg p-3 w-full mt-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <input
          type="date"
          onChange={(e) => dispatch(setDate(e.target.value))}
          className="border border-gray-300 rounded-lg p-3 w-full mt-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <button
          onClick={() => navigate("/bill-process/select-item")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
