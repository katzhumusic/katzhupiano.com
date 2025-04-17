// Fade-in navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  if (window.scrollY > 20) {
    navbar.classList.add('animate-in');
  } else {
    navbar.classList.remove('animate-in');
  }
});
