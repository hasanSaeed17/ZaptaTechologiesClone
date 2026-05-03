import React from "react";
import "./AboutCTA.css";

// 👉 import your icons/images
import usaIcon from "../../../assets/usa.svg";
import ukIcon from "../../../assets/uk.svg";
import saudiIcon from "../../../assets/saudi.svg";
import pakistanIcon from "../../../assets/pakistan.svg";

import clutch from "../../../assets/clutch.svg";
import goodfirms from "../../../assets/goodfirms.svg";

const AboutCTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">

        {/* LEFT */}
        <div className="cta-left">
          <h2>Let’s talk about your project</h2>

          <p>
            Have a project in mind? Talk to us directly and get
            personalized guidance every step of the way.
          </p>

          <div className="cta-reviews">
            <img src={clutch} alt="clutch" className="clutch" />
            <img src={goodfirms} alt="goodfirms" className="goodfirms" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="cta-right">

          <div className="cta-item">
            <img src={usaIcon} alt="usa" />
            <div className="cta-text">
              <h4>USA</h4>
              <p><span>Address</span> 1832 Norfolk st Houston Texas 77098</p>
              <p><span>Phone No</span> +1 (737) 277 5447</p>
            </div>
          </div>

          <div className="cta-item">
            <img src={ukIcon} alt="uk" />
            <div className="cta-text">
              <h4>UK Office</h4>
              <p><span>Address</span> West Tower, 371 Deansgate, Manchester M15 4UP, United Kingdom</p>
              <p><span>Phone No</span> +44 (746) 0766-922</p>
            </div>
          </div>

          <div className="cta-item">
            <img src={saudiIcon} alt="saudi" />
            <div className="cta-text">
              <h4>Saudi Arabia</h4>
              <p><span>Address</span> 8640 Umat Al Karim, 4006, Al Majd District, Yanbu Al Bahr 46431</p>
              <p><span>Phone No</span> +966 (56) 592-3840</p>
            </div>
          </div>

          <div className="cta-item">
            <img src={pakistanIcon} alt="pakistan" />
            <div className="cta-text">
              <h4>Pakistan Office</h4>
              <p><span>Address</span> 144/2, Block B, Bankers Society Near DHA Phase 4, Lahore, Pakistan</p>
              <p><span>Phone No</span> 042-37888403</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;