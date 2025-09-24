import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrameLayout from "./Layouts/FrameLoyout";

// Contoh pages
function Dashboard() {
  return <h2 className="text-xl font-bold">Welcome to Dashboard</h2>;
}

function Users() {
  return <h2 className="text-xl font-bold">User Management</h2>;
}

function Locations() {
  return <h2 className="text-xl font-bold">Location List</h2>;
}

function Billing() {
  return <h2 className="text-xl font-bold">Billing Section</h2>;
}

function Logistics() {
  return <h2 className="text-xl font-bold">Logistics Tracking</h2>;
}

function Settings() {
  return <h2 className="text-xl font-bold">Settings Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrameLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
