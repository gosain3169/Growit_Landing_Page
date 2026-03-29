function initReveal() {
  const els = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

function initStats(stats) {
  const container = document.getElementById('statGrid');
  if (!container) return;

  container.innerHTML = stats.map(({ target, prefix = '', suffix = '', desc }) => `
    <div class="stat-card">
      <div class="stat-num" data-target="${target}" data-prefix="${prefix}" data-suffix="${suffix}">0</div>
      <div class="stat-desc">${desc}</div>
    </div>
  `).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  container.querySelectorAll('.stat-num[data-target]').forEach(el => observer.observe(el));
}

function countUp(el) {
  const target = +el.dataset.target;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const steps = 50;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    el.textContent = prefix + Math.round(target * (step / steps)) + suffix;
    if (step >= steps) {
      el.textContent = prefix + target + suffix;
      clearInterval(timer);
    }
  }, 1600 / steps);
}
