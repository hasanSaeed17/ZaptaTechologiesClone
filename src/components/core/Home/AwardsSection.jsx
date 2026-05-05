import React from "react";
import "./AwardsSection.css";

// 🔥 IMPORT YOUR IMAGES
import a1 from "../../../assets/a1.webp";
import a2 from "../../../assets/a2.webp";
import a3 from "../../../assets/a3.webp";
import a4 from "../../../assets/a.webp";
import a5 from "../../../assets/a5.webp";
import a6 from "../../../assets/a6.webp";
import a7 from "../../../assets/a7.webp";
import a8 from "../../../assets/a8.webp";

const AwardsSection = () => {
  return (
    <section className="awards-section">
      <div className="awards-container">

        {/* LEFT SIDE */}
        <div className="awards-left">
          <h2>Awards & Certifications</h2>
          <p>
            We are proud of the recognition we have received demonstrating our
            industry leading practices and capabilities.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="awards-grid">
          <img src={a1} alt="" />
          <img src={a2} alt="" />
          <img src={a3} alt="" />
          <img src={a4} alt="" />
          <img src={a5} alt="" />
          <img src={a6} alt="" />
          <img src={a7} alt="" />
          <img src={a8} alt="" />
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;