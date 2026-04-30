import "./Footer.css";
import logo from "../../../assets/logo.svg";

import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-col about">
          <img src={logo} alt="logo" className="footer-logo" />

          <p style={{width:'300px'}}>
            ZAPTA Technologies is a leading software design and development company working
            in HealthCare, FinTech, Supply Chain Management, Education, Real Estate,
            eCommerce, Compliance Management, and Logistics domains. We are specialized
            in MVPs development, AI-embedded software and Enterprise Business Solutions.
          </p>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>UI UX Design</li>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Quality Assurance</li>
            <li>MVP Builder</li>
            <li>Dedicated Teams</li>
            <li>Product Scope</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+1 (737) 277 5447</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>contact@zaptatech.com</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>1832 Norfolk st Houston Texas 77098</span>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="footer-divider"></div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="left">
          <span className="deck">
            Company Deck <br />
            <small>PDF, 3 MB</small>
          </span>

          <button className="download-btn">↓</button>
        </div>

        <div className="center">
          © 2026 Copyrights ZAPTA Technologies. All Rights Reserved.
        </div>

        <div className="right">
          <div className="social"><FaLinkedinIn /></div>
          <div className="social"><FaFacebookF /></div>
          <div className="social"><FaInstagram /></div>
          <div className="social"><FaXTwitter /></div>
          <div className="social"><FaYoutube /></div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;