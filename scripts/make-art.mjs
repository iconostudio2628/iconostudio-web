// Draws the monochrome service illustrations (images/art/*.svg).
//   node scripts/make-art.mjs
// Dark tiles use cream line-work on black, light tiles use black line-work on cream; sand is the one accent.
// Swap any of them for a real photo by pointing `art` → `photo` in src/content.mjs.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'images', 'art');

// bg = the site's two backgrounds exactly: black (#000) and cream (#f1e9d9)
const DARK = { bg: '#000000', ink: '#efe7d8', accent: '#b9a78a', faint: '#26241f', mid: '#8f8677' };
const LIGHT = { bg: '#f1e9d9', ink: '#141414', accent: '#b9a78a', faint: '#ddd2ba', mid: '#7c7466' };

const f = (n) => Number(n.toFixed(1));
const rad = (d) => (d * Math.PI) / 180;
const line = (x1, y1, x2, y2, extra = '') => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" ${extra}/>`;

const frame = (t, body, k = 1, dy = 0) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" fill="none" stroke="${t.ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
<rect width="800" height="1000" fill="${t.bg}" stroke="none"/>
<g stroke="${t.faint}" stroke-width="2"><circle cx="400" cy="500" r="250"/><circle cx="400" cy="500" r="330"/><circle cx="400" cy="500" r="410"/></g>
<g transform="translate(400 ${500 + dy}) scale(${k}) translate(-400 -500)">
${body}
</g>
</svg>
`;

/* cubic bezier helpers (for lashes / brows) */
const bez = (p, t) => {
  const u = 1 - t;
  return [
    u * u * u * p[0][0] + 3 * u * u * t * p[1][0] + 3 * u * t * t * p[2][0] + t * t * t * p[3][0],
    u * u * u * p[0][1] + 3 * u * u * t * p[1][1] + 3 * u * t * t * p[2][1] + t * t * t * p[3][1],
  ];
};
const bezTan = (p, t) => {
  const u = 1 - t;
  const x = 3 * u * u * (p[1][0] - p[0][0]) + 6 * u * t * (p[2][0] - p[1][0]) + 3 * t * t * (p[3][0] - p[2][0]);
  const y = 3 * u * u * (p[1][1] - p[0][1]) + 6 * u * t * (p[2][1] - p[1][1]) + 3 * t * t * (p[3][1] - p[2][1]);
  const l = Math.hypot(x, y);
  return [x / l, y / l];
};

const art = {};

/* ---------- Manikúra: polish bottle + file + drop (light) ---------- */
art.manikura = (t = LIGHT) => frame(t, `
<g transform="rotate(-22 222 690)"><rect x="170" y="500" width="104" height="400" rx="52" fill="${t.bg}"/>
${Array.from({ length: 11 }, (_, i) => line(190, 560 + i * 28, 254, 560 + i * 28, `stroke="${t.mid}" stroke-width="3"`)).join('')}</g>
<rect x="346" y="226" width="108" height="236" rx="16" fill="${t.bg}"/>
${Array.from({ length: 6 }, (_, i) => line(366 + i * 14, 252, 366 + i * 14, 436, `stroke="${t.mid}" stroke-width="3"`)).join('')}
<rect x="372" y="462" width="56" height="34" fill="${t.bg}"/>
<rect x="296" y="496" width="208" height="292" rx="44" fill="${t.accent}"/>
<path d="M328 540 V700" stroke="${t.bg}" stroke-width="9" opacity=".7"/>
<ellipse cx="400" cy="824" rx="170" ry="16" stroke="${t.faint}" stroke-width="3"/>
<path d="M610 660 C586 700 570 722 570 748 a40 40 0 0 0 80 0 C650 722 634 700 610 660 Z" fill="${t.ink}"/>`, 1.0, -20);

/* ---------- Gelové / akrylové nehty: five nail shapes (dark) ---------- */
const nailPath = (shape, cx, base, w, h) => {
  const x0 = cx - w / 2; const x1 = cx + w / 2; const top = base - h;
  const cut = `A ${w / 2} ${w * 0.3} 0 0 1 ${x0} ${base} Z`;
  switch (shape) {
    case 'square': return `M ${x0} ${base} V ${top + 14} Q ${x0} ${top} ${x0 + 14} ${top} H ${x1 - 14} Q ${x1} ${top} ${x1} ${top + 14} V ${base} ${cut}`;
    case 'round': return `M ${x0} ${base} V ${top + w / 2} A ${w / 2} ${w / 2} 0 0 1 ${x1} ${top + w / 2} V ${base} ${cut}`;
    case 'oval': return `M ${x0} ${base} V ${top + w * 0.8} A ${w / 2} ${w * 0.8} 0 0 1 ${x1} ${top + w * 0.8} V ${base} ${cut}`;
    case 'almond': return `M ${x0} ${base} C ${x0} ${base - h * 0.5} ${cx - w * 0.2} ${top + h * 0.22} ${cx} ${top} C ${cx + w * 0.2} ${top + h * 0.22} ${x1} ${base - h * 0.5} ${x1} ${base} ${cut}`;
    default: return `M ${x0} ${base} L ${cx - w * 0.3} ${top} H ${cx + w * 0.3} L ${x1} ${base} ${cut}`; // coffin
  }
};
art['gelove-nehty'] = (t = DARK) => {
  const shapes = ['square', 'round', 'oval', 'almond', 'coffin'];
  const bases = [700, 676, 664, 676, 700];
  const nails = shapes.map((s, i) => {
    const cx = 152 + i * 124; const base = bases[i]; const w = 100; const h = 250 + (i === 2 ? 40 : 0);
    const fill = i === 3 ? t.accent : 'none';
    return `<path d="${nailPath(s, cx, base, w, h)}" fill="${fill}"/>
<path d="M ${cx - 24} ${base - 40} Q ${cx - 24} ${base - h * 0.6} ${cx - 10} ${base - h * 0.78}" stroke="${i === 3 ? t.bg : t.mid}" stroke-width="5" opacity=".8"/>
<path d="M ${cx - 20} ${base + 24} Q ${cx} ${base + 40} ${cx + 20} ${base + 24}" stroke="${t.mid}" stroke-width="3"/>`;
  }).join('');
  return frame(t, `${nails}<g stroke="${t.mid}" stroke-width="2">${line(110, 770, 690, 770)}${[152, 276, 400, 524, 648].map((x) => line(x, 770, x, 782)).join('')}</g>`);
};

/* ---------- Pedikúra: top-down foot with polished toenails + drops (light) ---------- */
art.pedikura = (t = LIGHT) => {
  const toes = [[326, 332, 58, 47], [424, 290, 40, 32], [488, 306, 35, 28], [536, 344, 31, 25], [566, 394, 26, 21]];
  const shapes = `<path d="M286 440 C286 380 350 366 430 376 C530 388 584 430 590 510 C594 586 546 640 524 700 C508 760 472 804 410 804 C346 804 314 762 322 700 C330 640 286 560 286 440 Z"/>
${toes.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}`;
  const nails = toes.map(([x, y, r, nr]) => `<rect x="${x - nr * 0.62}" y="${y - r * 0.78}" width="${nr * 1.24}" height="${nr * 1.05}" rx="${nr * 0.45}" fill="${t.accent}" stroke-width="3"/>`).join('');
  return frame(t, `
<g stroke-width="9">${shapes}</g>
<g fill="${t.bg}" stroke="${t.bg}" stroke-width="1">${shapes}</g>
${nails}
<path d="M366 600 C382 640 380 690 366 730" stroke="${t.mid}" stroke-width="3" opacity=".8"/>
${[[190, 520, 22], [150, 610, 12], [222, 640, 9], [650, 600, 18], [690, 520, 9], [630, 690, 11]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}
<path d="M690 760 c-10 18 -18 28 -18 40 a18 18 0 0 0 36 0 c0 -12 -8 -22 -18 -40 Z" fill="${t.ink}" stroke="none"/>
<ellipse cx="410" cy="836" rx="190" ry="14" stroke="${t.faint}" stroke-width="3"/>`, 1.08);
};

/* ---------- Prodlužování řas: eye with lash fans (dark) ---------- */
art['prodluzovani-ras'] = (t = DARK) => {
  const upper = [[150, 560], [250, 410], [550, 410], [650, 560]];
  const lower = [[150, 560], [260, 650], [540, 650], [650, 560]];
  let lashes = '';
  for (let i = 0; i <= 24; i += 1) {
    const u = i / 24; const p = bez(upper, u); const tn = bezTan(upper, u);
    const nx = tn[1]; const ny = -tn[0]; // outward normal (up)
    const len = 40 + 70 * Math.sin(Math.PI * Math.min(1, u * 0.85 + 0.12)) + 18 * u;
    const curl = 26 + 28 * u;
    const ex = p[0] + nx * len + tn[0] * curl; const ey = p[1] + ny * len + tn[1] * curl;
    const cx = p[0] + nx * len * 0.65; const cy = p[1] + ny * len * 0.65;
    lashes += `<path d="M ${f(p[0])} ${f(p[1])} Q ${f(cx)} ${f(cy)} ${f(ex)} ${f(ey)}" stroke-width="${i % 3 === 0 ? 5 : 3.5}"/>`;
  }
  let low = '';
  for (let i = 1; i <= 9; i += 1) {
    const u = 0.1 + (i / 10) * 0.8; const p = bez(lower, u); const tn = bezTan(lower, u);
    const nx = -tn[1]; const ny = tn[0];
    const len = 22 + 14 * Math.sin(Math.PI * u);
    low += `<path d="M ${f(p[0])} ${f(p[1])} q ${f(nx * len * 0.5)} ${f(ny * len * 0.5)} ${f(nx * len + tn[0] * 8)} ${f(ny * len + tn[1] * 8)}" stroke-width="3" stroke="${t.mid}"/>`;
  }
  return frame(t, `
<path d="M150 560 C250 410 550 410 650 560 C540 650 260 650 150 560 Z"/>
<circle cx="400" cy="548" r="74" fill="${t.accent}"/><circle cx="400" cy="548" r="30" fill="${t.bg}"/>
<circle cx="378" cy="522" r="11" fill="${t.ink}" stroke="none"/>
<path d="M150 560 C250 410 550 410 650 560" stroke-width="6"/>
${lashes}${low}
<path d="M176 300 C300 190 540 186 660 280" stroke-width="7"/>`, 1.04, 40);
};

/* ---------- Obočí & kosmetika: hair-stroke brow, tweezers, jar (light) ---------- */
art['oboci-kosmetika'] = (t = LIGHT) => {
  const c = [[170, 470], [260, 350], [470, 320], [640, 430]];
  let hairs = '';
  for (let i = 0; i <= 56; i += 1) {
    const u = i / 56; const p = bez(c, u); const tn = bezTan(c, u);
    const th = 1 - u;
    const ang = rad(-38 + 30 * u); // hairs lie slightly up and sweep toward the tail
    const dx = tn[0] * Math.cos(ang) - tn[1] * Math.sin(ang);
    const dy = tn[0] * Math.sin(ang) + tn[1] * Math.cos(ang);
    const len = 22 + 46 * th * th + 8;
    const off = ((i * 7) % 5 - 2) * 5 * th;
    hairs += `<path d="M ${f(p[0])} ${f(p[1] + off)} l ${f(dx * len)} ${f(dy * len)}" stroke-width="${f(3 + 3 * th)}"/>`;
  }
  return frame(t, `
${hairs}
<g transform="rotate(30 280 700)" fill="none">
<path d="M280 866 C250 784 252 650 270 566" stroke-width="7"/>
<path d="M280 866 C310 784 308 650 290 566" stroke-width="7"/>
<path d="M262 574 L274 546 M298 574 L286 546" stroke-width="10"/>
<rect x="262" y="790" width="36" height="60" rx="14" fill="${t.accent}"/>
<path d="M264 812 h32 M264 828 h32" stroke="${t.bg}" stroke-width="3" opacity=".7"/>
</g>
<g><rect x="470" y="700" width="170" height="38" rx="10" fill="${t.ink}"/><rect x="476" y="738" width="158" height="100" rx="18" fill="${t.accent}"/><path d="M500 776 H610" stroke="${t.bg}" stroke-width="5" opacity=".8"/></g>
<path d="M556 650 q-18 -22 0 -44 t0 -44" stroke="${t.mid}" stroke-width="3"/>`, 1.06, 0);
};

/* ---------- Head Spa: scalp, pressure points, sound rings, drops (dark) ---------- */
art['head-spa'] = (t = DARK) => {
  let strands = '';
  for (let i = 0; i < 40; i += 1) {
    const a = (i / 40) * Math.PI * 2; const r = 186;
    const x1 = 400 + Math.cos(a) * 26; const y1 = 560 + Math.sin(a) * 26;
    const x2 = 400 + Math.cos(a) * r; const y2 = 560 + Math.sin(a) * r;
    const sw = a + 0.55;
    const cxp = 400 + Math.cos(sw) * 110; const cyp = 560 + Math.sin(sw) * 110;
    strands += `<path d="M ${f(x1)} ${f(y1)} Q ${f(cxp)} ${f(cyp)} ${f(x2)} ${f(y2)}" stroke="${t.mid}" stroke-width="2.5"/>`;
  }
  const pts = [[400, 400], [498, 470], [302, 470], [452, 640], [348, 640]];
  return frame(t, `
<path d="M372 376 L400 322 L428 376" fill="${t.bg}"/>
<path d="M214 512 C184 504 170 556 184 604 C192 630 212 634 222 626" fill="${t.bg}"/>
<path d="M586 512 C616 504 630 556 616 604 C608 630 588 634 578 626" fill="${t.bg}"/>
<circle cx="400" cy="560" r="190" fill="${t.bg}"/>
${strands}
${pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${t.accent}" stroke="none"/><circle cx="${x}" cy="${y}" r="22" stroke="${t.accent}" stroke-width="2.5"/>`).join('')}
<circle cx="400" cy="560" r="238" stroke="${t.ink}" stroke-width="3" stroke-dasharray="2 14"/>
<circle cx="400" cy="560" r="286" stroke="${t.mid}" stroke-width="3" stroke-dasharray="2 18"/>
${[[330, 236], [400, 176], [470, 236]].map(([x, y]) => `<path d="M${x} ${y} c-12 22 -22 34 -22 48 a22 22 0 0 0 44 0 c0 -14 -10 -26 -22 -48 Z" fill="${t.ink}" stroke="none"/>`).join('')}`);
};

/* ---------- Pánský střih: scissors + comb (dark) ---------- */
art['pansky-strih'] = (t = DARK) => {
  const blade = (flip) => `<g transform="translate(400 520) scale(${flip ? -1 : 1} 1) rotate(-6)">
<path d="M-14 -4 L-20 -330 Q-20 -356 -4 -330 L34 -12 Z" fill="${flip ? t.accent : t.bg}"/>
<path d="M0 0 L58 150" stroke-width="16"/>
<ellipse cx="82" cy="206" rx="56" ry="44" transform="rotate(-28 82 206)" fill="${t.bg}"/>
<ellipse cx="82" cy="206" rx="30" ry="22" transform="rotate(-28 82 206)" stroke="${t.mid}" stroke-width="3"/></g>`;
  const teeth = Array.from({ length: 22 }, (_, i) => line(246 + i * 14.4, 846, 246 + i * 14.4, 876, `stroke-width="3"`)).join('');
  return frame(t, `
${blade(true)}${blade(false)}
<circle cx="400" cy="520" r="14" fill="${t.ink}" stroke="none"/>
<g><rect x="230" y="806" width="340" height="40" rx="12" fill="${t.bg}"/>${teeth}</g>`, 1.0, -6);
};

/* ---------- Úprava vousů: open straight razor + shaving brush standing next to it (light) ---------- */
art['uprava-vousu'] = (t = LIGHT) => {
  // brush: bristle dome with strands, collar, flared handle – all closed shapes, upright
  const strands = [-44, -29, -14, 0, 14, 29, 44].map((x) => `<path d="M${x} -2 C${x * 1.15} -50 ${x * 1.05} -90 ${x * 0.8} -122" stroke="${t.mid}" stroke-width="2.5"/>`).join('');
  return frame(t, `<g transform="translate(37 0)">
<g transform="translate(300 640) rotate(-34)">
<path d="M0 -20 H-250 Q-286 -20 -286 0 Q-286 20 -250 20 H0 Z" fill="${t.bg}"/>
<circle cx="-226" cy="0" r="5" fill="${t.ink}" stroke="none"/><circle cx="-120" cy="0" r="5" fill="${t.ink}" stroke="none"/>
<path d="M0 -22 H236 Q266 -22 266 4 L252 24 H0 Z" fill="${t.accent}"/>
<path d="M14 -8 H236" stroke="${t.bg}" stroke-width="5" opacity=".8"/>
<circle cx="0" cy="0" r="22" fill="${t.ink}"/><circle cx="0" cy="0" r="5" fill="${t.bg}" stroke="none"/></g>
<g transform="translate(610 600)">
<path d="M-62 0 C-68 -96 -36 -152 0 -152 C36 -152 68 -96 62 0 Z" fill="${t.accent}"/>
${strands}
<rect x="-66" y="0" width="132" height="26" rx="10" fill="${t.bg}"/>
<path d="M-30 26 C-24 80 -46 140 -58 196 H58 C46 140 24 80 30 26 Z" fill="${t.bg}"/>
<path d="M-40 128 H40" stroke="${t.mid}" stroke-width="3"/>
</g>
<ellipse cx="400" cy="830" rx="250" ry="14" stroke="${t.faint}" stroke-width="3"/></g>`, 1.1, -160);
};

/* ---------- Pánská kosmetika: tin, steam, towel, drops (dark) ---------- */
art['panska-kosmetika'] = (t = DARK) => {
  const steam = [350, 410, 470].map((x, i) => `<path d="M${x} 420 q-24 -32 0 -64 t0 -64" stroke="${t.mid}" stroke-width="3" opacity="${1 - i * 0.22}"/>`).join('');
  const towel = Array.from({ length: 4 }, (_, i) => `<rect x="590" y="${690 + i * 28}" width="124" height="24" rx="12" fill="${i % 2 ? t.bg : t.accent}"/>`).join('');
  return frame(t, `<g transform="translate(-62 0)">
${steam}
<path d="M250 640 V770 C250 800 320 820 400 820 C480 820 550 800 550 770 V640" fill="${t.bg}"/>
<path d="M250 704 C250 728 320 746 400 746 C480 746 550 728 550 704 V756 C550 782 480 800 400 800 C320 800 250 782 250 756 Z" fill="${t.accent}" stroke-width="3"/>
<ellipse cx="400" cy="640" rx="150" ry="36" fill="${t.bg}"/>
<ellipse cx="400" cy="640" rx="124" ry="26" stroke="${t.mid}" stroke-width="3"/>
${towel}
<path d="M230 540 c-8 14 -14 22 -14 32 a14 14 0 0 0 28 0 c0 -10 -6 -18 -14 -32 Z" fill="${t.accent}" stroke="none"/></g>`, 1.12, -55);
};

await mkdir(out, { recursive: true });
for (const [name, fn] of Object.entries(art)) await writeFile(join(out, `${name}.svg`), fn());
// contact sheet for quick review (SHEET=1 node scripts/make-art.mjs) – kept out of the published folder otherwise
if (process.env.SHEET) {
const sheet = `<!doctype html><meta charset="utf-8"><body style="margin:0;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;background:#777">${Object.keys(art).map((n) => `<img src="${n}.svg" style="width:100%;display:block" alt="${n}">`).join('')}</body>`;
await writeFile(join(out, '_sheet.html'), sheet);
}
console.log(`Wrote ${Object.keys(art).length} illustrations to images/art/`);
