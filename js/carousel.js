function initCarousel(testimonials, { count, animMs }) {
  const track = document.getElementById('testiTrack');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsWrap = document.getElementById('carouselDots');

  if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

  function renderCard({ img, name, role, quote }) {
    return `
      <div class="testi-card">
        <div class="testi-avatar"><img src="${img}" alt="${name}" /></div>
        <div class="stars">★★★★★</div>
        <p class="testi-quote">"${quote}"</p>
        <div class="testi-name">${name}</div>
        <div class="testi-role">${role}</div>
      </div>
    `;
  }

  // Render originals + duplicates for seamless infinite loop
  track.innerHTML = [...testimonials, ...testimonials].map(renderCard).join('');

  let currentIndex = 0;
  let isAnimating = false;
  let cardWidth = 0;

  function measureCardWidth() {
    const card = track.querySelector('.testi-card');
    if (!card) return 380 + 24;
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    const w = card.getBoundingClientRect().width + gap;
    document.documentElement.style.setProperty('--testi-card-w', `${card.getBoundingClientRect().width}px`);
    return w;
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        if (isAnimating) return;
        currentIndex = i;
        slideTo(i);
      });
      dotsWrap.appendChild(dot);
    }
  }

  function updateDots(index) {
    dotsWrap.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === ((index % count) + count) % count);
    });
  }

  function slideTo(index, instant = false) {
    cardWidth = measureCardWidth();
    track.style.transition = instant ? 'none' : `transform ${animMs}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
    updateDots(index);
  }

  function goNext() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex++;
    slideTo(currentIndex);
    if (currentIndex >= count) {
      setTimeout(() => { currentIndex = 0; slideTo(0, true); isAnimating = false; }, animMs);
    } else {
      setTimeout(() => { isAnimating = false; }, animMs);
    }
  }

  function goPrev() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex--;
    slideTo(currentIndex);
    if (currentIndex < 0) {
      setTimeout(() => { currentIndex = count - 1; slideTo(count - 1, true); isAnimating = false; }, animMs);
    } else {
      setTimeout(() => { isAnimating = false; }, animMs);
    }
  }

  nextBtn.addEventListener('click', goNext);
  prevBtn.addEventListener('click', goPrev);

  let touchStartX = 0;
  let touchStartY = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goNext(); else goPrev();
  }, { passive: true });

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(() => slideTo(currentIndex, true)).observe(document.body);
  }

  buildDots();
  slideTo(0, true);
}
