// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth-scroll "Varaa Aika"
document.querySelector('.cta').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
});