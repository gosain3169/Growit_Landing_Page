function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  const saved = localStorage.getItem('growit-theme') || 'light';
  html.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('growit-theme', next);
  });
}
