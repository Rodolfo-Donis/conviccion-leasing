import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

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
              <li><b>• Inicio</b></li>
              <li><b>• Cómo funciona</b></li>
              <li><b>• Servicios</b></li>
              <li><b>• Contáctanos</b></li>
            </ul>
          </div>
          <div className="footer-contact-block">
            <div className="footer-contact-row address-row">
              <span className="footer-icon">📍</span>
              <span className="footer-contact-text">Dirección: 12 calle 1-25, Zona 10. Ed. Gémins 10 TS Of. 1005</span>
            </div>
            <div className="footer-contact-row">
              <span className="footer-icon">📞</span>
              <span className="footer-contact-text">Tel. 502 2335 3637</span>
            </div>
            <div className="footer-contact-row">
              <span className="footer-icon">💬</span>
              <span className="footer-contact-text">WhatsApp 502 5109 7898</span>
            </div>
          </div>
          <div className="footer-logo-block">
            <img src="/src/assets/images/LOGO POSITIVO.png" alt="Convicción Leasing" className="footer-logo-img" />
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
            <p>&copy; {currentYear} conviccion Leasing. All rights reserved.</p>
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