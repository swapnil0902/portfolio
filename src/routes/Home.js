import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import About from './About';
import Project from './Project';


const Home = () => {
  return (
    <section id="home">
    <div>
      <Navbar />
      <HeroImg />
      <About />
      <Project />
      
      <Footer />
    </div>

    </section>
  );
};

export default Home