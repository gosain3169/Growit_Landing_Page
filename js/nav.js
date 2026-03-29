function initNav(sections) {
  const navEl = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav-links a');

  function update() {
    const scrollY = window.scrollY + 120;
    let current = '';

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    navEl.style.boxShadow = window.scrollY > 40 ? '0 4px 24px rgba(0,0,0,0.08)' : 'none';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}
