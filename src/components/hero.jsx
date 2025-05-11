import React from 'react';
import '../styles/hero.css'; // Import your CSS file

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text"> {/* Separate div for text content */}
          <h1>Master Coding,</h1>
          <h2>One Concept at a Time</h2>
          <p>learn.code.evolve</p>
          <a href='/courses'><button className="cta-button">Get started {'>'}</button></a>
        </div>
        <div className="hero-image"> {/* Separate div for the image */}
          <img src="/src/assets/images/homepageimage.jpg" alt="Laptop" /> 
        
        </div>
      </div>
    </section>
  );
};

export default Hero;