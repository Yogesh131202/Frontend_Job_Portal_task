import React from "react";
import "../styles/JobSearch.css";

const JobSearch = () => {
  return (
    <div className="job-search">
      <div className="search-bar">
        <input type="text" placeholder="Search Jobs Now" />
        <button className="btn search-btn">Search</button>
      </div>
      <div className="action-buttons">
        <button className="btn white">View Jobs</button>
        <button className="btn yellow">Register For FREE</button>
      </div>
    </div>
  );
};

export default JobSearch;
