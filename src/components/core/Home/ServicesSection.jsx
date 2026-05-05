import React from "react";
import "./ServicesSection.css";

// 🔥 IMPORT YOUR SVG ICONS
import customDev from "../../../assets/custom-dev.svg";
import uiux from "../../../assets/uiux.svg";
import ai from "../../../assets/aiml.svg";
import scope from "../../../assets/scope.svg";
import mvp from "../../../assets/mvp.svg";
import team from "../../../assets/team.svg";

// tech icons
import python from "../../../assets/python.svg";
import js from "../../../assets/js.svg";
import ts from "../../../assets/ts.svg";
import react from "../../../assets/react.svg";
import node from "../../../assets/node.svg";
import angular from "../../../assets/angular.svg";
import vue from "../../../assets/vue.svg";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* HEADER */}
        <div className="services-header">
          <h2>
            Top Custom <span>Software Development Services</span>
          </h2>
          <p>
            Turning your vision into reality with ZAPTA's premium custom software solutions.
          </p>
        </div>

        <div className="services-content">

          {/* LEFT GRID */}
          <div className="services-grid">

            <div className="service-card active">
              <img src={customDev} alt="" />
              <p>Custom Software Development</p>
            </div>

            <div className="service-card">
              <img src={uiux} alt="" />
              <p>UI UX Design</p>
            </div>

            <div className="service-card">
              <img src={ai} alt="" />
              <p>AI/ML Applications</p>
            </div>

            <div className="service-card">
              <img src={scope} alt="" />
              <p>Product Scope</p>
            </div>

            <div className="service-card">
              <img src={mvp} alt="" />
              <p>MVP Development</p>
            </div>

            <div className="service-card">
              <img src={team} alt="" />
              <p>Dedicated Teams</p>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="services-right">

            <h3>
              Custom Software <span>Development</span>
            </h3>

            <p>
              Boost your business with custom web and mobile solutions, delivering scalable,
              user-friendly platforms to enhance engagement and drive growth.
            </p>

            {/* TECH STACK */}
            <div className="tech-stack">
              <img src={python} alt="" />
              <img src={js} alt="" />
              <img src={ts} alt="" />
              <img src={react} alt="" />
              <img src={node} alt="" />
              <img src={angular} alt="" />
              <img src={vue} alt="" />
            </div>

            {/* BUTTONS */}
            <div className="services-buttons">
              <button>Web Development</button>
              <button>Mobile Development</button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;