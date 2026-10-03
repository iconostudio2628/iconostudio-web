/* ICONO STUDIO – conversion tracking (no framework).
   Every click on a WhatsApp / call / SMS button pushes a cta_click event (placement, channel, page) to dataLayer for GA4 / GTM. */
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
    if (!el || !/^click_(whatsapp|call|sms)$/.test(el.dataset.track)) return;
    window.dataLayer.push({
      event: 'cta_click',
      cta_placement: where(el),
      cta_channel: el.dataset.track.replace('click_', ''),
      page_route: document.body.dataset.route || '',
      lang: document.body.dataset.lang || 'cs',
    });
  });
})();
