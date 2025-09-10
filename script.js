// ====== Update Footer Year Dynamically ======
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
if (yearSpan) {
  yearSpan.textContent = currentYear;
}

// ====== Mobile Navigation Toggle ======
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
  });
}
