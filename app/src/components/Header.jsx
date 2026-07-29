import React from 'react'
import './Header.css'

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo"> Physiotherapist </div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#blog">Blog</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
