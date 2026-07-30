import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import BodyMap from '../components/BodyMap'

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      
      {/* Clinic Welcome */}
      <section className="intro-section" style={{ padding: '4rem 2rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Welcome to Your Local Physiotherapy Clinic</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            We are a dedicated single-practice clinic focused on providing personalized, one-on-one care. Whether you are dealing with acute pain, chronic conditions, or recovering from an injury, our goal is to guide you every step of the way to a full recovery.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Book Your First Visit</Link>
            <Link to="/about" className="btn btn-outline-primary" style={{ border: '2px solid var(--primary)', color: 'var(--primary)', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>Meet Our Therapist</Link>
          </div>
        </div>
      </section>

      {/* Patient Journey / Guidance Section */}
      <section className="guidance-section" style={{ padding: '5rem 2rem', background: 'var(--bg-color)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Patient Guidance</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginTop: '0.5rem' }}>Your Journey to Recovery</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>Here is what you can expect when you walk through our clinic doors.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', position: 'relative' }}>
            <div style={{ background: 'var(--surface-color)', padding: '2.5rem 2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '60px', height: '60px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
              <h3 style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>Initial Assessment</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>We start with a thorough evaluation of your condition, medical history, and mobility to pinpoint the root cause of your pain.</p>
            </div>

            <div style={{ background: 'var(--surface-color)', padding: '2.5rem 2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '60px', height: '60px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
              <h3 style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>Personalized Plan</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Based on your assessment, we design a custom treatment plan combining manual therapy, targeted exercises, and education.</p>
            </div>

            <div style={{ background: 'var(--surface-color)', padding: '2.5rem 2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '60px', height: '60px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
              <h3 style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>Active Rehabilitation</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>We guide you through your recovery process, adjusting the plan as you improve, ensuring long-term health and injury prevention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated Summary */}
      <section className="conditions-section" style={{ padding: '4rem 2rem', background: 'var(--surface-color)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-color)', marginBottom: '2rem' }}>Common Conditions We Treat</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <span style={{ padding: '0.75rem 1.5rem', background: 'var(--bg-color)', borderRadius: '50px', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontWeight: '500' }}>Back & Neck Pain</span>
            <span style={{ padding: '0.75rem 1.5rem', background: 'var(--bg-color)', borderRadius: '50px', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontWeight: '500' }}>Sports Injuries</span>
            <span style={{ padding: '0.75rem 1.5rem', background: 'var(--bg-color)', borderRadius: '50px', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontWeight: '500' }}>Post-Surgical Rehab</span>
            <span style={{ padding: '0.75rem 1.5rem', background: 'var(--bg-color)', borderRadius: '50px', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontWeight: '500' }}>Arthritis & Joint Pain</span>
            <span style={{ padding: '0.75rem 1.5rem', background: 'var(--bg-color)', borderRadius: '50px', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontWeight: '500' }}>Workplace Injuries</span>
          </div>
          <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none', fontSize: '1.1rem' }}>View All Treatments & Services →</Link>
        </div>
      </section>

      <div className="page-section-wrapper bg-alt">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '1rem', color: 'var(--text-color)' }}>Interactive Symptom Checker</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>Not sure what's wrong? Select the area on the body map where you feel discomfort to learn more.</p>
          <BodyMap />
        </div>
      </div>
    </div>
  )
}

export default HomePage
