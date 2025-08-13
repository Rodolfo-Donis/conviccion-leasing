import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'
import logoPositivo from '../assets/images/web.png'
import iconoFooter from '../assets/images/icono-fotter.png'
import iconoFooter2 from '../assets/images/icono-fotter-2.png'
import iconoFooter3 from '../assets/images/icono-fotter-3.png'


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main-row">
          <div className="footer-links-block">
            <ul className="footer-main-links">
              <li>• Inicio</li>
              <li>• Servicios</li>
              <li>• Cómo funciona</li>
              <li>• Contáctanos</li>
            </ul>
          </div>
          <div className="footer-contact-block">
            <div className="footer-contact-row address-row">
              <img src={iconoFooter} alt="Dirección" className="footer-icon" />
              <span className="footer-contact-text">Dirección: 12 calle 1-25, Zona 10. Ed. Géminis 10 TS Of. 1005</span>
            </div>
            <div className="footer-contact-row address-row">
            <img src={iconoFooter2} alt="Dirección" className="footer-icon" />
              <span className="footer-contact-text">Tel. 502 2335 3637</span>
            </div>
            <div className="footer-contact-row address-row">
            <img src={iconoFooter3} alt="Dirección" className="footer-icon" />
              <span className="footer-contact-text">WhatsApp 502 5109 7898</span>
            </div>
          </div>
          <div className="footer-logo-block">
            <img src={logoPositivo} alt="Convicción Leasing" className="footer-logo-img" />
          </div>
        </div>
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Convicción Leasing. All rights reserved.</p>
            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ↑
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 