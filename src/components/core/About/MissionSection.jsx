import React from "react";
import "./MissionSection.css";

const MissionSection = () => {
  return (
    <section className="mission-section">

      {/* LEFT QUOTE */}
      <div className="quote quote-left">“</div>

      {/* CONTENT */}
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
          To be a leading software company, driven by innovation and dedication
          to empower businesses worldwide through cutting-edge technologies.
        </p>
      </div>

      {/* RIGHT QUOTE */}
      <div className="quote quote-right">”</div>

    </section>
  );
};

export default MissionSection;