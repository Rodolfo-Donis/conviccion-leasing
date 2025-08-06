import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { COMPANY_INFO } from '../assets/utils/constants'
import './NuestrosServicios.css'
import agriculture from '../assets/images/agriculture.jpg'
import livestock from '../assets/images/livestock.jpg'
import mining from '../assets/images/mining.jpg'
import sectionBusiness from '../assets/images/sectionBusiness.jpg'
import manufacturing from '../assets/images/manufacturing.jpg'
import construction from '../assets/images/construction.jpg'
import transport from '../assets/images/transport.jpg'
import tractor from '../assets/images/tractor.jpg'
import tractor2 from '../assets/images/tractor2.jpg'
import camion from '../assets/images/camion.jpg'
import tele from '../assets/images/tele.jpg'
import doctor from '../assets/images/doctor.jpg'
import location from '../assets/images/location.jpg'
import vehiculo from '../assets/images/vehiculo-fondo.png'
import paneles from '../assets/images/panel-fondo.png'

const NuestrosServicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Individual scroll triggers for each section
  const [equipmentRef, equipmentInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [sectorsRef, sectorsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [benefitsRef, benefitsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [ctaRef, ctaInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sectors.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [sectors.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sectors.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sectors.length) % sectors.length)
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
      <div className="container">
        {/* Equipment Section */}
        <div className={`equipment-section ${equipmentInView ? 'scroll-animate' : ''}`} ref={equipmentRef}>
          <motion.div className="section-content">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={equipmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ¿Qué equipos utilizas en tu negocio?
            </motion.h2>
            <motion.p 
              className="section-description"
              initial={{ opacity: 0, y: 30 }}
              animate={equipmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Te ayudamos a crecer con los activos productivos que tu empresa requiera.
            </motion.p>
            
            <motion.div 
              className="equipment-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={equipmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: '🚜', label: 'Agricultura', image: tractor },
                { icon: '🏗️', label: 'Construcción', image: tractor2 },
                { icon: '🚛', label: 'Transporte', image: camion },
                { icon: '🏥', label: 'Médico', image: doctor },
                { icon: '💻', label: 'Tecnología', image: tele },
                { icon: '🏢', label: 'Industrial', image: location },
                { icon: '🏢', label: 'Vehiculos', image: vehiculo },
                { icon: '🏢', label: 'Paneles solares', image: paneles }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="equipment-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={equipmentInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="equipment-icon">
                    {item.image ? (
                      <img src={item.image} alt={item.label} className="equipment-image" />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <span className="equipment-label">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Sectors Section */}
        <div className={`sectors-section ${sectorsInView ? 'scroll-animate' : ''}`} ref={sectorsRef}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿A qué sectores económicos servimos?
          </motion.h2>
          
          <motion.div 
            className="carousel-container"
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="carousel-btn prev"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </motion.button>
            
            <div className="carousel-wrapper">
              <div
                key={currentSlide}
                className="carousel-slide"
                style={{
                  backgroundImage: sectors[currentSlide] === 'Agricultura' 
                    ? `url(${agriculture})` 
                    : sectors[currentSlide] === 'Ganadería / Producción pecuaria'
                    ? `url(${livestock})`
                    : sectors[currentSlide] === 'Minería'
                    ? `url(${mining})`
                    : sectors[currentSlide] === 'Servicios empresariales'
                    ? `url(${sectionBusiness})`
                    : sectors[currentSlide] === 'Industria / Manufactura'
                    ? `url(${manufacturing})`
                    : sectors[currentSlide] === 'Construcción'
                    ? `url(${construction})`
                    : sectors[currentSlide] === 'Turismo y transporte'
                    ? `url(${transport})`
                    : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'scroll'
                }}
              >
                <div className="slide-content">
                  <div className="sector-icon">
                    {['', '', '', '', '', '', ''][currentSlide]}
                  </div>
                  <h3 className="sector-title">{sectors[currentSlide]}</h3>
                </div>
              </div>
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
          
          <motion.div 
            className="carousel-indicators"
            initial={{ opacity: 0, y: 20 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {sectors.map((_, index) => (
              <motion.button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className={`benefits-section ${benefitsInView ? 'scroll-animate' : ''}`} ref={benefitsRef}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Por qué adquirir activos productivos con Convicción Leasing?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Beneficios que impactan tu productividad, operación y rentabilidad.
          </motion.p>
          
          <motion.div 
            className="benefits-pyramid"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Top Level - Main Benefit */}
            <motion.div 
              className={`pyramid-level main-benefit ${benefitsInView ? 'scroll-animate' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <h3>INCREMENTA CAPACIDAD PRODUCTIVA DE TU EMPRESA</h3>
            </motion.div>
            
            {/* Second Level - Secondary Benefits */}
            <motion.div 
              className={`pyramid-level secondary-benefits ${benefitsInView ? 'scroll-animate' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div 
                className={`benefit-item ${benefitsInView ? 'scroll-animate' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <h4>DISMINUYE COSTO DE OPORTUNIDAD SOBRE EL CAPITAL DE TRABAJO</h4>
              </motion.div>
              <motion.div 
                className={`benefit-item ${benefitsInView ? 'scroll-animate' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <h4>MEJOR MANEJO DE FLUJO DE CAJA E ÍNDICES FINANCIEROS</h4>
              </motion.div>
            </motion.div>
            
            {/* Third Level - Tertiary Benefits */}
            <motion.div 
              className={`pyramid-level tertiary-benefits ${benefitsInView ? 'scroll-animate' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div 
                className={`benefit-item ${benefitsInView ? 'scroll-animate' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.05, y: -6 }}
              >
                <h4>MEJORES RESULTADOS AL UTILIZACIÓN DE OPEX EN LUGAR DE CAPEX</h4>
              </motion.div>
              <motion.div 
                className={`benefit-item ${benefitsInView ? 'scroll-animate' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.0 }}
                whileHover={{ scale: 1.05, y: -6 }}
              >
                <h4>REDUCE COSTO DE MANTENIMIENTO POR RENOVAR TUS EQUIPOS</h4>
              </motion.div>
              <motion.div 
                className={`benefit-item ${benefitsInView ? 'scroll-animate' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.2 }}
                whileHover={{ scale: 1.05, y: -6 }}
              >
                <h4>RESULTADOS PREDECIBLES</h4>
              </motion.div>
            </motion.div>
            
            {/* Fourth Level - Quaternary Benefits */}
            <motion.div 
              className={`pyramid-level quaternary-benefits ${benefitsInView ? 'scroll-animate' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <motion.div 
                className={`benefit-item ${benefitsInView ? 'scroll-animate' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.6 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <h4>MÁS EQUIPO POR EL MISMO PRESUPUESTO</h4>
              </motion.div>
              <motion.div 
                className={`benefit-item ${benefitsInView ? 'scroll-animate' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.8 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <h4>MAYOR SATISFACCIÓN DEL USUARIO</h4>
              </motion.div>
              <motion.div 
                className={`benefit-item ${benefitsInView ? 'scroll-animate' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3.0 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <h4>MEJOR CONTROL DE ACTIVOS Y CREACIÓN DE DISCIPLINA PARA RENOVACIÓN</h4>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className={`cta-section ${ctaInView ? 'scroll-animate' : ''}`} ref={ctaRef}>
          <motion.button
            className="cta-button"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(242, 164, 59, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
          >
            Cotiza tu equipo hoy mismo
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default NuestrosServicios 