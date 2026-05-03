import React from 'react';
import AboutHero from '../components/core/About/AboutHero';
import AboutCTA from '../components/core/About/AboutCTA';
import AboutZaptaSection from '../components/core/About/AboutZaptaSection';
import MissionSection from '../components/core/About/MissionSection';
import CoreValuesSection from '../components/core/About/CoreValuesSection';
import VisionSection from '../components/core/About/VisionSection';
import WhatWeDoSection from '../components/core/About/WhatWeDoSection';

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutZaptaSection />
      <MissionSection />
      <CoreValuesSection />
      <VisionSection />
      <WhatWeDoSection />
      <AboutCTA />
    </>
  );
};
export default About;