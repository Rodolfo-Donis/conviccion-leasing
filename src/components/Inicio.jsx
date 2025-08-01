import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Inicio.css'
import quienesSomos from '../assets/images/quienes2.png'
import missionArrow from '../assets/images/arrow.png'
import vision from '../assets/images/crazyEye.png'
import bannerImage from '../assets/images/banner.png'
import iconoS from '../assets/images/icono-S.png'
import iconoL from '../assets/images/icono-L.png'
import iconoT from '../assets/images/icono-T.png'
import iconoB from '../assets/images/icono-B.png'
import iconoC from '../assets/images/icono-C.png'

const Inicio = () => {

  // Individual scroll triggers for each section
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px'
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

  const [hoveredValue, setHoveredValue] = useState(null)

  const valores = [
    { letra: 'E', significado: 'Excelencia' },
    { letra: 'L', significado: 'Liderazgo' },
    { letra: 'E', significado: 'Eficiencia' },
    { letra: 'V', significado: 'Valor' },
    { letra: 'A', significado: 'Atención' }
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
      <div 
        className="hero-banner scroll-animate" 
        ref={heroRef}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span style={{ color: '#e8972d' }}>ELEVA</span> el potencial de tu negocio
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Soluciones de leasing que te brindan crecimiento y productividad
          </motion.p>
          
          <motion.button
            className="cta-button"
            onClick={handleWhatsAppClick}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
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

      {/* New Div with CTA Button */}
      <div className="cta-section">
        <button
          className="cta-button-secondary"
          onClick={handleWhatsAppClick}
        >
          Cotiza ahora
        </button>
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

      {/* Nuestros Valores Title */}
      <div className="valores-title-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestros Valores
          </motion.h2>
        </div>
      </div>

      {/* Nuestros Valores */}
      <div className={`valores ${valoresInView ? 'scroll-animate' : ''}`} ref={valoresRef}>
        <div className="container">
          <motion.div
            className="valores-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={valoresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {valores.map((valor, index) => (
              <motion.div
                key={valor.letra}
                className="valor-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={valoresInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredValue(valor.letra)}
                onHoverEnd={() => setHoveredValue(null)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <div className="valor-letter">
                      {valor.letra}
                      {valor.letra === 'E' && index === 0 && (
                        <img src={iconoS} alt="E" className="valor-icon" />
                      )}
                      {valor.letra === 'L' && (
                        <img src={iconoL} alt="L" className="valor-icon" />
                      )}
                      {valor.letra === 'E' && index === 2 && (
                        <img src={iconoT} alt="E" className="valor-icon" />
                      )}
                      {valor.letra === 'V' && (
                        <img src={iconoB} alt="V" className="valor-icon" />
                      )}
                      {valor.letra === 'A' && (
                        <img src={iconoC} alt="A" className="valor-icon" />
                      )}
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="valor-meaning">{valor.significado}</div>
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