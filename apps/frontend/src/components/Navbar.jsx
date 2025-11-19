import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ marginRight: 12 }}>
        Home
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
