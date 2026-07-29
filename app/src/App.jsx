import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import BodyMap from './components/BodyMap'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <FloatingContact />
      <main className="main-content">
        <HeroSection />
        <Services />
        <BodyMap />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

