import React from 'react'
import './About.css'

const teamData = [
  {
    id: 1,
    name: '[Practitioner Name]',
    title: '[Title / Role]',
    bio: '[Enter brief biography and credentials here. Describe their experience, specializations, and approach to patient care.]',
    bookingLink: '#contact'
  },
  {
    id: 2,
    name: '[Practitioner Name]',
    title: '[Title / Role]',
    bio: '[Enter brief biography and credentials here. Describe their experience, specializations, and approach to patient care.]',
    bookingLink: '#contact'
  },
  {
    id: 3,
    name: '[Practitioner Name]',
    title: '[Title / Role]',
    bio: '[Enter brief biography and credentials here. Describe their experience, specializations, and approach to patient care.]',
    bookingLink: '#contact'
  }
]

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Clinic About Section */}
        <div className="about-clinic">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              <div className="placeholder-text">Clinic Image</div>
            </div>
            <div className="stats-box">
              <div className="stat">
                <span className="number">5k+</span>
                <span className="label">Happy Patients</span>
              </div>
              <div className="stat">
                <span className="number">15+</span>
                <span className="label">Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <h2>About VitalPhysio</h2>
            <h3>Committed to Your Recovery and Wellbeing</h3>
            <p>
              At VitalPhysio, we believe in a holistic approach to healing. Our clinic was founded with a single mission: to provide personalized, evidence-based care that addresses the root cause of your pain, not just the symptoms.
            </p>
            <p>
              Our team of certified professionals brings years of experience across various disciplines, ensuring you receive the highest standard of care in a comfortable, welcoming environment.
            </p>
            
            <ul className="benefits-list">
              <li><span className="check-icon">✓</span> Personalized Treatment Plans</li>
              <li><span className="check-icon">✓</span> State-of-the-art Equipment</li>
              <li><span className="check-icon">✓</span> Experienced & Caring Staff</li>
              <li><span className="check-icon">✓</span> Flexible Appointment Times</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section" id="team">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>Dedicated professionals committed to helping you move beautifully.</p>
          </div>
          
          <div className="team-grid">
            {teamData.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image-placeholder">
                  <div className="placeholder-text">Portrait Image</div>
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <h5>{member.title}</h5>
                  <p>{member.bio}</p>
                  <a href={member.bookingLink} className="btn btn-outline-primary">Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About
