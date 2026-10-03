/* Luminé – page behaviour: smooth scroll (Lenis), scroll animations (GSAP + ScrollTrigger),
   navbar menu, FAQ accordion, newsletter form.
   Content is only hidden by GSAP itself, so the page stays fully visible if scripts fail to load. */
(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canAnimate = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !reduceMotion;

  /* ---------- Smooth scroll (Lenis) ---------- */
  let lenis = null;
  if (typeof Lenis !== 'undefined' && !reduceMotion) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    if (canAnimate) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  } else {
    document.documentElement.classList.remove('lenis');
  }

  function scrollToTarget(selector) {
    const el = $(selector);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(selector === '#hero' ? 0 : el, { duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  }

  /* ---------- Button labels: split into letters for the hover roll ---------- */
  $$('.js-btn-label').forEach((label) => {
    const text = label.textContent.trim();
    label.closest('a, button')?.setAttribute('aria-label', text);
    label.textContent = '';
    label.setAttribute('aria-hidden', 'true');
    for (const ch of text) {
      const span = document.createElement('span');
      span.className = 'ch';
      if (ch === ' ') span.style.whiteSpace = 'pre';
      span.textContent = ch;
      label.appendChild(span);
    }
  });

  /* ---------- Hero title: scale the brand name to the full content width ---------- */
  const heroTitle = $('#hero-title');
  const heroText = $('.hero-title-text');
  function fitHeroTitle() {
    if (!heroTitle || !heroText) return;
    heroTitle.style.fontSize = '100px';
    const target = heroTitle.clientWidth;
    const natural = heroText.getBoundingClientRect().width;
    if (target && natural) heroTitle.style.fontSize = `${(100 * target) / natural}px`;
  }
  fitHeroTitle();
  window.addEventListener('resize', fitHeroTitle);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { fitHeroTitle(); if (canAnimate) ScrollTrigger.refresh(); });

  /* ---------- Navbar menu ---------- */
  const navToggle = $('#nav-toggle');
  const navMenu = $('#nav-menu');
  function setNav(open) {
    navMenu.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  navToggle.addEventListener('click', () => setNav(navToggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('click', (e) => { if (!e.target.closest('nav')) setNav(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });

  /* ---------- In-page links / buttons ---------- */
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-scroll]');
    if (!trigger) return;
    e.preventDefault();
    setNav(false);
    scrollToTarget(trigger.dataset.scroll);
  });

  /* ---------- FAQ accordion (one open at a time) ---------- */
  const faqItems = $$('.faq-item');
  faqItems.forEach((item) => {
    const btn = $('.faq-trigger', item);
    btn.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      faqItems.forEach((other) => {
        const open = other === item && willOpen;
        other.classList.toggle('is-open', open);
        $('.faq-trigger', other).setAttribute('aria-expanded', String(open));
      });
      // page height changes while the panel animates; keep scroll triggers accurate
      if (canAnimate) gsap.delayedCall(0.45, ScrollTrigger.refresh);
    });
  });

  /* ---------- Newsletter ---------- */
  const form = $('#newsletter');
  const msg = $('#newsletter-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.elements.email;
    msg.classList.remove('is-error');
    if (!input.checkValidity()) {
      msg.classList.add('is-error');
      msg.textContent = 'Please enter a valid email address.';
      input.focus();
      return;
    }
    // No backend is wired up yet – hook your provider's endpoint in here.
    msg.textContent = 'Thanks for subscribing! Your first glow tip is on its way.';
    form.reset();
  });

  if (!canAnimate) return;

  /* ---------- Scroll animations (GSAP + ScrollTrigger) ---------- */
  gsap.registerPlugin(ScrollTrigger);
  let ease = 'power3.out';
  if (typeof CustomEase !== 'undefined') {
    gsap.registerPlugin(CustomEase);
    CustomEase.create('lumine', '.16, 1, .3, 1');
    ease = 'lumine';
  }

  // Intro
  const intro = gsap.timeline({ defaults: { ease, duration: 1.1 } });
  intro
    .from('.hero-title-text', { yPercent: 40, opacity: 0, duration: 1.3 })
    .from('[data-hero]', { y: 40, opacity: 0, stagger: 0.14 }, '-=0.9');

  // Hero image parallax
  gsap.fromTo('#hero-img',
    { yPercent: -7, scale: 1.16 },
    { yPercent: 7, scale: 1.16, ease: 'none',
      scrollTrigger: { trigger: '.hero-card', start: 'top bottom', end: 'bottom top', scrub: true } });

  // Background shapes drift at different speeds
  const drift = [-140, 180, -220, 120, -90];
  $$('.bg-shape').forEach((el, i) => {
    gsap.to(el, { y: drift[i % drift.length], ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1 } });
  });

  // Fade-up reveals
  const reveal = (targets, trigger, vars = {}) => gsap.from(targets, {
    y: 44, opacity: 0, duration: 1, ease, stagger: 0.12, ...vars,
    scrollTrigger: { trigger, start: 'top 88%', once: true },
  });
  $$('[data-reveal]').forEach((el) => reveal(el, el));
  $$('[data-reveal-group]').forEach((el) => reveal(el.children, el));
  $$('[data-stagger]').forEach((el) => reveal(el.children, el, { y: 56, stagger: 0.14 }));

  // Testimonial: words light up as you scroll
  const quote = $('#quote');
  if (quote) {
    const words = quote.textContent.trim().split(/\s+/);
    quote.textContent = '';
    const spans = words.map((w, i) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = w;
      quote.appendChild(span);
      if (i < words.length - 1) quote.appendChild(document.createTextNode(' '));
      return span;
    });
    gsap.fromTo(spans, { opacity: 0.15 }, {
      opacity: 1, ease: 'none', stagger: 0.1,
      scrollTrigger: { trigger: quote, start: 'top 80%', end: 'bottom 50%', scrub: true },
    });
  }

  // "Clinically proven" bars: grow in, then highlight one bar at a time
  const bars = $$('#bars .bar');
  if (bars.length) {
    let active = 3, timer = null;
    const light = (idx) => bars.forEach((bar, i) =>
      gsap.to($('.bar-fill', bar), { opacity: i === idx ? 1 : 0, duration: 0.5 }));
    const start = () => { if (!timer) timer = setInterval(() => { active = (active + 1) % bars.length; light(active); }, 1600); };
    const stop = () => { clearInterval(timer); timer = null; };
    gsap.set(bars, { height: 0 });
    ScrollTrigger.create({
      trigger: '#bars', start: 'top 85%', end: 'bottom top',
      onEnter: () => {
        gsap.to(bars, { height: (i, el) => `${el.dataset.h}%`, duration: 1.1, ease, stagger: 0.07 });
        light(active); start();
      },
      onLeave: stop, onEnterBack: start, onLeaveBack: stop,
    });
  }

  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
