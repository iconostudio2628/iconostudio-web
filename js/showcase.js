/* ICONO STUDIO – interactive “Naše práce” carousel (no framework).
   Tilted cards that straighten towards the centre, drag / swipe / arrows / keyboard, and a lightbox (<dialog>).
   Without JS the strip is still a normal horizontally scrollable list of photos. */
(() => {
  'use strict';
  const root = document.querySelector('[data-showcase]');
  if (!root) return;
  const track = root.querySelector('[data-track]');
  const cards = [...track.querySelectorAll('.showcase-card')];
  const nowEl = root.querySelector('[data-now]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = (n) => String(n).padStart(2, '0');
  let active = 0;
  let raf = 0;

  /* ---- tilt / scale by distance from the centre ---- */
  const update = () => {
    raf = 0;
    const box = track.getBoundingClientRect();
    const mid = box.left + box.width / 2;
    let best = 0; let bestD = Infinity;
    cards.forEach((card, i) => {
      const r = card.getBoundingClientRect();
      const d = (r.left + r.width / 2 - mid) / r.width;           // 0 = centred, ±1 = one card away
      const a = Math.min(Math.abs(d), 2.4);
      const inner = card.querySelector('.showcase-inner');
      inner.style.transform = `perspective(900px) rotateY(${reduce ? 0 : (-Math.max(-2, Math.min(2, d)) * 15).toFixed(2)}deg) scale(${(1 - a * 0.07).toFixed(3)})`;
      inner.style.opacity = String(1 - a * 0.16);
      card.style.zIndex = String(10 - Math.round(a * 3));
      if (Math.abs(d) < bestD) { bestD = Math.abs(d); best = i; }
    });
    if (best !== active) {
      active = best;
      if (nowEl) nowEl.textContent = pad(active + 1);
    }
  };
  const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
  track.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);

  const centerOf = (i) => { const c = cards[i]; return c.offsetLeft + c.offsetWidth / 2 - track.clientWidth / 2; };
  const go = (i, smooth = true) => {
    const n = Math.max(0, Math.min(cards.length - 1, i));
    track.scrollTo({ left: centerOf(n), behavior: smooth && !reduce ? 'smooth' : 'auto' });
  };
  root.querySelector('[data-prev]').addEventListener('click', () => go(active - 1));
  root.querySelector('[data-next]').addEventListener('click', () => go(active + 1));
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
  });
  // start in the middle of the first few cards so both neighbours are visible
  go(Math.min(1, cards.length - 1), false);
  update();

  /* ---- mouse drag (touch scrolls natively) ---- */
  let drag = null;
  let moved = false;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag = { x: e.clientX, left: track.scrollLeft };
    moved = false;
  });
  window.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (!moved && Math.abs(dx) > 5) { moved = true; track.classList.add('is-dragging'); track.style.scrollSnapType = 'none'; }
    if (moved) track.scrollLeft = drag.left - dx;
  });
  const endDrag = () => {
    if (!drag) return;
    drag = null;
    if (moved) {
      track.classList.remove('is-dragging');
      track.style.scrollSnapType = '';
      go(active);
    }
  };
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
  track.addEventListener('click', (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);

  /* ---- lightbox ---- */
  const dlg = root.querySelector('[data-lightbox]');
  const img = dlg.querySelector('[data-lb-img]');
  const tag = dlg.querySelector('[data-lb-tag]');
  const num = dlg.querySelector('[data-lb-n]');
  const buttons = cards.map((c) => c.querySelector('[data-open]'));
  let current = 0;
  let opener = null;
  const show = (i) => {
    current = (i + buttons.length) % buttons.length;
    const b = buttons[current];
    const thumb = b.querySelector('img');
    img.src = b.dataset.full;
    img.alt = thumb.alt;
    img.width = Number(b.dataset.w); img.height = Number(b.dataset.h);
    tag.textContent = b.dataset.tag;
    num.textContent = `${pad(current + 1)} / ${pad(buttons.length)}`;
    go(current);
  };
  const open = (i, from) => {
    opener = from;
    show(i);
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    (window.dataLayer = window.dataLayer || []).push({ event: 'gallery_open', gallery_item: i + 1 });
  };
  buttons.forEach((b, i) => b.addEventListener('click', () => open(i, b)));
  dlg.querySelector('[data-close]').addEventListener('click', () => dlg.close());
  dlg.querySelector('[data-lb-prev]').addEventListener('click', () => show(current - 1));
  dlg.querySelector('[data-lb-next]').addEventListener('click', () => show(current + 1));
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });       // click on the backdrop
  dlg.addEventListener('close', () => { if (opener) opener.focus({ preventScroll: true }); });
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'ArrowLeft') show(current - 1);
  });
  let sx = 0;
  dlg.addEventListener('touchstart', (e) => { sx = e.changedTouches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
  }, { passive: true });
})();
