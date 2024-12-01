import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="employer-card">
        <h2>EMPLOYERS</h2>
        <button className="btn yellow">Register for FREE</button>
        <button className="btn white">Post A Job</button>
        <p className="sales-enquiry">Sales Enquiry</p>
      </div>
      <h2 className="perfect-job">BRINGING YOU THE PERFECT JOB!</h2>
      <p className="job-count">11,000+ JOBS to Apply</p>
    </div>
  );
};

export default HeroSection;
