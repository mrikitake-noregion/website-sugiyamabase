// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.toggle('active');
      menuIcon.style.display = isOpen ? 'none' : 'block';
      closeIcon.style.display = isOpen ? 'block' : 'none';
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll Animation Observer
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  // Add stagger animation to facility cards
  const facilityCards = document.querySelectorAll('.facility-card');
  facilityCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    card.classList.add('animate-on-scroll');
    observer.observe(card);
  });

  // Add stagger animation to instagram posts
  const instaPosts = document.querySelectorAll('.instagram-post');
  instaPosts.forEach((post, index) => {
    post.style.opacity = '0';
    post.style.transform = 'translateY(20px)';
    post.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;
  });

  const instaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        instaObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-40px 0px', threshold: 0.1 });

  instaPosts.forEach(post => {
    instaObserver.observe(post);
  });

  // Parallax effect for hero section
  const heroSection = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg img');

  if (heroSection && heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroHeight = heroSection.offsetHeight;

      if (scrolled < heroHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
      }
    });
  }

  // Hover effects for work cards
  const workCards = document.querySelectorAll('.work-card');
  workCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Pillar hover effect
  const pillars = document.querySelectorAll('.pillar');
  pillars.forEach(pillar => {
    pillar.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(4px)';
    });

    pillar.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });

  // Add transition to pillars
  document.querySelectorAll('.pillar').forEach(pillar => {
    pillar.style.transition = 'transform 0.3s ease, border-color 0.3s ease';
  });

  // Upcoming event hover effect
  const upcomingItems = document.querySelectorAll('.upcoming-item');
  upcomingItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const arrow = this.querySelector('.upcoming-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(4px)';
      }
    });

    item.addEventListener('mouseleave', function() {
      const arrow = this.querySelector('.upcoming-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(0)';
      }
    });
  });
});

// Loading animation
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
