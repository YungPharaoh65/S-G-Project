import React from "react";
import { Routes, Route, HashRouter} from "react-router-dom";
import App from "./App";
import Dashboard from "./Route-Navbar/Navbar";
import Sales from "./Route-Navbar/Sales";


const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes> 
        <Route path="/" element={<App />} /> {/* This link is the homepage bcos it's the first one */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </HashRouter>
  );
};


export default React.memo(RouteSwitch);