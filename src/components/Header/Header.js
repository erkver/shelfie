import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return <div className="header-container">
      <div className="logo" />
      Shelfie
      <Link to="/" className="header-btn">Dashboard</Link>
      <Link to='add' className="header-btn">Add Inventory</Link>
    </div>;
}