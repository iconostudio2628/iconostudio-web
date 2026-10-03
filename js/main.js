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

  /* ---------- Order panel (WhatsApp / Zavolat / SMS) ---------- */
  const orderToggle = $('[data-order-toggle]');
  const orderPanel = $('#order-panel');
  const setOrder = (open) => {
    orderPanel.hidden = !open;
    orderToggle.setAttribute('aria-expanded', String(open));
  };
  orderToggle.addEventListener('click', (e) => { e.stopPropagation(); setMenu(false); setOrder(orderPanel.hidden); });

  /* ---------- Services mega menu (desktop) ---------- */
  const menuToggle = $('[data-menu-toggle]');
  const menuPanel = $('#menu-sluzby');
  const setMenu = (open) => {
    if (!menuToggle) return;
    menuPanel.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
  };
  if (menuToggle) menuToggle.addEventListener('click', (e) => { e.stopPropagation(); setOrder(false); setMenu(menuPanel.hidden); });
  if (menuPanel) menuPanel.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

  /* ---------- Mobile menu ---------- */
  const burger = $('[data-burger]');
  const mobileNav = $('#mobile-nav');
  const setNav = (open) => {
    mobileNav.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? burger.dataset.labelClose : burger.dataset.labelOpen);
  };
  burger.addEventListener('click', (e) => { e.stopPropagation(); setOrder(false); setMenu(false); setNav(mobileNav.hidden); });
  mobileNav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-order]')) setOrder(false);
    if (!e.target.closest('[data-menu]')) setMenu(false);
    if (!e.target.closest('.site-header')) setNav(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (menuPanel && !menuPanel.hidden) { setMenu(false); menuToggle.focus(); }
    if (!orderPanel.hidden) { setOrder(false); orderToggle.focus(); }
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
  if (heroItems.length) intro.from(heroItems, { y: 32, opacity: 0, duration: 0.9, stagger: 0.1, ...clean }, heroLines.length ? '-=0.7' : 0);

  // Fade-up reveals
  const reveal = (targets, trigger, vars = {}) => gsap.from(targets, {
    y: 40, opacity: 0, duration: 1, ease, stagger: 0.1, ...clean, ...vars,
    scrollTrigger: { trigger, start: 'top 88%', once: true },
  });
  $$('[data-reveal]').forEach((el) => reveal(el, el));
  $$('[data-stagger]').forEach((el) => reveal(el.children, el, { y: 48, stagger: 0.12 }));

  // Statement: words light up while scrolling
  $$('[data-words]').forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', el.textContent.trim());
    el.textContent = '';
    const spans = words.map((w, i) => {
      const s = document.createElement('span');
      s.className = 'word';
      s.setAttribute('aria-hidden', 'true');
      s.textContent = w;
      el.appendChild(s);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
      return s;
    });
    gsap.fromTo(spans, { opacity: 0.16 }, {
      opacity: 1, ease: 'none', stagger: 0.12,
      scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 45%', scrub: true },
    });
  });

  // Hero photo: settles in on load, then drifts slower than the page
  const heroImg = $('.hero-bg img');
  if (heroImg) {
    intro.from(heroImg, { scale: 1.12, duration: 1.8, ease: 'power3.out' }, 0);
    gsap.to(heroImg, { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
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
