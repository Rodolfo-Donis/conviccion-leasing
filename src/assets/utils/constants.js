/**
 * Constants and configuration for the leasing company website
 */

// Company Information
export const COMPANY_INFO = {
  name: 'Convicción Leasing',
  tagline: 'Professional Leasing Solutions',
  description: 'Empowering businesses and individuals with flexible, reliable leasing options.',
  founded: 2008,
  phone: '+1 (555) 123-4567',
  email: 'info@conviccionleasing.com',
  address: '123 Business District, Suite 100, City, State 12345',
  website: 'https://conviccionleasing.com',
  whatsapp: 'https://wa.me/50251097898?text=Hola%20me%20interesa%20cotizar%20equipos%20para%20mi%20negocio',
  businessHours: {
    weekdays: '8AM-6PM',
    saturday: '9AM-2PM',
    sunday: 'Closed'
  }
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/leasepro',
  twitter: 'https://twitter.com/leasepro',
  linkedin: 'https://linkedin.com/company/leasepro',
  instagram: 'https://instagram.com/leasepro'
};

// Services Offered
export const SERVICES = [
  {
    id: 'equipment',
    name: 'Equipment Leasing',
    description: 'Flexible equipment leasing solutions for businesses of all sizes.',
    icon: '🚀',
    features: ['Fast approval', 'Flexible terms', 'No down payment']
  },
  {
    id: 'vehicles',
    name: 'Vehicle Leasing',
    description: 'Commercial and personal vehicle leasing with competitive rates.',
    icon: '🚗',
    features: ['New and used vehicles', 'Maintenance included', 'Insurance options']
  },
  {
    id: 'technology',
    name: 'Technology Leasing',
    description: 'Stay current with the latest technology through our leasing programs.',
    icon: '💻',
    features: ['Latest equipment', 'Upgrade options', 'Technical support']
  },
  {
    id: 'office',
    name: 'Office Equipment',
    description: 'Furnish your office with our comprehensive leasing solutions.',
    icon: '🏢',
    features: ['Furniture leasing', 'Equipment packages', 'Installation included']
  }
];

// Contact Form Configuration
export const CONTACT_CONFIG = {
  requiredFields: ['name', 'email', 'message'],
  leaseTypes: [
    { value: 'equipment', label: 'Equipment Leasing' },
    { value: 'vehicles', label: 'Vehicle Leasing' },
    { value: 'technology', label: 'Technology Leasing' },
    { value: 'office', label: 'Office Equipment' },
    { value: 'other', label: 'Other' }
  ],
  maxMessageLength: 1000,
  minMessageLength: 10
};

// Animation Configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5
  },
  easing: {
    ease: 'ease-in-out',
    spring: { stiffness: 400, damping: 17 }
  },
  delays: {
    stagger: 0.1,
    section: 0.2
  }
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  large: 1200
};

// Theme Configuration
export const THEME_CONFIG = {
  light: {
    primary: '#2563eb',
    secondary: '#f59e0b',
    accent: '#10b981',
    background: '#ffffff',
    text: '#1f2937'
  },
  dark: {
    primary: '#3b82f6',
    secondary: '#f59e0b',
    accent: '#10b981',
    background: '#111827',
    text: '#f9fafb'
  }
};

// Email Configuration
export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  userId: import.meta.env.VITE_EMAILJS_USER_ID,
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL
};

// SEO Configuration
export const SEO_CONFIG = {
  title: 'Convicción Leasing - Professional Leasing Solutions',
  description: 'Professional leasing solutions for businesses and individuals. From equipment to vehicles, we provide tailored solutions that drive your success.',
  keywords: 'leasing, equipment leasing, vehicle leasing, business leasing, commercial leasing',
  author: 'Convicción Leasing',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
};

// Navigation Items
export const NAV_ITEMS = [
  { id: 'about', label: 'About Us', path: '#about' },
  { id: 'history', label: 'History', path: '#history' },
  { id: 'contact', label: 'Contact', path: '#contact' }
];

// Statistics Data
export const STATS_DATA = {
  clients: 500,
  experience: 15,
  satisfaction: 98,
  totalLeases: 50,
  states: 25,
  teamMembers: 50
};

// Timeline Data
export const TIMELINE_DATA = [
  {
    year: '2008',
    title: 'Company Founded',
    description: 'Convicción Leasing was established with a vision to revolutionize the leasing industry.',
    icon: '🏢'
  },
  {
    year: '2012',
    title: 'First 100 Clients',
    description: 'Reached our first milestone of 100 satisfied clients.',
    icon: '🎯'
  },
  {
    year: '2015',
    title: 'Technology Platform Launch',
    description: 'Launched our proprietary digital platform for streamlined leasing.',
    icon: '💻'
  },
  {
    year: '2018',
    title: 'Market Expansion',
    description: 'Expanded operations to serve clients across multiple states.',
    icon: '🌍'
  },
  {
    year: '2021',
    title: 'Industry Recognition',
    description: 'Received multiple industry awards for innovation and excellence.',
    icon: '🏆'
  },
  {
    year: '2024',
    title: 'Future Forward',
    description: 'Continuing to innovate with AI-powered solutions.',
    icon: '🚀'
  }
]; 