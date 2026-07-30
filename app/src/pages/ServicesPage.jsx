import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import './Pages.css'

const detailedServices = [
  {
    title: 'Manual Therapy & Joint Mobilization',
    subtitle: 'Hands-on clinical techniques to reduce stiffness & relieve pressure',
    details: 'Our manual therapy sessions utilize specific hands-on techniques including joint manipulation, soft-tissue mobilization, and myofascial release. Designed for acute back pain, neck stiffness, and joint blockages.',
    benefits: ['Immediate pain reduction', 'Restored articular range of motion', 'Decreased muscular tension & spasms'],
    duration: '45 - 60 mins',
    tag: 'Popular'
  },
  {
    title: 'Sports Injury Rehabilitation',
    subtitle: 'Tailored athletic recovery for sports injuries & peak conditioning',
    details: 'Comprehensive rehab protocols for ligament tears, tendonitis, sprains, and strain recovery. We use functional movement screening and progressive loading programs to get you safely back to competition.',
    benefits: ['Targeted tissue repair', 'Agility & stability retraining', 'Injury reoccurrence prevention'],
    duration: '60 mins',
    tag: 'Athletes'
  },
  {
    title: 'Post-Surgical Orthopaedic Rehab',
    subtitle: 'Post-operative recovery for knee, hip, shoulder & spine surgeries',
    details: 'Structured protocols following ACL reconstructions, joint replacements, arthroscopies, and spinal operations. We work in alignment with surgeon directives for safe, phase-based progression.',
    benefits: ['Safe scar tissue management', 'Strength & gait re-education', 'Accelerated functional independence'],
    duration: '60 mins',
    tag: 'Clinical'
  },
  {
    title: 'Chronic Pain Management',
    subtitle: 'Holistic approaches to long-term spinal, muscular & neuropathic pain',
    details: 'Multi-modal strategies combining therapeutic movement, neural mobilization, dry needling, heat modalities, and ergonomic education for persistent back, neck, or fibromyalgia discomfort.',
    benefits: ['Sustained comfort & daily ease', 'Reduced dependence on pain meds', 'Enhanced movement confidence'],
    duration: '45 - 60 mins',
    tag: 'Holistic'
  }
]

const ServicesPage = () => {
  return (
    <div className="page-container services-page">
      <header className="page-header">
        <div className="container">
          <span className="page-badge">Comprehensive Care</span>
          <h1>Our Specialized Treatments & Services</h1>
          <p>Evidence-based physical therapy customized for your body's journey toward peak health and pain-free living.</p>
        </div>
      </header>

      <main className="page-content">
        <Services />

        <section className="detailed-services-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>What to Expect from Our Treatments</h2>
              <p>Every treatment plan begins with a thorough clinical assessment to design a personalized roadmap for your recovery.</p>
            </div>

            <div className="detailed-services-grid">
              {detailedServices.map((service, index) => (
                <div key={index} className="detail-card">
                  <div className="detail-card-header">
                    <span className="service-tag">{service.tag}</span>
                    <span className="service-duration">⏱️ {service.duration}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="subtitle">{service.subtitle}</p>
                  <p className="description">{service.details}</p>
                  
                  <div className="benefits-box">
                    <h4>Key Benefits:</h4>
                    <ul>
                      {service.benefits.map((b, i) => (
                        <li key={i}>✓ {b}</li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="btn btn-primary btn-block">
                    Book Consultation
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container cta-content">
            <h2>Unsure Which Service Fits Your Needs?</h2>
            <p>Speak directly with our expert physiotherapists or use our interactive body map to identify your symptoms.</p>
            <div className="cta-actions">
              <Link to="/body-map" className="btn btn-outline-white">Explore Body Map</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ServicesPage
