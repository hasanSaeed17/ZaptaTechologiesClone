import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.svg";

import webIcon from "../../../assets/web.svg";
import mobileIcon from "../../../assets/mobile.svg";
import uiuxIcon from "../../../assets/uiux.svg";
import aimlIcon from "../../../assets/aiml.svg";
import productIcon from "../../../assets/product.svg";
import mvpIcon from "../../../assets/mvp.svg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Zapta Technologies" />
          </Link>
        </div>

        {/* NAV */}
        <nav className="nav">
          <ul>

            <li className={isActive("/") ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>

            {/* SERVICES (no route change here unless you want one) */}
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
                      <p>Creating engaging UI UX designs that enhance user experience.</p>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <img src={aimlIcon} alt="" className="icon" />
                    <div>
                      <h4>AI/ML <span>Applications</span></h4>
                      <p>Developing innovative AI/ML applications.</p>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <img src={productIcon} alt="" className="icon" />
                    <div>
                      <h4>Product <span>Scope</span></h4>
                      <p>Defining product scope for success.</p>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <img src={mvpIcon} alt="" className="icon" />
                    <div>
                      <h4>MVP <span>Development</span></h4>
                      <p>Fast-track your ideas with MVP services.</p>
                    </div>
                  </div>

                </div>
              </div>
              
            </li>

            <li className={isActive("/projects") ? "active" : ""}>
              <Link to="/projects">Projects</Link>
            </li>

            <li className={isActive("/about") ? "active" : ""}>
              <Link to="/about">About Us</Link>
            </li>

            <li className={isActive("/contact") ? "active" : ""}>
              <Link to="/contact">Contact Us</Link>
            </li>

            <li className={isActive("/team") ? "active" : ""}>
              <Link to="/team">Our Team</Link>
            </li>

            <li className={isActive("/careers") ? "active" : ""}>
              <Link to="/careers">Careers</Link>
            </li>



          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;