import React, { useState } from "react";
import "./ProjectsGrid.css";


import sucasa from "../../../assets/sucasa.mp4";
import luxuri from "../../../assets/luxuri.mp4";
import drbroker from "../../../assets/drbroker.mp4";
import worker from "../../../assets/worker.mp4";
import lahebo from "../../../assets/lahebo.mp4";
import beeba from "../../../assets/beeba.mp4";

import tagdev from "../../../assets/tagdev.mp4";
import sohcattoa from "../../../assets/sohcattoa.mp4";
import metutors from "../../../assets/metutors.mp4";
import investme from "../../../assets/investme.mp4";
import lalo from "../../../assets/lalo.mp4";
import solar from "../../../assets/solar.mp4";


// 👉 ALL PROJECTS (12)
const allProjects = [
  { title: "Sucasa", desc: "Utilizing technology to enhance the rental experience.", video: sucasa },
  { title: "Luxuri", desc: "Luxuri offers a of high-end villas and exquisite yachts for rent", video: luxuri },
  { title: "DrBroker", desc: "Streamline Managing Your Real Estate Transaction", video: drbroker },
  { title: "Worker Health & Safety", desc: "web application for workplace safety through real-time incident tracking.", video: worker },
  { title: "Lahebo", desc: "Lahebo streamlines Governance, Risk, and Compliance management.", video: lahebo, startTime: 1 },
  { title: "Beeba", desc: "Beeba Revolutionizes Travel by Allowing Users to Pre-Book Rides.", video: beeba, startTime: 1 },

  { title: "TagDev", desc: "An integrated POS system that streamlines business operations.", video: tagdev },
  { title: "Sohcattoa", desc: "To empower individuals to learn, mentor, innovate, and invest all in one place", video: sohcattoa },
  { title: "METutors", desc: "Personalized live 1:1 Tutoring with expert educators", video: metutors },
  { title: "InvestME", desc: "Simplify asset management with InvestMe and make an informed investment", video: investme },
  { title: "LALO", desc: "A keepsake for all of life’s moments and the people we share them", video: lalo },
  { title: "Solar Innovatio", desc: "Solar Innovatio SRL Innovative photovoltaic systems for Apartments", video: solar },
];

const ITEMS_PER_PAGE = 6;

const ProjectsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = allProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="projects">
      <div className="projects-container">

        {/* GRID */}
        <div className="projects-grid">
          {currentProjects.map((item, index) => (
            <div className="project-card" key={index}>

              {/* VIDEO */}
              <div className="media-wrapper">
<video
  src={item.video}
  muted
  loop
  playsInline
  preload="auto"
  className="project-video"
  onLoadedData={(e) => {
    e.target.currentTime = item.startTime || 0;
  }}
  onMouseEnter={(e) => {
    e.target.play();
  }}
  onMouseLeave={(e) => {
    e.target.pause();
    e.target.currentTime = item.startTime || 0;
  }}
/>
              </div>

              {/* TEXT */}
              <div className="project-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination">

          <button
            className="nav-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            ← Previous
          </button>

          <div className="pages">
            {[...Array(totalPages)].map((_, i) => (
              <span
                key={i}
                className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </span>
            ))}
          </div>

          <button
            className="nav-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next →
          </button>

        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;