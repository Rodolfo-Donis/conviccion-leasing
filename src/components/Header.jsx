import React, { useState, useEffect } from 'react'
import './Header.css'
import logonegativo from '../assets/images/logonegativo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMobileMenu()
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logonegativo} alt="Convicción Leasing" />
          <h2>Convicción Leasing</h2>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('inicio')}
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('como-funciona')}
              >
                Cómo funciona
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('nuestros-servicios')}
              >
                Servicios
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('contact')}
              >
                Contáctanos
              </button>
            </li>
          </ul>
        </nav>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header 