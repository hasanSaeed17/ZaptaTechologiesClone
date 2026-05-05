import React from 'react';
import HeroSection from '../components/core/Home/HeroSection';
import ServicesSection from '../components/core/Home/ServicesSection';
import TestimonialsSection from '../components/core/Home/TestimonialsSection';
import ProcessSection from '../components/core/Home/ProcessSection';
import AwardsSection from '../components/core/Home/AwardsSection';
import HomeCTA from '../components/core/Home/HomeCTA';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProcessSection />
      <AwardsSection />
      <HomeCTA />
    </>
  );
};
export default Home;