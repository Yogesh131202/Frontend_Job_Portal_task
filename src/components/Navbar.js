import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"><span>job</span>ringer</h1>
      <p className="active-jobs">11,000+ Active Jobs</p>
    </nav>
  );
};

export default Navbar;
