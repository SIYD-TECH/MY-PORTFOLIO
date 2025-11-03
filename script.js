  const menuBtn = document.getElementById('menu-btn');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');

  // Open menu
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  });

  // Close menu
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  });

  // Close menu when clicking outside
  overlay.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  });
