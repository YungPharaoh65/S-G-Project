
import Dashboard from "./Route-Navbar/Dashboard.jsx";
import Navbar from "./Route-Navbar/Navbar.jsx";
import Sales from "./Route-Navbar/Sales.jsx";
import Stock from "./Stock/Stock.jsx";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
