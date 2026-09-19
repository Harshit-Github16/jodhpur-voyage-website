/* ==========================================================================
   JODHPUR VOYAGE - NAVIGATION & MOBILE DRAWER LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNavClose = document.querySelector('.mobile-nav-close');
  const navMenu = document.querySelector('.nav-menu');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const hasSubmenuItems = document.querySelectorAll('.nav-item.has-mega');

  // Open Mobile Drawer
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.add('active');
      if (mobileOverlay) mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close Mobile Drawer
  function closeMobileNav() {
    if (navMenu) navMenu.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileNav);
  }

  // Handle Mobile Accordion Menus
  hasSubmenuItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        
        // Toggle mobile open
        const isOpen = item.classList.contains('mobile-open');
        
        // Close others
        hasSubmenuItems.forEach(other => other.classList.remove('mobile-open'));
        
        if (!isOpen) {
          item.classList.add('mobile-open');
        }
      }
    });
  });

  // Handle Window Resize (Reset Drawer State)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
      closeMobileNav();
      hasSubmenuItems.forEach(item => item.classList.remove('mobile-open'));
    }
  });
});
