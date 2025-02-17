import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

export default function SubmittedBills() {
  const navigate = useNavigate();
  const submittedBills = useSelector((state) => state.bill.submittedBills);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Submitted Bills</h2>

        {submittedBills.length > 0 ? (
          submittedBills.map((bill, index) => (
            <div key={index} className="p-6 mb-4 border rounded-lg bg-gray-100 shadow-sm">
              <p><strong>Client:</strong> {bill.client}</p>
              <p><strong>Project:</strong> {bill.project}</p>
              <p><strong>Date:</strong> {bill.date}</p>
              <p><strong>Description:</strong> {bill.description}</p>
              <p><strong>Briefs:</strong> {bill.briefs}</p>

              <div>
                <p><strong>Measurements:</strong></p>
                <ul className="list-disc list-inside">
                  {bill.measurements.length > 0 ? bill.measurements.map((m, i) => (
                    <li key={i}>{m}</li>
                  )) : <p className="text-gray-500">No measurements selected.</p>}
                </ul>
              </div>

              <div>
                <p><strong>Items:</strong></p>
                <ul className="list-disc list-inside">
                  {bill.items.length > 0 ? bill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  )) : <p className="text-gray-500">No items added.</p>}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No bills submitted yet.</p>
        )}

        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
