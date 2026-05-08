import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "24px" }}>My App</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          margin: 0,
          padding: 0,
          gap: "20px",
        }}
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#ffcc00" : "white",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#ffcc00" : "white",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>
        </li>
          <li>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              color: isActive ? "#ffcc00" : "white",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Dashboard
          </NavLink>
          <NavLink to="/dynamic">Users</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
