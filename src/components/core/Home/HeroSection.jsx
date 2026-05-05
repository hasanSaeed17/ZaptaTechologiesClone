import React, { useEffect, useState } from "react";
import "./HeroSection.css";

// 🔥 IMPORT YOUR AWARD IMAGES (update names if different)
import clutch from "../../../assets/clutch.webp";
import businessfirms from "../../../assets/businessfirms.webp";
import winner from "../../../assets/winner.webp";
import iso from "../../../assets/iso.webp";
import goodfirms from "../../../assets/goodfirms.svg";

const texts = [
  "Discover AI-Powered\nSolutions for Real Estate\nGrowth",
  "AI-Centric Custom Software\nDevelopment & Seamless\nMVP Solutions"
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setAnimate(true);
      }, 150);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-overlay">

        <div className="hero-content">

          <p className="hero-subtitle">FOCUSED ON YOUR SUCCESS</p>

          <h1 className={`hero-title ${animate ? "animate" : ""}`}>
            {texts[index]}
          </h1>

          <p className="hero-awards-text">Awards and Certifications</p>

          <div className="hero-awards">
            <img src={clutch} alt="Clutch" />
            <img src={businessfirms} alt="Business Firms" />
            <img src={winner} alt="Winner" />
            <img src={iso} alt="ISO" />
            <img src={goodfirms} alt="Good Firms" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;