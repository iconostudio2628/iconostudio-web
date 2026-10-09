/* ICONO STUDIO – conversion tracking (no framework).
   Every click on a book / call button pushes a cta_click event (placement, channel, page) to dataLayer for GA4 / GTM. */
(() => {
  'use strict';

  const where = (el) => {
    if (el.dataset.cta) return el.dataset.cta;
    if (el.closest('.site-header')) return 'header';
    if (el.closest('.final-cta')) return 'final';
    if (el.closest('#lokalita')) return 'location';
    if (el.closest('.site-footer')) return 'footer';
    return 'content';
  };
  window.dataLayer = window.dataLayer || [];
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-track]');
    if (!el || !/^click_(book|call)$/.test(el.dataset.track)) return;
    window.dataLayer.push({
      event: 'cta_click',
      cta_placement: where(el),
      cta_channel: el.dataset.track.replace('click_', ''),
      page_route: document.body.dataset.route || '',
      lang: document.body.dataset.lang || 'cs',
    });
  });

  // Sticky bar (phones/tablets): hide it while a book/call button from the page itself is visible, show it when none is.
  // Header, the bar itself and the mobile menu do not count – the header buttons are always on screen.
  const bar = document.querySelector('[data-sticky-cta]');
  if (bar && 'IntersectionObserver' in window) {
    const targets = [...document.querySelectorAll('a[data-track="click_book"], a[data-track="click_call"]')]
      .filter((a) => !a.closest('.site-header, .sticky-cta, .mobile-nav'));
    const visible = new Set();
    const sync = () => bar.classList.toggle('is-away', visible.size > 0);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => (en.isIntersecting ? visible.add(en.target) : visible.delete(en.target)));
      sync();
    }, { rootMargin: '-72px 0px -64px 0px', threshold: 0.6 });
    targets.forEach((a) => io.observe(a));
  }
})();
