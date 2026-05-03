import React from "react";
import "./VisionSection.css";
import visionImage from "../../../assets/vision-image.webp"; // update name if different

const VisionSection = () => {
  return (
    <section className="vision-section">
      
      <div className="vision-container">
        
        {/* LEFT CONTENT */}
        <div className="vision-left">
          <h2>Our Vision</h2>
          <p>
            We are committed to deliver exceptional software solutions for businesses
            while nurturing a culture of positivity, collaboration, and personal growth
            among our team members. Our success is defined by our clients growth and
            our employees’ well-being.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="vision-right">
          <img src={visionImage} alt="Vision Illustration" />
        </div>

      </div>

    </section>
  );
};

export default VisionSection;