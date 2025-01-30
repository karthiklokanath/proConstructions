import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h4>Head Office</h4>
          <p>500 Terry Francine Street</p>
          <p>San Francisco, CA 94158</p>
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>
        <div className="footer-socials">
          <h4>Socials</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
         <div className="footer-inquiries">
          <h4>Inquiries</h4>
           <p>For any inquiries, questions or commendations, please call: 123-456-7890</p>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Pro Constructions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
