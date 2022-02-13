import React from "react";
import "../styles/Navbar.scss";
const Navbar = () => {
  return (
    <div>
      <nav className="Navbar flex">
        <li>
          <a href="#">About Me</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
          <a href="#">Resume</a>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
