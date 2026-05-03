import React from "react";
import "./AboutZaptaSection.css";
import aboutImage from "../../../assets/zapta-building.webp";

const AboutZaptaSection = () => {
  return (
    <section className="about-zapta">
      <div className="about-container">
        
        {/* LEFT CONTENT */}
        <div className="about-left">
          <h2 className="about-title">
            What is <span>ZAPTA?</span>
          </h2>

          <p className="about-text">
            ZAPTA, an abbreviation for <strong style={{color:"#1e73be"}}>"Zone of Advance Platforms and Tech Applications"</strong> stands out as a top-tier software development firm focused on providing customized lifecycle solutions to cater to the unique needs of our clients. Our reputation is built on a steadfast dedication to excellence, reflected in our solutions that boast exceptional quality, security, scalability, and affordability. ZAPTA has received numerous accolades for its outstanding expertise in UI/UX Design, Custom Software Development, Web Development, and MVP Development.
          </p>

          <p className="about-text">
            Our team consists of highly experienced professionals who possess a diverse skill set, including Technology Specialists, UI Designers, UX Engineers, Programmers, DevOps Experts, Business Analysts, Software Architects, QA Engineers, and Project Managers. This collective expertise allows us to provide long-term solutions to clients across all industries, ensuring their success in an ever-evolving technological landscape. Choose ZAPTA Technologies as your trusted partner.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">
          <img src={aboutImage} alt="Zapta Office" />
        </div>

      </div>
    </section>
  );
};

export default AboutZaptaSection;