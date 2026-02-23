// Typewriter effekt på navn
const navnEl = document.getElementById('navn-tekst');
const cursor = document.querySelector('.cursor');
const navn = 'Hadi Qureshi';
let i = 0;

setTimeout(() => {
  const interval = setInterval(() => {
    navnEl.textContent += navn[i];
    i++;
    if (i === navn.length) {
      clearInterval(interval);
      cursor.classList.add('cursor-stop');
    }
  }, 110);
}, 400);

// Highlight aktiv nav-link ved scroll
const sektioner = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let aktiv = '';

  sektioner.forEach(sektion => {
    const top = sektion.offsetTop - 100;
    if (window.scrollY >= top) {
      aktiv = sektion.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('aktiv');
    if (link.getAttribute('href') === `#${aktiv}`) {
      link.classList.add('aktiv');
    }
  });
});

// Cirkel-animation ved scroll
const cirkelObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.cirkel-fremgang').forEach(cirkel => {
        const procent = cirkel.getAttribute('data-procent');
        const offset = 251.33 * (1 - procent / 100);
        cirkel.style.strokeDashoffset = offset;
      });
      cirkelObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const faerdighedSektion = document.querySelector('.faerdigheder-grid');
if (faerdighedSektion) cirkelObserver.observe(faerdighedSektion);

// Fade-in animation ved scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('synlig');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.kort, .sektion h2, .sektion p').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
