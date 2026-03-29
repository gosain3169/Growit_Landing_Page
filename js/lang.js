function initI18n() {
  const LANGS = [
    { code: 'en', flag: '🇬🇧', label: 'EN' },
    { code: 'fr', flag: '🇫🇷', label: 'FR' },
    { code: 'de', flag: '🇩🇪', label: 'DE' },
    { code: 'es', flag: '🇪🇸', label: 'ES' },
    { code: 'it', flag: '🇮🇹', label: 'IT' },
  ];

  // Word to wrap in <em> in the hero heading per language
  const EM_WORDS = {
    en: 'grow',
    fr: 'grandir',
    de: 'wachsen',
    es: 'crecer',
    it: 'crescere',
  };

  let currentLang = localStorage.getItem('growit-lang') || 'en';

  // ── Build switcher UI ────────────────────────────────────────────────────────

  const wrapper = document.createElement('div');
  wrapper.id = 'lang-switcher';
  wrapper.innerHTML = `
    <button id="lang-btn" aria-label="Select language" aria-haspopup="listbox" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17A15.51 15.51 0 0 1 9 11.35 15.13 15.13 0 0 1 6.69 8H4.69A17.18 17.18 0 0 0 7.67 12.56L2.58 17.58 4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"/>
      </svg>
    </button>
    <ul id="lang-dropdown" role="listbox">
      ${LANGS.map(l => `
        <li role="option" data-lang="${l.code}">
          <span>${l.flag}</span>${l.label}
        </li>
      `).join('')}
    </ul>
  `;

  // Insert before the CTA anchor in nav-right
  const navRight = document.querySelector('.nav-right');
  const ctaAnchor = navRight.querySelector('a');
  navRight.insertBefore(wrapper, ctaAnchor);

  const btn = document.getElementById('lang-btn');
  const dropdown = document.getElementById('lang-dropdown');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  dropdown.addEventListener('click', (e) => {
    const li = e.target.closest('[data-lang]');
    if (!li) return;
    setLang(li.dataset.lang);
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  // ── Helpers ──────────────────────────────────────────────────────────────────

  function updateBtn(lang) {
    dropdown.querySelectorAll('li').forEach(li => {
      li.classList.toggle('active', li.dataset.lang === lang);
    });
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('growit-lang', lang);
    updateBtn(lang);
    applyTranslation(lang);
  }

  // ── Translation engine ───────────────────────────────────────────────────────

  function applyTranslation(lang) {
    const t = GROWIT.TRANSLATIONS[lang];
    if (!t) return;

    // NAV
    const navLinkEls = document.querySelectorAll('.nav-links a');
    ['about', 'services', 'how', 'stories'].forEach((key, i) => {
      if (navLinkEls[i]) navLinkEls[i].textContent = t.nav[key];
    });
    const navCta = document.querySelector('nav .btn-primary');
    if (navCta) navCta.textContent = t.nav.cta;

    // HERO — badge
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) heroBadge.textContent = t.hero.badge;

    // HERO — heading (re-apply <em> highlight on the growth keyword)
    const heroHeading = document.getElementById('hero-heading');
    if (heroHeading) {
      const [l1, l2] = t.hero.lines;
      const emWord = EM_WORDS[lang];
      const mark = str => str.replace(new RegExp(`(${emWord})`, 'i'), '<em>$1</em>');
      heroHeading.innerHTML = `${mark(l1)}<br/>${mark(l2)}`;
    }

    const heroSub = document.querySelector('.hero-sub');
    if (heroSub) heroSub.textContent = t.hero.sub;

    const heroBtns = document.querySelectorAll('.hero-ctas button');
    if (heroBtns[0]) heroBtns[0].textContent = t.hero.cta1;
    if (heroBtns[1]) heroBtns[1].textContent = t.hero.cta2;

    // HERO — dashboard card
    const dashTitle = document.querySelector('.dash-title');
    if (dashTitle) dashTitle.textContent = t.hero.dashboard.title;
    const dashTag = document.querySelector('.dash-tag');
    if (dashTag) dashTag.textContent = t.hero.dashboard.live;
    document.querySelectorAll('.metric-label').forEach((el, i) => {
      if (t.hero.dashboard.metrics[i]) el.textContent = t.hero.dashboard.metrics[i];
    });
    document.querySelectorAll('.bar-label').forEach((el, i) => {
      const labelSpan = el.querySelector('span:first-child');
      if (labelSpan && t.hero.dashboard.bars[i]) labelSpan.textContent = t.hero.dashboard.bars[i];
    });
    const activeLabel = document.querySelector('.client-row > div:last-child');
    if (activeLabel) activeLabel.textContent = t.hero.dashboard.activeLabel;

    // TESTIMONIALS — quotes (5 real + 5 duplicates; use i % 5)
    if (t.testimonialQuotes) {
      document.querySelectorAll('.testi-quote').forEach((el, i) => {
        el.textContent = `\u201c${t.testimonialQuotes[i % GROWIT.CAROUSEL.count]}\u201d`;
      });
    }

    // TICKER — preserve .ticker-dot child on each item
    document.querySelectorAll('.ticker-item').forEach((item, i) => {
      const dot = item.querySelector('.ticker-dot');
      item.innerHTML = '';
      item.appendChild(document.createTextNode(t.ticker[i % t.ticker.length]));
      if (dot) item.appendChild(dot);
    });

    // ABOUT
    setText('#about .section-label', t.about.label);
    setText('#about .section-h', t.about.heading);
    setText('#about .section-sub', t.about.sub);
    document.querySelectorAll('.stat-desc').forEach((el, i) => {
      if (t.about.stats[i]) el.textContent = t.about.stats[i];
    });
    setText('.mission-quote', t.about.quote);
    setText('.mission-attr', t.about.quoteAttr);
    setText('.mission-cta', t.about.quoteCta);

    // SERVICES
    setText('#services .section-label', t.services.label);
    setText('#services .section-h', t.services.heading);
    document.querySelectorAll('.svc-card').forEach((card, i) => {
      const item = t.services.items[i];
      if (!item) return;
      setText('.svc-name', item.name, card);
      setText('.svc-desc', item.desc, card);
      setText('.svc-back-title', item.name, card);
      card.querySelectorAll('.svc-back-list li').forEach((li, j) => {
        if (item.back[j]) li.textContent = item.back[j];
      });
      setText('.svc-front .svc-hint', t.services.hint, card);
      setText('.svc-back .svc-hint', t.services.hintBack, card);
    });

    // HOW IT WORKS
    setText('#how .section-label', t.how.label);
    setText('#how .section-h', t.how.heading);
    document.querySelectorAll('.step').forEach((step, i) => {
      const s = t.how.steps[i];
      if (!s) return;
      setText('.step-title', s.title, step);
      setText('.step-desc', s.desc, step);
    });

    // TESTIMONIALS
    setText('#testimonials .section-label', t.testimonials.label);
    setText('#testimonials .section-h', t.testimonials.heading);

    // CTA BAND
    setText('.cta-badge', t.cta.badge);
    setText('.cta-h', t.cta.heading);
    setText('.cta-sub', t.cta.sub);
    setText('.cta-actions .btn-white', t.cta.btn1);
    setText('.cta-actions .btn-ghost-white', t.cta.btn2);

    // CONTACT
    setText('.contact .section-label', t.contact.label);
    setText('.contact-info h2', t.contact.heading);
    setText('.contact .section-sub', t.contact.sub);
    const cdLabels = document.querySelectorAll('.cd-label');
    ['emailLabel', 'phoneLabel', 'locationLabel'].forEach((key, i) => {
      if (cdLabels[i]) cdLabels[i].textContent = t.contact[key];
    });
    const cdVals = document.querySelectorAll('.cd-val');
    if (cdVals[2]) cdVals[2].textContent = t.contact.locationVal;
    setText('#contact .form-card h3', t.contact.cardHeading);
    setText('#contact .form-card p', t.contact.cardSub);
    setText('.calendly-popup-btn', t.contact.cardBtn);

    // FOOTER
    setText('.footer-brand p', t.footer.tagline);
    const footerCols = document.querySelectorAll('.footer-col');
    if (footerCols[0]) footerCols[0].querySelector('h4').textContent = t.footer.servicesHeading;
    if (footerCols[1]) footerCols[1].querySelector('h4').textContent = t.footer.companyHeading;
    if (footerCols[2]) footerCols[2].querySelector('h4').textContent = t.footer.connectHeading;
    footerCols[0] && footerCols[0].querySelectorAll('a').forEach((el, i) => {
      if (t.footer.links.services[i]) el.textContent = t.footer.links.services[i];
    });
    footerCols[1] && footerCols[1].querySelectorAll('a').forEach((el, i) => {
      if (t.footer.links.company[i]) el.textContent = t.footer.links.company[i];
    });
    footerCols[2] && footerCols[2].querySelectorAll('a').forEach((el, i) => {
      if (t.footer.links.connect[i]) el.textContent = t.footer.links.connect[i];
    });
    setText('.footer-bottom span:first-child', t.footer.copyright);
    setText('.footer-bottom span:last-child', t.footer.legal);
  }

  // Scoped querySelector helper to reduce repetition
  function setText(selector, value, scope = document) {
    const el = scope.querySelector(selector);
    if (el) el.textContent = value;
  }

  // ── Init ─────────────────────────────────────────────────────────────────────

  updateBtn(currentLang);
  if (currentLang !== 'en') applyTranslation(currentLang);
}
