// Export the price list as a CSV for pasting into a booking system (Setmore, Reservio …).   node scripts/export-services.mjs
// Duration is deliberately empty: the studio has not given us durations and we never invent them.
import { writeFile } from 'node:fs/promises';
import { priceGroups } from '../src/data.mjs';

const cat = { manikura: 'Manikúra', modelace: 'Modelace nehtů', pedikura: 'Pedikúra', zdobeni: 'Zdobení nehtů', ostatni: 'Ostatní nehtové služby', rasy: 'Řasy', oboci: 'Obočí', kosmetika: 'Kosmetika', headspa: 'Head Spa', cuts: 'Barber cuts', vousy: 'Vousy', pece: 'Péče a doplňky' };
const rows = [];
for (const g of priceGroups) {
  for (const s of g.sections) {
    for (const it of s.items) {
      const desc = it.includes ? it.includes.join(' • ') : (it.note || '');
      if (it.variants) {
        for (const v of it.variants) rows.push([cat[g.id], `${it.name} – ${v.label}`, v.price, '', desc]);
      } else {
        rows.push([cat[g.id], `${it.name}${it.from ? ' (od)' : ''}`, it.price, '', it.from && !desc ? 'Cena od' : desc]);
      }
    }
  }
}
const q = (x) => `"${String(x).replace(/"/g, '""')}"`;
const csv = ['Kategorie;Název;Cena (Kč);Délka (min) – DOPLNIT;Popis'].concat(rows.map((r) => r.map(q).join(';'))).join('\n');
await writeFile(new URL('../docs/setmore-sluzby.csv', import.meta.url), `﻿${csv}\n`);
console.log(`${rows.length} služeb → docs/setmore-sluzby.csv`);
