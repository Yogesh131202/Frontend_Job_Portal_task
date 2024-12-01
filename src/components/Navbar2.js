import React from "react";
import { FaUserAlt, FaHome, FaBriefcase, FaArrowLeft } from "react-icons/fa";
import "../styles/Navbar2.css";

const Navbar2 = () => {
  return (
    <footer className="Navbarr">
      <div className="icon"><FaUserAlt /> <span>Login</span></div>
      <div className="icon"><FaHome /> <span>Home</span></div>
      <div className="icon"><FaBriefcase /> <span>Jobs</span></div>
      <div className="icon"><FaArrowLeft /> <span>Back</span></div>
    </footer>
  );
};

export default Navbar2;
