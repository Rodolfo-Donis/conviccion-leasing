/**
 * Website content data for the leasing company
 */

// Hero Section Content
export const HERO_CONTENT = {
  title: 'Professional Leasing Solutions',
  subtitle: 'Empowering businesses and individuals with flexible, reliable leasing options. From equipment to vehicles, we provide tailored solutions that drive your success.',
  ctaPrimary: 'Get Started',
  ctaSecondary: 'Learn More',
  stats: [
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' }
  ]
};

// Cómo Funciona Section Content
export const COMO_FUNCIONA_CONTENT = {
  title: 'Cómo Funciona',
  subtitle: 'Descubre cómo el leasing puede transformar tu negocio con soluciones financieras flexibles y eficientes.',
  sections: {
    queEsLeasing: {
      title: '¿Qué es el Leasing?',
      description: 'Es la solución financiera que permite a tu empresa el uso, goce y explotación de maquinaria, equipos, y/o bienes productivos sin realizar el desembolso que representa la compra, obteniendo beneficios financieros y operativos. Convicción leasing, los adquiere y pone a tu disposición por el pago de cuotas durante el plazo convenido a través de la suscripción del contrato de leasing. Durante el plazo del contrato los equipos estarán debidamente asegurados. Dependiendo del equipo y función en la actividad productiva de tu negocio decides qué tipo de leasing contratas.'
    },
    tiposLeasing: {
      title: 'Tipos de Leasing',
      tabs: [
        {
          id: 'financiero',
          name: 'Leasing Financiero',
          description: 'Brinda al cliente la financiación de los equipos requeridos y los beneficios financieros-operativas que el esquema de leasing ofrece; al finalizar el plazo el cliente tendrá la propiedad de los equipos a través del pago de la Opción a Compra, contractualmente convenida desde el inicio.',
          icon: '💰'
        },
        {
          id: 'operativo',
          name: 'Leasing Operativo',
          description: 'Brinda al cliente la obtención de los equipos y la facilidad para la renovación de los mismos; es ideal para equipos sobre los que el cliente ha establecido algún período determinado para su reemplazo, según políticas o aspectos técnicos; por ejemplo, activos tecnológicos, vehículos y otros.',
          icon: '🔄'
        },
        {
          id: 'sale-leaseback',
          name: 'Sale & Leaseback',
          description: 'Brinda al cliente la posibilidad de la obtención de liquidez desde su propio Balance General y gozar de los beneficios que el esquema de leasing brinda. Este aplica en activos de reciente adquisición por parte del cliente; los cuales vende a CONVICCIÓN LEASING y paralelamente suscribe un contrato de Leasing.',
          icon: '💼'
        }
      ]
    },
    pasos: {
      title: 'Pasos para adquirir tus equipos en convicción leasing',
      steps: [
        {
          number: '1',
          title: 'Determinas qué equipo necesitas',
          description: 'Identifica las necesidades de tu empresa y obtén cotizaciones de los equipos requeridos.',
          icon: '🔍'
        },
        {
          number: '2',
          title: 'Plan de Leasing',
          description: 'Diseñamos un plan de leasing personalizado que se adapte a tus necesidades financieras.',
          icon: '📋'
        },
        {
          number: '3',
          title: 'Solicitud de Leasing',
          description: 'Completamos la documentación legal y financiera necesaria para la aprobación del leasing.',
          icon: '✅'
        },
        {
          number: '4',
          title: 'Contrato Leasing',
          description: 'Firmamos el contrato y convicción leasing adquiere los equipos para tu empresa.',
          icon: '🤝'
        },
        {
          number: '5',
          title: 'Entrega',
          description: 'Los equipos estarán a tu disposición una vez realizado el pago a través de tu plan de leasing.',
          icon: '🔑'
        }
      ]
    }
  }
};

// History Section Content
export const HISTORY_CONTENT = {
  title: 'Our Journey',
  subtitle: 'From humble beginnings to industry leadership, discover the milestones that have shaped our commitment to excellence in leasing solutions.',
  timeline: [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'conviccion Leasing was established with a vision to revolutionize the leasing industry by providing flexible, customer-centric solutions.',
      icon: '🏢'
    },
    {
      year: '2012',
      title: 'First 100 Clients',
      description: 'Reached our first milestone of 100 satisfied clients, establishing ourselves as a trusted partner in the leasing market.',
      icon: '🎯'
    },
    {
      year: '2015',
      title: 'Technology Platform Launch',
      description: 'Launched our proprietary digital platform, streamlining the leasing process and improving customer experience.',
      icon: '💻'
    },
    {
      year: '2018',
      title: 'Market Expansion',
      description: 'Expanded operations to serve clients across multiple states, growing our team and service capabilities.',
      icon: '🌍'
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards for innovation and customer service excellence in the leasing sector.',
      icon: '🏆'
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Continuing to innovate with AI-powered solutions and sustainable leasing options for the modern business landscape.',
      icon: '🚀'
    }
  ],
  stats: [
    { number: '16', label: 'Years of Excellence' },
    { number: '25+', label: 'States Served' },
    { number: '1000+', label: 'Successful Leases' },
    { number: '50+', label: 'Team Members' }
  ]
};

// Contact Section Content
export const CONTACT_CONTENT = {
  title: 'Get In Touch',
  subtitle: 'Ready to explore leasing solutions for your business? Contact us today and let\'s discuss how we can help you grow.',
  infoTitle: 'Contact Information',
  infoDescription: 'Our team is here to help you find the perfect leasing solution. Reach out to us through any of the following channels.',
  contactInfo: [
    {
      icon: '📍',
      title: 'Address',
      content: '123 Business District, Suite 100, City, State 12345'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@conviccionleasing.com'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      content: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM'
    }
  ],
  formLabels: {
    name: 'Full Name *',
    email: 'Email Address *',
    company: 'Company Name',
    phone: 'Phone Number',
    leaseType: 'Type of Leasing Interest *',
    message: 'Message *'
  },
  placeholders: {
    name: 'Enter your full name',
    email: 'Enter your email address',
    company: 'Enter your company name',
    phone: 'Enter your phone number',
    message: 'Tell us about your leasing needs and requirements...'
  },
  leaseTypes: [
    { value: 'equipment', label: 'Equipment Leasing' },
    { value: 'vehicles', label: 'Vehicle Leasing' },
    { value: 'technology', label: 'Technology Leasing' },
    { value: 'office', label: 'Office Equipment' },
    { value: 'other', label: 'Other' }
  ],
  submitButton: 'Send Message',
  successMessage: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
  errorMessage: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
};

// Footer Content
export const FOOTER_CONTENT = {
  companyDescription: 'Empowering businesses with innovative leasing solutions for over 15 years. Your trusted partner for flexible, reliable financing options.',
  services: [
    { name: 'Equipment Leasing', link: '#about' },
    { name: 'Vehicle Leasing', link: '#about' },
    { name: 'Technology Leasing', link: '#about' },
    { name: 'Office Equipment', link: '#about' },
    { name: 'Custom Solutions', link: '#about' }
  ],
  company: [
    { name: 'About Us', link: '#about' },
    { name: 'Our History', link: '#history' },
    { name: 'Contact', link: '#contact' },
    { name: 'Careers', link: '#' },
    { name: 'News & Updates', link: '#' }
  ],
  support: [
    { name: 'Help Center', link: '#' },
    { name: 'FAQs', link: '#' },
    { name: 'Terms of Service', link: '#' },
    { name: 'Privacy Policy', link: '#' },
    { name: 'Legal', link: '#' }
  ],
  socialLinks: [
    { icon: '📘', name: 'Facebook', link: '#' },
    { icon: '🐦', name: 'Twitter', link: '#' },
    { icon: '💼', name: 'LinkedIn', link: '#' },
    { icon: '📷', name: 'Instagram', link: '#' }
  ]
};

// Navigation Content
export const NAV_CONTENT = {
  logo: 'conviccion Leasing',
  items: [
    { id: 'como-funciona', label: 'Cómo Funciona' },
    { id: 'history', label: 'History' },
    { id: 'contact', label: 'Contact' }
  ]
};

// Meta Content
export const META_CONTENT = {
  title: 'conviccion Leasing - Professional Leasing Solutions',
  description: 'Professional leasing solutions for businesses and individuals. Discover our history and get in touch for more information.',
  keywords: 'leasing, equipment leasing, vehicle leasing, business leasing, commercial leasing, financial solutions',
  author: 'conviccion Leasing',
  ogTitle: 'conviccion Leasing - Professional Leasing Solutions',
  ogDescription: 'Professional leasing solutions for businesses and individuals. From equipment to vehicles, we provide tailored solutions that drive your success.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'conviccion Leasing - Professional Leasing Solutions',
  twitterDescription: 'Professional leasing solutions for businesses and individuals.'
}; 