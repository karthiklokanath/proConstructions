import React from 'react';
import './ServicesPage.css';
import servicesImage from '../assets/services-image.jpg';

function ServicesPage() {
  return (
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
  );
}

export default ServicesPage;
