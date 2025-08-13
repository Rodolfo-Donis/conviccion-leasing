import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { COMO_FUNCIONA_CONTENT } from '../assets/data/content'
import './ComoFunciona.css'
import leasingFinanciero from '../assets/images/leasin-1.png'
import leasingOperativo from '../assets/images/leasin-2.png'
import leasingSellback from '../assets/images/leasin-3.png'

const ComoFunciona = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [activeTab, setActiveTab] = useState('financiero')
  
  // Refs for scroll animations
  const headerRef = useRef(null)
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const textRef = useRef(null)
  
  // State for scroll animations
  const [headerInView, setHeaderInView] = useState(false)
  const [section1InView, setSection1InView] = useState(false)
  const [section2InView, setSection2InView] = useState(false)

  const { sections } = COMO_FUNCIONA_CONTENT

  // Intersection Observer for all sections scroll animations
  useEffect(() => {
    const observers = []

    // Header animation observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderInView(true)
        }
      },
      {
        threshold: 0.2,
        triggerOnce: true
      }
    )

    // Section 1 animation observer
    const section1Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSection1InView(true)
        }
      },
      {
        threshold: 0.2,
        triggerOnce: true
      }
    )

    // Section 2 animation observer
    const section2Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSection2InView(true)
        }
      },
      {
        threshold: 0.2,
        triggerOnce: true
      }
    )



    // Observe elements
    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
      observers.push(headerObserver)
    }
    if (section1Ref.current) {
      section1Observer.observe(section1Ref.current)
      observers.push(section1Observer)
    }
    if (section2Ref.current) {
      section2Observer.observe(section2Ref.current)
      observers.push(section2Observer)
    }


    return () => {
      observers.forEach(observer => {
        observer.disconnect()
      })
    }
  }, [])

  return (
    <section id="como-funciona" className="como-funciona section" ref={ref}>
      <div className="container">
        <div 
          ref={headerRef}
          className={`como-funciona-header ${headerInView ? 'scroll-animate' : ''}`}
        >
          <h2 className="text-center">{COMO_FUNCIONA_CONTENT.title}</h2>
          <p className="text-center">
            {COMO_FUNCIONA_CONTENT.subtitle}
          </p>
        </div>

        {/* Sección 1: Qué es el Leasing */}
        <div 
          ref={section1Ref}
          className={`que-es-leasing ${section1InView ? 'scroll-animate' : ''}`}
        >
          <div className="que-es-leasing-content">
            <div 
              ref={textRef}
              className={`que-es-leasing-title ${section1InView ? 'scroll-animate' : ''}`}
            >
              <h3>{sections.queEsLeasing.title}</h3>
            </div>
            <div 
              className={`que-es-leasing-description ${section1InView ? 'scroll-animate' : ''}`}
            >
              <p dangerouslySetInnerHTML={{ __html: sections.queEsLeasing.description }}></p>
            </div>
          </div>
        </div>

        {/* Sección 2: Nuestros Servicios */}
        <div 
          ref={section2Ref}
          className={`tipos-leasing ${section2InView ? 'scroll-animate' : ''}`}
        >
          <h3 className="text-center">{sections.tiposLeasing.title}</h3>

          <div className="tabs-container">
            <div className="tabs-header">
              {sections.tiposLeasing.tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.name}
                </motion.button>
              ))}
            </div>

            <div className="tab-content">
              {sections.tiposLeasing.tabs.map((tab) => (
                <motion.div
                  key={tab.id}
                  className={`tab-panel ${activeTab === tab.id ? 'active' : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={activeTab === tab.id ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="tab-content-inner">
                    <div className="tab-image">
                      {tab.id === 'financiero' ? (
                        <img 
                                                      src={leasingFinanciero} 
                          alt={`Imagen de ${tab.name}`}
                          className="tab-image-content"
                        />
                      ) : tab.id === 'operativo' ? (
                        <img 
                                                      src={leasingOperativo} 
                          alt={`Imagen de ${tab.name}`}
                          className="tab-image-content"
                        />
                      ) : tab.id === 'sale-leaseback' ? (
                        <img 
                                                      src={leasingSellback} 
                          alt={`Imagen de ${tab.name}`}
                          className="tab-image-content"
                        />
                      ) : (
                        <div className="image-placeholder">
                          <span>{tab.icon}</span>
                          <p>Imagen de {tab.name}</p>
                        </div>
                      )}
                    </div>
                    <div className="tab-text">
                      <h4>{tab.name}</h4>
                      <p>{tab.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default ComoFunciona 