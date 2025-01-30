import React from 'react';
import './AboutPage.css';
import aboutImage from '../assets/about-image.jpg';

function AboutPage() {
  return (
    <div className="about-page">
       <div className="hero-section">
        <img src={aboutImage} alt="About Us" className="hero-image" />
        <div className="hero-content">
           <h1>About Us</h1>
           <div className="about-content">
              <p>Pro Constructions is a leading construction company dedicated to providing high-quality services. We have a team of experienced professionals committed to delivering exceptional results.</p>
              <p>Our mission is to build lasting relationships with our clients by exceeding their expectations and gaining their trust through exceptional performance by every member of the construction team.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
