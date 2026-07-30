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

        {/* Our Philosophy Section */}
        <div className="clinic-philosophy-section" style={{ marginTop: '4rem', padding: '3rem', background: 'var(--surface-color)', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <div className="section-header text-center">
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Our Philosophy</h2>
            <p style={{ color: 'var(--text-muted)' }}>A patient-centered approach to lasting health.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div className="philosophy-card" style={{ padding: '2rem', background: 'var(--bg-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Listen First</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>We believe the key to successful treatment is understanding your unique situation. We take the time to listen to your history, concerns, and goals.</p>
            </div>
            <div className="philosophy-card" style={{ padding: '2rem', background: 'var(--bg-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Empowerment</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Treatment doesn't stop at the clinic door. We provide you with the knowledge and tools you need to manage your condition independently.</p>
            </div>
            <div className="philosophy-card" style={{ padding: '2rem', background: 'var(--bg-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Evidence-Based</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Every technique and exercise we prescribe is backed by the latest scientific research in physical therapy and biomechanics.</p>
            </div>
          </div>
        </div>

        {/* The Clinic Environment */}
        <div className="clinic-environment-section" style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
           <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>A Healing Environment</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
                Our clinic is designed to be a sanctuary for healing. From the moment you walk in, you will find a calm, welcoming space that puts you at ease.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                We use modern, sanitized equipment in private treatment rooms to ensure your comfort and privacy during every session. This environment allows you to focus completely on your rehabilitation and recovery without distractions.
              </p>
           </div>
           <div style={{ flex: '1 1 400px' }}>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                [Clinic Interior Image]
              </div>
           </div>
        </div>
        
      </div>
    </section>
  )
}

export default About
