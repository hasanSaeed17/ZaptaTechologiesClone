import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* TITLE */}
        <div className="contact-header">
          <h2>
            Contact <span>Us</span>
          </h2>
        </div>

        <div className="contact-content">

          {/* LEFT */}
          <div className="contact-left">
            <p>
              We are always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="contact-details">
              <div>
                <span>Email</span>
                <p>info@zapta.com</p>
              </div>

              <div>
                <span>Phone</span>
                <p>+92 300 1234567</p>
              </div>

              <div>
                <span>Location</span>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-right">
            <form>

              <div className="row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <input type="text" placeholder="Subject" />

              <textarea placeholder="Your Message" rows="5"></textarea>

              <button type="submit">Send Message</button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;