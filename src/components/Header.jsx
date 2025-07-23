import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import './Header.css'

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false) // Close mobile menu after clicking a link
    }
  }

  const navItems = [
    { id: 'como-funciona', label: 'Cómo Funciona' },
    { id: 'nuestros-servicios', label: 'Nuestros Servicios' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/src/assets/images/LOGO POSITIVO.png" 
              alt="CONVICCIÓN LEASING" 
              className="logo-image"
            />
          </motion.div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className="nav-link"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="nav-actions">
              <ThemeToggle />
            </div>
          </nav>

          <motion.button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header 