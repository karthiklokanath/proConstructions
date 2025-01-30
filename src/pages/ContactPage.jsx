import React from 'react';
import './ContactPage.css';
import contactImage from '../assets/contact-image.jpg'

function ContactPage() {
  return (
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
  );
}

export default ContactPage;
