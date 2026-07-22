// ============================================================
// Mobile nav toggle
// ============================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// Scroll reveal via IntersectionObserver
// ============================================================
const revealTargets = document.querySelectorAll('.reveal, .reveal-line, .reveal-up');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in'));
}

// ============================================================
// Coordinate readout (CAD-style cursor tracker)
// ============================================================
const coordX = document.getElementById('coordX');
const coordY = document.getElementById('coordY');

let coordRAF = null;
document.addEventListener('mousemove', (e) => {
  if (coordRAF) return;
  coordRAF = requestAnimationFrame(() => {
    if (coordX && coordY) {
      coordX.textContent = String(e.clientX).padStart(3, '0');
      coordY.textContent = String(e.clientY).padStart(3, '0');
    }
    coordRAF = null;
  });
});

// ============================================================
// Active "sheet" number tracking based on scroll position
// ============================================================
const sheets = document.querySelectorAll('main .sheet, .hero');
const coordSheet = document.getElementById('coordSheet');
const sheetNumbers = {
  top: '00',
  profile: '01',
  bom: '02',
  projects: '03',
  experience: '04',
  activity: '05',
  contact: '06',
};

if ('IntersectionObserver' in window && coordSheet) {
  const sheetObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (sheetNumbers[id]) {
            coordSheet.textContent = sheetNumbers[id];
          }
        }
      });
    },
    { threshold: 0.5 }
  );
  sheets.forEach((s) => sheetObserver.observe(s));
}

// ============================================================
// Nav background solidify on scroll
// ============================================================
const nav = document.getElementById('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (nav) {
    nav.style.background =
      y > 40
        ? 'rgba(10, 32, 54, 0.92)'
        : 'linear-gradient(to bottom, rgba(10,32,54,0.92), rgba(10,32,54,0))';
  }
  lastScroll = y;
});

// ============================================================
// Footer year
// ============================================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
