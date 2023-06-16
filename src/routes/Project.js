import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';

const Project = () => {
  return (
    <section id = "project">
      <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works" />
      <Work />

    </div>
    </section>
    
  )
}

export default Project