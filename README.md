# Convicción Leasing - Modern Leasing Company SPA

A modern, responsive Single Page Application (SPA) for a leasing company built with React, Vite, and Framer Motion. Features beautiful animations, contact form functionality, light/dark theme switching, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Light/Dark Theme**: Toggle between light and dark themes with system preference detection
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Contact Form**: Functional email form using EmailJS
- **Section-based Styling**: Separate CSS files for each section for easy customization
- **Image Placeholders**: Ready for designer images to be added
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Theme Persistence**: Theme preference saved in localStorage

## 📋 Sections

1. **Header**: Fixed navigation with smooth scrolling and theme toggle
2. **Hero**: Eye-catching hero section with call-to-action buttons
3. **About**: Company information and features
4. **History**: Timeline of company milestones
5. **Contact**: Contact form and company information
6. **Footer**: Company links and social media

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and context
- **Vite**: Fast build tool and development server
- **Framer Motion**: Smooth animations and transitions
- **EmailJS**: Email functionality for contact form
- **CSS3**: Modern styling with CSS variables and theme support
- **Responsive Design**: Mobile-first approach
- **Context API**: Theme management and state persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd leasing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_CONTACT_EMAIL=your-email@example.com
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🌓 Theme System

The application includes a comprehensive light/dark theme system:

### Features:
- **Theme Toggle**: Click the sun/moon icon in the header to switch themes
- **System Preference**: Automatically detects user's system theme preference
- **Persistence**: Theme choice is saved in localStorage
- **Smooth Transitions**: All theme changes include smooth CSS transitions
- **Mobile Support**: Theme toggle works on all devices

### Theme Variables:
All colors are defined as CSS variables for easy customization:

```css
:root {
  /* Light Theme */
  --primary-color: #2563eb;
  --text-primary: #1f2937;
  --background-white: #ffffff;
  /* ... more variables */
}

[data-theme="dark"] {
  /* Dark Theme */
  --primary-color: #3b82f6;
  --text-primary: #f9fafb;
  --background-white: #111827;
  /* ... more variables */
}
```

## 📧 Email Setup (EmailJS)

To enable the contact form functionality:

1. **Sign up for EmailJS**: Visit [emailjs.com](https://www.emailjs.com/)
2. **Create an Email Service**: Connect your email provider (Gmail, Outlook, etc.)
3. **Create an Email Template**: Set up a template for contact form submissions
4. **Get your credentials**:
   - Service ID
   - Template ID
   - User ID
5. **Update your `.env` file** with the credentials

## 🎨 Customization

### Colors and Typography
All colors and fonts are defined as CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #f59e0b;
  --accent-color: #10b981;
  /* ... more variables */
}
```

### Theme Customization
To customize themes, modify the CSS variables in both `:root` and `[data-theme="dark"]` selectors in `src/index.css`.

### Section Styling
Each section has its own CSS file for easy customization:
- `src/components/Header.css`
- `src/components/Hero.css`
- `src/components/About.css`
- `src/components/History.css`
- `src/components/Contact.css`
- `src/components/Footer.css`
- `src/components/ThemeToggle.css`

### Adding Images
Replace the image placeholders with actual images:

1. **Hero Section**: Replace the gradient background in `Hero.css`
2. **About Section**: Replace `about-image-placeholder` in `About.jsx`
3. **History Section**: Replace the three image placeholders in `History.jsx`
4. **Contact Section**: Replace `contact-image-placeholder` in `Contact.jsx`

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📁 Project Structure

```
leasing/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── History.jsx
│   │   ├── History.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ThemeToggle.jsx
│   │   └── ThemeToggle.css
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── env.example
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Theme System
- **Automatic Detection**: Detects system theme preference
- **Manual Toggle**: User can manually switch themes
- **Persistence**: Remembers user's theme choice
- **Smooth Transitions**: All theme changes are animated

### Contact Form
- **EmailJS Integration**: Sends emails directly to your inbox
- **Form Validation**: Client-side validation for all fields
- **Success/Error Messages**: Clear feedback to users
- **Loading States**: Shows loading spinner during submission

### Animations
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive elements respond to user interaction
- **Page Transitions**: Smooth transitions between sections
- **Micro-interactions**: Small animations for better UX

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: info@leasepro.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ for modern leasing solutions** # Trigger deployment
