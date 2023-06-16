import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <section id="about">
      <div>
      <Navbar />
      <HeroImg2 heading="ABOUT ME" />
      <AboutContent />

    </div>
    </section>
    
  )
}

export default About