function initProgressBar() {
  const bar = document.createElement('div');
  bar.id = 'growit-progress';
  document.body.appendChild(bar);

  let width = 0;
  const interval = setInterval(() => {
    width += Math.random() * 18;
    if (width >= 90) { width = 90; clearInterval(interval); }
    bar.style.width = width + '%';
  }, 120);

  window.addEventListener('load', () => {
    clearInterval(interval);
    bar.style.width = '100%';
    setTimeout(() => { bar.style.opacity = '0'; }, 400);
  });
}

function initScrollTop(threshold) {
  const btn = document.createElement('button');
  btn.id = 'scroll-top';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = '↑';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > threshold);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
