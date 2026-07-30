import React from 'react'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <div className="page-container" style={{ padding: '4rem 2rem' }}>
      <Contact />
      <section style={{ marginTop: '4rem', background: 'var(--surface-color)', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-color)', textAlign: 'center' }}>Visit Our Clinic</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 300px', background: 'var(--bg-color)', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Location</h3>
            <p style={{ color: 'var(--text-muted)' }}>123 Healing Way<br />Wellness City, WC 12345</p>
          </div>
          <div style={{ flex: '1 1 300px', background: 'var(--bg-color)', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Working Hours</h3>
            <p style={{ color: 'var(--text-muted)' }}>Mon - Fri: 8:00 AM - 7:00 PM<br />Sat: 9:00 AM - 2:00 PM<br />Sun: Closed</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
