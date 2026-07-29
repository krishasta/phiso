import React from 'react'
import './Services.css'
import svc1 from '../assets/svc1.png'
import svc2 from '../assets/svc2.png'
import svc3 from '../assets/svc3.png'
import svc4 from '../assets/svc4.png'

const serviceData = [
  {
    id: 1,
    title: 'Manual Therapy',
    description: 'Hands-on techniques to mobilize joints and soft tissues, reducing pain and improving range of motion.',
    image: svc1,
    className: 'grid-large'
  },
  {
    id: 2,
    title: 'Sports Rehabilitation',
    description: 'Specialized programs to help athletes recover from injuries and return to peak performance safely.',
    image: svc2,
    className: 'grid-regular'
  },
  {
    id: 3,
    title: 'Post-Surgical Rehab',
    description: 'Guided recovery protocols following orthopedic surgeries to restore strength and function.',
    image: svc3,
    className: 'grid-regular'
  },
  {
    id: 4,
    title: 'Pain Management',
    description: 'Comprehensive strategies combining movement, education, and therapy to manage long-term pain.',
    image: svc4,
    className: 'grid-large-horizontal'
  }
]

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Specialized Services</h2>
          <p>We offer a comprehensive range of treatments to address your unique needs with a focus on holistic recovery.</p>
        </div>
        
        <div className="services-grid-modern">
          {serviceData.map(service => (
            <div key={service.id} className={`service-image-card ${service.className}`}>
              <div 
                className="service-bg-image" 
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="service-overlay"></div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <div className="service-hidden-content">
                  <p>{service.description}</p>
                  <a href="#contact" className="btn btn-outline-white">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
