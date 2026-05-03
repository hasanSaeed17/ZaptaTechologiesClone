import React from "react";
import "./CoreValuesSection.css";

import communicationIcon from "../../../assets/communication.svg";
import seriousnessIcon from "../../../assets/seriousness.svg";
import professionalismIcon from "../../../assets/professionalism.svg";
import awarenessIcon from "../../../assets/awareness.svg";
import respectIcon from "../../../assets/respect.svg";
import responsibilityIcon from "../../../assets/responsibility.svg";

const values = [
  {
    icon: communicationIcon,
    title: "Communication",
    desc: "Our adherence to open and honest communication leads to our clients & employees, as we actively seek feedback."
  },
  {
    icon: seriousnessIcon,
    title: "Seriousness",
    desc: "At ZAPTA Technologies, we value the significance of professionalism in our industry for achieving outstanding outcomes."
  },
  {
    icon: professionalismIcon,
    title: "Professionalism",
    desc: "Professionalism and integrity are the pillars of our work, as we wholeheartedly adhere to a strict code of conduct."
  },
  {
    icon: awarenessIcon,
    title: "Awareness",
    desc: "We are committed to continuous learning, growth, and awareness and equip our team with the latest tools and technologies."
  },
  {
    icon: respectIcon,
    title: "Respect & Kindness",
    desc: "Respect & kindness are the guiding principles of our work culture, as we foster an inclusive and diverse environment."
  },
  {
    icon: responsibilityIcon,
    title: "Responsibility",
    desc: "We understand the significance of responsibility and accountability in projects, we take ownership to ensure the best."
  }
];

const CoreValuesSection = () => {
  return (
    <section className="core-values">
      <div className="core-container">
        
        <h2 className="core-title">
          Our <span>Core Values</span>
        </h2>

        <div className="core-grid">
          {values.map((item, index) => (
            <div className="core-card" key={index}>
              <img src={item.icon} alt={item.title} className="core-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValuesSection;