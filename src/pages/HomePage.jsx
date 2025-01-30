import React from 'react';
import './HomePage.css';
import heroImage1 from '../assets/hero-image-1.jpg';
import heroImage2 from '../assets/hero-image-2.jpg';
import heroImage3 from '../assets/hero-image-3.jpg';
import aboutImage from '../assets/about-image.jpg';
import servicesImage from '../assets/services-image.jpg';
import contactImage from '../assets/contact-image.jpg';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section hero-section-1">
        <img src={heroImage1} alt="Construction Site" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to Pro Constructions</h1>
          <p>Your trusted partner in building excellence.</p>
          <button className="hero-button">Get a Quote</button>
        </div>
      </div>
       <div className="hero-section hero-section-2">
        <img src={heroImage2} alt="Building Design" className="hero-image" />
        <div className="hero-content">
          <h2>Building Your Dreams</h2>
          <p>From concept to completion, we are here to make your vision a reality.</p>
          <button className="hero-button">View Our Projects</button>
        </div>
      </div>
      <div className="hero-section hero-section-3">
        <img src={heroImage3} alt="Construction Team" className="hero-image" />
        <div className="hero-content">
          <h2>Quality and Reliability</h2>
          <p>We are committed to delivering high-quality construction services with utmost reliability.</p>
          <button className="hero-button">Learn More</button>
        </div>
      </div>
      <div className="content-section">
        <h2>Our Services</h2>
        <p>We offer a wide range of construction services to meet your needs.</p>
      </div>
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
     <div className="services-page">
        <div className="hero-section">
            <img src={servicesImage} alt="Our Services" className="hero-image" />
            <div className="hero-content">
                <h1>Our Services</h1>
                <div className="services-list">
                    <div className="service-item">
                        <h3>General Contracting</h3>
                        <p>We provide comprehensive general contracting services for all types of construction projects.</p>
                    </div>
                    <div className="service-item">
                        <h3>Construction Management</h3>
                        <p>Our experienced project managers ensure your project is completed on time and within budget.</p>
                    </div>
                    <div className="service-item">
                        <h3>Design-Build</h3>
                        <p>We offer design-build services, integrating design and construction for a seamless process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <div className="contact-page">
         <div className="hero-section">
            <img src={contactImage} alt="Contact Us" className="hero-image" />
            <div className="hero-content">
                <h1>Contact Us</h1>
                <div className="contact-form">
                    <p>Please fill out the form below to get in touch with us.</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  );
}

export default HomePage;
