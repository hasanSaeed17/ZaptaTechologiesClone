import React from "react";
import "./TestimonialsSection.css";
import personImage from "../../../assets/terry.webp";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* HEADER */}
        <h2 className="testimonials-title">
          Success Stories <span>From Our Clients</span>
        </h2>

        <div className="testimonials-content">

          {/* LEFT TEXT */}
          <div className="testimonials-left">
            <p className="testimonial-text">
              “ZAPTA's meticulous attention to detail and unwavering commitment
              to deadlines fueled a fantastic project collaboration. Their
              consistent quality output showcases their reliability and deep
              understanding of the project, making them a true partner, not just
              a vendor. Bravo, ZAPTA!”
            </p>

            <div className="testimonial-author">
              <h4>Terry Peterson</h4>
              <p>Founder & CEO of DrBroker.com</p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="testimonials-right">

            <div className="video-card">
              <img src={personImage} alt="Client" />

              {/* PLAY BUTTON */}
              <div className="play-btn">
                ▶
              </div>
            </div>

            <div className="video-caption">
              <h4>Terry Peterson</h4>
              <p>Founder & CEO of DrBroker.com</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;