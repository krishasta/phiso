import { useState, useEffect } from 'react'
import './Main.css'

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/slide1.jpg',
      tag: 'PAIN MANAGEMENT',
      title: 'Recover Your Strength',
      subtitle: 'Professional care for chronic pain relief and recovery',
      buttons: ['Book Appointment', 'View Now']
    },
    {
      image: '/slide2.jpg',
      tag: 'SPORTS INJURIES',
      title: 'Recover Faster, Play Harder',
      subtitle: 'Stay in the Game: Expert Care for Sports Injuries',
      buttons: ['Book Appointment', 'View Now']
    },
    {
      image: '/slide3.jpg',
      tag: 'CRYOTHERAPY',
      title: 'Cool Recovery Solutions',
      subtitle: 'Advanced cold therapy for faster healing and performance',
      buttons: ['Book Appointment', 'View Now']
    },
    {
      image: '/slide4.jpg',
      tag: 'WOMEN WELLNESS',
      title: 'Feel Your Best Self',
      subtitle: 'Specialized wellness programs designed for you',
      buttons: ['Book Appointment', 'View Now']
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="main">
      <div className="carousel">
        <div className="carousel-container">
          <div className="carousel-slide">
            <div className="carousel-text">
              <span className="slide-tag">{slides[currentSlide].tag}</span>
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].subtitle}</p>
              <div className="slide-buttons">
                <button className="btn-primary">Book Appointment</button>
                <button className="btn-secondary">View Now</button>
              </div>
            </div>
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="carousel-image"
            />
          </div>
        </div>

        <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
        <button className="carousel-btn next" onClick={nextSlide}>❯</button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="whatsapp-contact">
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-btn"
        >
          <span className="whatsapp-icon">💬</span>
          <span>Contact via WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

export default Main