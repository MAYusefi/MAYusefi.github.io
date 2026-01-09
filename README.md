# 🎓 Mohammad Ali - Professional Portfolio

[![Deploy to GitHub Pages](https://github.com/yourusername/yourusername.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/yourusername/yourusername.github.io/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Professional portfolio website for Mohammad Ali - Electronic & Electrical Engineer specializing in Power Systems, Renewable Energy, ICT, and Cybersecurity.

🌐 **Live Demo:** [https://yourusername.github.io](https://yourusername.github.io)

## ✨ Features

### 🎨 Design & UI/UX
- **Glassmorphism Premium Design** - Modern, professional aesthetic
- **Bilingual Support** - English & Farsi (Persian) with RTL support
- **Dark/Light Theme Toggle** - Automatic theme switching with localStorage
- **Fully Responsive** - Mobile-first approach, works on all devices
- **Smooth Animations** - CSS animations + Intersection Observer API
- **Typing Animation** - Dynamic text effects on hero section

### 🚀 Technical Features
- **Progressive Web App (PWA)** - Installable, works offline
- **SEO Optimized** - Meta tags, Open Graph, structured data (JSON-LD)
- **Performance Optimized** - Lazy loading, efficient CSS/JS
- **Accessibility (WCAG 2.1 AA)** - ARIA labels, keyboard navigation
- **Functional Contact Form** - Integrated with Web3Forms (no backend needed)
- **Service Worker** - Offline support with smart caching
- **GitHub Actions** - Auto-deployment to GitHub Pages

### 📄 Pages
1. **Home** - Hero section with introduction and highlights
2. **About** - Detailed background and quick facts
3. **Resume** - Complete work experience and education
4. **Projects** - Portfolio projects with descriptions
5. **Skills** - Technical skills organized by category
6. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks, pure performance
- **Web3Forms** - Contact form handling
- **GitHub Pages** - Free hosting
- **GitHub Actions** - CI/CD pipeline

## 📦 Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About page
├── resume.html             # Resume page
├── projects.html           # Projects page
├── skills.html             # Skills page
├── contact.html            # Contact page
├── 404.html                # Custom 404 error page
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── reset.css           # CSS reset
│   ├── animations.css      # Animation keyframes
│   ├── components.css      # Reusable components
│   └── layout.css          # Layout & structure
├── js/
│   ├── main.js             # Main JavaScript
│   └── translations.js     # Bilingual translations
├── assets/
│   ├── profile.svg         # Profile image
│   ├── resume.pdf          # Resume PDF
│   └── ...
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions workflow
```

## 🚀 Quick Start

### 1. Fork & Clone

```bash
# Fork this repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
cd YOUR_USERNAME.github.io
```

### 2. Customize Content

**Update personal information:**
- Edit HTML files with your information
- Replace `assets/profile.svg` with your photo
- Update `assets/resume.pdf` with your resume
- Change email, phone, location in all pages

**Configure Web3Forms:**
1. Go to [Web3Forms.com](https://web3forms.com)
2. Get your free access key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` in `contact.html`

**Update URLs:**
- Replace `yourusername.github.io` in all files
- Update social media links (LinkedIn, GitHub)
- Update sitemap.xml and robots.txt URLs

### 3. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Push to main branch - auto-deployment will start

### 4. Custom Domain (Optional)

1. Buy a domain (e.g., GoDaddy, Namecheap)
2. Add CNAME file with your domain
3. Configure DNS settings:
   ```
   Type: CNAME
   Host: @
   Value: yourusername.github.io
   ```

## 🎨 Customization Guide

### Change Color Scheme

Edit `css/variables.css`:
```css
:root {
  --color-primary: #7c3aed;        /* Your brand color */
  --color-secondary: #3b82f6;      /* Secondary color */
  --color-accent: #ec4899;         /* Accent color */
}
```

### Add New Page

1. Create `newpage.html` with header/footer structure
2. Add link in navigation (all HTML files)
3. Add to `sw.js` PRECACHE_ASSETS
4. Add to `sitemap.xml`

### Modify Animations

Edit `css/animations.css` - adjust timing, easing, or create new animations.

## 📊 SEO Optimization

### Meta Tags
- ✅ Title, description, keywords
- ✅ Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ Canonical URLs

### Structured Data
- ✅ JSON-LD Person schema
- ✅ Contact information
- ✅ Social profiles

### Technical SEO
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast loading (90+ Lighthouse score)

## 🔒 Security & Privacy

- ✅ No sensitive data in code
- ✅ HTTPS enforced (GitHub Pages)
- ✅ No third-party tracking
- ✅ Contact form with privacy notice
- ✅ Secure external links (`rel="noopener"`)

## 📱 PWA Installation

Users can install your portfolio as an app:

**Desktop:** Chrome → Menu → "Install Portfolio"
**Mobile:** Browser menu → "Add to Home Screen"

## 🐛 Troubleshooting

**GitHub Pages not updating?**
- Check Actions tab for build errors
- Clear browser cache
- Wait 5-10 minutes for CDN propagation

**Contact form not working?**
- Verify Web3Forms access key
- Check browser console for errors
- Ensure form has required fields

**Theme toggle not persisting?**
- Check localStorage is enabled
- Clear browser data and retry

## 📈 Performance

- **Lighthouse Score:** 95+ (all categories)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Total Bundle Size:** < 500KB

## 🤝 Contributing

Found a bug or want to improve something? Contributions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Contact

**Mohammad Ali**
- 📧 Email: Ali.yusefi.ee@gmail.com
- 💼 LinkedIn: [mohammad-ali-engineer](https://www.linkedin.com/in/mohammad-ali-engineer)
- 🔗 GitHub: [mohammad-ali-portfolio](https://github.com/mohammad-ali-portfolio)
- 📱 Phone: +93 780 661 347

---

⭐ **If you found this helpful, please give it a star!**

Made with ❤️ by Mohammad Ali | © 2025 All Rights Reserved
