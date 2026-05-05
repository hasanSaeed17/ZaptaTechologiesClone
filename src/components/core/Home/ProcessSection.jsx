import React, { useState, useEffect } from "react";
import "./ProcessSection.css";

import p1 from "../../../assets/p1.webp";
import c1 from "../../../assets/c1.webp";
import p2 from "../../../assets/p2.webp";
import c2 from "../../../assets/c2.webp";
import p3 from "../../../assets/p3.webp";
import c3 from "../../../assets/c3.webp";
import p4 from "../../../assets/p4.webp";
import c4 from "../../../assets/c4.webp";
import p5 from "../../../assets/p5.webp";
import c5 from "../../../assets/c5.webp";
import p6 from "../../../assets/p6.webp";
import c6 from "../../../assets/c6.webp";
import p7 from "../../../assets/p7.webp";
import c7 from "../../../assets/c7.webp";
import p8 from "../../../assets/p8.webp";
import c8 from "../../../assets/c8.webp";


const slides = [
  {
    left: {
      title: "1. Project Planning & Strategy",
      points: [
        "Defining a roadmap",
        "Assigning roles and responsibilities",
        "Setting up the environment (Jira, GitHub etc.)"
      ],
      person: p1,
      chart: c1
    },
    right: {
      title: "2. Analysis & Documentation",
      points: [
        "Gathering requirements",
        "Generating backlog",
        "Preparing architecture & process model"
      ],
      person: p2,
      chart: c2
    }
  },
  {
    left: {
      title: "3. Design & Prototyping",
      points: [
        "Creating user flows (UI)",
        "Low fidelity designs (UX)",
        "High fidelity prototypes"
      ],
      person: p3,
      chart: c3
    },
    right: {
      title: "4. Implementation & Coding",
      points: [
        "Front end development",
        "Back end development",
        "API & database connection"
      ],
      person: p4,
      chart: c4
    }
  },
  {
    left: {
      title: "5. Quality Assurance & Testing",
      points: [
        "Creating a test plan & strategy",
        "Manual testing (functional testing)",
        "Automation testing"
      ],
      person: p5,
      chart: c5
    },
    right: {
      title: "6. Deployment & Training",
      points: [
        "Hosting & going live",
        "Crafting user manuals",
        "Training session"
      ],
      person: p6,
      chart: c6
    }
  },
  {
    left: {
      title: "7. Web Content & SEO",
      points: [
        "Optimized web content with keywords research",
        "Optimized web pages with technical SEO",
        "Build website authority with link building"
      ],
      person: p7,
      chart: c7
    },
    right: {
      title: "8. Maintenance & Support",
      points: [
        "Technical & user support",
        "Upgrading & enhancement",
        "Bug fixing"
      ],
      person: p8,
      chart: c8
    }
  }
];

const ProcessSection = () => {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="process-section">
      <div className="process-container">

        <h2>
          Our Custom <span>Software Development Process</span>
        </h2>

        <p className="process-sub">
          An insight into our methodical custom software development process.
          From concept to code, we transform ideas into results.
        </p>

        {/* SLIDER */}
        <div className="process-slider">

          <div
            className="process-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div className="process-slide" key={i}>

                <div className="process-block">
                  <h3>{slide.left.title}</h3>
                  <ul>
                    {slide.left.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>

                  <div className="visual">
                    <img src={slide.left.person} className="person" alt="" />
                    <img src={slide.left.chart} className="chart" alt="" />
                  </div>
                </div>

                <div className="process-block">
                  <h3>{slide.right.title}</h3>
                  <ul>
                    {slide.right.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>

                  <div className="visual">
                    <img src={slide.right.person} className="person" alt="" />
                    <img src={slide.right.chart} className="chart" alt="" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* CURVED DOTTED LINE */}
          <svg className="curve" viewBox="0 0 1200 200">
            <path
              d="M0,120 C200,0 400,200 600,100 S1000,150 1200,100"
              fill="none"
              stroke="#6f8fa3"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>

        </div>

        {/* BUTTONS */}
        <div className="process-controls">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>

        {/* PROGRESS */}
        <div className="process-progress">
          {slides.map((_, i) => (
            <div key={i} className={`bar ${i === index ? "active" : ""}`} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;