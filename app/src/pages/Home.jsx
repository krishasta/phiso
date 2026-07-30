import React from 'react'
import HeroSection from '../components/HeroSection'
import BodyMap from '../components/BodyMap'

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <section className="intro-section" style={{ padding: '4rem 2rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Welcome to Physiotherapist</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            We provide expert physiotherapy services to help you recover, prevent injuries, and optimize your physical performance. Our state-of-the-art facility and experienced team are here to support your journey to better health.
          </p>
        </div>
      </section>
      <BodyMap />
    </div>
  )
}

export default Home
