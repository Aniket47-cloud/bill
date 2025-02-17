import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center bg-white shadow-lg rounded-lg p-10 max-w-md">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Billing System</h1>
        <button
          onClick={() => navigate("/bill-process/start")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Create New Bill
        </button>
      </div>
    </div>
  );
}
