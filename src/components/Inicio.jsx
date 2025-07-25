import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from 'emailjs-com'
import './Inicio.css'
import quienesSomos from '../assets/images/quienessomos.png'
import missionArrow from '../assets/images/missionarrow.jpg'
import vision from '../assets/images/vision.jpg'

const Inicio = () => {
  const [hoveredValue, setHoveredValue] = useState(null)

  // Individual scroll triggers for each section
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [quienesRef, quienesInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [misionRef, misionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [visionRef, visionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [valoresRef, valoresInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const valores = [
    { letter: 'E', meaning: 'Excelencia' },
    { letter: 'L', meaning: 'Liderazgo' },
    { letter: 'E', meaning: 'Eficiencia' },
    { letter: 'V', meaning: 'Voluntad' },
    { letter: 'A', meaning: 'Agradecimiento' }
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me interesa cotizar un leasing para mi negocio.')
    const whatsappUrl = `https://wa.me/50251097898?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSocialMediaClick = (platform) => {
    const urls = {
      linkedin: 'https://www.linkedin.com/company/conviccion-leasing',
      instagram: 'https://www.instagram.com/conviccionleasing'
    }
    window.open(urls[platform], '_blank')
  }

  return (
    <section id="inicio" className="inicio section">
      {/* Hero Banner */}
      <div className={`hero-banner ${heroInView ? 'scroll-animate' : ''}`} ref={heroRef}>
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span style={{ color: '#e8972d' }}>ELEVA</span> el potencial de tu negocio
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Soluciones de leasing que te brindan crecimiento y productividad
          </motion.p>
          
          <motion.button
            className="cta-button"
            onClick={handleWhatsAppClick}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(242, 164, 59, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Cotiza ahora
          </motion.button>
          
          <motion.div
            className="social-media"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              className="social-button linkedin"
              onClick={() => handleSocialMediaClick('linkedin')}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button
              className="social-button instagram"
              onClick={() => handleSocialMediaClick('instagram')}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-instagram"></i>
            </button>
          </motion.div>
        </div>
      </div>

      {/* ¿Quiénes somos? */}
      <div className={`quienes-somos ${quienesInView ? 'scroll-animate' : ''}`} ref={quienesRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={quienesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Quiénes somos?
          </motion.h2>
          
          <div className="quienes-content">
            <motion.div
              className="quienes-image"
              initial={{ opacity: 0, x: -50 }}
              animate={quienesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                                  src={quienesSomos} 
                alt="¿Quiénes somos? - Convicción Leasing" 
                className="quienes-img"
              />
            </motion.div>
            
            <motion.div
              className="quienes-text"
              initial={{ opacity: 0, x: 50 }}
              animate={quienesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="section-text">
                Somos tu aliado en la adquisición de activos productivos a través de leasing. 
                Con años de experiencia en el mercado guatemalteco, nos especializamos en 
                proporcionar soluciones financieras que impulsan el crecimiento de tu empresa.
              </p>
              
              <p className="section-text">
                Nuestro compromiso es brindarte las mejores condiciones y un servicio 
                personalizado que se adapte a las necesidades específicas de tu negocio, 
                facilitando el acceso a tecnología y equipos de última generación.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Nuestra Misión */}
      <div className={`mision ${misionInView ? 'scroll-animate' : ''}`} ref={misionRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={misionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestra Misión
          </motion.h2>
          
          <div className="mision-content">
            <motion.div
              className="mision-image"
              initial={{ opacity: 0, x: -50 }}
              animate={misionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                                  src={missionArrow} 
                alt="Nuestra Misión - Convicción Leasing" 
                className="mision-img"
              />
            </motion.div>
            
            <motion.div
              className="mision-text"
              initial={{ opacity: 0, x: 50 }}
              animate={misionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="section-text">
                Facilitar el acceso a tecnología y equipos de alta calidad para que las 
                empresas puedan optimizar sus operaciones y aumentar su competitividad 
                en el mercado, contribuyendo al desarrollo económico del país.
              </p>
              
              <p className="section-text">
                Nos comprometemos a brindar soluciones financieras innovadoras que 
                permitan a nuestros clientes acceder a los recursos necesarios para 
                crecer y expandir sus operaciones de manera sostenible.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Nuestra Visión */}
      <div className={`vision ${visionInView ? 'scroll-animate' : ''}`} ref={visionRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestra Visión
          </motion.h2>
          
          <div className="vision-content">
            <motion.div
              className="vision-image"
              initial={{ opacity: 0, x: -50 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                                  src={vision} 
                alt="Nuestra Visión - Convicción Leasing" 
                className="vision-img"
              />
            </motion.div>
            
            <motion.div
              className="vision-text"
              initial={{ opacity: 0, x: 50 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="section-text">
                Ser la empresa líder en soluciones de leasing en Guatemala, reconocida 
                por nuestra innovación, transparencia y compromiso con el éxito de 
                nuestros clientes, contribuyendo al desarrollo sostenible del sector empresarial.
              </p>
              
              <p className="section-text">
                Aspiramos a ser el referente en el mercado financiero guatemalteco, 
                destacando por nuestra excelencia en el servicio, innovación constante 
                y contribución al crecimiento económico del país.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Nuestros Valores */}
      <div className={`valores ${valoresInView ? 'scroll-animate' : ''}`} ref={valoresRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={valoresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestros Valores
          </motion.h2>
          
          <motion.div
            className="valores-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={valoresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                className="valor-card"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={valoresInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                onHoverStart={() => setHoveredValue(index)}
                onHoverEnd={() => setHoveredValue(null)}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <span className="valor-letter">{valor.letter}</span>
                  </div>
                  <div className="card-back">
                    <span className="valor-meaning">{valor.meaning}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Inicio 