import { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/logo.svg";

import webIcon from "../../../assets/web.svg";
import mobileIcon from "../../../assets/mobile.svg";
import uiuxIcon from "../../../assets/uiux.svg";
import aimlIcon from "../../../assets/aiml.svg";
import productIcon from "../../../assets/product.svg";
import mvpIcon from "../../../assets/mvp.svg";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Zapta Technologies" />
        </div>

        {/* NAV */}
        <nav className="nav">
          <ul>

            <li
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}
            >
              Home
            </li>

            {/* SERVICES */}
            <li
              className="services"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span>Services ▾</span>

              <div className={`dropdown ${showDropdown ? "show" : ""}`}>
                <div className="dropdown-grid">

                  <div className="dropdown-item">
                    <img src={webIcon} alt="" className="icon" />
                    <div>
                      <h4>Web <span>Development</span></h4>
                      <p>Custom web development solutions to create stunning websites.</p>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <img src={mobileIcon} alt="" className="icon" />
                    <div>
                      <h4>Mobile <span>Development</span></h4>
                      <p>Expert mobile app development for IOS and Android.</p>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <img src={uiuxIcon} alt="" className="icon" />
                    <div>
                      <h4>UI UX <span>Design</span></h4>
                      <p>Creating engaging UI UX designs that enhance user experience and satisfaction.</p>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <img src={aimlIcon} alt="" className="icon" />
                    <div>
                      <h4>AI/ML <span>Applications</span></h4>
                      <p>Developing innovative AI/ML applications to transform your business processes.</p>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <img src={productIcon} alt="" className="icon" />
                    <div>
                      <h4>Product <span>Scope</span></h4>
                      <p>Defining product scope to clarify features and funtionalities for success.</p>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <img src={mvpIcon} alt="" className="icon" />
                    <div>
                      <h4>MVP <span>Development</span></h4>
                      <p>Fast-track your ideas with our comprehensive MVP development services.</p>
                    </div>
                  </div>

                </div>
              </div>
            </li>

            <li
              className={active === "projects" ? "active" : ""}
              onClick={() => setActive("projects")}
            >
              Projects
            </li>

            <li
              className={active === "about" ? "active" : ""}
              onClick={() => setActive("about")}
            >
              About Us
            </li>

            <li
              className={active === "blogs" ? "active" : ""}
              onClick={() => setActive("blogs")}
            >
              Blogs
            </li>

            <li
              className={active === "careers" ? "active" : ""}
              onClick={() => setActive("careers")}
            >
              Careers
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;