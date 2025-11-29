import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../components/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo">Portfolio</h2>

        {/* Mobile Menu Button */}
        <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${open ? "mobile-active" : ""}`}>
          {links.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `nav-item fade-in ${isActive ? "active" : ""}`
              }
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
