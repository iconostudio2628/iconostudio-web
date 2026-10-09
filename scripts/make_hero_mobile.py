"""Mobile home-hero image: barber (clippers, no face) over nails (hands), both graded to the beige duotone.
   Sources are the studio's own photos; run:  python3 scripts/make_hero_mobile.py   → images/hero-mobile-{640,1000}.webp"""
from PIL import Image, ImageOps, ImageEnhance
import os
ROOT = os.path.join(os.path.dirname(__file__), '..')
W, H, GAP = 1000, 1830, 8
TOP_H = 860
INK, MID, LIGHT, CREAM = (24, 20, 15), (148, 128, 98), (241, 228, 204), (227, 209, 179)

def duo(im):
    g = ImageOps.autocontrast(ImageOps.grayscale(im), cutoff=1)
    g = ImageEnhance.Contrast(g).enhance(1.08)
    return ImageOps.colorize(g, black=INK, white=LIGHT, mid=MID).convert('RGB')

def crop_to(im, box, size):
    return im.crop(box).resize(size, Image.LANCZOS)

barber = Image.open(os.path.join(ROOT, 'images/source/barber-original.webp')).convert('RGB')
nails = Image.open(os.path.join(ROOT, 'images/source/nails-original.webp')).convert('RGB')
bw, bh = barber.size
# barber: hair, fade, ear and clippers – cut above the jaw/beard
top = crop_to(barber, (int(bw * .10), int(bh * .03), bw, int(bh * .03) + int((bw * .90) * TOP_H / W)), (W, TOP_H))
bot_h = H - TOP_H - GAP
nw, nh = nails.size
bot = crop_to(nails, (0, int(nh * .14), nw, int(nh * .14) + int(nw * bot_h / W)), (W, bot_h))
canvas = Image.new('RGB', (W, H), CREAM)
canvas.paste(duo(top), (0, 0))
canvas.paste(duo(bot), (0, TOP_H + GAP))
out = os.path.join(ROOT, 'images')
canvas.save(os.path.join(out, 'hero-mobile-1000.webp'), quality=84, method=6)
canvas.resize((640, 1171), Image.LANCZOS).save(os.path.join(out, 'hero-mobile-640.webp'), quality=84, method=6)
print('Wrote images/hero-mobile-{640,1000}.webp')
