import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Header.css'
import webLogo from '../assets/images/web.png'
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
        <motion.div 
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img 
            src={webLogo} 
            alt="Convicción Leasing" 
            className='logo-img'
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
        
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