import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Order from "./Order";
import Dashboard from "./Dashboard";
import DashboardHome from "./DashboardHome";
import UserDetails from "../UserDetails";
import Dynamic from "./Dynamic";
import Cart from "./Cart";
import CartDescription from "./CartDescription";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="features" element={<div>Features</div>} />
          <Route path="pricing" element={<div>Pricing</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/users/:id" element={<UserDetails/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<CartDescription />} />
       
      </Routes>
    </>
  );
}

export default App;
