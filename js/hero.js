function initHero({ lines, typeSpeed, pauseBetweenLines }) {
  const el = document.getElementById('hero-heading');
  if (!el) return;

  let html = '';

  function typeLine(text, isLast, done) {
    let i = 0;
    function tick() {
      html += text[i] === ' ' ? '&nbsp;' : text[i];
      el.innerHTML = html + (isLast ? '' : '<br/>') + '<span class="cursor">|</span>';
      i++;
      if (i < text.length) setTimeout(tick, typeSpeed);
      else done();
    }
    tick();
  }

  typeLine(lines[0], false, () => {
    html += '<br/>';
    setTimeout(() => {
      typeLine(lines[1].replace('grow', '<em>grow</em>'), true, () => {
        el.innerHTML = el.innerHTML.replace('<span class="cursor">|</span>', '');
      });
    }, pauseBetweenLines);
  });
}
