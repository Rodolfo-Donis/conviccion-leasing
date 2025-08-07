import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { COMPANY_INFO } from '../assets/utils/constants'
import './NuestrosServicios.css'
import tractor from '../assets/images/tractor.jpg'
import tractor2 from '../assets/images/tractor2.jpg'
import camion from '../assets/images/camion.jpg'
import tele from '../assets/images/tele.jpg'
import doctor from '../assets/images/doctor.jpg'
import location from '../assets/images/location.jpg'
import vehiculo from '../assets/images/vehiculo-fondo.png'
import paneles from '../assets/images/panel-fondo.png'
import piramide2 from '../assets/images/piramide2.png'

import imageCarousel1 from '../assets/images/carousel/1CARRETE.png'
import imageCarousel2 from '../assets/images/carousel/2CARRETE.png'
import imageCarousel3 from '../assets/images/carousel/3CARRETE.png'
import imageCarousel4 from '../assets/images/carousel/4CARRETE.png'
import imageCarousel5 from '../assets/images/carousel/5CARRETE.png'
import imageCarousel7 from '../assets/images/carousel/7CARRETE.png'
import imageCarousel8 from '../assets/images/carousel/8CARRETE.png'
import imageCarousel9 from '../assets/images/carousel/9CARRETE.png'
import imageCarousel10 from '../assets/images/carousel/10CARRETE.png'
import imageCarousel11 from '../assets/images/carousel/11CARRETE.png'
import imageCarousel12 from '../assets/images/carousel/12CARRETE.png'
import imageCarousel14 from '../assets/images/carousel/14CARRETE.png'
import imageCarousel15 from '../assets/images/carousel/15CARRETE.png'
import imageCarousel16 from '../assets/images/carousel/16CARRETE.png'
import imageCarousel17 from '../assets/images/carousel/17CARRETE.png'
import imageCarousel18 from '../assets/images/carousel/18CARRETE.png'
import imageCarousel20 from '../assets/images/carousel/20CARRETE.png'
import imageCarousel21 from '../assets/images/carousel/21CARRETE.png'
import imageCarousel23 from '../assets/images/carousel/23CARRETE.png'
import imageCarousel24 from '../assets/images/carousel/24CARRETE.png'

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
    'maquinaria industrial',
    'maquinaria para la industria alimenticia',
    'maquinaria para la industria plastica',
    'maquinaria para la industria alimenticia',
    'equipos medico y laboratorio',
    'maquinaria para automatizacion',
    'maquinaria y equipo de logistica',
    'maquinaria para la industria metalurgica',
    'maquinaria y equipo para la industria farmaceutica',
    'equipo pecuaria',
    'maquinaria para la industria alimenticia ',
    'vehiculos y aditamentos para transporte de mercaderia',
    'vehiculos ejecutivos y supervision',
    'equipos para la industria energetica',
    'equipos y maquinaria para la construccion',
    'equipos y maquinaria agricola',
    'equipo tecnologico',
    'bienes inmuebles',
    'locales comerciales y oficinas',
    'otras edificaciones'
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
           <br></br> <br></br>
            
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
          En CONVICCIÓN LEASING adquirimos los activos productivos que tu empresa requiera
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
                  backgroundImage: sectors[currentSlide] === 'maquinaria industrial' 
                    ? `url(${imageCarousel1})` 
                    : sectors[currentSlide] === 'maquinaria para la industria alimenticia'
                    ? `url(${imageCarousel2})`
                    : sectors[currentSlide] === 'maquinaria para la industria plastica'
                    ? `url(${imageCarousel3})`
                    : sectors[currentSlide] === 'maquinaria para la industrial alimenticia'
                    ? `url(${imageCarousel4})`
                    : sectors[currentSlide] === 'equipos medico y laboratorio'
                    ? `url(${imageCarousel5})`
                    : sectors[currentSlide] === 'maquinaria para automatizacion'
                    ? `url(${imageCarousel7})`
                    : sectors[currentSlide] === 'maquinaria y equipo de logistica'
                    ? `url(${imageCarousel8})`
                    : sectors[currentSlide] === 'maquinaria para la industria metalurgica'
                    ? `url(${imageCarousel9})`
                    : sectors[currentSlide] === 'maquinaria y equipo para la industria farmaceutica'
                    ? `url(${imageCarousel10})`
                    : sectors[currentSlide] === 'equipo pecuaria'
                    ? `url(${imageCarousel11})`
                    : sectors[currentSlide] === 'maquinaria para la industria alimenticia '
                    ? `url(${imageCarousel12})`
                    : sectors[currentSlide] === 'vehiculos y aditamentos para transporte de mercaderia'
                    ? `url(${imageCarousel14})`
                    : sectors[currentSlide] === 'vehiculos ejecutivos y supervision'
                    ? `url(${imageCarousel15})`
                    : sectors[currentSlide] === 'equipos para la industria energetica'
                    ? `url(${imageCarousel16})`
                    : sectors[currentSlide] === 'equipos y maquinaria para la construccion'
                    ? `url(${imageCarousel17})`
                    : sectors[currentSlide] === 'equipos y maquinaria agricola'
                    ? `url(${imageCarousel18})`
                    : sectors[currentSlide] === 'equipo tecnologico'
                    ? `url(${imageCarousel20})`
                    : sectors[currentSlide] === 'bienes inmuebles'
                    ? `url(${imageCarousel21})`
                    : sectors[currentSlide] === 'locales comerciales y oficinas'
                    ? `url(${imageCarousel23})`
                    : sectors[currentSlide] === 'otras edificaciones'
                    ? `url(${imageCarousel24})`
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
            ¿Por qué adquirir activos productivos con CONVICCIÓN LEASING?
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
            <motion.img
              src={piramide2}
              alt="Pirámide de beneficios"
              className="pyramid-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            />
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
             cotiza el leasing para tus equipos hoy mismo
            </motion.button>
        </div>
      </div>
    </section>
  )
}

export default NuestrosServicios 