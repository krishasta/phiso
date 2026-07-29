import React, { useRef, useState } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const containerRef = useRef(null)
  const [dotPosition, setDotPosition] = useState('50%')

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    // Calculate Y position relative to the left container
    let y = e.clientY - rect.top
    
    // Constrain within the container (with some padding for the thumb height)
    if (y < 80) y = 80
    if (y > rect.height - 80) y = rect.height - 80
    
    setDotPosition(`${y}px`)
  }

  const handleMouseLeave = () => {
    // Return to center when mouse leaves the area
    setDotPosition('50%')
  }

  return (
    <section id="home" className="hero-section">
      <div 
        className="hero-left"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="vertical-text-container">
          <span className="vertical-text">a circle of consistency</span>
        </div>
        
        <div className="vertical-divider-full">
          <div className="full-line"></div>
          
          <div className="static-text-container">
            <span className="pull-text">PULL</span>
            <span className="push-text">PUSH</span>
          </div>
          
          <div 
            className="slider-dot"
            style={{ top: dotPosition }}
          >
            <div className="dot"></div>
          </div>
        </div>
        
        <div className="locations-container">
          <div className="locations-header">
            <div className="horizontal-line"></div>
            <span>OUR LOCATIONS</span>
          </div>
          <div className="location">
            <h2>Karur</h2>
            <p>Tamil Nadu, India</p>
          </div>
          <div className="location">
            <h2>Coimbatore</h2>
            <p>Tamil Nadu, India</p>
          </div>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="concentric-circles">
          <div className="circle circle-1">
            <div className="orbit-dot orbit-dot-teal"></div>
          </div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3">
            <div className="orbit-dot orbit-dot-orange"></div>
          </div>
          <div className="circle circle-4"></div>
          
          <div className="center-content">
            <div className="logo-box">
              <span className="logo-text">
                Lo
                <span className="logo-rings">
                  <span className="ring ring-1"></span>
                  <span className="ring ring-2"></span>
                </span>
                p
              </span>
            </div>
            <h2 className="tagline">a circle of consistency</h2>
            <h3 className="sub-tagline">PHYSIOTHERAPY & REHABILITATION</h3>
            
            <div className="services-tags">
              <span className="tag">Orthopaedic Rehab</span>
              <span className="tag">Sports Physio</span>
              <span className="tag">Postural Correction</span>
              <span className="tag">Manual Therapy</span>
              <span className="tag">Neuro Rehab</span>
              <span className="tag">Home Visits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
