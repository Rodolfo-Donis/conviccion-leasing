import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY_INFO } from '../assets/utils/constants'
import './NuestrosServicios.css'

const NuestrosServicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const handleWhatsAppClick = () => {
    const whatsappUrl = COMPANY_INFO.whatsapp
    console.log('Opening WhatsApp:', whatsappUrl)
    
    // Simple and direct approach
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const sectors = [
    'Agricultura',
    'Ganadería / Producción pecuaria',
    'Minería',
    'Servicios empresariales',
    'Industria / Manufactura',
    'Construcción',
    'Turismo y transporte'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('nuestros-servicios')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sectors.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [sectors.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sectors.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sectors.length) % sectors.length)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  }

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section id="nuestros-servicios" className="nuestros-servicios">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* First Section - Equipment */}
        <motion.div className="equipment-section" variants={itemVariants}>
          <motion.div className="section-content">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ¿Qué equipos utilizas en tu negocio?
            </motion.h2>
            <motion.p 
              className="section-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Te ayudamos a crecer con los activos productivos que tu empresa requiera.
            </motion.p>
            
            <motion.div className="equipment-grid">
              {[
                { icon: '🚜', label: 'Agricultura' },
                { icon: '🏗️', label: 'Construcción' },
                { icon: '🚛', label: 'Transporte' },
                { icon: '🏥', label: 'Médico' },
                { icon: '💻', label: 'Tecnología' },
                { icon: '🏢', label: 'Industrial' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="equipment-item"
                  variants={iconVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="equipment-icon">{item.icon}</div>
                  <span className="equipment-label">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Second Section - Economic Sectors Carousel */}
        <motion.div className="sectors-section" variants={itemVariants}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            ¿A qué sectores económicos servimos?
          </motion.h2>
          
          <motion.div className="carousel-container">
            <motion.button
              className="carousel-btn prev"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </motion.button>
            
            <div className="carousel-wrapper">
              <AnimatePresence mode="wait" custom={currentSlide}>
                <motion.div
                  key={currentSlide}
                  className="carousel-slide"
                  custom={currentSlide}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <div className="slide-content">
                    <div className="sector-icon">
                      {['🌾', '🐄', '⛏️', '🏢', '🏭', '🏗️', '✈️'][currentSlide]}
                    </div>
                    <h3 className="sector-title">{sectors[currentSlide]}</h3>
                    <p className="sector-description">
                      Soluciones de leasing especializadas para el sector de {sectors[currentSlide].toLowerCase()}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.button
              className="carousel-btn next"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ›
            </motion.button>
          </motion.div>
          
          <div className="carousel-indicators">
            {sectors.map((_, index) => (
              <motion.button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Third Section - Benefits */}
        <motion.div className="benefits-section" variants={itemVariants}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            ¿Por qué adquirir activos productivos con Convicción Leasing?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Beneficios que impactan tu productividad, operación y rentabilidad.
          </motion.p>
          
          <motion.div className="benefits-pyramid">
            <motion.div 
              className="pyramid-level main-benefit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3>INCREMENTA CAPACIDAD PRODUCTIVA DE TU EMPRESA</h3>
            </motion.div>
            
            <motion.div 
              className="pyramid-level secondary-benefits"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="benefit-item">
                <h4>DISMINUYE COSTO DE OPORTUNIDAD SOBRE EL CAPITAL DE TRABAJO</h4>
              </div>
              <div className="benefit-item">
                <h4>MEJOR MANEJO DE FLUJO DE CAJA E ÍNDICES FINANCIEROS</h4>
              </div>
              <div className="benefit-item">
                <h4>MEJORES RESULTADOS AL UTILIZACIÓN DE OPEX EN LUGAR DE CAPEX</h4>
              </div>
            </motion.div>
            
            <motion.div 
              className="pyramid-level tertiary-benefits"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="benefit-item">
                <h4>REDUCE COSTO DE MANTENIMIENTO POR RENOVAR TUS EQUIPOS</h4>
              </div>
              <div className="benefit-item">
                <h4>RESULTADOS PREDECIBLES</h4>
              </div>
            </motion.div>
            
            <motion.div 
              className="pyramid-level quaternary-benefits"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="benefit-item">
                <h4>MÁS EQUIPO POR EL MISMO PRESUPUESTO</h4>
              </div>
              <div className="benefit-item">
                <h4>MAYOR SATISFACCIÓN DEL USUARIO</h4>
              </div>
              <div className="benefit-item">
                <h4>MEJOR CONTROL DE ACTIVOS Y CREACIÓN DE DISCIPLINA PARA RENOVACIÓN</h4>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 165, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
          >
            Cotiza tu equipo hoy mismo
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default NuestrosServicios 