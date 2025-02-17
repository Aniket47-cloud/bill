// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectClient from "./components/SelectClient";
import SelectItem from "./components/SelectItem";
import Summary from "./components/Summary";
import React from "react";
import AddDetails from "./components/AddDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bill-process/start" element={<SelectClient />} />
      <Route path="/bill-process/select-item" element={<SelectItem />} />
      <Route path="/bill-process/add-details" element={<AddDetails />} />
      <Route path="/bill-process/summary" element={<Summary />} />
    </Routes>
  );
}
