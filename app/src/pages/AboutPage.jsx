import React from 'react'
import About from '../components/About'

const AboutPage = () => {
  return (
    <div className="page-container" style={{ padding: '4rem 2rem' }}>
      <About />
      <section style={{ marginTop: '4rem', background: 'var(--surface-color)', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-color)', textAlign: 'center' }}>Our Mission</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          To empower our community to live active, pain-free lives by providing exceptional, compassionate, and evidence-based physiotherapy care. We strive to be the leading center for physical rehabilitation and wellness.
        </p>
      </section>
    </div>
  )
}

export default AboutPage
