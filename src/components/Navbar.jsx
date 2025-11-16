import React, { useState } from "react";

export default function Navbar({ onAdminClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <span className="logo">Kartik.Dev</span>
      <button
        className="hamburger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>
      <div className={`nav-links${open ? " open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#skills" onClick={() => setOpen(false)}>
          Skills
        </a>
        <button className="admin-btn" onClick={onAdminClick}>
          Admin
        </button>
      </div>
    </nav>
  );
}
