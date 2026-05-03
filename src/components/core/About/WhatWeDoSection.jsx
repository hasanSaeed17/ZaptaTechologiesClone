import React from "react";
import "./WhatWeDoSection.css";
import officeImage from "../../../assets/office.webp"; // update name if needed

const WhatWeDoSection = () => {
  return (
    <section className="whatwedo-section">
      
      <div className="whatwedo-container">

        {/* LEFT CONTENT */}
        <div className="whatwedo-left">
          <h2>
            What <span>We Do!</span>
          </h2>

          <p>
            At ZAPTA Technologies, we proudly lead the charge in innovation,
            setting the industry standards for tackling even the most intricate
            business challenges. Our unwavering commitment to excellence drives us
            to provide unparalleled expertise and comprehensive business solutions,
            that redefine success for our clients. We believe in going beyond the
            ordinary, which is why we offer round-the-clock support and monitoring
            to ensure your business stays ahead of the curve.
          </p>

          <p>
            Our exceptional team is a dynamic mix of seasoned professionals each a
            master in their respective fields. From the earliest stages of research
            and development, through the intricacies of requirement engineering and
            business analysis, to the artistry of UI/UX design, and the meticulous
            craft of software architecture, our experts stand ready to transform
            your vision into reality. We excel in custom website and mobile app
            development.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="whatwedo-right">
          <img src={officeImage} alt="Office Team" />
        </div>

      </div>

    </section>
  );
};

export default WhatWeDoSection;