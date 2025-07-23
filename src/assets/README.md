# Assets Folder

This folder contains all static assets for the leasing company website.

## 📁 Folder Structure

```
src/assets/
├── images/          # All image files
│   ├── hero/        # Hero section images
│   ├── about/       # About section images
│   ├── history/     # History section images
│   ├── contact/     # Contact section images
│   └── icons/       # Icon files (SVG, PNG)
├── styles/          # Additional CSS files
│   ├── components/  # Component-specific styles
│   ├── utilities/   # Utility classes
│   └── themes/      # Theme variations
├── utils/           # Utility functions
│   ├── helpers.js   # Helper functions
│   ├── constants.js # Constants and configuration
│   └── validators.js # Form validation utilities
└── data/            # Static data files
    ├── content.js   # Website content
    └── config.js    # Configuration data
```

## 🖼️ Images

### Recommended Image Formats:
- **Hero Images**: JPG/PNG, 1920x1080px or larger
- **Section Images**: JPG/PNG, 800x600px or larger
- **Icons**: SVG (preferred) or PNG
- **Logos**: SVG or PNG with transparent background

### Image Naming Convention:
- Use kebab-case: `hero-background.jpg`
- Include size suffix: `about-team-large.jpg`
- Use descriptive names: `contact-office-building.jpg`

## 🎨 Styles

### CSS Organization:
- Keep component styles in their respective component files
- Use this folder for shared styles and utilities
- Create theme variations here if needed

## 🔧 Utils

### JavaScript Utilities:
- Helper functions for common operations
- Constants for configuration
- Validation functions for forms
- Animation utilities

## 📊 Data

### Static Content:
- Website copy and content
- Configuration settings
- Contact information
- Company data

## 🚀 Usage

### Importing Images:
```javascript
import heroImage from '../assets/images/hero/hero-background.jpg'
```

### Importing Styles:
```javascript
import '../assets/styles/utilities/animations.css'
```

### Importing Utils:
```javascript
import { formatPhone } from '../assets/utils/helpers.js'
```

### Importing Data:
```javascript
import { companyInfo } from '../assets/data/content.js'
```

## 📝 Notes

- Keep file sizes optimized for web
- Use descriptive file names
- Organize files logically
- Update this README when adding new folders 