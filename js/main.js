/**
 * Portfolio - Main JavaScript
 * @author Mohammad Ali Yusefi
 * @version 2.0.0
 */

(function() {
  'use strict';

  // App State
  var state = {
    theme: localStorage.getItem('theme') || 'light',
    scrollPosition: 0,
    isMenuOpen: false
  };

  // Initialize
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initGreeting();
    initScrollAnimations();
    initTypingAnimation();
    initFormValidation();
    initLazyLoading();
    initSmoothScroll();
    updateActiveNavLink();
    initStatsCounter();
  });

  // Theme Toggle
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    
    var themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      updateThemeIcon(themeToggle);
      
      themeToggle.addEventListener('click', function() {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('theme', state.theme);
        updateThemeIcon(themeToggle);
        
        document.body.style.transition = 'background-color 0.3s ease';
        setTimeout(function() {
          document.body.style.transition = '';
        }, 300);
      });
    }
  }

  function updateThemeIcon(button) {
    var moonIcon = button.querySelector('.theme-icon-moon');
    var sunIcon = button.querySelector('.theme-icon-sun');
    if (moonIcon && sunIcon) {
      if (state.theme === 'light') {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
      } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
      }
    }
  }

  // Dynamic Greeting based on time
  function initGreeting() {
    var greetingElement = document.getElementById('greeting');
    if (greetingElement) {
      var hour = new Date().getHours();
      var greeting = 'Hi';
      
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

  // Navigation Handler
  function initNavigation() {
    var header = document.querySelector('.site-header');
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var navMenu = document.querySelector('.nav-menu');
    var navLinks = document.querySelectorAll('.nav-link');
    
    var lastScroll = 0;
    window.addEventListener('scroll', function() {
      var currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
    
    if (mobileMenuToggle && navMenu) {
      mobileMenuToggle.addEventListener('click', function() {
        state.isMenuOpen = !state.isMenuOpen;
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
      });
      
      document.addEventListener('click', function(e) {
        if (state.isMenuOpen && 
            !navMenu.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
          state.isMenuOpen = false;
          mobileMenuToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
      
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          if (state.isMenuOpen) {
            state.isMenuOpen = false;
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
          }
        });
      });
    }
  }

  function updateActiveNavLink() {
    var navLinks = document.querySelectorAll('.nav-link');
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href === currentPath) {
        link.classList.add('active');
      }
    });
  }

  // Scroll Animations using Intersection Observer
  function initScrollAnimations() {
    var observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach(function(element) {
      observer.observe(element);
    });
    
    document.querySelectorAll('.glass-card, .gradient-card').forEach(function(element) {
      observer.observe(element);
    });
  }

  // Typing Effect
  function initTypingAnimation() {
    var typingElements = document.querySelectorAll('[data-typing]');
    
    typingElements.forEach(function(element) {
      var text = element.getAttribute('data-typing');
      var speed = parseInt(element.getAttribute('data-typing-speed')) || 50;
      var index = 0;
      
      element.textContent = '';
      element.style.borderRight = '2px solid var(--color-primary)';
      
      function type() {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(type, speed);
        } else {
          setInterval(function() {
            element.style.borderRight = element.style.borderRight === 'none' 
              ? '2px solid var(--color-primary)' 
              : 'none';
          }, 500);
        }
      }
      
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            type();
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(element);
    });
  }

  // Form Validation
  function initFormValidation() {
    var contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      var inputs = contactForm.querySelectorAll('input, textarea');
      
      inputs.forEach(function(input) {
        input.addEventListener('blur', function() { validateField(input); });
        input.addEventListener('input', function() {
          if (input.classList.contains('error')) {
            validateField(input);
          }
        });
      });
      
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var isValid = true;
        inputs.forEach(function(input) {
          if (!validateField(input)) {
            isValid = false;
          }
        });
        
        if (!isValid) return;
        
        var submitButton = contactForm.querySelector('button[type="submit"]');
        var originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        var formData = new FormData(contactForm);
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        })
        .then(function(response) { return response.json(); })
        .then(function(result) {
          if (result.success) {
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
          } else {
            throw new Error('Submission failed');
          }
        })
        .catch(function() {
          showNotification('Failed to send message. Please try again.', 'error');
        })
        .finally(function() {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        });
      });
    }
  }

  function validateField(field) {
    var value = field.value.trim();
    var type = field.type;
    var isValid = true;
    var errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    }
    
    if (type === 'email' && value) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email';
      }
    }
    
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
    var errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = 'var(--color-error)';
    errorDiv.style.fontSize = 'var(--font-size-sm)';
    errorDiv.style.marginTop = 'var(--spacing-1)';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }

  function removeFieldError(field) {
    var existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }
  }

  // Notification System
  function showNotification(message, type) {
    type = type || 'info';
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = 
      'position: fixed;' +
      'top: 100px;' +
      'right: 20px;' +
      'background: var(--glass-bg-strong);' +
      'backdrop-filter: var(--glass-blur);' +
      'border: 1px solid var(--glass-border);' +
      'border-radius: var(--radius-xl);' +
      'padding: var(--spacing-4) var(--spacing-6);' +
      'box-shadow: var(--shadow-xl);' +
      'z-index: var(--z-tooltip);' +
      'max-width: 400px;' +
      'animation: slideInRight 0.3s ease-out;';
    
    if (type === 'success') {
      notification.style.borderColor = 'var(--color-success)';
    } else if (type === 'error') {
      notification.style.borderColor = 'var(--color-error)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(function() {
      notification.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(function() { notification.remove(); }, 300);
    }, 5000);
  }

  // Lazy Loading
  function initLazyLoading() {
    var images = document.querySelectorAll('img[data-src]');
    
    var imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(function(img) { imageObserver.observe(img); });
  }

  // Smooth Scroll
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        var target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Utility: Debounce
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }

  // Utility: Throttle
  function throttle(func, limit) {
    var inThrottle;
    return function() {
      var context = this;
      var args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() { inThrottle = false; }, limit);
      }
    };
  }

  // Stats Counter Animation
  function initStatsCounter() {
    var statCards = document.querySelectorAll('.stat-card');
    
    if (statCards.length === 0) return;
    
    var observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };
    
    var statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var card = entry.target;
          
          // Add animated class for progress bar
          card.classList.add('animated');
          
          // Animate the number
          var numberElement = card.querySelector('.stat-number');
          if (numberElement && !numberElement.classList.contains('counted')) {
            numberElement.classList.add('counted');
            animateNumber(numberElement);
          }
          
          statsObserver.unobserve(card);
        }
      });
    }, observerOptions);
    
    statCards.forEach(function(card) {
      statsObserver.observe(card);
    });
  }
  
  function animateNumber(element) {
    var target = parseInt(element.getAttribute('data-target')) || 0;
    var suffix = element.getAttribute('data-suffix') || '';
    var duration = 2000; // 2 seconds
    var startTime = null;
    var startValue = 0;
    
    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }
    
    function updateNumber(currentTime) {
      if (!startTime) startTime = currentTime;
      var elapsed = currentTime - startTime;
      var progress = Math.min(elapsed / duration, 1);
      
      var easedProgress = easeOutQuart(progress);
      var currentValue = Math.floor(startValue + (target - startValue) * easedProgress);
      
      element.textContent = currentValue + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = target + suffix;
      }
    }
    
    requestAnimationFrame(updateNumber);
  }

  // Public API
  window.portfolioApp = {
    showNotification: showNotification,
    state: state
  };

})();
