import React from "react";
import "./CareersSection.css";

const jobs = [
  {
    title: "BD INTERN",
    category: "Business Development",
    positions: 7,
    posted: "02/04/2026",
    lastApplied: "30/04/2026",
    location: "Lahore"
  },
  {
    title: "MERN Stack developer",
    category: "Developer",
    positions: 2,
    posted: "02/04/2026",
    lastApplied: "31/05/2026",
    location: "Lahore"
  },
  {
    title: "Sales Development Representative",
    category: "Full time",
    positions: 1,
    posted: "02/04/2026",
    lastApplied: "30/04/2026",
    location: "Lahore"
  },
  {
    title: "Social Media Specialist",
    category: "Full time",
    positions: 1,
    posted: "02/04/2026",
    lastApplied: "30/04/2026",
    location: "Lahore"
  }
];

const CareersSection = () => {
  return (
    <section className="careers-section">
      <div className="careers-container">

        {/* HEADER */}
        <div className="careers-header">
          <h2>
            Available <span>Jobs</span>
          </h2>

          <div className="careers-filters">
            <select>
              <option>All Categories</option>
            </select>

            <div className="search-box">
              <input type="text" placeholder="Search for a job title" />
              <button>🔍</button>
            </div>
          </div>
        </div>

        {/* JOB LIST */}
        <div className="job-list">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              
              <div className="job-left">
                <h3>{job.title}</h3>

                <div className="job-meta">
                  <span>Category: {job.category}</span>
                  <span>Positions: {job.positions}</span>
                  <span>Posted: {job.posted}</span>
                  <span>Last Applied: {job.lastApplied}</span>
                </div>
              </div>

              <div className="job-right">
                <div className="job-location">📍 {job.location}</div>

                <div className="job-actions">
                  <button className="apply-btn">Apply Now</button>
                  <button className="details-btn">View Details</button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareersSection;