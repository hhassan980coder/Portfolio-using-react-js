import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false); // close on link click
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={handleToggle}>
        <span className={isOpen ? "bar rotate1" : "bar"}></span>
        <span className={isOpen ? "bar hide" : "bar"}></span>
        <span className={isOpen ? "bar rotate2" : "bar"}></span>
      </div>

      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClose}>
            About
          </Link>
        </li>
        <li>
          <Link to="/skill" onClick={handleClose}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={handleClose}>
            Project
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClose}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
