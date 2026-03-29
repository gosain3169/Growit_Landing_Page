function initServices() {
  document.querySelectorAll('.svc-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });
}
