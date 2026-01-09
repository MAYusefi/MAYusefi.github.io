/* ============================================
   🚀 Main JavaScript - Portfolio
   Modern Interactions & Features
   ============================================ */

// ===== State Management =====
const STATE = {
  theme: localStorage.getItem('theme') || 'dark',
  scrollPosition: 0,
  isMenuOpen: false
};

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initGreeting();
  initScrollAnimations();
  initTypingAnimation();
  initFormValidation();
  initLazyLoading();
  initSmoothScroll();
  updateActiveNavLink();
});

// ===== Theme Management =====
function initTheme() {
  document.documentElement.setAttribute('data-theme', STATE.theme);
  
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    updateThemeIcon(themeToggle);
    
    themeToggle.addEventListener('click', () => {
      STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', STATE.theme);
      localStorage.setItem('theme', STATE.theme);
      updateThemeIcon(themeToggle);
      
      // Animate transition
      document.body.style.transition = 'background-color 0.3s ease';
      setTimeout(() => {
        document.body.style.transition = '';
      }, 300);
    });
  }
}

function updateThemeIcon(button) {
  const icon = button.querySelector('.theme-icon');
  if (icon) {
    icon.textContent = STATE.theme === 'dark' ? '☀️' : '🌙';
  }
}

// ===== Dynamic Greeting =====
function initGreeting() {
  const greetingElement = document.getElementById('greeting');
  if (greetingElement) {
    const hour = new Date().getHours();
    let greeting = 'Hi';
    
    if (hour >= 5 && hour < 12) {
      greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
    
    greetingElement.textContent = greeting;
  }
}


// ===== Navigation =====
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Scroll detection for header
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile menu toggle
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      STATE.isMenuOpen = !STATE.isMenuOpen;
      mobileMenuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = STATE.isMenuOpen ? 'hidden' : '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (STATE.isMenuOpen && 
          !navMenu.contains(e.target) && 
          !mobileMenuToggle.contains(e.target)) {
        STATE.isMenuOpen = false;
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (STATE.isMenuOpen) {
          STATE.isMenuOpen = false;
          mobileMenuToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }
}

function updateActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });
}

// ===== Scroll Animations (Intersection Observer) =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);
  
  // Observe all elements with reveal class
  document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
  });
  
  // Observe cards
  document.querySelectorAll('.glass-card, .gradient-card').forEach(element => {
    observer.observe(element);
  });
}

// ===== Typing Animation =====
function initTypingAnimation() {
  const typingElements = document.querySelectorAll('[data-typing]');
  
  typingElements.forEach(element => {
    const text = element.getAttribute('data-typing');
    const speed = parseInt(element.getAttribute('data-typing-speed')) || 50;
    let index = 0;
    
    element.textContent = '';
    element.style.borderRight = '2px solid var(--color-primary)';
    
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        // Blinking cursor effect
        setInterval(() => {
          element.style.borderRight = element.style.borderRight === 'none' 
            ? '2px solid var(--color-primary)' 
            : 'none';
        }, 500);
      }
    }
    
    // Start typing when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          type();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(element);
  });
}

// ===== Form Validation & Submission =====
function initFormValidation() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    // Real-time validation
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
    
    // Form submission
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Validate all fields
      let isValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });
      
      if (!isValid) return;
      
      // Submit to Web3Forms
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      try {
        const formData = new FormData(contactForm);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
          showNotification('Message sent successfully! 🎉', 'success');
          contactForm.reset();
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        showNotification('Failed to send message. Please try again.', 'error');
      } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  let isValid = true;
  let errorMessage = '';
  
  // Required validation
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required';
  }
  
  // Email validation
  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email';
    }
  }
  
  // Update UI
  if (!isValid) {
    field.classList.add('error');
    showFieldError(field, errorMessage);
  } else {
    field.classList.remove('error');
    removeFieldError(field);
  }
  
  return isValid;
}

function showFieldError(field, message) {
  removeFieldError(field);
  const errorDiv = document.createElement('div');
  errorDiv.className = 'field-error';
  errorDiv.style.color = 'var(--color-error)';
  errorDiv.style.fontSize = 'var(--font-size-sm)';
  errorDiv.style.marginTop = 'var(--spacing-1)';
  errorDiv.textContent = message;
  field.parentNode.appendChild(errorDiv);
}

function removeFieldError(field) {
  const existingError = field.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--glass-bg-strong);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-xl);
    padding: var(--spacing-4) var(--spacing-6);
    box-shadow: var(--shadow-xl);
    z-index: var(--z-tooltip);
    max-width: 400px;
    animation: slideInRight 0.3s ease-out;
  `;
  
  if (type === 'success') {
    notification.style.borderColor = 'var(--color-success)';
  } else if (type === 'error') {
    notification.style.borderColor = 'var(--color-error)';
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ===== Lazy Loading Images =====
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== Utility Functions =====

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===== Analytics (Google Analytics) =====
// Note: Replace GA_MEASUREMENT_ID with your actual Google Analytics ID
const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // TODO: Add your GA ID

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Track page views - only if GA is configured
if (GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID' && typeof gtag !== 'undefined') {
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

// Track custom events
function trackEvent(category, action, label) {
  if (GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID' && typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }
}

// Track downloads
function trackDownload(type) {
  trackEvent('Download', 'click', type);
  
  // Show notification
  showNotification('📥 Download started! Thank you for your interest.', 'success');
}

// Export functions for use in other files
window.portfolioApp = {
  trackEvent,
  trackDownload,
  showNotification,
  STATE
};
