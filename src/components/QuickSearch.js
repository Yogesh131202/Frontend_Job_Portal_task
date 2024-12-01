import React from "react";
import "../styles/QuickSearch.css";

const QuickSearch = () => {
  return (
    <div className="quick-search">
      <h2>
        Quick Job Search <span role="img" aria-label="search">🔍</span>
      </h2>
      <div className="tags">
        {[
          "Fresher", "Work From Home", "WFH", "IT",
          "HR", "Back Office", "BPO Jobs", "ITES",
          "Finance", "Accounts", "Medical", "Pharma",
          "Manager", "Developer", "Marketing",
          "Engineering", "Non Government Jobs"
        ].map(tag => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default QuickSearch;
