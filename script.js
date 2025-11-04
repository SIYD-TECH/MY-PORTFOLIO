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



const form = document.querySelector('form[action="https://formspree.io/f/xldoyvlk"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent default HTML submission

  const data = {
    name: form.querySelector('#name').value,
    email: form.querySelector('#email').value,
    message: form.querySelector('#message').value
  };

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (err) {
    console.error(err);
    alert('An error occurred. Please try again.');
  }
});

