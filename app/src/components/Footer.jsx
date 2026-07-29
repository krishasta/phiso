import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo footer-logo">VITAL<span>PHYSIO</span></div>
          <p>Dedicated to providing the highest quality physiotherapy and rehabilitation services to help you live a pain-free life.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Manual Therapy</a></li>
            <li><a href="#services">Sports Rehab</a></li>
            <li><a href="#services">Post-Op Care</a></li>
            <li><a href="#services">Pain Management</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VitalPhysio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
