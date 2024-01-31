// Add any JavaScript functionality here

// Example: Smooth scrolling to section on navigation link click
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});