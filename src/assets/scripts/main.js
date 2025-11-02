/**
 * TOKYO WEBSITE - MAIN JAVASCRIPT
 */

// Import Swiper CSS
import 'swiper/swiper-bundle.css';

// Import FontAwesome for icons
import '@fortawesome/fontawesome-free/css/all.css';

// Import Animate.css for animations
import 'animate.css';

// Import Hover.css for hover effects
import 'hover.css/css/hover.css';

// Import Swiper and required modules
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

/**
 * Swiper Gallery
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 800,
    effect: 'slide',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  /**
   * Animate.css
   */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
 
        setTimeout(() => {
          entry.target.classList.add('animate__fadeInUp');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);


  const cards = document.querySelectorAll('.c-card');
  cards.forEach(card => observer.observe(card));

  console.log('Empezamos! 🗼');
});
