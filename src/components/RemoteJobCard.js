import React, { useState } from "react";
import "../styles/RemoteJobCard.css";

const RemoteJobs = () => {
  const jobs = [
    { title: "Business Analyst", company: "Heyu", type: "In Office job", employment: "Full Time - Permanent", experience: "5 - 10 Years", location: "Noida / India" },
    { title: "Blockchain Consultant", company: "Outthinc Global", type: "Remote job", employment: "Full Time - Contract", experience: "10 - 15 Years", location: "Kolkata / India" },
    { title: "Software Engineer", company: "Techify", type: "In Office job", employment: "Full Time - Permanent", experience: "2 - 5 Years", location: "Bengaluru / India" },
    { title: "Product Manager", company: "Innovate Corp", type: "In Office job", employment: "Full Time - Permanent", experience: "8 - 12 Years", location: "Mumbai / India" },
    { title: "UI/UX Designer", company: "Creative Minds", type: "Remote job", employment: "Part Time - Contract", experience: "3 - 6 Years", location: "Pune / India" },
    { title: "Data Scientist", company: "DataSolve", type: "In Office job", employment: "Full Time - Permanent", experience: "4 - 8 Years", location: "Delhi / India" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + jobs.length) % jobs.length);
  };

  return (
    <div className="Remote-jobs-container">
      <h2 className="heading">Remote Jobs</h2>

      {/* Large Screen Layout */}
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="header">
              <h3 className="job-title">{job.title}</h3>
              <span className={`job-type ${job.type.includes("Remote") ? "remote" : "in-office"}`}>
                {job.type}
              </span>
            </div>
            <p className="company-name">{job.company}</p>
            <div className="job-details">
              <p className="detail"><i className="fa fa-clock-o"></i> {job.employment}</p>
              <p className="detail"><i className="fa fa-briefcase"></i> {job.experience}</p>
              <p className="detail"><i className="fa fa-map-marker"></i> {job.location}</p>
            </div>
            <button className="apply-button">Apply ➤</button>
          </div>
        ))}
      </div>

      {/* Small Screen Carousel */}
      <div className="carousel">
        <button className="nav-button prev" onClick={handlePrevious}>&#8592;</button>
        <div className="job-card">
          <div className="header">
            <h3 className="job-title">{jobs[currentIndex].title}</h3>
            <span className={`job-type ${jobs[currentIndex].type.includes("Remote") ? "remote" : "in-office"}`}>
              {jobs[currentIndex].type}
            </span>
          </div>
          <p className="company-name">{jobs[currentIndex].company}</p>
          <div className="job-details">
            <p className="detail"><i className="fa fa-clock-o"></i> {jobs[currentIndex].employment}</p>
            <p className="detail"><i className="fa fa-briefcase"></i> {jobs[currentIndex].experience}</p>
            <p className="detail"><i className="fa fa-map-marker"></i> {jobs[currentIndex].location}</p>
          </div>
          <button className="apply-button">Apply ➤</button>
        </div>
        <button className="nav-button next" onClick={handleNext}>&#8594;</button>
      </div>
    </div>
  );
};

export default RemoteJobs;
