// ===== DROPDOWN =====
function toggleDropdown() {
  document.getElementById('modelsDropdown').classList.toggle('dropdown-open');
}
function closeDropdown() {
  document.getElementById('modelsDropdown').classList.remove('dropdown-open');
}
document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) closeDropdown();
});

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});

// ===== ACTIVE NAV LINK =====
(function setActiveNav() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href]').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === filename) {
      link.classList.add('active-link');
    }
  });
})();

// ===== CAROUSEL =====
const carouselState = {};

function initCarousels() {
  document.querySelectorAll('.carousel-track').forEach(track => {
    const id = track.id; // e.g. "titan-track"
    const name = id.replace('-track', ''); // e.g. "titan"
    if (!(name in carouselState)) {
      carouselState[name] = 0;
    }
    initDots(name, track.children.length);
  });
}

function moveCarousel(name, dir) {
  const track = document.getElementById(name + '-track');
  if (!track) return;
  const slides = track.children.length;
  carouselState[name] = (carouselState[name] + dir + slides) % slides;
  track.style.transform = `translateX(-${carouselState[name] * 100}%)`;
  updateDots(name);
}

function goToSlide(name, idx) {
  const track = document.getElementById(name + '-track');
  if (!track) return;
  carouselState[name] = idx;
  track.style.transform = `translateX(-${idx * 100}%)`;
  updateDots(name);
}

function updateDots(name) {
  const dotsContainer = document.getElementById(name + '-dots');
  if (!dotsContainer) return;
  dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === carouselState[name]);
  });
}

function initDots(name, count) {
  const dotsContainer = document.getElementById(name + '-dots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(name, i);
    dotsContainer.appendChild(dot);
  }
}

// ===== FADE IN OBSERVER =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  initCarousels();
});
