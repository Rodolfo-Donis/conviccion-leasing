import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
  // Individual scroll triggers for each section
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formRef, formInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [infoRef, infoInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleWhatsAppContact = () => {
    const formMessage = encodeURIComponent(
      `Hola, me interesa contactar con Convicción Leasing.\n\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Empresa: ${formData.company}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Mensaje: ${formData.message}`
    )
    const whatsappUrl = `https://wa.me/50251097898?text=${formMessage}`
    window.open(whatsappUrl, '_blank')
  }

  useEffect(() => {
    // Initialize EmailJS with your user ID
    const userId = import.meta.env.VITE_EMAILJS_USER_ID
    if (userId && userId !== 'your_user_id') {
      emailjs.init(userId)
    } else {
      console.warn('EmailJS User ID not configured. Please check your environment variables.')
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Check if EmailJS is properly configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const userId = import.meta.env.VITE_EMAILJS_USER_ID

      if (!serviceId || !templateId || !userId || 
          serviceId === 'your_service_id' || 
          templateId === 'your_template_id' || 
          userId === 'your_user_id') {
        throw new Error('EmailJS configuration incomplete')
      }

      const templateParams = {
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'info@conviccionleasing.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message
      }
      
      await emailjs.send(serviceId, templateId, templateParams)

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: "📍",
      content: "Dirección: 12 calle 1-25, Zona 10. Ed. Gémins 10 TS Of. 1005"
    },
    {
      icon: "📞",
      content: "Tel. 502 2335 3637"
    },
    {
      icon: "💬",
      content: "WhatsApp 502 5109 7898"
    }
  ]

  return (
    <section id="contact" className="contact section">
      {/* Hero Section with Background Image */}
      <div className={`contact-hero ${heroInView ? 'scroll-animate' : ''}`} ref={heroRef}>
        <div className="contact-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Queremos escuchar de ti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Completa este formulario y uno de nuestros asesores se pondrá en contacto.
          </motion.p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={`contact-form-section ${formInView ? 'scroll-animate' : ''}`} ref={formRef}>
        <div className="container">
          <div className="contact-form-wrapper">
            <motion.form 
              className="contact-form" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="form-row"
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Nombre"
                    autoComplete="name"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    autoComplete="email"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="form-row"
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Empresa / Emprendimiento"
                    autoComplete="organization"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Teléfono"
                    autoComplete="tel"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Escribe un mensaje"
                  autoComplete="off"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.0,
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(242, 164, 59, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="loading-spinner">Enviando...</span>
                ) : (
                  <>
                    Enviar mensaje
                    <span className="btn-icon">→</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="success-message show"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ ¡Gracias! Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto pronto.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="error-message show"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Lo sentimos, hubo un error al enviar tu mensaje. 
                  <br />
                  <strong>Contacto directo:</strong>
                  <br />
                  📧 Email: donisrodolfo@gmail.com
                  <br />
                  📞 Teléfono: 502 2335 3637
                  <br />
                  💬 WhatsApp: 502 5109 7898
                  <br />
                  <motion.button
                    type="button"
                    className="whatsapp-fallback-btn"
                    onClick={handleWhatsAppContact}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📱 Contactar por WhatsApp
                  </motion.button>
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </div>

      {/* Contact Information + Map Section */}
      <div className={`contact-info-map-section ${infoInView ? 'scroll-animate' : ''}`} ref={infoRef}>
        <div className="container">
          <div className="contact-info-map-grid">
            <div className="contact-info-side">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={infoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <p>{info.content}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="map-container"
              initial={{ opacity: 0, y: 30 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8!2d-90.5167!3d14.6349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM4JzA1LjYiTiA5MMKwMzEnMDAuMCJX!5e0!3m2!1sen!2sgt!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Convicción Leasing Location - 12 calle 1-25, Zona 10, Edificio Géminis 10 TS Of. 1005, Guatemala"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 