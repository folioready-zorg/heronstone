/* ============================================
   HERONSTONE — Main JS
   ============================================ */

(function () {
  'use strict';

  // ---- Mobile Navigation ----
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  function openNav() {
    navToggle.classList.add('active');
    navLinks.classList.add('open');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navLinks.classList.contains('open')) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
  }

  // Close nav on link click (mobile)
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  // ---- Header scroll shadow ----
  const header = document.querySelector('.header');

  function updateHeader() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  if (header) {
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Intersection Observer for scroll animations ----
  var fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---- Gallery Lightbox ----
  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightbox-image');
  var lightboxTitle = document.getElementById('lightbox-title');
  var lightboxDesc = document.getElementById('lightbox-description');
  var galleryItems = document.querySelectorAll('.gallery-item');
  var currentIndex = 0;
  var visibleItems = [];

  function getVisibleItems() {
    visibleItems = Array.from(galleryItems).filter(function (item) {
      return item.style.display !== 'none';
    });
  }

  function openLightbox(index) {
    if (!lightbox) return;
    getVisibleItems();
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    if (visibleItems.length === 0) return;
    var item = visibleItems[currentIndex];
    if (lightboxTitle) lightboxTitle.textContent = item.dataset.title || '';
    if (lightboxDesc) lightboxDesc.textContent = item.dataset.description || '';
    if (lightboxImage) {
      lightboxImage.querySelector('span').textContent = item.dataset.title || 'Project Photo';
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightboxContent();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightboxContent();
  }

  // Gallery item click
  galleryItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
      getVisibleItems();
      var visibleIndex = visibleItems.indexOf(item);
      if (visibleIndex !== -1) {
        openLightbox(visibleIndex);
      }
    });
  });

  // Lightbox controls
  if (lightbox) {
    var closeBtn = lightbox.querySelector('.lightbox__close');
    var prevBtn = lightbox.querySelector('.lightbox__nav--prev');
    var nextBtn = lightbox.querySelector('.lightbox__nav--next');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Close on background click
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });
  }

  // ---- Gallery Filters ----
  var filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.dataset.filter;

      // Update active button
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
      });
      this.classList.add('active');

      // Filter gallery items
      galleryItems.forEach(function (item) {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ---- Contact Form Validation ----
  var contactForm = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var isValid = true;

      // Name validation
      var name = contactForm.querySelector('#name');
      if (name && name.value.trim() === '') {
        name.classList.add('error');
        isValid = false;
      } else if (name) {
        name.classList.remove('error');
      }

      // Email validation
      var email = contactForm.querySelector('#email');
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailPattern.test(email.value.trim())) {
        email.classList.add('error');
        isValid = false;
      } else if (email) {
        email.classList.remove('error');
      }

      // Message validation
      var message = contactForm.querySelector('#message');
      if (message && message.value.trim() === '') {
        message.classList.add('error');
        isValid = false;
      } else if (message) {
        message.classList.remove('error');
      }

      if (isValid) {
        // Hide form, show success message
        contactForm.style.display = 'none';
        if (formSuccess) {
          formSuccess.classList.add('visible');
        }
      }
    });

    // Remove error styling on input
    contactForm.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        this.classList.remove('error');
      });
    });
  }
})();
