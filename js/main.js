/* ICONO STUDIO – page behaviour (no framework).
   Order panel, mobile menu, click tracking (dataLayer), lazy map, and subtle GSAP scroll animations.
   Content is only hidden by GSAP itself, so everything stays visible if animation scripts fail. */
(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header ---------- */
  const header = $('[data-header]');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Services mega menu (desktop) ---------- */
  const menuToggle = $('[data-menu-toggle]');
  const menuPanel = $('#menu-sluzby');
  const setMenu = (open) => {
    if (!menuToggle) return;
    menuPanel.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
  };
  if (menuToggle) menuToggle.addEventListener('click', (e) => { e.stopPropagation(); setMenu(menuPanel.hidden); });
  if (menuPanel) menuPanel.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

  /* ---------- Mobile menu ---------- */
  const burger = $('[data-burger]');
  const mobileNav = $('#mobile-nav');
  const setNav = (open) => {
    mobileNav.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? burger.dataset.labelClose : burger.dataset.labelOpen);
  };
  burger.addEventListener('click', (e) => { e.stopPropagation(); setMenu(false); setNav(mobileNav.hidden); });
  mobileNav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-menu]')) setMenu(false);
    if (!e.target.closest('.site-header')) setNav(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (menuPanel && !menuPanel.hidden) { setMenu(false); menuToggle.focus(); }
    if (!mobileNav.hidden) { setNav(false); burger.focus(); }
  });

  /* ---------- Analytics events (push to dataLayer – wire up GTM / GA4 later) ---------- */
  window.dataLayer = window.dataLayer || [];
  const track = (event, extra = {}) => window.dataLayer.push({ event, ...extra });
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-track]');
    if (el) track(el.dataset.track, { link_url: el.getAttribute('href') });
  });
  const route = document.body.dataset.route || '';
  const lang = document.body.dataset.lang || 'cs';
  const viewEvents = { barber: 'view_barber', nails: 'view_nails', cenik: 'view_price', kontakt: 'view_contact' };
  if (viewEvents[route]) track(viewEvents[route], { lang });
  else if (/-praha-2$/.test(route)) track('view_service', { service: route, lang });

  /* ---------- “Open now” badge – regular hours in Europe/Prague (holidays are not covered) ---------- */
  const fmt = (m) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
  const pragueNow = () => {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Prague', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    return { day, min: (Number(get('hour')) % 24) * 60 + Number(get('minute')) };
  };
  $$('[data-open-badge]').forEach((el) => {
    try {
      const hours = JSON.parse(el.dataset.hours);
      const tx = JSON.parse(el.dataset.txt);
      const fill = (str, vars) => str.replace(/\{(\w)\}/g, (m, k) => vars[k]);
      const { day, min } = pragueNow();
      const today = hours[day];
      const label = $('[data-open-text]', el);
      let text; let state;
      if (today && min >= today[0] && min < today[1]) { text = fill(tx.open, { t: fmt(today[1]) }); state = 'is-open'; }
      else {
        state = 'is-closed';
        if (today && min < today[0]) text = fill(tx.before, { t: fmt(today[0]) });
        else {
          let n = 1;
          while (n < 7 && !hours[(day + n) % 7]) n += 1;
          const next = hours[(day + n) % 7];
          text = fill(tx.next, { d: n === 1 ? tx.tomorrow : tx.days[(day + n) % 7], t: fmt(next[0]) });
        }
      }
      label.textContent = text;
      el.classList.add(state);
    } catch (err) { /* keep the static fallback text */ }
  });

  /* ---------- Map: load the Google iframe only when it is close to the viewport ---------- */
  $$('[data-map]').forEach((box) => {
    const load = () => {
      if (box.querySelector('iframe')) return;
      const f = document.createElement('iframe');
      f.src = box.dataset.src;
      f.title = box.dataset.title || 'ICONO STUDIO';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      box.appendChild(f);
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((en) => en.isIntersecting)) { load(); io.disconnect(); }
      }, { rootMargin: '400px' });
      io.observe(box);
    } else {
      load();
    }
  });

  /* ---------- Scroll animations ---------- */
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || reduceMotion) return;
  gsap.registerPlugin(ScrollTrigger);
  const ease = 'power4.out';
  const clean = { clearProps: 'transform,opacity' }; // hand hover transforms back to CSS

  // Intro
  const intro = gsap.timeline({ defaults: { ease } });
  const heroLines = $$('.hero-title .line > span');
  if (heroLines.length) intro.from(heroLines, { yPercent: 110, duration: 1.1, stagger: 0.12 });
  const heroItems = $$('[data-hero]');
  // slide only (no opacity): content that is hidden until the script runs delays the largest contentful paint
  if (heroItems.length) intro.from(heroItems, { y: 24, duration: 0.9, stagger: 0.1, ...clean }, heroLines.length ? '-=0.7' : 0);

  // Fade-up reveals
  const reveal = (targets, trigger, vars = {}) => gsap.from(targets, {
    y: 40, opacity: 0, duration: 1, ease, stagger: 0.1, ...clean, ...vars,
    scrollTrigger: { trigger, start: 'top 88%', once: true },
  });
  $$('[data-reveal]').forEach((el) => reveal(el, el));
  $$('[data-stagger]').forEach((el) => reveal(el.children, el, { y: 48, stagger: 0.12 }));

  // Real work: cards rise one after another, photos settle in and drift slightly while scrolling
  $$('[data-work]').forEach((grid) => {
    const cards = [...grid.children];
    gsap.from(cards, { y: 70, opacity: 0, duration: 1.1, ease, stagger: 0.16, clearProps: 'opacity', scrollTrigger: { trigger: grid, start: 'top 85%', once: true } });
    cards.forEach((card) => {
      const img = card.querySelector('img');
      gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  });

  // Statement: words light up while scrolling
  $$('[data-words]').forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    const full = el.textContent.trim();
    el.textContent = '';
    const sr = document.createElement('span');
    sr.className = 'sr-only';
    sr.textContent = full;
    el.appendChild(sr);
    const spans = words.map((w, i) => {
      const s = document.createElement('span');
      s.className = 'word';
      s.setAttribute('aria-hidden', 'true');
      s.textContent = w;
      el.appendChild(s);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
      return s;
    });
    gsap.fromTo(spans, { opacity: 0.4 }, {
      opacity: 1, ease: 'none', stagger: 0.12,
      scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 45%', scrub: true },
    });
  });

  // Hero photo blobs: settle in on load, then drift at different speeds
  const blobPhotos = $$('.blob-photo');
  if (blobPhotos.length) {
    intro.from(blobPhotos, { scale: 0.9, duration: 1.4, stagger: 0.18, ease: 'power3.out', ...clean }, 0.2);
    blobPhotos.forEach((el, i) => gsap.to(el, { yPercent: i ? -10 : 6, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } }));
  }

  // Hero card drifts a little slower than the copy (desktop only)
  gsap.matchMedia().add('(min-width: 960px)', () => {
    const card = $('.hero-card');
    if (card) gsap.to(card, { y: -40, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  });

  // Marquee reacts to scroll speed
  const track$ = $('.marquee-track');
  if (track$) {
    // CSS-driven marquee; nudge its playback rate via the Web Animations API
    const anim = track$.getAnimations()[0];
    if (anim) {
      ScrollTrigger.create({
        onUpdate: (self) => {
          const v = Math.min(Math.abs(self.getVelocity()) / 1500, 3);
          anim.playbackRate = 1 + v;
          gsap.to(anim, { playbackRate: 1, duration: 0.8, overwrite: true });
        },
      });
    }
  }

  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
