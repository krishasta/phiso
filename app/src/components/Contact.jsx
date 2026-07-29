import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Ready to start your journey to recovery? Book an appointment today or send us a message.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Our Location</h3>
                <p>123 Healing Way, Suite 100<br/>Wellness City, NY 10001</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Phone Number</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h3>Email Address</h3>
                <p>hello@vitalphysio.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div>
                <h3>Working Hours</h3>
                <p>Mon - Fri: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service">
                <option value="general">General Inquiry / Consultation</option>
                <option value="manual-therapy">Manual Therapy</option>
                <option value="sports-rehab">Sports Rehabilitation</option>
                <option value="post-op">Post-Surgical Rehab</option>
                <option value="pain-management">Chronic Pain Management</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-submit">Request Appointment</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
