import React from 'react';
import AboutHero from '../components/core/About/AboutHero';
import AboutCTA from '../components/core/About/AboutCTA';
import AboutZaptaSection from '../components/core/About/AboutZaptaSection';
import MissionSection from '../components/core/About/MissionSection';
import CoreValuesSection from '../components/core/About/CoreValuesSection';

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutZaptaSection />
      <MissionSection />
      <CoreValuesSection />
      <AboutCTA />
    </>
  );
};
export default About;