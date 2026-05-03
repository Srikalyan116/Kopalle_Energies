const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const tilt = document.querySelector('.tilt-card');
tilt?.addEventListener('mousemove', (e) => {
  const r = tilt.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - .5;
  const y = (e.clientY - r.top) / r.height - .5;
  tilt.style.transform = `rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`;
});
tilt?.addEventListener('mouseleave', () => tilt.style.transform = 'rotate(1deg)');
